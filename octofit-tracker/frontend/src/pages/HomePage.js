import { useEffect, useState } from 'react';

import { apiFetch } from '../config/api';

function HomePage() {
  const [apiInfo, setApiInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadApiInfo = async () => {
      try {
        const data = await apiFetch('/api/');
        setApiInfo(data);
      } catch (loadError) {
        setError(loadError.message);
      }
    };

    loadApiInfo();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-3">OctoFit Tracker</h1>
      <p className="text-muted">Conexión inicial entre frontend y backend.</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {apiInfo && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">API Root</h5>
            <p className="card-text mb-1">{apiInfo.message}</p>
            <small className="text-muted">{apiInfo.base_url}</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
