export const randomInRange = (
  min: number,
  max: number,
  integer: boolean = false
): number => {
  const value = Math.random() * (max - min) + min;

  return integer ? Math.floor(value) : value;
};
