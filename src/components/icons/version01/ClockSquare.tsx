import { FC } from "react";

const IconClockSquare: FC<IconProps> = ({
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
            d="M12 8.00049V12.0005L14.5 14.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7.25049C12.4142 7.25049 12.75 7.58627 12.75 8.00049V11.6898L15.0303 13.9702C15.3232 14.2631 15.3232 14.7379 15.0303 15.0308C14.7374 15.3237 14.2626 15.3237 13.9697 15.0308L11.4697 12.5308C11.329 12.3902 11.25 12.1994 11.25 12.0005V8.00049C11.25 7.58627 11.5858 7.25049 12 7.25049Z"
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
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM12.75 8.00049C12.75 7.58627 12.4142 7.25049 12 7.25049C11.5858 7.25049 11.25 7.58627 11.25 8.00049V12.0005C11.25 12.1994 11.329 12.3902 11.4697 12.5308L13.9697 15.0308C14.2626 15.3237 14.7374 15.3237 15.0303 15.0308C15.3232 14.7379 15.3232 14.2631 15.0303 13.9702L12.75 11.6898V8.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClockSquare as IconComponent).keywords = [
  "clock",
  "square",
  "time",
  "stopwatch",
  "watch",
  "impactor",
  "clockwork",
  "pendulum",
  "timer",
  "dial",
  "countdown",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconClockSquare as IconComponent;
