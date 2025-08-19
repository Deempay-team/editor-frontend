import Tooltip from "../../component/Tooltip";

import Logo from "../../assets/icons/logo.svg?react";
import SquarePlusIcon from "../../assets/icons/square-plus.svg?react";
import LayoutIcon from "../../assets/icons/layout.svg?react";
import PalatteIcon from "../../assets/icons/palette.svg?react";
import FileIcon from "../../assets/icons/file.svg?react";
import ImageIcon from "../../assets/icons/image.svg?react";
import SettingsIcon from "../../assets/icons/settings.svg?react";
import AlertCircleIcon from "../../assets/icons/alert-circle.svg?react";

const SideBar = () => {
  return (
    <>
      {/* <div className='flex bg-gray-100 font-sans text-gray-900'> */}
      <aside>
        <div className="">
          <div className="flex flex-col items-center w-18 h-screen bg-white border-r border-gray-200">
            <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
              <Logo />
            </div>
            <nav className="flex flex-1 flex-col gap-y-4 pt-10">
              <a
                className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                href=""
              >
                <SquarePlusIcon className="h-6 w-6 stroke-current" />
                <Tooltip>
                  Add element <span className="text-gray-400"> (A) </span>
                </Tooltip>
              </a>

              <a
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <LayoutIcon className="w-6 h-6 stroke-current" />
                <Tooltip>
                  Layout <span className="text-gray-400"> (Y) </span>
                </Tooltip>
              </a>
              <a
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <PalatteIcon className="w-6 h-6 stroke-current" />
                <Tooltip>
                  Themes <span className="text-gray-400"> (T) </span>
                </Tooltip>
              </a>
              <a
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <FileIcon className="w-6 h-6 stroke-current" />
                <Tooltip>
                  Assets <span className="text-gray-400"> (S) </span>
                </Tooltip>
              </a>
              <a
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <ImageIcon className="w-6 h-6 fill-current" />
                <Tooltip>
                  Images <span className="text-gray-400"> (I) </span>
                </Tooltip>
              </a>
            </nav>
            <div className="flex flex-col items-center gap-y-4 pb-10">
              <button
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <AlertCircleIcon className="w-6 h-6 stroke-current" />
                <Tooltip>
                  {" "}
                  Help <span className="text-gray-400"> (I) </span>
                </Tooltip>
              </button>
              <button
                className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                href="#"
              >
                <SettingsIcon className="w-6 h-6 stroke-current" />
                <Tooltip>
                  {" "}
                  Settings <span className="text-gray-400"> (I) </span>
                </Tooltip>
              </button>
              <button className="pt-2 rounded-full overflow-hidden">
                <img
                  className="h-10 w-10 object-cover"
                  src="/img/avatar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
