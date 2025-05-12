import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produc } from "./produc.entity";


@Entity({ name: 'product-name'})
export class ProductImage {

  @PrimaryGeneratedColumn()
  id: number;


  @Column('text')
  url: string;

  @ManyToOne(
    () => Produc,
    ( product ) => product.images,
    { onDelete: 'CASCADE'}
  )
  product:Produc
}