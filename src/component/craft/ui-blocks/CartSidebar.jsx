'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideSidebar from './SlideSidebar.jsx';
import productImage from '../../../assets/img/img.png';
import { QuantitySelector } from './QuantitySelector.jsx';
import trashIcon from '../../../assets/icons/trash.svg';
import { Container_2 } from '../user/Container_2.jsx';
import { Element } from '@craftjs/core';
import { useViewport } from '../../../Context/ViewportContext.jsx';
import { Button } from '@/components/ui/button';
import { X, PlusIcon, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialCartItems = [
  { id: 1, name: 'Classic T-Shirt', price: 10000, quantity: 1, image: productImage, type: 'Syrub', size: '200ML' },
  { id: 2, name: 'Denim Jeans', price: 15000, quantity: 2, image: productImage, type: 'Fabric', size: '32' },
    { id: 3, name: 'Denim Jeans', price: 15000, quantity: 2, image: productImage, type: 'Fabric', size: '32' },
    { id: 4, name: 'Denim Jeans', price: 15000, quantity: 2, image: productImage, type: 'Fabric', size: '32' },
    { id: 5, name: 'Denim Jeans', price: 15000, quantity: 2, image: productImage, type: 'Fabric', size: '32' },
];

export default function CartSidebar({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { viewport } = useViewport();
  const itemsRef = useRef(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 2000;
  const total = subtotal + deliveryFee;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (itemsRef.current) {
      const itemCount = cartItems.length;
      const itemHeight = 120;
      const minItemsToScroll = 2;
      const maxHeight = itemCount > minItemsToScroll ? `${itemHeight * minItemsToScroll}px` : 'auto';
      itemsRef.current.style.maxHeight = maxHeight;
    }
  }, [cartItems]);

  return (
    <SlideSidebar
      isOpen={isOpen}
      onClose={onClose}
      title={`Cart (${cartItems.length})`}
      width={viewport === 'mobile' ? '95%' : '100%'}
      maxWidth="max-w-sm"
      position="right"
    >
      <div className=" h-full flex flex-col justify-between ">

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <Image
              src={productImage}
              alt="Empty Cart"
              width={100}
              height={100}
              className="mb-4 opacity-50"
            />
            <p className="text-lg font-[Poppins] text-gray-500 mb-4">Your cart is empty</p>
            <Link
              href="/products"
              className="bg-[#FF4D00] text-white py-2 px-4 rounded-md font-[Poppins] text-sm hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex-1 flex flex-col  overflow-hidden">
            {/* Item List */}
            <div
              ref={itemsRef}
              className="overflow-y-auto flex flex-col  scrollable-container"
              style={{
                // border: '1px solid #0000001A',
                // borderRadius: '20px',
                // padding: '1px',
              }}
            >
              <style jsx>{`
    .scrollable-container::-webkit-scrollbar {
    display: compact;
}
.scrollable-container {
    scrollbar-width: thin;
}
`}</style>
              {cartItems.map((item, index) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md mt-2"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-black font-[Poppins] font-bold">
                          {item.name}
                        </p>
                        <div className="flex gap-2">
                          <p className="text-xs text-black font-[Poppins]">Type:</p>
                          <p className="text-xs text-black/50 font-[Poppins] font-bold">
                            {item.type}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <p className="text-xs text-black font-[Poppins]">Quantity:</p>
                          <p className="text-xs text-black/50 font-[Poppins] font-bold">
                            {item.size}
                          </p>
                        </div>
                        <p className="text-sm text-black font-[Poppins] font-medium mt-1">
                          ₦ {(item.price * item.quantity).toLocaleString('en-NG')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="hover:bg-red-100"
                      >
                        <Image
                          src={trashIcon}
                          alt="Remove item"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                      </Button>
                      <Element id={`quantity-${item.id}`} is={Container_2} canvas>
                        <QuantitySelector
                          backgroundColor="#F8F8F8"
                          textColor="#4B5563"
                          height={viewport === 'mobile' ? '32' : '32'}
                          width={viewport === 'mobile' ? '90' : '90'}
                          borderRadius="4"
                          value={item.quantity}
                          onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                          canvas
                        />
                      </Element>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && (
                    <hr className="my-4 border-t border-[#0000001A]" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="mt-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-[Poppins] text-[#00000099]">Estimated Total</span>
                  <span className="text-lg font-bold text-black font-[Poppins]">
                    ₦ {total.toLocaleString('en-NG')}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="w-full block  bg-[#FF4D00]  text-white py-3 rounded-md font-[Poppins] text-center text-sm hover:bg-gray-800 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideSidebar>
  );
}