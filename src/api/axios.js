import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Separate instance for refresh request
const refreshClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        await refreshClient.post("/users/refresh-token");

        // Retry original request
        return axiosInstance(originalRequest);

      } catch (refreshError) {
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);




export default axiosInstance;
