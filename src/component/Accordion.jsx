import ChevronDownIcon from "../assets/icons/chevron-down.svg?react";

export default function Accordion({ title, children }) {
  return (
    <>
      <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 py-4 px-6 cursor-pointer list-none ">
          <span className="text-sm font-semibold capitalize"> {title} </span>
          <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400 rotate-90 group-open:rotate-0 transition-transform" />
        </summary>
        <div className="border-b border-gray-200 px-0 py-0">{children}</div>
      </details>
    </>
  );
}
