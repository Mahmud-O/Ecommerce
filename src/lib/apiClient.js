import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://ecommerce.routemisr.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor to add token when available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tkn');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401/403 errors - possibly redirect to login
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.error('Authentication error:', error.response?.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
