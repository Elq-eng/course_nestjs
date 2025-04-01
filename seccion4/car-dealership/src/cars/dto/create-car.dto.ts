import { IsString } from "class-validator";

export class CreateCarDto {
  
  @IsString()
  readonly brand:string;
  @IsString({ message: 'The model must be data'})
  readonly model:string;
}