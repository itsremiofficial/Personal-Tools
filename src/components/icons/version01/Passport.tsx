import { FC } from "react";

const IconPassport: FC<IconProps> = ({
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
            d="M4 6.00049V19.0005C4 20.6573 5.34315 22.0005 7 22.0005H17C18.6569 22.0005 20 20.6573 20 19.0005V9.00049C20 7.34363 18.6569 6.00049 17 6.00049H4ZM4 6.00049V5.00049"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="13.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18 6.00051V6.75051H18.75V6.00051H18ZM15.7172 2.32663L15.6111 1.58417L15.7172 2.32663ZM4.91959 3.86914L4.81353 3.12668H4.81353L4.91959 3.86914ZM5.07107 6.75051H18V5.25051H5.07107V6.75051ZM18.75 6.00051V4.30653H17.25V6.00051H18.75ZM15.6111 1.58417L4.81353 3.12668L5.02566 4.6116L15.8232 3.06909L15.6111 1.58417ZM4.81353 3.12668C3.91638 3.25484 3.25 4.02319 3.25 4.92944H4.75C4.75 4.76966 4.86749 4.6342 5.02566 4.6116L4.81353 3.12668ZM18.75 4.30653C18.75 2.63302 17.2678 1.3475 15.6111 1.58417L15.8232 3.06909C16.5763 2.96151 17.25 3.54584 17.25 4.30653H18.75ZM5.07107 5.25051C4.89375 5.25051 4.75 5.10676 4.75 4.92944H3.25C3.25 5.93519 4.06532 6.75051 5.07107 6.75051V5.25051Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 19.0005H14"
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
            d="M9.75 13.0005C9.75 11.7578 10.7574 10.7505 12 10.7505C13.2426 10.7505 14.25 11.7578 14.25 13.0005C14.25 14.2431 13.2426 15.2505 12 15.2505C10.7574 15.2505 9.75 14.2431 9.75 13.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 18.6948V4.69482C4 5.24711 4.44772 5.69482 5 5.69482H17C18.6569 5.69482 20 7.03797 20 8.69482V18.6948C20 20.3517 18.6569 21.6948 17 21.6948H7C5.34315 21.6948 4 20.3517 4 18.6948ZM8.25 13.0005C8.25 10.9294 9.92893 9.25049 12 9.25049C14.0711 9.25049 15.75 10.9294 15.75 13.0005C15.75 15.0716 14.0711 16.7505 12 16.7505C9.92893 16.7505 8.25 15.0716 8.25 13.0005ZM9.25 19.0005C9.25 18.5863 9.58579 18.2505 10 18.2505H14C14.4142 18.2505 14.75 18.5863 14.75 19.0005C14.75 19.4147 14.4142 19.7505 14 19.7505H10C9.58579 19.7505 9.25 19.4147 9.25 19.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 4.00086V5.86553C17.6872 5.75498 17.3506 5.69482 17 5.69482H5C4.44772 5.69482 4 5.24711 4 4.69482V4.62378C4 4.09076 4.39193 3.63885 4.91959 3.56347L15.7172 2.02097C16.922 1.84884 18 2.78377 18 4.00086Z"
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
            d="M5 5.00049C5 4.59383 4.75727 4.24387 4.40879 4.08759C4.55271 3.97423 4.72712 3.89663 4.91959 3.86914L15.7172 2.32663C16.922 2.15451 18 3.08943 18 4.30653V5.12651C17.6804 5.04424 17.3453 5.00049 17 5.00049H5Z"
            fill="currentColor"
          />
          <path
            d="M9.75 13.0005C9.75 11.7578 10.7574 10.7505 12 10.7505C13.2426 10.7505 14.25 11.7578 14.25 13.0005C14.25 14.2431 13.2426 15.2505 12 15.2505C10.7574 15.2505 9.75 14.2431 9.75 13.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 6.17119C19.1652 6.58303 20 7.69427 20 9.00049V19.0005C20 20.6573 18.6569 22.0005 17 22.0005H7C5.34315 22.0005 4 20.6573 4 19.0005V5.00049C4 5.18263 4.0487 5.3534 4.13378 5.50049C4.30669 5.79939 4.62986 6.00049 5 6.00049H17C17.3506 6.00049 17.6872 6.06064 18 6.17119ZM12 9.25049C9.92893 9.25049 8.25 10.9294 8.25 13.0005C8.25 15.0716 9.92893 16.7505 12 16.7505C14.0711 16.7505 15.75 15.0716 15.75 13.0005C15.75 10.9294 14.0711 9.25049 12 9.25049ZM10 18.2505C9.58579 18.2505 9.25 18.5863 9.25 19.0005C9.25 19.4147 9.58579 19.7505 10 19.7505H14C14.4142 19.7505 14.75 19.4147 14.75 19.0005C14.75 18.5863 14.4142 18.2505 14 18.2505H10Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPassport as IconComponent).keywords = [
  "passport",
  "pass",
  "e-passport",
  "laissez-passer",
  "carnet",
  "ticket",
  "travel",
  "document",
  "authorisation",
  "booklet",
];

export default IconPassport as IconComponent;
