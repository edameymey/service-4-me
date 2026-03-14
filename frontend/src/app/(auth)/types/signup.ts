export type SignupErrors = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type SignupTouched = {
  fullName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
};
