import { FC } from "react";

const IconKeyMinimalisticSquare3: FC<IconProps> = ({
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11 12.0005C11 13.3812 9.88071 14.5005 8.5 14.5005C7.11929 14.5005 6 13.3812 6 12.0005C6 10.6198 7.11929 9.50049 8.5 9.50049C9.88071 9.50049 11 10.6198 11 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11 12.0005H15.5M15.5 12.0005H17C17.5523 12.0005 18 12.4482 18 13.0005V14.0005M15.5 12.0005V13.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.663 11.2505C11.3245 9.81714 10.0368 8.75049 8.5 8.75049C6.70507 8.75049 5.25 10.2056 5.25 12.0005C5.25 13.7954 6.70507 15.2505 8.5 15.2505C10.0368 15.2505 11.3245 14.1838 11.663 12.7505H14.75V13.5005C14.75 13.9147 15.0858 14.2505 15.5 14.2505C15.9142 14.2505 16.25 13.9147 16.25 13.5005V12.7505H17C17.1381 12.7505 17.25 12.8624 17.25 13.0005V14.0005C17.25 14.4147 17.5858 14.7505 18 14.7505C18.4142 14.7505 18.75 14.4147 18.75 14.0005V13.0005C18.75 12.034 17.9665 11.2505 17 11.2505H11.663ZM8.5 10.2505C7.5335 10.2505 6.75 11.034 6.75 12.0005C6.75 12.967 7.5335 13.7505 8.5 13.7505C9.4665 13.7505 10.25 12.967 10.25 12.0005C10.25 11.034 9.4665 10.2505 8.5 10.2505Z"
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
            d="M8.5 10.2505C7.5335 10.2505 6.75 11.034 6.75 12.0005C6.75 12.967 7.5335 13.7505 8.5 13.7505C9.4665 13.7505 10.25 12.967 10.25 12.0005C10.25 11.034 9.4665 10.2505 8.5 10.2505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005ZM11.663 11.2505C11.3245 9.81714 10.0368 8.75049 8.5 8.75049C6.70507 8.75049 5.25 10.2056 5.25 12.0005C5.25 13.7954 6.70507 15.2505 8.5 15.2505C10.0368 15.2505 11.3245 14.1838 11.663 12.7505H14.75V13.5005C14.75 13.9147 15.0858 14.2505 15.5 14.2505C15.9142 14.2505 16.25 13.9147 16.25 13.5005V12.7505H17C17.1381 12.7505 17.25 12.8624 17.25 13.0005V14.0005C17.25 14.4147 17.5858 14.7505 18 14.7505C18.4142 14.7505 18.75 14.4147 18.75 14.0005V13.0005C18.75 12.034 17.9665 11.2505 17 11.2505H11.663Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyMinimalisticSquare3 as IconComponent).keywords = [
  "key",
  "minimalistic",
  "square",
  "3",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconKeyMinimalisticSquare3 as IconComponent;
