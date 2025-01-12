import { FC } from "react";

const IconSocket: FC<IconProps> = ({
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
            d="M2 12.0001C2 7.28608 2 4.92905 3.46447 3.46459C4.92893 2.00012 7.28595 2.00012 12 2.00012C16.714 2.00012 19.0711 2.00012 20.5355 3.46459C22 4.92905 22 7.28608 22 12.0001C22 16.7142 22 19.0712 20.5355 20.5357C19.0711 22.0001 16.714 22.0001 12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5357C2 19.0712 2 16.7142 2 12.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="12.0001"
            r="6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.0001V16.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 7.50012V6.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle cx="14" cy="12.0001" r="1" fill="currentColor" />
          <circle cx="10" cy="12.0001" r="1" fill="currentColor" />
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
            d="M3.46447 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.46447 20.5357C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5357C22 19.0712 22 16.7142 22 12.0001C22 7.28608 22 4.92905 20.5355 3.46459C19.0711 2.00012 16.714 2.00012 12 2.00012C7.28595 2.00012 4.92893 2.00012 3.46447 3.46459Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 7.50006V6.80323V5.29126C7.87504 5.66434 5.25 8.52565 5.25 12.0001C5.25 15.4745 7.87504 18.3358 11.25 18.7089V17.1969V16.5C11.25 16.0858 11.5858 15.75 12 15.75C12.4142 15.75 12.75 16.0858 12.75 16.5V17.1969V18.7089C16.125 18.3358 18.75 15.4745 18.75 12.0001C18.75 8.52565 16.125 5.66434 12.75 5.29126V6.80323V7.50006C12.75 7.91428 12.4142 8.25006 12 8.25006C11.5858 8.25006 11.25 7.91428 11.25 7.50006ZM15 12.0001C15 12.5523 14.5523 13.0001 14 13.0001C13.4477 13.0001 13 12.5523 13 12.0001C13 11.4478 13.4477 11.0001 14 11.0001C14.5523 11.0001 15 11.4478 15 12.0001ZM10 13.0001C10.5523 13.0001 11 12.5523 11 12.0001C11 11.4478 10.5523 11.0001 10 11.0001C9.44772 11.0001 9 11.4478 9 12.0001C9 12.5523 9.44772 13.0001 10 13.0001Z"
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
            d="M6.75 12.0001C6.75 9.35527 8.70578 7.16721 11.25 6.80329V7.50012C11.25 7.91434 11.5858 8.25012 12 8.25012C12.4142 8.25012 12.75 7.91434 12.75 7.50012V6.80329C15.2942 7.16721 17.25 9.35527 17.25 12.0001C17.25 14.645 15.2942 16.833 12.75 17.197V16.5001C12.75 16.0858 12.4142 15.7501 12 15.7501C11.5858 15.7501 11.25 16.0858 11.25 16.5001V17.197C8.70578 16.833 6.75 14.645 6.75 12.0001ZM15 12.0001C15 12.5524 14.5523 13.0001 14 13.0001C13.4477 13.0001 13 12.5524 13 12.0001C13 11.4478 13.4477 11.0001 14 11.0001C14.5523 11.0001 15 11.4478 15 12.0001ZM10 13.0001C10.5523 13.0001 11 12.5524 11 12.0001C11 11.4478 10.5523 11.0001 10 11.0001C9.44772 11.0001 9 11.4478 9 12.0001C9 12.5524 9.44772 13.0001 10 13.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.46447 20.5357C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5357C22 19.0712 22 16.7142 22 12.0001C22 7.28608 22 4.92905 20.5355 3.46459C19.0711 2.00012 16.714 2.00012 12 2.00012C7.28595 2.00012 4.92893 2.00012 3.46447 3.46459ZM12 5.25012C8.27208 5.25012 5.25 8.2722 5.25 12.0001C5.25 15.728 8.27208 18.7501 12 18.7501C15.7279 18.7501 18.75 15.728 18.75 12.0001C18.75 8.2722 15.7279 5.25012 12 5.25012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSocket as IconComponent).keywords = [
  "socket",
  "bulb",
  "plug",
  "switch",
  "bushing",
  "groove",
  "key",
  "slot",
  "hose",
  "ferrule",
];

export default IconSocket as IconComponent;
