function Tooltip({ children, text }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:flex items-center z-50">
        <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold drop-shadow-lg text-gray-900">
          <div className="absolute inset-y-0 flex items-center -left-1">
            <div className="h-2 w-2 rotate-45 bg-white" />
          </div>
          {text}
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
