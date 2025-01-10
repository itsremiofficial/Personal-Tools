import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconToPIP: FC<IconProps> = ({
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
            d="M22 17.5V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H11H18"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11.5 11.5V8.5M11.5 11.5H8.5M11.5 11.5L7.5 7.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M13.9962 21H9.99625C9.60469 21 9.23346 21 8.88125 20.9987C5.84115 20.9874 4.21775 20.8784 3.16782 19.8284C3.10078 19.7614 3.03757 19.6904 2.97798 19.6153C2.13544 18.5939 2.01887 17.0574 2.00274 14.3804C2.00049 14.198 1.99901 14.0344 2.00079 13.8872C2.00015 13.6036 2.00015 13.3081 2.00015 13V11C2.00015 7.22876 2.00015 5.34315 3.17173 4.17157C4.3433 3 6.22892 3 10.0002 3H14.0002C17.7714 3 19.657 3 20.8286 4.17157C20.8956 4.23863 20.9589 4.30966 21.0185 4.38471C21.861 5.40615 21.9775 6.94261 21.9937 9.61959C21.9959 9.80203 21.9974 9.96561 21.9956 10.1128C21.9962 10.3964 21.9962 10.6919 21.9962 11V13C21.9962 16.7712 21.9962 18.6569 20.8247 19.8284C19.6531 21 17.7675 21 13.9962 21Z"
            fill="currentColor"
          />
          <path
            d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z"
            fill="currentColor"
          />
          <path
            d="M8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L9.68934 10.75H8.5C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25H11.5C11.9142 12.25 12.25 11.9142 12.25 11.5V8.5C12.25 8.08579 11.9142 7.75 11.5 7.75C11.0858 7.75 10.75 8.08579 10.75 8.5V9.68934L8.03033 6.96967Z"
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
            d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C21.7775 5.1206 21.9577 6.86626 21.992 9.49974C22.0042 10.4366 22.0102 10.905 21.7166 11.2025C21.4229 11.5 20.9486 11.5 20 11.5H17.5C14.6716 11.5 13.2574 11.5 12.3787 12.3787C11.5 13.2574 11.5 14.6716 11.5 17.5V19.5C11.5 19.9659 11.5 20.1989 11.4239 20.3827C11.3224 20.6277 11.1277 20.8224 10.8827 20.9239C10.6989 21 10.4659 21 10 21C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3ZM8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L9.68934 10.75H8.5C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25H11.5C11.9142 12.25 12.25 11.9142 12.25 11.5V8.5C12.25 8.08579 11.9142 7.75 11.5 7.75C11.0858 7.75 10.75 8.08579 10.75 8.5V9.68934L8.03033 6.96967Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconToPIP as IconComponentType).keywords = [
  "to",
  "square-toed",
  "pointed-toe",
  "pointy-toed",
  "squared-toe",
  "eap",
  "pae",
  "efp",
  "css",
  "tcs",
];

export default IconToPIP as IconComponentType;
