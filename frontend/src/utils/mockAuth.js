// Mock authentication utilities - will be replaced with real API calls

export const mockLogin = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock validation
      if (email === 'demo@terabox.com' && password === 'demo123') {
        localStorage.setItem('terabox_token', 'mock_jwt_token');
        localStorage.setItem('terabox_user', JSON.stringify({
          id: '1',
          name: 'Demo User',
          email: 'demo@terabox.com',
          storageUsed: 536870912000, // ~500GB in bytes
          storageLimit: 1099511627776 // 1TB in bytes
        }));
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Invalid email or password' });
      }
    }, 1000);
  });
};

export const mockRegister = async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock user creation
      resolve({ success: true });
    }, 1000);
  });
};

export const mockLogout = () => {
  localStorage.removeItem('terabox_token');
  localStorage.removeItem('terabox_user');
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('terabox_token');
  const user = localStorage.getItem('terabox_user');
  
  if (token && user) {
    return JSON.parse(user);
  }
  return null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('terabox_token');
};