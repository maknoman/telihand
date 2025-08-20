import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// File management API calls
export const fileAPI = {
  // Upload file
  upload: async (file, onProgress) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(`${API}/files/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onProgress,
    });
  },

  // Get user files
  getFiles: async () => {
    return axios.get(`${API}/files`);
  },

  // Delete file
  delete: async (fileId) => {
    return axios.delete(`${API}/files/${fileId}`);
  },

  // Download file
  download: async (fileId, filename) => {
    const response = await axios.get(`${API}/files/${fileId}/download`, {
      responseType: 'blob',
    });
    
    // Create blob link and trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  },
};

// Dashboard API calls
export const dashboardAPI = {
  // Get dashboard statistics
  getStats: async () => {
    return axios.get(`${API}/dashboard/stats`);
  },
};

// Utility function to format bytes
export const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};