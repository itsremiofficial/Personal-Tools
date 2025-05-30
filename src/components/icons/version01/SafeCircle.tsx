import { FC } from "react";

const IconSafeCircle: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 8.00049L7 16.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 12.0005C12 10.8959 12.8954 10.0005 14 10.0005C15.1046 10.0005 16 10.8959 16 12.0005C16 13.1051 15.1046 14.0005 14 14.0005C12.8954 14.0005 12 13.1051 12 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 10.0005L17 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 15.0005L12 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 10.0005L11 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 15.0005L16 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4697 8.47016C10.7626 8.17727 11.2374 8.17727 11.5303 8.47016L12.5303 9.47016C12.5733 9.51311 12.6099 9.55998 12.6403 9.60961C13.0413 9.38106 13.5054 9.25049 14 9.25049C14.4946 9.25049 14.9587 9.38106 15.3597 9.60961C15.3901 9.55998 15.4267 9.51311 15.4697 9.47016L16.4697 8.47016C16.7626 8.17727 17.2374 8.17727 17.5303 8.47016C17.8232 8.76305 17.8232 9.23793 17.5303 9.53082L16.5303 10.5308C16.4874 10.5738 16.4405 10.6104 16.3909 10.6408C16.6194 11.0418 16.75 11.5059 16.75 12.0005C16.75 12.4951 16.6194 12.9592 16.3909 13.3602C16.4405 13.3906 16.4874 13.4272 16.5303 13.4702L17.5303 14.4702C17.8232 14.7631 17.8232 15.2379 17.5303 15.5308C17.2374 15.8237 16.7626 15.8237 16.4697 15.5308L15.4697 14.5308C15.4267 14.4879 15.3901 14.441 15.3597 14.3914C14.9587 14.6199 14.4946 14.7505 14 14.7505C13.5054 14.7505 13.0413 14.6199 12.6403 14.3914C12.6099 14.441 12.5733 14.4879 12.5303 14.5308L11.5303 15.5308C11.2374 15.8237 10.7626 15.8237 10.4697 15.5308C10.1768 15.2379 10.1768 14.7631 10.4697 14.4702L11.4697 13.4702C11.5126 13.4272 11.5595 13.3906 11.6091 13.3602C11.3806 12.9592 11.25 12.4951 11.25 12.0005C11.25 11.5059 11.3806 11.0418 11.6091 10.6408C11.5595 10.6104 11.5126 10.5738 11.4697 10.5308L10.4697 9.53082C10.1768 9.23793 10.1768 8.76305 10.4697 8.47016ZM12.75 12.0005C12.75 11.3101 13.3096 10.7505 14 10.7505C14.6904 10.7505 15.25 11.3101 15.25 12.0005C15.25 12.6908 14.6904 13.2505 14 13.2505C13.3096 13.2505 12.75 12.6908 12.75 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M7 7.25049C7.41421 7.25049 7.75 7.58627 7.75 8.00049L7.75 16.0005C7.75 16.4147 7.41421 16.7505 7 16.7505C6.58579 16.7505 6.25 16.4147 6.25 16.0005L6.25 8.00049C6.25 7.58627 6.58579 7.25049 7 7.25049Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 12.0005C12.75 11.3101 13.3096 10.7505 14 10.7505C14.6904 10.7505 15.25 11.3101 15.25 12.0005C15.25 12.6908 14.6904 13.2505 14 13.2505C13.3096 13.2505 12.75 12.6908 12.75 12.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049ZM7.75 8.00049C7.75 7.58627 7.41421 7.25049 7 7.25049C6.58579 7.25049 6.25 7.58627 6.25 8.00049L6.25 16.0005C6.25 16.4147 6.58579 16.7505 7 16.7505C7.41421 16.7505 7.75 16.4147 7.75 16.0005L7.75 8.00049ZM11.5303 8.47016C11.2374 8.17727 10.7626 8.17727 10.4697 8.47016C10.1768 8.76305 10.1768 9.23793 10.4697 9.53082L11.4697 10.5308C11.5126 10.5738 11.5595 10.6104 11.6091 10.6408C11.3806 11.0418 11.25 11.5059 11.25 12.0005C11.25 12.4951 11.3806 12.9592 11.6091 13.3602C11.5595 13.3906 11.5126 13.4272 11.4697 13.4702L10.4697 14.4702C10.1768 14.7631 10.1768 15.2379 10.4697 15.5308C10.7626 15.8237 11.2374 15.8237 11.5303 15.5308L12.5303 14.5308C12.5733 14.4879 12.6099 14.441 12.6403 14.3914C13.0413 14.6199 13.5054 14.7505 14 14.7505C14.4946 14.7505 14.9587 14.6199 15.3597 14.3914C15.3901 14.441 15.4267 14.4879 15.4697 14.5308L16.4697 15.5308C16.7626 15.8237 17.2374 15.8237 17.5303 15.5308C17.8232 15.2379 17.8232 14.7631 17.5303 14.4702L16.5303 13.4702C16.4874 13.4272 16.4405 13.3906 16.3909 13.3602C16.6194 12.9592 16.75 12.4951 16.75 12.0005C16.75 11.5059 16.6194 11.0418 16.3909 10.6408C16.4405 10.6104 16.4874 10.5738 16.5303 10.5308L17.5303 9.53082C17.8232 9.23793 17.8232 8.76305 17.5303 8.47016C17.2374 8.17727 16.7626 8.17727 16.4697 8.47016L15.4697 9.47016C15.4267 9.51311 15.3901 9.55998 15.3597 9.60961C14.9587 9.38106 14.4946 9.25049 14 9.25049C13.5054 9.25049 13.0413 9.38106 12.6403 9.60961C12.6099 9.55998 12.5733 9.51311 12.5303 9.47016L11.5303 8.47016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSafeCircle as IconComponent).keywords = [
  "safe",
  "circle",
  "secure",
  "safe and sound",
  "safety",
  "risk-free",
  "dependable",
  "harmless",
  "innocuous",
  "off the hook",
  "sound",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconSafeCircle as IconComponent;
