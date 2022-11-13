import { compraI } from './compra';
import { persimisoI } from './permisos';

export interface UserI {
  id?: string;
  name?: string;
  apellido?: string;
  numberPhone?: string;
  address?: string;
  emailVerified?: boolean;
  photoURl?: string;
  Email?: string;
  Password?: string;
  Rol?: string;
  credito?: number;
  compras?: compraI[];
  identificacion?: string;
  permisos?: persimisoI;
}
