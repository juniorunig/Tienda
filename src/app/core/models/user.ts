export interface UserI {
  id?: string;
  name?: string;
  numberPhone: string;
  address: string;
  emailVerified: boolean;
  photoUrl?: string;
  Email?: string;
  Password?: string;
  Rol?: 'admin' | 'user';
  credito?: number;
}
