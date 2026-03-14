export type SignupErrors = {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
};

export type SignupTouched = {
  fullName: boolean;
  email: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPassword: boolean;
};
