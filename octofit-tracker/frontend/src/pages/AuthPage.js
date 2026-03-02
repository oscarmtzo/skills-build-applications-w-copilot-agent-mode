import { useEffect, useState } from 'react';

import { apiFetch } from '../config/api';

function AuthPage() {
  const [authStatus, setAuthStatus] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadAuthStatus = async () => {
      try {
        const data = await apiFetch('/api/auth/status/');
        setAuthStatus(data);
      } catch (loadError) {
        setError(loadError.message);
      }
    };

    loadAuthStatus();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Autenticación</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {authStatus && (
        <div className="card">
          <div className="card-body">
            <p className="mb-1">Autenticado: {String(authStatus.authenticated)}</p>
            <small className="text-muted">Perfil inicial aún no configurado.</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
