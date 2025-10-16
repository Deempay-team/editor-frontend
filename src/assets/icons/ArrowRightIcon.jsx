const ArrowRightIcon = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20"   style={{ transform: `scale(${width / 20})` }}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0254 4.94141L17.0837 9.99974L12.0254 15.0581" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.91699 10H16.942" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}
export default ArrowRightIcon