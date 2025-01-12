import { FC } from "react";

const IconMessages2: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1398 16.83L19.5298 19.99C19.6298 20.82 18.7398 21.4 18.0298 20.97L13.8398 18.48C13.3798 18.48 12.9298 18.45 12.4898 18.39C13.2298 17.52 13.6698 16.42 13.6698 15.23C13.6698 12.39 11.2098 10.09 8.16977 10.09C7.00977 10.09 5.93977 10.42 5.04977 11C5.01977 10.75 5.00977 10.5 5.00977 10.24C5.00977 5.68999 8.95977 2 13.8398 2C18.7198 2 22.6698 5.68999 22.6698 10.24C22.6698 12.94 21.2798 15.33 19.1398 16.83Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6699 15.23C13.6699 16.42 13.2299 17.5201 12.4899 18.3901C11.4999 19.5901 9.92992 20.36 8.16992 20.36L5.55992 21.91C5.11992 22.18 4.55992 21.81 4.61992 21.3L4.86992 19.3301C3.52992 18.4001 2.66992 16.91 2.66992 15.23C2.66992 13.47 3.60993 11.9201 5.04993 11.0001C5.93993 10.4201 7.00992 10.0901 8.16992 10.0901C11.2099 10.0901 13.6699 12.39 13.6699 15.23Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1398 16.83L19.5298 19.99C19.6298 20.82 18.7398 21.4 18.0298 20.97L13.8398 18.48C13.3798 18.48 12.9298 18.45 12.4898 18.39C13.2298 17.52 13.6698 16.42 13.6698 15.23C13.6698 12.39 11.2098 10.09 8.16977 10.09C7.00977 10.09 5.93977 10.42 5.04977 11C5.01977 10.75 5.00977 10.5 5.00977 10.24C5.00977 5.68999 8.95977 2 13.8398 2C18.7198 2 22.6698 5.68999 22.6698 10.24C22.6698 12.94 21.2798 15.33 19.1398 16.83Z"
            fill="currentColor"
          />
          <path
            d="M13.6699 15.23C13.6699 16.42 13.2299 17.5201 12.4899 18.3901C11.4999 19.5901 9.92992 20.36 8.16992 20.36L5.55992 21.91C5.11992 22.18 4.55992 21.81 4.61992 21.3L4.86992 19.3301C3.52992 18.4001 2.66992 16.91 2.66992 15.23C2.66992 13.47 3.60993 11.9201 5.04993 11.0001C5.93993 10.4201 7.00992 10.0901 8.16992 10.0901C11.2099 10.0901 13.6699 12.39 13.6699 15.23Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1403 16.83L19.5303 19.99C19.6303 20.82 18.7403 21.4 18.0303 20.97L14.5703 18.91C14.3303 18.77 14.2703 18.47 14.4003 18.23C14.9003 17.31 15.1703 16.27 15.1703 15.23C15.1703 11.57 12.0303 8.59 8.1703 8.59C7.3803 8.59 6.6103 8.71 5.8903 8.95C5.5203 9.07 5.1603 8.73 5.2503 8.35C6.1603 4.71 9.6603 2 13.8403 2C18.7203 2 22.6703 5.69 22.6703 10.24C22.6703 12.94 21.2803 15.33 19.1403 16.83Z"
            fill="currentColor"
          />
          <path
            d="M13.6699 15.2301C13.6699 16.4201 13.2299 17.5201 12.4899 18.3901C11.4999 19.5901 9.92992 20.3601 8.16992 20.3601L5.55992 21.9101C5.11992 22.1801 4.55992 21.8101 4.61992 21.3001L4.86992 19.3301C3.52992 18.4001 2.66992 16.9101 2.66992 15.2301C2.66992 13.4701 3.60992 11.9201 5.04992 11.0001C5.93992 10.4201 7.00992 10.0901 8.16992 10.0901C11.2099 10.0901 13.6699 12.3901 13.6699 15.2301Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessages2 as IconComponent).keywords = [
  "messages",
  "2",
  "subject matter",
  "substance",
  "content",
  "mails",
  "things",
  "communication",
  "news",
  "correspondence",
  "copy",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconMessages2 as IconComponent;
