import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    // console.log({value,metadata})
    if( !isValidObjectId(value)){
      throw new BadRequestException(`${ value } isnt a valid MongoID`)
    }
    return value.toUpperCase();
  }
}
