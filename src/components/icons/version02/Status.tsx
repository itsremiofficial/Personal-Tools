import { FC } from "react";

const IconStatus: FC<IconProps> = ({
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
            d="M3.12012 14.97C4.19012 18.41 7.07012 21.06 10.6501 21.79"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.71973 10.98C3.22973 5.93 7.48972 2 12.6697 2C17.8497 2 22.1097 5.94 22.6197 10.98"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6797 21.8C18.2497 21.07 21.1197 18.45 22.2097 15.02"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10.9098 14.74C10.5798 14.41 10.1398 14.22 9.66979 14.22H4.58979C3.97979 14.22 3.41979 14.53 3.09979 15.05C2.77979 15.56 2.74979 16.17 3.00979 16.71C4.23979 19.23 6.45979 21.21 9.09979 22.14C9.27979 22.2 9.47979 22.24 9.66979 22.24C10.0198 22.24 10.3698 22.13 10.6698 21.92C11.1398 21.59 11.4198 21.05 11.4198 20.48L11.4298 15.98C11.4198 15.51 11.2398 15.07 10.9098 14.74Z"
            fill="currentColor"
          />
          <path
            d="M23.1498 9.6C22.0298 4.68 17.7198 1.25 12.6698 1.25C7.61985 1.25 3.30985 4.68 2.18985 9.6C2.06985 10.12 2.18985 10.65 2.52985 11.07C2.86985 11.49 3.36985 11.73 3.90985 11.73H21.4398C21.9799 11.73 22.4798 11.49 22.8198 11.07C23.1498 10.65 23.2698 10.11 23.1498 9.6Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.2299 15.1C21.9099 14.58 21.3499 14.26 20.7299 14.26L15.6699 14.25C15.1999 14.25 14.7599 14.43 14.4299 14.76C14.0999 15.09 13.9199 15.53 13.9199 16L13.9299 20.48C13.9299 21.05 14.2099 21.59 14.6799 21.92C14.9799 22.13 15.3299 22.24 15.6799 22.24C15.8699 22.24 16.0599 22.21 16.2399 22.14C18.8599 21.22 21.0799 19.25 22.3099 16.76C22.5699 16.23 22.5399 15.61 22.2299 15.1Z"
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
            d="M9.66979 14.22H4.58979C3.97979 14.22 3.41979 14.53 3.09979 15.05C2.77979 15.56 2.74979 16.17 3.00979 16.71C4.23979 19.23 6.45979 21.21 9.09979 22.14C9.27979 22.2 9.47979 22.24 9.66979 22.24C10.0198 22.24 10.3698 22.13 10.6698 21.92C11.1398 21.59 11.4198 21.05 11.4198 20.48L11.4298 15.98C11.4298 15.51 11.2498 15.07 10.9198 14.74C10.5798 14.41 10.1398 14.22 9.66979 14.22Z"
            fill="currentColor"
          />
          <path
            d="M23.1498 9.6C22.0298 4.68 17.7198 1.25 12.6698 1.25C7.61985 1.25 3.30985 4.68 2.18985 9.6C2.06985 10.12 2.18985 10.65 2.52985 11.07C2.86985 11.49 3.36985 11.73 3.90985 11.73H21.4398C21.9799 11.73 22.4798 11.49 22.8198 11.07C23.1498 10.65 23.2698 10.11 23.1498 9.6Z"
            fill="currentColor"
          />
          <path
            d="M20.7299 14.27L15.6699 14.26C15.1999 14.26 14.7599 14.44 14.4299 14.77C14.0999 15.1 13.9199 15.54 13.9199 16.01L13.9299 20.49C13.9299 21.06 14.2099 21.6 14.6799 21.93C14.9799 22.14 15.3299 22.25 15.6799 22.25C15.8699 22.25 16.0599 22.22 16.2399 22.15C18.8599 21.23 21.0799 19.26 22.3099 16.77C22.5699 16.24 22.5399 15.62 22.2299 15.12C21.8999 14.58 21.3399 14.27 20.7299 14.27Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStatus as IconComponent).keywords = [
  "status",
  "position",
  "condition",
  "belonging",
  "shape",
  "ranking",
  "rating",
  "establish",
  "availability",
  "item",
];

export default IconStatus as IconComponent;
