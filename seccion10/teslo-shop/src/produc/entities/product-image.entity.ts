import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produc } from "./produc.entity";


@Entity()
export class ProductImage {

  @PrimaryGeneratedColumn()
  id: number;


  @Column('text')
  url: string;

  @ManyToOne(
    () => Produc,
    ( product ) => product.images 
  )
  product:Produc
}