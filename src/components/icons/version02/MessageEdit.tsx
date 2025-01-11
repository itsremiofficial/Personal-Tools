import { FC } from "react";

const IconMessageEdit: FC<IconProps> = ({
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
            d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M13.5797 7.84015L8.38971 13.0302C8.18971 13.2302 7.99972 13.6202 7.95972 13.9002L7.67972 15.8802C7.57972 16.6002 8.07972 17.1002 8.79972 17.0002L10.7797 16.7202C11.0597 16.6802 11.4497 16.4902 11.6497 16.2902L16.8397 11.1002C17.7297 10.2102 18.1597 9.17015 16.8397 7.85015C15.5197 6.52015 14.4797 6.94015 13.5797 7.84015Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8398 8.58008C13.2798 10.1501 14.5098 11.3901 16.0898 11.8301"
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
            d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z"
            fill="currentColor"
          />
          <path
            d="M17.2203 7.45995C15.9603 6.19995 14.7403 6.16995 13.4503 7.45995L12.6603 8.24995C12.5903 8.31995 12.5704 8.41995 12.5904 8.50995C13.0804 10.2299 14.4503 11.5999 16.1703 12.0899C16.1903 12.0999 16.2203 12.0999 16.2503 12.0999C16.3203 12.0999 16.3903 12.0699 16.4403 12.0199L17.2203 11.2399C17.8603 10.5999 18.1703 9.98994 18.1703 9.36995C18.1703 8.71994 17.8603 8.09995 17.2203 7.45995Z"
            fill="currentColor"
          />
          <path
            d="M15.0103 12.6699C14.8203 12.5799 14.6403 12.4899 14.4703 12.3799C14.3303 12.2999 14.1904 12.2099 14.0604 12.1099C13.9504 12.0399 13.8203 11.9399 13.6903 11.8299C13.6703 11.8199 13.6304 11.7899 13.5804 11.7299C13.3704 11.5499 13.1303 11.3099 12.9103 11.0599C12.8903 11.0499 12.8603 10.9999 12.8203 10.9399C12.7503 10.8599 12.6504 10.7299 12.5504 10.5899C12.4704 10.4899 12.3804 10.3499 12.3004 10.2099C12.2004 10.0399 12.1004 9.85987 12.0204 9.67987C11.9304 9.47987 11.8603 9.29987 11.7903 9.11987L8.02036 12.8899C7.77036 13.1399 7.54036 13.5999 7.49036 13.9399L7.20035 16.0199C7.13035 16.4599 7.26034 16.8699 7.53034 17.1499C7.76034 17.3799 8.08036 17.4999 8.43036 17.4999C8.51036 17.4999 8.58034 17.4899 8.66034 17.4799L10.7404 17.1899C11.0804 17.1399 11.5403 16.9099 11.7903 16.6599L15.5604 12.8899C15.3804 12.8199 15.2003 12.7499 15.0103 12.6699Z"
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
            d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2ZM11.7799 16.66C11.5299 16.91 11.0699 17.14 10.7299 17.19L8.64992 17.48C8.56992 17.49 8.48992 17.5 8.41992 17.5C8.06992 17.5 7.74992 17.38 7.51992 17.15C7.23992 16.87 7.11992 16.46 7.18992 16.02L7.47992 13.94C7.52992 13.6 7.75992 13.13 8.00992 12.89L11.7799 9.12C11.8399 9.3 11.9199 9.48 12.0099 9.68C12.0999 9.86 12.1899 10.04 12.2899 10.21C12.3699 10.35 12.4599 10.49 12.5399 10.59C12.6399 10.74 12.7399 10.87 12.8099 10.94C12.8499 11 12.8899 11.04 12.8999 11.06C13.1199 11.31 13.3499 11.55 13.5699 11.73C13.6299 11.79 13.6699 11.82 13.6799 11.83C13.8099 11.93 13.9299 12.04 14.0499 12.11C14.1799 12.21 14.3199 12.3 14.4599 12.38C14.6299 12.48 14.8099 12.58 14.9999 12.67C15.1899 12.76 15.3699 12.83 15.5499 12.89L11.7799 16.66ZM17.2199 11.23L16.4399 12.01C16.3899 12.06 16.3199 12.09 16.2499 12.09C16.2299 12.09 16.1899 12.09 16.1699 12.08C14.4499 11.59 13.0799 10.22 12.5899 8.5C12.5599 8.41 12.5899 8.31 12.6599 8.24L13.4499 7.45C14.7399 6.16 15.9599 6.19 17.2199 7.45C17.8599 8.09 18.1799 8.71 18.1699 9.35C18.1699 9.98 17.8599 10.59 17.2199 11.23Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageEdit as IconComponent).keywords = [
  "message",
  "edit",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring",
];

export default IconMessageEdit as IconComponent;