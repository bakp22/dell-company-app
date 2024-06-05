// src/components/ClientComponent.js

"use client";

import React, { useState, useEffect } from 'react';

export const ClientComponent = ({ initialData }) => {
  const [data, setData] = useState({ products: [], workers: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <h2>Workers</h2>
      <ul>
        {data.workers.map(worker => (
          <li key={worker.id}>
            {worker.firstname} {worker.lastname} - {worker.department}
          </li>
        ))}
      </ul>
    </div>
  );
};


