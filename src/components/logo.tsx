export const Logo = ({
  height = "100%",
  width = "100%",
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 160"
      width={width}
      height={height}
    >
      <rect width="450" height="160" fill="transparent" />

      <text
        x="45"
        y="100"
        font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="60"
        font-weight="700"
        fill="#1a1a1a"
        letter-spacing="-2"
      >
        res
      </text>
      <g transform="translate(133, 0)">
        <path
          d="
      M 0 58 
      L 0 100 
      L 50 100 
      L 50 58 
      L 24 58 
      L 24 70 
      L 38 70 
      L 38 88 
      L 12 88 
      L 12 58 
      Z"
          fill="#1a1a1a"
        />

        <path
          d="
      M 0 106 
      Q 0 120 12 120 
      L 50 120 
      L 50 108 
      L 12 108 
      Q 5 108 0 105 
      Z"
          fill="#1a1a1a"
        />
      </g>

      <text
        x="188"
        y="100"
        font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="60"
        font-weight="700"
        fill="#1a1a1a"
        letter-spacing="-2"
      >
        me ai
      </text>
    </svg>
  );
};
