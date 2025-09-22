const Star = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 16"
    className={className}
    {...props} // allows width, height, etc. to be overridden
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.99.675c.373-.897 1.646-.897 2.02 0l1.735 4.173 4.503.36c.97.078 1.363 1.288.624 1.921l-3.43 2.94 1.047 4.394c.226.946-.804 1.694-1.634 1.187L9 13.295 5.144 15.65c-.83.507-1.86-.242-1.634-1.187l1.048-4.395-3.43-2.939c-.74-.633-.347-1.843.623-1.92l4.504-.361z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Star;
