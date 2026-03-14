export enum PrivacyOptions {
  PUBLIC = 'public',
  MEMBERS = 'members',
}
export enum ActiveAccountModals {
  PASSWORD = 'password',
  PHONE = 'phone',
}

export type PasswordModalErrors = {
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};
export type PhoneModalErrors = {
  currentPhoneNumber?: string;
  newPhoneNumber?: string;
};
