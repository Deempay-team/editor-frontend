export function getPercentageOff(salePrice, comparePrice) {
  const sale = Number(salePrice);
  const compare = Number(comparePrice);

  if (!isNaN(sale) && !isNaN(compare) && compare > 0 && sale < compare) {
    const percentage = ((compare - sale) / compare) * 100;
    return Math.round(percentage);
  }

  return null; // or 0 or "N/A"
}

// Fetch all Craft JSON keys except "ROOT"
export function getAllKeys(data) {
  console.log("!data", !data);
  console.log('typeof data !== "object"', typeof data !== "object");
  if (!data || typeof data !== "object") return [];
  return Object.keys(data).filter((key) => key !== "ROOT");
}
