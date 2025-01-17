import { FC } from "react";

const IconBezier: FC<IconProps> = ({
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
            d="M3.66992 9C4.77449 9 5.66992 8.10457 5.66992 7C5.66992 5.89543 4.77449 5 3.66992 5C2.56535 5 1.66992 5.89543 1.66992 7C1.66992 8.10457 2.56535 9 3.66992 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6699 9C22.7745 9 23.6699 8.10457 23.6699 7C23.6699 5.89543 22.7745 5 21.6699 5C20.5654 5 19.6699 5.89543 19.6699 7C19.6699 8.10457 20.5654 9 21.6699 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6699 7H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 7H5.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.16992 16.5V18.5C8.16992 19.11 7.79992 19.64 7.27992 19.86C7.08992 19.95 6.88992 20 6.66992 20H4.66992C3.83992 20 3.16992 19.33 3.16992 18.5V16.5C3.16992 15.67 3.83992 15 4.66992 15H6.66992C7.49992 15 8.16992 15.67 8.16992 16.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.1699 16.5V18.5C22.1699 19.33 21.4999 20 20.6699 20H18.6699C18.4499 20 18.2499 19.95 18.0599 19.86C17.5399 19.64 17.1699 19.11 17.1699 18.5V16.5C17.1699 15.67 17.8399 15 18.6699 15H20.6699C21.4999 15 22.1699 15.67 22.1699 16.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6699 5.5V8.5C15.6699 9.32 14.9899 10 14.1699 10H11.1699C10.3499 10 9.66992 9.32 9.66992 8.5V5.5C9.66992 4.68 10.3499 4 11.1699 4H14.1699C14.9899 4 15.6699 4.68 15.6699 5.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 7.72998C18.0399 8.92998 19.6699 11.51 19.6699 14.5C19.6699 14.67 19.6599 14.83 19.6399 15"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.69992 15C5.67992 14.83 5.66992 14.67 5.66992 14.5C5.66992 11.51 7.29992 8.92998 9.66992 7.72998"
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
            d="M3.66992 9C4.77449 9 5.66992 8.10457 5.66992 7C5.66992 5.89543 4.77449 5 3.66992 5C2.56535 5 1.66992 5.89543 1.66992 7C1.66992 8.10457 2.56535 9 3.66992 9Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 9C22.7745 9 23.6699 8.10457 23.6699 7C23.6699 5.89543 22.7745 5 21.6699 5C20.5654 5 19.6699 5.89543 19.6699 7C19.6699 8.10457 20.5654 9 21.6699 9Z"
            fill="currentColor"
          />
          <path
            d="M8.16992 16.5V18.5C8.16992 19.11 7.79992 19.64 7.27992 19.86C7.08992 19.95 6.88992 20 6.66992 20H4.66992C3.83992 20 3.16992 19.33 3.16992 18.5V16.5C3.16992 15.67 3.83992 15 4.66992 15H6.66992C7.49992 15 8.16992 15.67 8.16992 16.5Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 16.5V18.5C22.1699 19.33 21.4999 20 20.6699 20H18.6699C18.4499 20 18.2499 19.95 18.0599 19.86C17.5399 19.64 17.1699 19.11 17.1699 18.5V16.5C17.1699 15.67 17.8399 15 18.6699 15H20.6699C21.4999 15 22.1699 15.67 22.1699 16.5Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 5.5V8.5C15.6699 9.32 14.9899 10 14.1699 10H11.1699C10.3499 10 9.66992 9.32 9.66992 8.5V5.5C9.66992 4.68 10.3499 4 11.1699 4H14.1699C14.9899 4 15.6699 4.68 15.6699 5.5Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.66992 6.25H5.66992C5.25992 6.25 4.91992 6.59 4.91992 7C4.91992 7.41 5.25992 7.75 5.66992 7.75H8.23992C6.18992 9.27 4.91992 11.79 4.91992 14.5C4.91992 14.7 4.92992 14.89 4.95992 15.09C4.99992 15.47 5.32992 15.75 5.69992 15.75C5.72992 15.75 5.75992 15.75 5.78992 15.75C6.19992 15.7 6.49992 15.33 6.44992 14.92C6.42992 14.78 6.42992 14.65 6.42992 14.51C6.42992 11.91 7.83992 9.50997 10.0199 8.40997C10.3899 8.21997 10.5399 7.77002 10.3499 7.40002C10.3399 7.39002 10.3299 7.38 10.3299 7.37C10.3899 7.26 10.4399 7.14001 10.4399 7.01001C10.4199 6.59001 10.0799 6.25 9.66992 6.25Z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.0999 7.75H19.6699C20.0799 7.75 20.4199 7.41 20.4199 7C20.4199 6.59 20.0799 6.25 19.6699 6.25H15.6699C15.2599 6.25 14.9199 6.59 14.9199 7C14.9199 7.13 14.9599 7.24999 15.0299 7.35999C15.0199 7.36999 15.0099 7.38001 15.0099 7.39001C14.8199 7.76001 14.9699 8.21002 15.3399 8.40002C17.5199 9.50002 18.9299 11.9 18.9299 14.5C18.9299 14.64 18.9199 14.77 18.9099 14.91C18.8599 15.32 19.1599 15.69 19.5699 15.74C19.5999 15.74 19.6299 15.74 19.6599 15.74C20.0399 15.74 20.3599 15.46 20.3999 15.08C20.4199 14.88 20.4399 14.69 20.4399 14.49C20.4199 11.79 19.1499 9.27 17.0999 7.75Z"
              fill="currentColor"
            />
          </g>
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
            d="M19.8099 7.72C20.0999 8.47 20.8199 9 21.6699 9C22.7699 9 23.6699 8.1 23.6699 7C23.6699 5.9 22.7699 5 21.6699 5C20.8199 5 20.0999 5.53 19.8099 6.28C19.7599 6.27 19.7199 6.25 19.6699 6.25H15.6699V5.5C15.6699 4.68 14.9899 4 14.1699 4H11.1699C10.3499 4 9.66992 4.68 9.66992 5.5V6.25H5.66992C5.61992 6.25 5.57992 6.27 5.52992 6.28C5.23992 5.53 4.51992 5 3.66992 5C2.56992 5 1.66992 5.9 1.66992 7C1.66992 8.1 2.56992 9 3.66992 9C4.51992 9 5.23992 8.47 5.52992 7.72C5.57992 7.73 5.61992 7.75 5.66992 7.75H8.23992C6.18992 9.27 4.91992 11.79 4.91992 14.5C4.91992 14.67 4.92992 14.83 4.94992 15H4.66992C3.83992 15 3.16992 15.67 3.16992 16.5V18.5C3.16992 19.33 3.83992 20 4.66992 20H6.66992C6.88992 20 7.08992 19.95 7.27992 19.86C7.79992 19.64 8.16992 19.11 8.16992 18.5V16.5C8.16992 15.67 7.49992 15 6.66992 15H6.43992C6.43992 14.97 6.44992 14.94 6.44992 14.91C6.42992 14.77 6.42992 14.64 6.42992 14.5C6.42992 12.03 7.69992 9.77 9.68992 8.6C9.72992 9.37 10.3799 10 11.1699 10H14.1699C14.9599 10 15.6099 9.37 15.6599 8.6C17.6499 9.77 18.9199 12.04 18.9199 14.5C18.9199 14.64 18.9099 14.77 18.8999 14.91C18.8999 14.94 18.9099 14.97 18.9099 15H18.6699C17.8399 15 17.1699 15.67 17.1699 16.5V18.5C17.1699 19.11 17.5399 19.64 18.0599 19.86C18.2499 19.95 18.4499 20 18.6699 20H20.6699C21.4999 20 22.1699 19.33 22.1699 18.5V16.5C22.1699 15.67 21.4999 15 20.6699 15H20.3899C20.4099 14.83 20.4199 14.67 20.4199 14.5C20.4199 11.79 19.1499 9.27 17.0999 7.75H19.6699C19.7199 7.75 19.7599 7.73 19.8099 7.72Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBezier as IconComponent).keywords = [
  "bezier",
  "nurbs",
  "polyline",
  "spline",
  "ellipse",
  "polygon",
  "polylines",
  "keyframes",
  "xform",
  "keyframe",
];

export default IconBezier as IconComponent;
