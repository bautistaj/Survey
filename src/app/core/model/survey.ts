import { Pcbrand } from './pcbrand';

export class Survey {
  id?: number;
  email: string;
  comments: string;
  pcBrand: Pcbrand;
  createdAt: Date;
}