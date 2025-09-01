import api from "../config";

export const checkUserExists = async (email: string) => {
  const response = await api.post("/auth/check-user", { email });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const response = await api.post("/auth/register", {
    email,
    password,
    username,
    confirmPassword,
  });
  return response.data;
};

export const verifyEmail = async (otp: string, otpToken: string) => {
  const response = await api.post("/auth/verify-email", { otp, otpToken });
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data;
};

export const resetPassword = async (
  password: string,
  confirmPassword: string,
  otp: string,
  otpToken: string
) => {
  const response = await api.post("/auth/reset-password", {
    password,
    confirmPassword,
    otp,
    otpToken,
  });
  return response.data;
};
