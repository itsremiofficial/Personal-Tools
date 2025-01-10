import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconScissorsSquare: FC<IconProps> = ({
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
            d="M14.5008 17.1L8 6M18 16.2C18 17.1941 17.1605 18 16.125 18C15.0895 18 14.25 17.1941 14.25 16.2C14.25 15.2059 15.0895 14.4 16.125 14.4C17.1605 14.4 18 15.2059 18 16.2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9.49916 17.1L16 6M6 16.2C6 17.1941 6.83947 18 7.875 18C8.91053 18 9.75 17.1941 9.75 16.2C9.75 15.2059 8.91053 14.4 7.875 14.4C6.83947 14.4 6 15.2059 6 16.2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            d="M16.379 5.35294C16.0216 5.14361 15.5622 5.26367 15.3528 5.62109L12.0001 11.3457L8.64742 5.62109C8.43809 5.26367 7.97864 5.14361 7.62121 5.35294C7.26379 5.56227 7.14373 6.02172 7.35306 6.37915L11.131 12.8298L10.0195 14.7277C9.53906 14.0703 8.74784 13.6501 7.875 13.6501C6.4544 13.6501 5.25 14.7632 5.25 16.2001C5.25 17.637 6.4544 18.7501 7.875 18.7501C8.86733 18.7501 9.75417 18.207 10.1987 17.3898L12.0001 14.3139L13.8015 17.3898C14.2461 18.207 15.1329 18.7501 16.1252 18.7501C17.5458 18.7501 18.7502 17.637 18.7502 16.2001C18.7502 14.7632 17.5458 13.6501 16.1252 13.6501C15.2524 13.6501 14.4612 14.0703 13.9808 14.7277L12.8693 12.8298L16.6472 6.37915C16.8565 6.02172 16.7365 5.56227 16.379 5.35294Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16.379 5.35294C16.0216 5.14361 15.5622 5.26367 15.3528 5.62109L12.0001 11.3457L8.64742 5.62109C8.43809 5.26367 7.97864 5.14361 7.62121 5.35294C7.26379 5.56227 7.14373 6.02172 7.35306 6.37915L11.131 12.8298L10.0195 14.7277C9.53906 14.0703 8.74784 13.6501 7.875 13.6501C6.4544 13.6501 5.25 14.7632 5.25 16.2001C5.25 17.637 6.4544 18.7501 7.875 18.7501C8.86733 18.7501 9.75417 18.207 10.1987 17.3898L12.0001 14.3139L13.8015 17.3898C14.2461 18.207 15.1329 18.7501 16.1252 18.7501C17.5458 18.7501 18.7502 17.637 18.7502 16.2001C18.7502 14.7632 17.5458 13.6501 16.1252 13.6501C15.2524 13.6501 14.4612 14.0703 13.9808 14.7277L12.8693 12.8298L16.6472 6.37915C16.8565 6.02172 16.7365 5.56227 16.379 5.35294Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScissorsSquare as IconComponentType).keywords = [
  "scissors",
  "square",
  "pair of scissors",
  "snips",
  "shears",
  "manicure",
  "charlotte",
  "chisels",
  "snippers",
  "tweezers",
  "knife",
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

export default IconScissorsSquare as IconComponentType;
