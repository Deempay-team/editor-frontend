import {Label} from "@radix-ui/react-label";

const ColorPicker = ({ label, value, onChange }) => (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-900/60 p-4 rounded-md backdrop-blur-sm">
        <Label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {label}
        </Label>
        <label className="flex items-center cursor-pointer group relative">
      <span
          className="w-10 h-10 rounded-md transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: value }}
      ></span>
            <input
                type="color"
                className="appearance-none cursor-pointer w-10 h-10 border-0 p-0 bg-transparent opacity-0 absolute inset-0"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    </div>
);
export default ColorPicker;