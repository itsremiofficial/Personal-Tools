import { FC } from "react";

const IconSetting5: FC<IconProps> = ({
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
            d="M19.6699 7V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22V17"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 7V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M5.66992 22V11"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.66992 11H7.66992"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 22V11"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.6699 11H21.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 13V2"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 13H14.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M19.1798 1.7998C18.6798 1.7998 18.2798 2.1998 18.2798 2.6998V7.3498C18.2798 7.8498 18.6798 8.2498 19.1798 8.2498C19.6798 8.2498 20.0798 7.8498 20.0798 7.3498V2.6998C20.0798 2.1998 19.6798 1.7998 19.1798 1.7998Z"
            fill="currentColor"
          />
          <path
            d="M12.67 15.75C12.17 15.75 11.77 16.15 11.77 16.65V21.3C11.77 21.8 12.17 22.2 12.67 22.2C13.17 22.2 13.57 21.8 13.57 21.3V16.65C13.57 16.16 13.17 15.75 12.67 15.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.15977 1.7998C5.65977 1.7998 5.25977 2.1998 5.25977 2.6998V7.3498C5.25977 7.8498 5.65977 8.2498 6.15977 8.2498C6.65977 8.2498 7.05977 7.8498 7.05977 7.3498V2.6998C7.05977 2.1998 6.64977 1.7998 6.15977 1.7998Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.0199 10.1699H4.2999C3.7999 10.1699 3.3999 10.5699 3.3999 11.0699C3.3999 11.5699 3.7999 11.9699 4.2999 11.9699H5.2599V21.2999C5.2599 21.7999 5.6599 22.1999 6.1599 22.1999C6.6599 22.1999 7.0599 21.7999 7.0599 21.2999V11.9699H8.0199C8.5199 11.9699 8.9199 11.5699 8.9199 11.0699C8.9199 10.5699 8.5099 10.1699 8.0199 10.1699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.0399 10.1699H17.3199C16.8199 10.1699 16.4199 10.5699 16.4199 11.0699C16.4199 11.5699 16.8199 11.9699 17.3199 11.9699H18.2799V21.2999C18.2799 21.7999 18.6799 22.1999 19.1799 22.1999C19.6799 22.1999 20.0799 21.7999 20.0799 21.2999V11.9699H21.0399C21.5399 11.9699 21.9399 11.5699 21.9399 11.0699C21.9399 10.5699 21.5399 10.1699 21.0399 10.1699Z"
            fill="currentColor"
          />
          <path
            d="M14.5302 12.0298H13.5702V2.6998C13.5702 2.1998 13.1702 1.7998 12.6702 1.7998C12.1702 1.7998 11.7702 2.1998 11.7702 2.6998V12.0298H10.8102C10.3102 12.0298 9.91016 12.4298 9.91016 12.9298C9.91016 13.4298 10.3102 13.8298 10.8102 13.8298H14.5302C15.0302 13.8298 15.4302 13.4298 15.4302 12.9298C15.4302 12.4298 15.0302 12.0298 14.5302 12.0298Z"
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
            d="M19.1798 8.2498C19.6798 8.2498 20.0798 7.8498 20.0798 7.3498V2.6998C20.0798 2.1998 19.6798 1.7998 19.1798 1.7998C18.6798 1.7998 18.2798 2.1998 18.2798 2.6998V7.3498C18.2798 7.8398 18.6898 8.2498 19.1798 8.2498Z"
            fill="currentColor"
          />
          <path
            d="M12.67 15.75C12.17 15.75 11.77 16.15 11.77 16.65V21.3C11.77 21.8 12.17 22.2 12.67 22.2C13.17 22.2 13.57 21.8 13.57 21.3V16.65C13.57 16.16 13.17 15.75 12.67 15.75Z"
            fill="currentColor"
          />
          <path
            d="M6.15977 8.2498C6.65977 8.2498 7.05977 7.8498 7.05977 7.3498V2.6998C7.05977 2.1998 6.65977 1.7998 6.15977 1.7998C5.65977 1.7998 5.25977 2.1998 5.25977 2.6998V7.3498C5.25977 7.8398 5.65977 8.2498 6.15977 8.2498Z"
            fill="currentColor"
          />
          <path
            d="M8.0199 10.1699H4.2999C3.7999 10.1699 3.3999 10.5699 3.3999 11.0699C3.3999 11.5699 3.7999 11.9699 4.2999 11.9699H5.2599V21.2999C5.2599 21.7999 5.6599 22.1999 6.1599 22.1999C6.6599 22.1999 7.0599 21.7999 7.0599 21.2999V11.9699H8.0199C8.5199 11.9699 8.9199 11.5699 8.9199 11.0699C8.9199 10.5699 8.5099 10.1699 8.0199 10.1699Z"
            fill="currentColor"
          />
          <path
            d="M21.0399 10.1699H17.3199C16.8199 10.1699 16.4199 10.5699 16.4199 11.0699C16.4199 11.5699 16.8199 11.9699 17.3199 11.9699H18.2799V21.2999C18.2799 21.7999 18.6799 22.1999 19.1799 22.1999C19.6799 22.1999 20.0799 21.7999 20.0799 21.2999V11.9699H21.0399C21.5399 11.9699 21.9399 11.5699 21.9399 11.0699C21.9399 10.5699 21.5399 10.1699 21.0399 10.1699Z"
            fill="currentColor"
          />
          <path
            d="M14.5302 12.0298H13.5702V2.6998C13.5702 2.1998 13.1702 1.7998 12.6702 1.7998C12.1702 1.7998 11.7702 2.1998 11.7702 2.6998V12.0298H10.8102C10.3102 12.0298 9.91016 12.4298 9.91016 12.9298C9.91016 13.4298 10.3102 13.8298 10.8102 13.8298H14.5302C15.0302 13.8298 15.4302 13.4298 15.4302 12.9298C15.4302 12.4298 15.0302 12.0298 14.5302 12.0298Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting5 as IconComponent).keywords = [
  "setting",
  "5",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour",
];

export default IconSetting5 as IconComponent;
