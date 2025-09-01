export type login = {
  email: string;
  password: string;
};

export type register = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type verifyEmail = {
  otp: string;
  otpToken: string;
};
