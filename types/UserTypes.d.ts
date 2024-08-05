export type User = {
  id: string;
  name: string;
  createdDate: string;
  updatedDate?: string;
  email: string;
  role: "admin" | "user";
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name: string;
  email: string;
};

export type UserPasswordUpdate = {
  password: string;
  newPassword: string;
};

