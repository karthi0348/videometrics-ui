export const API_BASE_URL = 'http://172.174.114.7:8000';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
  SEND_CODE: `${API_BASE_URL}/auth/send-code`,
  RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`, 
};