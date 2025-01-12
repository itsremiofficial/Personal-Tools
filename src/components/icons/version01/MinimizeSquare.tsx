import { FC } from "react";

const IconMinimizeSquare: FC<IconProps> = ({
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
            d="M20 4L14 10M14 10H17.75M14 10V6.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 20L10 14M10 14H6.25M10 14V17.75"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M19.9517 2.98755C20.1616 3.12613 20.3553 3.28415 20.5355 3.46435C20.7157 3.64455 20.8738 3.83826 21.0123 4.04821L15.8107 9.24988H17.75C18.1642 9.24988 18.5 9.58567 18.5 9.99988C18.5 10.4141 18.1642 10.7499 17.75 10.7499H14C13.5858 10.7499 13.25 10.4141 13.25 9.99988V6.24988C13.25 5.83567 13.5858 5.49988 14 5.49988C14.4142 5.49988 14.75 5.83567 14.75 6.24988V8.18922L19.9517 2.98755Z"
            fill="currentColor"
          />
          <path
            d="M4.04833 21.0123C3.83838 20.8738 3.64467 20.7157 3.46447 20.5355C3.28428 20.3553 3.12625 20.1616 2.98767 19.9517L8.18935 14.75H6.25001C5.83579 14.75 5.50001 14.4142 5.50001 14C5.50001 13.5858 5.83579 13.25 6.25001 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V17.75C10.75 18.1642 10.4142 18.5 10 18.5C9.58579 18.5 9.25001 18.1642 9.25001 17.75V15.8107L4.04833 21.0123Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.134 2 18.4553 2 19.9517 2.98767L14.75 8.18934V6.25C14.75 5.83579 14.4142 5.5 14 5.5C13.5858 5.5 13.25 5.83579 13.25 6.25V10C13.25 10.4142 13.5858 10.75 14 10.75H17.75C18.1642 10.75 18.5 10.4142 18.5 10C18.5 9.58579 18.1642 9.25 17.75 9.25H15.8107L21.0123 4.04832C22 5.54466 22 7.866 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.866 22 5.54466 22 4.04833 21.0123L9.25 15.8107V17.75C9.25 18.1642 9.58579 18.5 10 18.5C10.4142 18.5 10.75 18.1642 10.75 17.75V14C10.75 13.5858 10.4142 13.25 10 13.25H6.25C5.83579 13.25 5.5 13.5858 5.5 14C5.5 14.4142 5.83579 14.75 6.25 14.75H8.18934L2.98767 19.9517C2 18.4553 2 16.134 2 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMinimizeSquare as IconComponent).keywords = [
  "minimize",
  "square",
  "derogate",
  "belittle",
  "denigrate",
  "understate",
  "lessen",
  "reduced",
  "diminish",
  "lessening",
  "reduce",
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

export default IconMinimizeSquare as IconComponent;
