'use client';

import { useState, useEffect } from 'react';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const Greeting = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/hello/`);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Hello, Next.js!</p>
      <p>{data?.message}</p>
    </div>
  );
};

export default Greeting;
