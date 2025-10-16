'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function SlideSidebar({
                                         isOpen,
                                         onClose,
                                         title = 'Menu',
                                         children,
                                         width = '75%',
                                         maxWidth = 'max-w-sm',
                                         position = 'left',
                                         showOverlay = true,
                                         overlayOpacity = 'bg-opacity-50',
                                         className = '',
                                     }) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const [portalContainer, setPortalContainer] = useState(null);

    useEffect(() => {
        const container = document.querySelector('.craftjs-renderer');
        if (container) {
            setPortalContainer(container);

            if (isOpen) {
                container.style.overflow = 'hidden';
            } else {
                container.style.overflowX = 'hidden';
                container.style.overflowY = 'auto';
            }
        }

        return () => {
            if (container) {
                container.style.overflowX = 'hidden';
                container.style.overflowY = 'auto';
            }
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsAnimating(true);
            }, 30);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            const timeout = setTimeout(() => setIsVisible(false), 320);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isVisible || !portalContainer) return null;

    const sidebarPositionClass = position === 'left' ? 'left-0' : 'right-0';

    const getTransform = () => {
        const direction = position === 'left' ? '-100%' : '100%';
        if (isVisible && !isAnimating) {
            return `translateX(${direction})`;
        }
        if (isAnimating) {
            return 'translateX(0)';
        }
        return `translateX(${direction})`;
    };

    const sidebarContent = (
        <>
            {showOverlay && (
                <div
                    className={`absolute inset-0 bg-black/50 ${overlayOpacity} z-[9998] transition-opacity duration-300 ease-in-out ${
                        isAnimating ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ height: '100%' }}
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`absolute top-0 ${sidebarPositionClass} ${maxWidth} bg-white z-[9999] p-6 flex flex-col`}
                style={{
                    width,
                    height: '100%',
                    transform: getTransform(),
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                role="dialog"
                aria-modal="true"
                aria-label={title}
            >
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-black">{title}</span>
                    <button
                        onClick={onClose}
                        className="text-xl text-black hover:text-gray-600 transition-colors"
                        aria-label="Close sidebar"
                    >
                        ✕
                    </button>
                </div>

                <div className={`flex-grow overflow-y-auto ${className}`}>
                    {children}
                </div>
            </aside>
        </>
    );

    return createPortal(sidebarContent, portalContainer);
}

SlideSidebar.craft = {
    displayName: 'SlideSidebar',
    props: {},
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};