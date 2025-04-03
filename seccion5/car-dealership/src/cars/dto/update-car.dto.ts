import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  
  @IsString()
  @IsOptional()
  readonly brand?:string;

  @IsString({ message: 'The model must be data'})
  @IsOptional()
  readonly model?:string;
}