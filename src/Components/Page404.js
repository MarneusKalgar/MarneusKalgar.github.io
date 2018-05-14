import React from 'react';
import { Link } from 'react-router-dom';

const page404 = () => {
  
  return (
    <div className="error">
      <h1>Страница не найдена</h1>
      <Link to="/" className="button error-btn">На главную</Link>
    </div>
  );
};

export default page404;