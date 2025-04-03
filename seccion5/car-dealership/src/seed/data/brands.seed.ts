import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name:'Volvo',
    createAt: new Date().getDate()
  },
  {
    id: uuid(),
    name:'Toyota',
    createAt: new Date().getDate()
  },
  {
    id: uuid(),
    name:'Honda',
    createAt: new Date().getDate()
  },
  {
    id: uuid(),
    name:'Jeep',
    createAt: new Date().getDate()
  },
]