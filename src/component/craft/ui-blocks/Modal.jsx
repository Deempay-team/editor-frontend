'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
                                  isOpen,
                                  onClose,
                                  title,
                                  children,
                                  showCloseButton = true,
                                  closeOnOverlayClick = true,
                                  closeOnEscape = true,
                                  maxWidth = 'max-w-md',
                                  className = '',
                                  overlayClassName = '',
                                  contentClassName = '',
                              }) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const [portalContainer, setPortalContainer] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.craftjs-renderer');
        if (container) {
            setPortalContainer(container);

            if (isOpen) {
                // Capture current scroll position
                setScrollTop(container.scrollTop);
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
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!closeOnEscape) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose, closeOnEscape]);

    useEffect(() => {
        if (!isOpen || !portalContainer) return;

        const handleScroll = () => {
            setScrollTop(portalContainer.scrollTop);
        };

        portalContainer.addEventListener('scroll', handleScroll);
        return () => portalContainer.removeEventListener('scroll', handleScroll);
    }, [isOpen, portalContainer]);

    if (!isVisible || !portalContainer) return null;

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        if (closeOnOverlayClick) {
            onClose();
        }
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const modalContent = (
        <>
            <div
                className={`absolute left-0 right-0 bg-black/50 z-[9998] transition-opacity duration-300 ease-in-out cursor-pointer ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                } ${overlayClassName}`}
                style={{
                    top: `${scrollTop}px`,
                    height: `${portalContainer.clientHeight}px`,
                }}
                onClick={handleOverlayClick}
                aria-hidden="true"
            />

            <div
                className={`absolute left-0 right-0 z-[9999] flex items-center justify-center p-4 pointer-events-none ${className}`}
                style={{
                    top: `${scrollTop}px`,
                    height: `${portalContainer.clientHeight}px`,
                }}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                <div
                    className={`bg-white rounded-sm shadow-lg w-full ${maxWidth} transform transition-all duration-300 ease-in-out pointer-events-auto ${
                        isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    } ${contentClassName}`}
                    style={{
                        maxHeight: '90%',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        borderRadius: '0.5rem',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#c5c5c5 transparent',
                    }}
                    onClick={handleModalClick}
                >
                    {(title || showCloseButton) && (
                        <div className="flex justify-between items-center p-3 pb-1 border-b sticky top-0 bg-white z-10">
                            {title && (
                                <h2 id="modal-title" className="text-xl font-semibold text-black">
                                    {title}
                                </h2>
                            )}
                            {showCloseButton && (
                                <button
                                    onClick={onClose}
                                    className="text-2xl text-gray-500 hover:text-gray-700 transition-colors ml-auto"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    )}

                    <div className={`${title || showCloseButton ? 'px-4 pb-6' : 'p-6'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );

    return createPortal(modalContent, portalContainer);
}

Modal.craft = {
    displayName: 'Modal',
    props: {},
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};