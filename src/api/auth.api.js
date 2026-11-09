import axiosInstance from "./axios.js";
export const logoutUser = async () => {
    const response = await axiosInstance.post("/users/logout");
    return response.data;
}