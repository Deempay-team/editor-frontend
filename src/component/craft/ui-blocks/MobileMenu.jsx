import React from 'react';
import { useNode, Element } from '@craftjs/core';
import { MenuItems } from './MenuItems';

export const MobileMenu = ({ menuOpen, isMobile }) => {
  if (!menuOpen || !isMobile) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 w-full bg-white z-50 flex flex-col space-y-3 border-t pt-3">
      <Element id="mobile_menu_area" is={MenuItems} className="flex-col" />
    </div>
  );
};
