export function getPercentageOff(salePrice, comparePrice) {
  const sale = Number(salePrice);
  const compare = Number(comparePrice);

  if (!isNaN(sale) && !isNaN(compare) && compare > 0 && sale < compare) {
    const percentage = ((compare - sale) / compare) * 100;
    return Math.round(percentage);
  }

  return null; // or 0 or "N/A"
}
