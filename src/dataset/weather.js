// src/dataset/weather.js

export const dataset = [
  { month: 'Jan', london: 49, paris: 71, newYork: 38, seoul: 46 },
  { month: 'Feb', london: 52, paris: 65, newYork: 40, seoul: 50 },
  { month: 'Mar', london: 58, paris: 80, newYork: 42, seoul: 60 },
  { month: 'Apr', london: 60, paris: 77, newYork: 45, seoul: 70 },
  { month: 'May', london: 70, paris: 85, newYork: 50, seoul: 75 },
];

export const valueFormatter = (value) => `${value} mm`;
