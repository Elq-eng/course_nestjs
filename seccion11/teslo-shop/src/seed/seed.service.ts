import { Injectable } from '@nestjs/common';
import { ProducService } from '../produc/produc.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {

  constructor(
    private readonly producService:ProducService
  ){}


  async runSeed(){

    await this.insertNewProducts()

    return 'SEED EXECUTE'
  }


  private async insertNewProducts(){
    await this.producService.deleteAllProdudcts()
    
    const products = initialData.products;


    const insertPromises = products.map(product =>
      this.producService.create(product)
    );
  
    
    const results = await Promise.all( insertPromises )

    return results
  }
  
}
