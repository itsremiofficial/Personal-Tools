import { FC } from "react";

const IconUserHandUp: FC<IconProps> = ({
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
            d="M20 21.5005L19.3505 15.9799C19.1506 14.2809 17.7107 13.0005 16 13.0005H8C5 13.0005 3.06717 10.2692 2.38197 7.52835L2 6.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13.0005V18.0005C8 19.8861 8 20.8289 8.58579 21.4147C9.17157 22.0005 10.1144 22.0005 12 22.0005C13.8856 22.0005 14.8284 22.0005 15.4142 21.4147C16 20.8289 16 19.8861 16 18.0005V13.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.9" : "1"}
            cx="12"
            cy="6.00049"
            r="4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.81803 5.27281C2.21988 5.17235 2.62708 5.41667 2.72754 5.81852L3.10951 7.34639C3.71932 9.78565 5.64101 11.6769 8.08446 12.2504H15.9999C18.091 12.2504 19.851 13.8155 20.0953 15.8922L20.7448 21.4128C20.7932 21.8242 20.4989 22.1969 20.0876 22.2453C19.6762 22.2937 19.3035 21.9994 19.2551 21.5881L18.6056 16.0675C18.4501 14.7462 17.3303 13.7504 15.9999 13.7504H7.9176L7.83724 13.7326C4.80202 13.0581 2.4084 10.7266 1.65429 7.71019L1.27233 6.18232C1.17186 5.78048 1.41619 5.37328 1.81803 5.27281Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13.7505V18.0005C8 19.8861 8 20.8289 8.58579 21.4147C9.17157 22.0005 10.1144 22.0005 12 22.0005C13.8856 22.0005 14.8284 22.0005 15.4142 21.4147C16 20.8289 16 19.8861 16 18.0005V13.7505H8Z"
            fill="currentColor"
          />
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
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
            d="M12 10.0005C14.2091 10.0005 16 8.20963 16 6.00049C16 3.79135 14.2091 2.00049 12 2.00049C9.79086 2.00049 8 3.79135 8 6.00049C8 8.20963 9.79086 10.0005 12 10.0005Z"
            fill="currentColor"
          />
          <path
            d="M2.72778 5.81852C2.62732 5.41667 2.22012 5.17235 1.81828 5.27281C1.41643 5.37328 1.17211 5.78048 1.27257 6.18232L1.65454 7.71019C2.3593 10.5292 4.49604 12.75 7.25018 13.5791L7.25018 18.0524C7.25015 18.9509 7.25012 19.7001 7.33009 20.2949C7.41449 20.9227 7.60016 21.4895 8.05563 21.945C8.5111 22.4004 9.0779 22.5861 9.7057 22.6705C10.3005 22.7505 11.0497 22.7505 11.9482 22.7504H12.0522C12.9507 22.7505 13.6999 22.7505 14.2947 22.6705C14.9225 22.5861 15.4892 22.4004 15.9447 21.945C16.4002 21.4895 16.5859 20.9227 16.6703 20.2949C16.7502 19.7001 16.7502 18.9509 16.7502 18.0524L16.7502 13.8594C17.7313 14.1519 18.4808 15.0043 18.6058 16.0675L19.2553 21.5881C19.3037 21.9994 19.6764 22.2937 20.0878 22.2453C20.4992 22.1969 20.7934 21.8242 20.745 21.4128L20.0956 15.8922C19.8512 13.8155 18.0912 12.2504 16.0002 12.2504H8.0847C5.64125 11.6769 3.71957 9.78565 3.10975 7.34639L2.72778 5.81852Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserHandUp as IconComponent).keywords = [
  "user",
  "hand",
  "up",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "manus",
  "paw",
  "hired hand",
  "mitt",
  "mauler",
  "hook",
  "reach",
  "handwriting",
  "script",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconUserHandUp as IconComponent;
