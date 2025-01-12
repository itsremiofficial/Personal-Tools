import { FC } from "react";

const IconLocationMinus: FC<IconProps> = ({
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
            d="M9.91992 11H15.4199"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M4.28963 8.49C6.25963 -0.169998 19.0896 -0.159997 21.0496 8.5C22.1996 13.58 19.0396 17.88 16.2696 20.54C14.2596 22.48 11.0796 22.48 9.05963 20.54C6.29963 17.88 3.13963 13.57 4.28963 8.49Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7Z"
            fill="currentColor"
          />
          <path
            d="M15.4199 11.75H9.91992C9.50992 11.75 9.16992 11.41 9.16992 11C9.16992 10.59 9.50992 10.25 9.91992 10.25H15.4199C15.8299 10.25 16.1699 10.59 16.1699 11C16.1699 11.41 15.8299 11.75 15.4199 11.75Z"
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
          <g clipPath="url(#clip0_12_64822)">
            <path
              d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7ZM15.4197 11.75H9.91967C9.50967 11.75 9.16967 11.41 9.16967 11C9.16967 10.59 9.50967 10.25 9.91967 10.25H15.4197C15.8297 10.25 16.1697 10.59 16.1697 11C16.1697 11.41 15.8297 11.75 15.4197 11.75Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationMinus as IconComponent).keywords = [
  "location",
  "minus",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
];

export default IconLocationMinus as IconComponent;
