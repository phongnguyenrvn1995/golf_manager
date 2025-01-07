import axios, { AxiosInstance } from 'axios';
import React from 'react';

// Tạo một instance của axios
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://multiosstoring.mobie.in', // Thay bằng URL của API của bạn
  timeout: 10000, // Thời gian chờ tối đa cho mỗi yêu cầu
  headers: {
    'Content-Type': 'application/json',
  },
});

// Cấu hình interceptor nếu cần (ví dụ: thêm token vào header)
apiClient.interceptors.request.use((config) => {
  const token = 'your_token'; // Lấy token từ store hoặc AsyncStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi chung ở đây
    return Promise.reject(error);
  }
);

export default apiClient;
