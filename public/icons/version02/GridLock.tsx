import { FC } from "react";

const IconGridLock: FC<IconProps> = ({
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
            d="M22.6699 11V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H10.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2.69922 8.5H22.6692"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.69922 15.5H12.6692"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17969 21.9897V2.00977"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1797 11.9897V2.00977"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M16.27 17.2V16.4C16.27 15.07 16.67 14 18.67 14C20.67 14 21.07 15.07 21.07 16.4V17.2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6699 22H16.6699C15.0699 22 14.6699 21.6 14.6699 20V19.2C14.6699 17.6 15.0699 17.2 16.6699 17.2H20.6699C22.2699 17.2 22.6699 17.6 22.6699 19.2V20C22.6699 21.6 22.2699 22 20.6699 22Z"
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
            d="M22.1997 17.31V17.15C22.1997 15.22 21.2197 14.25 19.2997 14.25C17.3797 14.25 16.3997 15.23 16.3997 17.15V17.31C15.3497 17.57 14.9297 18.29 14.9297 19.73V20.47C14.9297 22.32 15.6197 23 17.4597 23H21.1397C22.9897 23 23.6697 22.31 23.6697 20.47V19.73C23.6697 18.3 23.2497 17.57 22.1997 17.31ZM19.2897 15.63C20.5797 15.63 20.8097 16.12 20.8097 17.15V17.2H17.7697V17.15C17.7697 16.12 17.9997 15.63 19.2897 15.63Z"
            fill="currentColor"
          />
          <path
            d="M9.06012 2.16992V8.61993H2.6001V7.93994C2.6001 4.32994 4.75011 2.17993 8.36011 2.17993H9.06012V2.16992Z"
            fill="currentColor"
          />
          <path
            d="M22.4402 7.92993C22.4402 8.30993 22.1303 8.60992 21.7603 8.60992H16.0103V2.15991H16.6803C19.8603 2.16991 22.4402 4.74993 22.4402 7.92993Z"
            fill="currentColor"
          />
          <path
            d="M9.06036 15.5498V21.3098C9.06036 21.6898 8.75034 21.9898 8.38034 21.9898H8.37036C5.19036 21.9898 2.61035 19.4098 2.61035 16.2298V15.5498H9.06036Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.07034 8.60986H2.61035V15.5499H9.07034V8.60986Z"
            fill="currentColor"
          />
          <path
            d="M16 8.60986V14.5499C16 15.0999 15.55 15.5499 15 15.5499H9.06006V8.60986H16Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 2.16992H9.06006V8.61993H16V2.16992Z"
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
            d="M22.1997 17.31V17.15C22.1997 15.22 21.2197 14.25 19.2997 14.25C17.3797 14.25 16.3997 15.23 16.3997 17.15V17.31C15.3497 17.57 14.9297 18.29 14.9297 19.73V20.47C14.9297 22.32 15.6197 23 17.4597 23H21.1397C22.9897 23 23.6697 22.31 23.6697 20.47V19.73C23.6697 18.3 23.2497 17.57 22.1997 17.31ZM19.2897 15.63C20.5797 15.63 20.8097 16.12 20.8097 17.15V17.2H17.7697V17.15C17.7697 16.12 17.9997 15.63 19.2897 15.63Z"
            fill="currentColor"
          />
          <path
            d="M7.41675 2.06549C7.96661 1.99425 8.41992 2.45112 8.41992 3.00557V6.8C8.41992 7.35229 7.97221 7.8 7.41992 7.8H3.66992C3.11764 7.8 2.66173 7.35027 2.72859 6.80204C3.05625 4.11548 4.74179 2.41205 7.41675 2.06549Z"
            fill="currentColor"
          />
          <path
            d="M21.5999 7.8H17.9199C17.3676 7.8 16.9199 7.35228 16.9199 6.8V3.00625C16.9199 2.45153 17.3741 1.99459 17.9241 2.06633C20.5578 2.40978 22.2344 4.0681 22.5999 6.68C22.6799 7.27 22.1999 7.8 21.5999 7.8Z"
            fill="currentColor"
          />
          <path
            d="M7.41992 16.3C7.97221 16.3 8.41992 16.7478 8.41992 17.3V20.92C8.41992 21.52 7.88992 22 7.28992 21.92C4.7208 21.5378 3.1 19.8911 2.74365 17.3102C2.66744 16.7582 3.12543 16.3 3.68266 16.3H7.41992Z"
            fill="currentColor"
          />
          <path
            d="M8.41992 10.3C8.41992 9.74776 7.97221 9.30005 7.41992 9.30005H3.66992C3.11764 9.30005 2.66992 9.74776 2.66992 10.3V13.8C2.66992 14.3523 3.11764 14.8 3.66992 14.8H7.41992C7.97221 14.8 8.41992 14.3523 8.41992 13.8V10.3Z"
            fill="currentColor"
          />
          <path
            d="M15.4199 10.3C15.4199 9.74776 14.9722 9.30005 14.4199 9.30005H10.9199C10.3676 9.30005 9.91992 9.74776 9.91992 10.3V13.8C9.91992 14.3523 10.3676 14.8 10.9199 14.8H14.4199C14.9699 14.8 15.4199 14.35 15.4199 13.8V10.3Z"
            fill="currentColor"
          />
          <path
            d="M15.4199 3C15.4199 2.44771 14.9722 2 14.4199 2H10.9199C10.3676 2 9.91992 2.44772 9.91992 3V6.8C9.91992 7.35229 10.3676 7.8 10.9199 7.8H14.4199C14.9722 7.8 15.4199 7.35228 15.4199 6.8V3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGridLock as IconComponent).keywords = [
  "grid",
  "lock",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
];

export default IconGridLock as IconComponent;
