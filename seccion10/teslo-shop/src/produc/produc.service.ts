import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { CreateProducDto } from './dto/create-produc.dto';
import { UpdateProducDto } from './dto/update-produc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { validate as isUUID} from  'uuid';
import { ProductImage,Produc } from './entities';

@Injectable()
export class ProducService {

  private readonly logger = new Logger('ProducService')
  
  constructor(

    @InjectRepository(Produc)
    private readonly productRepository: Repository<Produc>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>
  ){}

  async create(createProducDto: CreateProducDto) {
    
    try {

      const { images = [], ...productDetails } = createProducDto;

      const product = this.productRepository.create({
        ...productDetails,
        images: images.map( image => this.productImageRepository.create({ url:image }))
      })
      await this.productRepository.save( product )
      return { ...product,images }

    } catch (error) {
      this.handleDbExceptions(error)
    }

  }

  async findAll( pagintationDto: PaginationDto) {
    
    const {limit =10, offset = 0} = pagintationDto

    const products = await this.productRepository.find({
      take:limit,
      skip:offset,
      relations:{
        images: true
      }
    })
    return products.map( ({ images, ...rest}) => ({
      ...rest ,
      images: images?.map( img => img.url)
    }))
  }

  async findOne( term: string) {

    let product: Produc | null;

    if( isUUID(term)){
      product = await this.productRepository.findOneBy( {id: term} )
    } else {
      // product = await this.productRepository.findOneBy( {slug: term} )
      const queryBuilder = this.productRepository.createQueryBuilder('prod');
      product = await queryBuilder
        .where(`UPPER(title)=:title or slug =: slug`, { 
          title:term.toUpperCase(), 
          slug:term.toLowerCase()
        })
        .leftJoinAndSelect('prod.images', 'prodImages')
        .getOne()
    }

    if( !product ) throw new NotFoundException(`Prodcut with ${ term } not found`)
    
      return product
  }

  async findOnePlain( term:string){
    const { images = [], ...rest } = await this.findOne( term )

    return {
      ...rest,
      images: images.map( image => image.url )
    }
  }


  async update(id: string, updateProducDto: UpdateProducDto) {
    const product = await this.productRepository.preload({
      id: id,
      ...updateProducDto,
      images: []
    });

    if( !product ) throw new NotFoundException(`Product with id: ${id} not found`)

    try {
      await  this.productRepository.save( product )
    } catch (error) {
       this.handleDbExceptions(error)
    }
    return product


  }

  async remove(id: string ) {
    const product = await this.findOne( id ) 
    

    await this.productRepository.remove( product )
  }

  private handleDbExceptions ( error: any ){
    if( error.code === '23505' )
      throw new BadRequestException( error.detail );
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')

  }
}

