export type LoginErrors = {
  email?: string;
  password?: string;
};

export type LoginTouched = {
  email: boolean;
  password: boolean;
};
