import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconUserCircle: FC<IconProps> = ({
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="9.00049"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.9691 20.0005C17.81 17.109 16.9247 15.0005 11.9999 15.0005C7.07521 15.0005 6.18991 17.109 6.03076 20.0005"
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
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M16.807 19.0117C15.4398 19.9509 13.7841 20.5005 12 20.5005C10.2159 20.5005 8.56023 19.9508 7.193 19.0116C6.58915 18.5968 6.33109 17.8066 6.68219 17.1637C7.41001 15.8307 8.90973 15.0005 12 15.0005C15.0903 15.0005 16.59 15.8307 17.3178 17.1637C17.6689 17.8067 17.4108 18.5969 16.807 19.0117Z"
            fill="currentColor"
          />
          <path
            d="M12 12.0005C13.6569 12.0005 15 10.6573 15 9.00049C15 7.34363 13.6569 6.00049 12 6.00049C10.3432 6.00049 9.00004 7.34363 9.00004 9.00049C9.00004 10.6573 10.3432 12.0005 12 12.0005Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005ZM15 9.00049C15 10.6573 13.6569 12.0005 12 12.0005C10.3431 12.0005 9 10.6573 9 9.00049C9 7.34363 10.3431 6.00049 12 6.00049C13.6569 6.00049 15 7.34363 15 9.00049ZM12 20.5005C13.784 20.5005 15.4397 19.9509 16.8069 19.0117C17.4108 18.5969 17.6688 17.8067 17.3178 17.1637C16.59 15.8307 15.0902 15.0005 11.9999 15.0005C8.90969 15.0005 7.40997 15.8307 6.68214 17.1637C6.33105 17.8066 6.5891 18.5968 7.19296 19.0116C8.56018 19.9508 10.2159 20.5005 12 20.5005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserCircle as IconComponentType).keywords = [
  "user",
  "circle",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
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

export default IconUserCircle as IconComponentType;
