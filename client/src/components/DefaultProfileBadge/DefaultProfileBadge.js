const DefaultProfileBadge = ({ username }) => {
  const generateRandomColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  return (
    <svg
      className="default-profile-badge profile-badge"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="defaultProfileBadge">
        <circle
          id="badge"
          cx="50"
          cy="50"
          r="50"
          fill={generateRandomColor}
          x="23.4688"
          y="79.5909"
        />
        <text
          id="firstLetter"
          fill="black"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="80"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="23.4688" y="79.5909">
            {username?.at(0).toUpperCase()}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default DefaultProfileBadge;
