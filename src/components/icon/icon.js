export const ButtonIcon = ({ width, height, color1, color2 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_51)">
        <rect width="16" height="16" rx="8" fill={color1} />
        <path
          d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
          fill={color2}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_51">
          <rect width="16" height="16" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ContactIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
};


