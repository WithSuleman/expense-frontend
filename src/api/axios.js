import axios from 'axios';

// When running on the same origin (such as Vite + Express server on port 3000),
// VITE_API_URL can be omitted or empty to use relative URLs (/api/expenses),
// or pointed to an external backend URL during separate frontend/backend deployments.
const baseURL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default api;
