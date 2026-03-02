const getApiBaseUrl = () => {
  if (process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }

  const host = window.location.hostname;
  if (host.includes('-3000.app.github.dev')) {
    return `https://${host.replace('-3000.app.github.dev', '-8000.app.github.dev')}`;
  }

  return 'http://localhost:8000';
};

export const API_BASE_URL = getApiBaseUrl();

export const apiFetch = async (path) => {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
};
