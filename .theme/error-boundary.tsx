import React from 'react';
import { useRouteError } from 'react-router-dom';

export default () => {
  const error = useRouteError();
  return (
    <h5 style={{ color: 'red', padding: 10, margin: 0 }}>{String(error)}</h5>
  );
};
