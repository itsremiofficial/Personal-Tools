import { FC } from "react";

const IconGolf: FC<IconProps> = ({
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
          <ellipse
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="18.5005"
            rx="10"
            ry="3.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 18.0005V2.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M11.9998 3.50049L17.4221 6.21163C18.9832 6.99218 19.7638 7.38245 19.7638 8.00049C19.7638 8.61853 18.9832 9.0088 17.4221 9.78935L11.9998 12.5005"
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
          <ellipse
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="18.5005"
            rx="10"
            ry="3.5"
            fill="currentColor"
          />
          <path
            d="M11.9999 1.25049C12.4141 1.25049 12.7499 1.58627 12.7499 2.00049V3.03696L17.7577 5.5408L17.8117 5.5678C18.5461 5.93496 19.1721 6.24792 19.6078 6.55198C20.0495 6.86031 20.514 7.30798 20.514 8.00049C20.514 8.69299 20.0495 9.14067 19.6078 9.449C19.1721 9.75306 18.5461 10.066 17.8117 10.4332L12.7499 12.964V18.0005C12.7499 18.4147 12.4141 18.7505 11.9999 18.7505C11.5857 18.7505 11.2499 18.4147 11.2499 18.0005V12.5167C11.2497 12.5063 11.2497 12.4958 11.2499 12.4854V3.51558C11.2497 3.50515 11.2497 3.4947 11.2499 3.48424V2.00049C11.2499 1.58627 11.5857 1.25049 11.9999 1.25049Z"
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
            d="M12.0002 1.25049C12.4144 1.25049 12.7502 1.58627 12.7502 2.00049V3.03696L17.7579 5.5408L17.8119 5.5678C18.5464 5.93496 19.1724 6.24792 19.608 6.55198C20.0498 6.86031 20.5142 7.30798 20.5142 8.00049C20.5142 8.69299 20.0498 9.14067 19.608 9.449C19.1724 9.75306 18.5464 10.066 17.8119 10.4332L12.7502 12.964V18.0005C12.7502 18.4147 12.4144 18.7505 12.0002 18.7505C11.586 18.7505 11.2502 18.4147 11.2502 18.0005V12.5167C11.2499 12.5063 11.2499 12.4958 11.2502 12.4854V3.51558C11.2499 3.50515 11.2499 3.4947 11.2502 3.48424V2.00049C11.2502 1.58627 11.586 1.25049 12.0002 1.25049Z"
            fill="currentColor"
          />
          <path
            d="M12 22.0005C17.5228 22.0005 22 20.4335 22 18.5005C22 16.8383 18.6894 15.4467 14.2502 15.0895V18.0005C14.2502 19.2431 13.2428 20.2505 12.0002 20.2505C10.7575 20.2505 9.75016 19.2431 9.75016 18.0005V15.0894C5.31073 15.4467 2 16.8383 2 18.5005C2 20.4335 6.47715 22.0005 12 22.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.0002 1.25049C11.586 1.25049 11.2502 1.58627 11.2502 2.00049V3.48424C11.2499 3.4947 11.2499 3.50515 11.2502 3.51558V12.4854C11.2499 12.4958 11.2499 12.5063 11.2502 12.5167V15.0102V18.0005C11.2502 18.4147 11.586 18.7505 12.0002 18.7505C12.4144 18.7505 12.7502 18.4147 12.7502 18.0005V15.0102V12.964L17.8119 10.4332C18.5464 10.066 19.1724 9.75306 19.608 9.449C20.0498 9.14067 20.5142 8.69299 20.5142 8.00049C20.5142 7.30798 20.0498 6.86031 19.608 6.55198C19.1724 6.24792 18.5464 5.93496 17.8119 5.5678L12.7502 3.03696V2.00049C12.7502 1.58627 12.4144 1.25049 12.0002 1.25049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGolf as IconComponent).keywords = [
  "golf",
  "golf game",
  "putt",
  "football",
  "stadium",
  "driving",
  "trajectory",
  "surge",
  "ball",
  "wave",
];

export default IconGolf as IconComponent;
