import { FC } from "react";

const IconEndCallRounded: FC<IconProps> = ({
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
            d="M3.08289 10.5032C2.27659 11.373 2 12.6127 2 13.8504C2 15.9102 3.78158 17.415 5.6072 16.8972L6.9469 16.5173C8.15591 16.1744 9 14.9826 9 13.6185M20.9171 10.5032C21.7234 11.373 22 12.6127 22 13.8504C22 15.9102 20.2184 17.415 18.3928 16.8972L17.0531 16.5173C15.8441 16.1744 15 14.9826 15 13.6185"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.08301 10.5032C4.44035 9.03888 7.19334 7 12.0001 7C16.8069 7 19.5599 9.03889 20.9172 10.5032"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185"
            stroke="currentColor"
            strokeWidth={width}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.9469 16.5173L5.6072 16.8972C3.78158 17.415 2 15.9102 2 13.8504C2 12.6127 2.27659 11.373 3.08289 10.5032C4.1279 9.37579 6.00015 7.90786 9 7.29199V13.6185C9 14.9826 8.15591 16.1743 6.9469 16.5173ZM15 13.6185C15 14.9826 15.8441 16.1743 17.0531 16.5173L18.3928 16.8972C20.2184 17.415 22 15.9102 22 13.8504C22 12.6127 21.7234 11.373 20.9171 10.5032C19.8721 9.3758 17.9998 7.90786 15 7.29199V13.6185Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185V7.29203C14.1034 7.10796 13.1061 7 12 7C10.8939 7 9.8966 7.10796 9 7.29203V13.6185Z"
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
            d="M5.6072 16.8973L6.9469 16.5173C8.15591 16.1744 9 14.9826 9 13.6185C9 13.6185 9 13.6185 9 13.6185C9 13.6185 9.00001 11.9639 12 11.9639C14.9999 11.9639 15 13.6184 15 13.6185C15 13.6185 15 13.6185 15 13.6185C15 14.9826 15.8441 16.1744 17.0531 16.5173L18.3928 16.8973C20.2184 17.4151 22 15.9102 22 13.8504C22 12.6127 21.7234 11.373 20.9171 10.5032C19.5598 9.03889 16.8068 7 12 7C7.19322 7 4.44023 9.03888 3.08289 10.5032C2.27659 11.373 2 12.6127 2 13.8504C2 15.9102 3.78158 17.4151 5.6072 16.8973Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEndCallRounded as IconComponent).keywords = [
  "end",
  "call",
  "rounded",
  "finish",
  "conclusion",
  "close",
  "remainder",
  "remnant",
  "closing",
  "cease",
  "oddment",
  "terminate",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconEndCallRounded as IconComponent;
