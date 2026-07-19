const getGenreColor = (id : number) => {
  const colorPalettes = [
    { borderColor: '#4a1c1c', bgColor: '#2a1111', textColor: '#e8a0a0' },
    { borderColor: '#1a365d', bgColor: '#111d33', textColor: '#90cdf4' },
    { borderColor: '#5c3a21', bgColor: '#2b1c11', textColor: '#fbd38d' },
    { borderColor: '#44206b', bgColor: '#231138', textColor: '#d6bcfa' },
    { borderColor: '#1d4e5f', bgColor: '#0f2832', textColor: '#81e6d9' },
    { borderColor: '#2d3748', bgColor: '#1a202c', textColor: '#cbd5e0' }, 
    { borderColor: '#6b214d', bgColor: '#361127', textColor: '#fbb6ce' },
    { borderColor: '#5c3a21', bgColor: '#2b1c11', textColor: '#ed8936' },
    { borderColor: '#1c4532', bgColor: '#0f271c', textColor: '#9ae6b4' },
    { borderColor: '#2c3e50', bgColor: '#1a252f', textColor: '#e2e8f0' }, 
    { borderColor: '#322659', bgColor: '#1b1433', textColor: '#b794f4' }, 
    { borderColor: '#5c3a21', bgColor: '#2b1c11', textColor: '#fbd38d' },
  ];
  return colorPalettes[id % colorPalettes.length];
};
export { getGenreColor }