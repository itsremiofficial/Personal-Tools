import { FC } from "react";

const IconPlugCircle: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M10.0128 21.9673L9.86335 22.7023H9.86335L10.0128 21.9673ZM16.0342 20.4846C15.6622 20.6668 15.5084 21.116 15.6906 21.488C15.8728 21.86 16.3221 22.0138 16.6941 21.8316L16.0342 20.4846ZM10.1622 21.2324C5.93808 20.3736 2.75 16.6065 2.75 12.0832H1.25C1.25 17.3253 4.94577 21.7025 9.86335 22.7023L10.1622 21.2324ZM2.75 12.0832C2.75 6.92275 6.89721 2.75 12 2.75V1.25C6.05709 1.25 1.25 6.10606 1.25 12.0832H2.75ZM12 2.75C17.1028 2.75 21.25 6.92275 21.25 12.0832H22.75C22.75 6.10606 17.9429 1.25 12 1.25V2.75ZM12.75 20.1498V15.1082H11.25V20.1498H12.75ZM21.25 12.0832C21.25 15.7797 19.1208 18.9726 16.0342 20.4846L16.6941 21.8316C20.2798 20.0752 22.75 16.369 22.75 12.0832H21.25ZM9.86335 22.7023C11.5214 23.0394 12.75 21.618 12.75 20.1498H11.25C11.25 20.909 10.6697 21.3355 10.1622 21.2324L9.86335 22.7023Z"
            fill="currentColor"
          />
          <path
            d="M9 11.8C9 11.3582 9.35817 11 9.8 11H14.2C14.6418 11 15 11.3582 15 11.8V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11.8Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.5 11V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.5 11V9"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139L22 12.0069L22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12L2 12.0069L2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2503 21.9723C6.07986 21.5891 2.00357 17.2744 2 12.0069C2.00374 6.47961 6.47946 2 12 2C17.5205 2 21.9963 6.47961 22 12.0069C21.9964 17.2744 17.9201 21.5891 12.7497 21.9723L12.7497 22Z"
              fill="currentColor"
            />
            <path
              d="M11.2503 21.9723C11.4978 21.9907 11.7478 22 12 22C12.2522 22 12.5022 21.9907 12.7497 21.9723C17.9201 21.5891 21.9964 17.2744 22 12.0069C21.9963 6.47961 17.5205 2 12 2C6.47946 2 2.00374 6.47961 2 12.0069C2.00357 17.2744 6.07986 21.5891 11.2503 21.9723Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M8.5 12.5147C8.5 14.1925 9.67737 15.595 11.2499 15.9389L11.2503 21.9724C11.4978 21.9908 11.7478 22.0001 12 22.0001C12.2522 22.0001 12.5022 21.9908 12.7497 21.9724L12.7499 15.9389C14.3226 15.5951 15.5 14.1926 15.5 12.5147V12.014C15.5 11.4609 15.0523 11.0126 14.5 11.0126H14.25V9.00983C14.25 8.59504 13.9142 8.25879 13.5 8.25879C13.0858 8.25879 12.75 8.59504 12.75 9.00983V11.0126H11.25V9.00983C11.25 8.59504 10.9142 8.25879 10.5 8.25879C10.0858 8.25879 9.75 8.59504 9.75 9.00983V11.0126H9.5C8.94772 11.0126 8.5 11.4609 8.5 12.014V12.5147Z"
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
            d="M12 2C6.47715 2 2 6.48336 2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2499 15.9387C9.67737 15.5949 8.5 14.1924 8.5 12.5146V12.0139C8.5 11.4608 8.94772 11.0125 9.5 11.0125H9.75V9.0097C9.75 8.59491 10.0858 8.25866 10.5 8.25866C10.9142 8.25866 11.25 8.59491 11.25 9.0097V11.0125H12.75V9.0097C12.75 8.59491 13.0858 8.25866 13.5 8.25866C13.9142 8.25866 14.25 8.59491 14.25 9.0097V11.0125H14.5C15.0523 11.0125 15.5 11.4608 15.5 12.0139V12.5146C15.5 14.1925 14.3226 15.595 12.7499 15.9388L12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139C22 6.48336 17.5228 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlugCircle as IconComponent).keywords = [
  "plug",
  "circle",
  "spark plug",
  "fireplug",
  "sparking plug",
  "fire hydrant",
  "stopper",
  "hack",
  "stopple",
  "stop up",
  "punch",
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

export default IconPlugCircle as IconComponent;
