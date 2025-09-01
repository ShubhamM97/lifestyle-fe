import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_SERVER_URL = process.env.EXPO_PUBLIC_BASE_SERVER_URL;
const DEV_SERVER_URL = process.env.EXPO_PUBLIC_DEV_SERVER_URL;

// Determine which server to use based on environment
const getBaseURL = () => {
  if (__DEV__) {
    return DEV_SERVER_URL;
  }
  return BASE_SERVER_URL;
};

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error fetching auth token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data || error.message || "An error occured",
        status: error.response?.status,
      };
    }
    return { error: "An unexpected error occured" };
  }
);

export default api;
