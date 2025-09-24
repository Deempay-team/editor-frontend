// Responsive functions for height & width
export function getResponsiveProp({
  isDesktop,
  propMode = "custom",
  propSize,
  propModeMobile,
  propSizeMobile,
}) {
  // Decide which props to use (desktop vs mobile)
  const mode = isDesktop ? propMode : propModeMobile ?? propMode;
  const custom = isDesktop ? propSize : propSizeMobile ?? propSize;

  if (mode === "auto") return "auto";
  if (mode === "full") return "100%";
  if (mode === "custom" && custom) return `${custom}px`;

  return "auto"; // fallback
}

// Responsive functions for fontSize, fontWeight, paddingX, paddingY etc.
export function getResponsivePropSize(isDesktop, propSize, propSizeMobile) {
  if (isDesktop) {
    return propSize ? propSize : undefined;
  }
  if (propSizeMobile) {
    return propSizeMobile;
  }
  return propSize ? propSize : undefined;
}
