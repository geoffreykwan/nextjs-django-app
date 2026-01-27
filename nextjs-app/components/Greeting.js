"use client";

import { useState, useEffect } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const Greeting = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(NEXT_PUBLIC_API_URL);
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
