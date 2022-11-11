import { ProductoI } from './producto';

export interface compraI {
  id?: string;
  tipo?: string;
  valor?: number;
  fecha?: string;
  estado?: string;
  productos?: ProductoI[];
}
