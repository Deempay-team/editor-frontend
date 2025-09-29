const DecreaseIcon = ({ className, ...props }) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"   className={className}
                {...props}>
        <g opacity="0.5">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E5E7EB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7 12C7 11.8674 7.04789 11.7402 7.13313 11.6464C7.21838 11.5527 7.33399 11.5 7.45455 11.5H16.5455C16.666 11.5 16.7816 11.5527 16.8669 11.6464C16.9521 11.7402 17 11.8674 17 12C17 12.1326 16.9521 12.2598 16.8669 12.3536C16.7816 12.4473 16.666 12.5 16.5455 12.5H7.45455C7.33399 12.5 7.21838 12.4473 7.13313 12.3536C7.04789 12.2598 7 12.1326 7 12Z" fill="currentColor" />
        </g>
    </svg>

}
export default DecreaseIcon;
