const FacebookLogo = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    className={className}
    {...props} // allows width, height, etc. to be overridden
  >
    <path
      fill="currentColor"
      d="M6.263 15.173h2.64V9.886h2.38l.26-2.627h-2.64V5.932a.66.66 0 0 1 .66-.66h1.98v-2.64h-1.98a3.3 3.3 0 0 0-3.3 3.3V7.26h-1.32l-.261 2.627h1.581z"
    />
  </svg>
);

export default FacebookLogo;
