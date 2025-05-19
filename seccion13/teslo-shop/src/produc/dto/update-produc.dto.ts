import { PartialType } from '@nestjs/mapped-types';
import { CreateProducDto } from './create-produc.dto';

export class UpdateProducDto extends PartialType(CreateProducDto) {}
