export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}

export interface userlol {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
