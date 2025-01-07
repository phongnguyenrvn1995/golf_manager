import apiClient from './apiClient';

export interface User {
  id: string;
  name: string;
  email: string;
}

export const getUser = async (userId: string): Promise<User> => {
  try {
    const response = await apiClient.get(`/json/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

export const loginUser = async (email: string, password: string): Promise<string> => {
  try {
    const response = await apiClient.post('/json/login', { email, password });
    return response.data.token; // Giả sử API trả về token
  } catch (error) {
    throw new Error('Login failed');
  }
};
