'use client';           // ← Only needed if you’re in Next.js App Router

import React from 'react';
import Spline from '@splinetool/react-spline';

const Splineserum = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spline scene="https://prod.spline.design/dwrGFKQUwvSjklEa/scene.splinecode" controls={false}   />
      
    </div>
  );
};

export default Splineserum;
