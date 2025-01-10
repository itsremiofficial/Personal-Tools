import { FC } from "react";

const IconSpeaker: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C18.6699 22 19.6699 21 19.6699 18V6C19.6699 3 18.6699 2 15.6699 2H9.66992C6.66992 2 5.66992 3 5.66992 6V18C5.66992 21 6.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 18C14.3268 18 15.6699 16.6569 15.6699 15C15.6699 13.3431 14.3268 12 12.6699 12C11.0131 12 9.66992 13.3431 9.66992 15C9.66992 16.6569 11.0131 18 12.6699 18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 9C13.4983 9 14.1699 8.32843 14.1699 7.5C14.1699 6.67157 13.4983 6 12.6699 6C11.8415 6 11.1699 6.67157 11.1699 7.5C11.1699 8.32843 11.8415 9 12.6699 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M12.6699 18C14.3268 18 15.6699 16.6569 15.6699 15C15.6699 13.3431 14.3268 12 12.6699 12C11.0131 12 9.66992 13.3431 9.66992 15C9.66992 16.6569 11.0131 18 12.6699 18Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 9C13.4983 9 14.1699 8.32843 14.1699 7.5C14.1699 6.67157 13.4983 6 12.6699 6C11.8415 6 11.1699 6.67157 11.1699 7.5C11.1699 8.32843 11.8415 9 12.6699 9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 1.62012H9.67004C6.48004 1.62012 5.29004 2.81012 5.29004 6.00012V18.0001C5.29004 21.1901 6.48004 22.3801 9.67004 22.3801H15.67C18.86 22.3801 20.05 21.1901 20.05 18.0001V6.00012C20.05 2.81012 18.86 1.62012 15.67 1.62012ZM12.67 6.00012C13.5 6.00012 14.17 6.67012 14.17 7.50012C14.17 8.33012 13.5 9.00012 12.67 9.00012C11.84 9.00012 11.17 8.33012 11.17 7.50012C11.17 6.67012 11.84 6.00012 12.67 6.00012ZM12.67 18.0001C11.01 18.0001 9.67004 16.6601 9.67004 15.0001C9.67004 13.3401 11.01 12.0001 12.67 12.0001C14.33 12.0001 15.67 13.3401 15.67 15.0001C15.67 16.6601 14.33 18.0001 12.67 18.0001Z"
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
            d="M15.67 1.62012H9.67004C6.48004 1.62012 5.29004 2.81012 5.29004 6.00012V18.0001C5.29004 21.1901 6.48004 22.3801 9.67004 22.3801H15.67C18.86 22.3801 20.05 21.1901 20.05 18.0001V6.00012C20.05 2.81012 18.86 1.62012 15.67 1.62012ZM12.67 6.00012C13.5 6.00012 14.17 6.67012 14.17 7.50012C14.17 8.33012 13.5 9.00012 12.67 9.00012C11.84 9.00012 11.17 8.33012 11.17 7.50012C11.17 6.67012 11.84 6.00012 12.67 6.00012ZM12.67 18.0001C11.01 18.0001 9.67004 16.6601 9.67004 15.0001C9.67004 13.3401 11.01 12.0001 12.67 12.0001C14.33 12.0001 15.67 13.3401 15.67 15.0001C15.67 16.6601 14.33 18.0001 12.67 18.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpeaker as IconComponent).keywords = [
  "speaker",
  "talker",
  "loudspeaker",
  "loudspeaker system",
  "speaker system",
  "speaker unit",
  "speaking",
  "orator",
  "speak",
  "speech",
];

export default IconSpeaker as IconComponent;
