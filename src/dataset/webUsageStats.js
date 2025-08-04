
export const mobileAndDesktopOS = [
  { id: 0, value: 45, label: 'Android' },
  { id: 1, value: 26, label: 'Windows' },
  { id: 2, value: 12, label: 'iOS' },
  { id: 3, value: 10, label: 'macOS' },
  { id: 4, value: 4, label: 'Linux' },
  { id: 5, value: 2, label: 'ChromeOS' },
  { id: 6, value: 1, label: 'HarmonyOS' },
  { id: 7, value: 0.5, label: 'KaiOS' },
];

export const valueFormatter = (value) => {
  const numericValue = Number(value);
  return isNaN(numericValue) ? '' : `${numericValue.toFixed(1)}%`;
};

