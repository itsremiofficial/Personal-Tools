import { FC } from "react";

const IconPasswordMinimalisticInput: FC<IconProps> = ({
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
            d="M3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H12L15 19.9996C18.1143 19.9904 19.7653 19.892 20.8284 18.8289C22 17.6573 22 15.7717 22 12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.7653 4.10897 18.1143 4.01053 15 4.00142L12 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 12.0005C9 12.5528 8.55228 13.0005 8 13.0005C7.44772 13.0005 7 12.5528 7 12.0005C7 11.4482 7.44772 11.0005 8 11.0005C8.55228 11.0005 9 11.4482 9 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M13 12.0005C13 12.5528 12.5523 13.0005 12 13.0005C11.4477 13.0005 11 12.5528 11 12.0005C11 11.4482 11.4477 11.0005 12 11.0005C12.5523 11.0005 13 11.4482 13 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M15 2.00049V22.0005"
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
            d="M3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005L15.75 19.9949C18.3859 19.9673 19.8541 19.8033 20.8284 18.8289C22 17.6574 22 15.7717 22 12.0005C22 8.22928 22 6.34366 20.8284 5.17209C19.8541 4.19776 18.3738 4.02811 15.7379 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289Z"
            fill="currentColor"
          />
          <path
            d="M13 12.0005C13 11.4482 12.5523 11.0005 12 11.0005C11.4477 11.0005 11 11.4482 11 12.0005C11 12.5528 11.4477 13.0005 12 13.0005C12.5523 13.0005 13 12.5528 13 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M8 13.0005C8.55228 13.0005 9 12.5528 9 12.0005C9 11.4482 8.55228 11.0005 8 11.0005C7.44772 11.0005 7 11.4482 7 12.0005C7 12.5528 7.44772 13.0005 8 13.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 1.25049C15.4142 1.25049 15.75 1.58627 15.75 2.00049V4.00608V19.9949V22.0005C15.75 22.4147 15.4142 22.7505 15 22.7505C14.5858 22.7505 14.25 22.4147 14.25 22.0005V2.00049C14.25 1.58627 14.5858 1.25049 15 1.25049Z"
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
            d="M15.75 2.00049C15.75 1.58627 15.4142 1.25049 15 1.25049C14.5858 1.25049 14.25 1.58627 14.25 2.00049V22.0005C14.25 22.4147 14.5858 22.7505 15 22.7505C15.4142 22.7505 15.75 22.4147 15.75 22.0005V19.9949C18.3859 19.9673 19.8541 19.8032 20.8284 18.8289C22 17.6573 22 15.7717 22 12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.8541 4.19773 18.3859 4.0337 15.75 4.00608V2.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H13V12.0005V4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289ZM13 12.0005C13 11.4482 12.5523 11.0005 12 11.0005C11.4477 11.0005 11 11.4482 11 12.0005C11 12.5528 11.4477 13.0005 12 13.0005C12.5523 13.0005 13 12.5528 13 12.0005ZM9 12.0005C9 12.5528 8.55228 13.0005 8 13.0005C7.44772 13.0005 7 12.5528 7 12.0005C7 11.4482 7.44772 11.0005 8 11.0005C8.55228 11.0005 9 11.4482 9 12.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPasswordMinimalisticInput as IconComponent).keywords = [
  "password",
  "minimalistic",
  "input",
  "countersign",
  "watchword",
  "word",
  "parole",
  "passcode",
  "username",
  "passphrase",
  "codeword",
  "cleartext",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
  "stimulus",
  "stimulation",
  "stimulant",
  "input signal",
  "production",
  "guidance",
  "supply",
  "entrance",
  "entry",
];

export default IconPasswordMinimalisticInput as IconComponent;
