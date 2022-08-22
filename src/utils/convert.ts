export const convertDisitNumber = (data: string, fixed: number): number => {
  const castingData: number = parseInt(data);
  const digitData: number = castingData / Math.pow(10, 6);
  const fixedData: string = digitData.toFixed(fixed);
  return parseFloat(fixedData);
}