import { FC } from "react";

const IconQuoteDown: FC<IconProps> = ({
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
            d="M22.672 11.65H16.872C15.342 11.65 14.292 10.49 14.292 9.07001V5.84998C14.292 4.42998 15.342 3.27002 16.872 3.27002H20.092C21.512 3.27002 22.672 4.42998 22.672 5.84998V11.65Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6716 11.65C22.6716 17.7 21.5416 18.7 18.1416 20.72"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.0421 11.65H5.24211C3.71211 11.65 2.66211 10.49 2.66211 9.07001V5.84998C2.66211 4.42998 3.71211 3.27002 5.24211 3.27002H8.47211C9.89211 3.27002 11.0521 4.42998 11.0521 5.84998V11.65"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.0417 11.65C11.0417 17.7 9.91172 18.7 6.51172 20.72"
              stroke="currentColor"
              strokeWidth={width}
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
            d="M16.582 12.3699H21.272C21.192 17.0399 20.272 17.8099 17.402 19.5099C17.072 19.7099 16.962 20.1299 17.162 20.4699C17.362 20.7999 17.782 20.91 18.122 20.71C21.502 18.71 22.682 17.4899 22.682 11.6699V6.27997C22.682 4.56997 21.292 3.18994 19.592 3.18994H16.592C14.832 3.18994 13.502 4.51997 13.502 6.27997V9.27997C13.492 11.04 14.822 12.3699 16.582 12.3699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.7617 12.3699H10.4517C10.3717 17.0399 9.4517 17.8099 6.5817 19.5099C6.2517 19.7099 6.1417 20.1299 6.3417 20.4699C6.5417 20.7999 6.9617 20.91 7.3017 20.71C10.6817 18.71 11.8617 17.4899 11.8617 11.6699V6.27997C11.8617 4.56997 10.4717 3.18994 8.7717 3.18994H5.7717C4.0117 3.18994 2.6817 4.51997 2.6817 6.27997V9.27997C2.6717 11.04 4.0017 12.3699 5.7617 12.3699Z"
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
            d="M16.582 12.3699H21.272C21.192 17.0399 20.272 17.8099 17.402 19.5099C17.072 19.7099 16.962 20.1299 17.162 20.4699C17.362 20.7999 17.782 20.9099 18.122 20.7099C21.502 18.7099 22.682 17.4899 22.682 11.6699V6.27994C22.682 4.56994 21.292 3.18994 19.592 3.18994H16.592C14.832 3.18994 13.502 4.51994 13.502 6.27994V9.27994C13.492 11.0399 14.822 12.3699 16.582 12.3699Z"
            fill="currentColor"
          />
          <path
            d="M5.76188 12.3699H10.4519C10.3719 17.0399 9.45187 17.8099 6.58187 19.5099C6.25187 19.7099 6.14188 20.1299 6.34188 20.4699C6.54188 20.7999 6.96187 20.9099 7.30188 20.7099C10.6819 18.7099 11.8619 17.4899 11.8619 11.6699V6.27994C11.8619 4.56994 10.4719 3.18994 8.77188 3.18994H5.77187C4.00187 3.18994 2.67188 4.51994 2.67188 6.27994V9.27994C2.67188 11.0399 4.00188 12.3699 5.76188 12.3699Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteDown as IconComponent).keywords = [
  "quote",
  "down",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconQuoteDown as IconComponent;
