import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginPage from './LoginPage';

export default function Test() {
  const [data, setData] = useState(false);

  const handleToggle = () => {
    setData(!data);
  };

  return (
    <div>
      <Button onClick={handleToggle}>{data ? 'Close Login' : 'Open Login'}</Button>
      {data && <LoginPage />}
    </div>
  );
}
