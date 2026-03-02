import { useEffect, useState } from 'react';

import { apiFetch } from '../config/api';

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await apiFetch('/api/activities/');
        setActivities(data.results || []);
      } catch (loadError) {
        setError(loadError.message);
      }
    };

    loadActivities();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Actividades</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {!error && (
        <ul className="list-group">
          {activities.map((activity) => (
            <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{activity.name}</strong>
                <div className="text-muted small">{activity.duration_minutes} min</div>
              </div>
              <span className="badge bg-primary rounded-pill">{activity.calories_burned} kcal</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivitiesPage;
