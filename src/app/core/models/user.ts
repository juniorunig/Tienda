export interface UserI {
  id?: string;
  name?: string;
  apellido?: string;
  numberPhone?: string;
  address?: string;
  emailVerified?: boolean;
  photoUrl?: string;
  Email?: string;
  Password?: string;
  Rol?: 'admin' | 'user';
  credito?: number;
}
