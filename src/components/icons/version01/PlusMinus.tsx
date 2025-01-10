import { FC } from "react";

const IconPlusMinus: FC<IconProps> = ({
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
            d="M3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495M3.46447 20.536C2 19.0716 2 16.7145 2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495M3.46447 20.536L20.5355 3.46495"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 17.0005H13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.5 8.00051H8M8 8.00051L5.5 8.00051M8 8.00051L8 5.50049M8 8.00051L8 10.5005"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12.0005C2 16.7145 2 19.0716 3.46447 20.536L20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M8 4.75049C8.41421 4.75049 8.75 5.08627 8.75 5.50049L8.75 7.25051H10.5C10.9142 7.25051 11.25 7.5863 11.25 8.00051C11.25 8.41472 10.9142 8.75051 10.5 8.75051H8.75L8.75 10.5005C8.75 10.9147 8.41421 11.2505 8 11.2505C7.58579 11.2505 7.25 10.9147 7.25 10.5005L7.25 8.75051H5.5C5.08579 8.75051 4.75 8.41472 4.75 8.00051C4.75 7.5863 5.08579 7.25051 5.5 7.25051H7.25V5.50049C7.25 5.08627 7.58579 4.75049 8 4.75049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 22.0004C7.28584 22.0004 4.92882 22.0004 3.46436 20.5359L20.5354 3.46484C21.9999 4.92931 21.9999 7.28633 21.9999 12.0004C21.9999 16.7144 21.9999 19.0714 20.5354 20.5359C19.071 22.0004 16.7139 22.0004 11.9999 22.0004ZM18 17.7505C18.4142 17.7505 18.75 17.4147 18.75 17.0005C18.75 16.5863 18.4142 16.2505 18 16.2505H13C12.5858 16.2505 12.25 16.5863 12.25 17.0005C12.25 17.4147 12.5858 17.7505 13 17.7505H18Z"
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
            d="M22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.866 22.0005 5.54466 22.0005 4.04833 21.0128L21.0123 4.04881C22 5.54515 22 7.86649 22 12.0005ZM18.75 17.0005C18.75 17.4147 18.4142 17.7505 18 17.7505H13C12.5858 17.7505 12.25 17.4147 12.25 17.0005C12.25 16.5863 12.5858 16.2505 13 16.2505H18C18.4142 16.2505 18.75 16.5863 18.75 17.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.1345 2 18.4558 2.98767 19.9522L19.9517 2.98815C18.4553 2.00049 16.134 2.00049 12 2.00049ZM8 4.75045C8.41421 4.75045 8.75 5.08623 8.75 5.50045L8.75 7.25047H10.5C10.9142 7.25047 11.25 7.58625 11.25 8.00047C11.25 8.41468 10.9142 8.75047 10.5 8.75047H8.75L8.75 10.5004C8.75 10.9147 8.41421 11.2504 8 11.2504C7.58579 11.2504 7.25 10.9147 7.25 10.5004L7.25 8.75047H5.5C5.08579 8.75047 4.75 8.41468 4.75 8.00047C4.75 7.58625 5.08579 7.25047 5.5 7.25047H7.25V5.50045C7.25 5.08623 7.58579 4.75045 8 4.75045Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlusMinus as IconComponent).keywords = [
  "plus",
  "minus",
  "addition",
  "summation",
  "advantageous",
  "positive",
  "asset",
  "nonnegative",
  "additional",
  "add",
  "along",
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

export default IconPlusMinus as IconComponent;
