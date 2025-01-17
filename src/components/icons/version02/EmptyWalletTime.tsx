import { FC } from "react";

const IconEmptyWalletTime: FC<IconProps> = ({
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
            d="M18.7168 13.55C18.2968 13.96 18.0568 14.55 18.1168 15.18C18.2068 16.26 19.1968 17.05 20.2768 17.05H22.1768V18.24C22.1768 20.31 20.4868 22 18.4168 22H8.31676C9.14676 21.27 9.67676 20.2 9.67676 19C9.67676 16.79 7.88676 15 5.67676 15C4.73676 15 3.86676 15.33 3.17676 15.88V11.51C3.17676 9.44001 4.86675 7.75 6.93675 7.75H18.4168C20.4868 7.75 22.1768 9.44001 22.1768 11.51V12.95H20.1568C19.5968 12.95 19.0868 13.17 18.7168 13.55Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.17676 11.51V7.84002C3.17676 6.65002 3.90675 5.58997 5.01675 5.16997L12.9568 2.16997C14.1968 1.70997 15.5268 2.62 15.5268 3.95V7.74999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.2365 13.9699V16.03C23.2365 16.58 22.7965 17.0299 22.2365 17.0499H20.2765C19.1965 17.0499 18.2065 16.2599 18.1165 15.1799C18.0565 14.5499 18.2965 13.9599 18.7165 13.5499C19.0865 13.1699 19.5965 12.95 20.1565 12.95H22.2365C22.7965 12.97 23.2365 13.4199 23.2365 13.9699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.67676 12H14.6768"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67676 19C9.67676 20.2 9.14676 21.27 8.31676 22C7.60676 22.62 6.68676 23 5.67676 23C3.46676 23 1.67676 21.21 1.67676 19C1.67676 17.74 2.25676 16.61 3.17676 15.88C3.86676 15.33 4.73676 15 5.67676 15C7.88676 15 9.67676 16.79 9.67676 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.92676 17.75V19.25L4.67676 20"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            d="M5.67676 15C4.73676 15 3.86676 15.33 3.17676 15.88C2.25676 16.61 1.67676 17.74 1.67676 19C1.67676 21.21 3.46676 23 5.67676 23C6.68676 23 7.60676 22.62 8.31676 22C9.14676 21.27 9.67676 20.2 9.67676 19C9.67676 16.79 7.88676 15 5.67676 15ZM6.67676 19.25C6.67676 19.51 6.53676 19.76 6.31676 19.89L5.06676 20.64C4.94676 20.71 4.81676 20.75 4.67676 20.75C4.42676 20.75 4.17676 20.62 4.03676 20.39C3.82676 20.03 3.93675 19.57 4.29675 19.36L5.18675 18.83V17.75C5.18675 17.34 5.52675 17 5.93675 17C6.34675 17 6.68675 17.34 6.68675 17.75V19.25H6.67676Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.1568 12.95H22.1768V11.51C22.1768 9.44001 20.4868 7.75 18.4168 7.75H6.93675C4.86675 7.75 3.17676 9.44001 3.17676 11.51V15.88C3.86676 15.33 4.73676 15 5.67676 15C7.88676 15 9.67676 16.79 9.67676 19C9.67676 19.75 9.46676 20.46 9.09676 21.06C8.88676 21.42 8.61676 21.74 8.30676 22H18.4168C20.4868 22 22.1768 20.31 22.1768 18.24V17.05H20.2768C19.1968 17.05 18.2068 16.26 18.1168 15.18C18.0568 14.55 18.2968 13.96 18.7168 13.55C19.0868 13.17 19.5968 12.95 20.1568 12.95Z"
            fill="currentColor"
          />
          <path
            d="M15.5268 3.95V7.74999H6.93675C4.86675 7.74999 3.17676 9.44 3.17676 11.51V7.84002C3.17676 6.65002 3.90675 5.58997 5.01675 5.16997L12.9568 2.16997C14.1968 1.70997 15.5268 2.62 15.5268 3.95Z"
            fill="currentColor"
          />
          <path
            d="M23.2365 13.9699V16.03C23.2365 16.58 22.7965 17.0299 22.2365 17.0499H20.2765C19.1965 17.0499 18.2065 16.2599 18.1165 15.1799C18.0565 14.5499 18.2965 13.9599 18.7165 13.5499C19.0865 13.1699 19.5965 12.95 20.1565 12.95H22.2365C22.7965 12.97 23.2365 13.4199 23.2365 13.9699Z"
            fill="currentColor"
          />
          <path
            d="M14.6768 12.75H7.67676C7.26676 12.75 6.92676 12.41 6.92676 12C6.92676 11.59 7.26676 11.25 7.67676 11.25H14.6768C15.0868 11.25 15.4268 11.59 15.4268 12C15.4268 12.41 15.0868 12.75 14.6768 12.75Z"
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
            d="M5.67871 15C4.73871 15 3.86871 15.33 3.17871 15.88C2.25871 16.61 1.67871 17.74 1.67871 19C1.67871 21.21 3.46871 23 5.67871 23C6.68871 23 7.60871 22.62 8.31871 22C9.14871 21.27 9.67871 20.2 9.67871 19C9.67871 16.79 7.88871 15 5.67871 15ZM6.67871 19.25C6.67871 19.51 6.53871 19.76 6.31871 19.89L5.06871 20.64C4.94871 20.72 4.80871 20.75 4.67871 20.75C4.42871 20.75 4.17871 20.62 4.03871 20.39C3.82871 20.03 3.93871 19.57 4.29871 19.36L5.18871 18.83V17.75C5.17871 17.34 5.51871 17 5.92871 17C6.33871 17 6.67871 17.34 6.67871 17.75V19.25Z"
            fill="currentColor"
          />
          <path
            d="M15.5287 3.95005V7.75005H14.0287V3.95005C14.0287 3.68005 13.7887 3.55005 13.6287 3.55005C13.5787 3.55005 13.5287 3.56005 13.4787 3.58005L5.54871 6.57005C5.01871 6.77005 4.67871 7.27005 4.67871 7.84005V8.51005C3.76871 9.19005 3.17871 10.28 3.17871 11.51V7.84005C3.17871 6.65005 3.90871 5.59005 5.01871 5.17005L12.9587 2.17005C13.1787 2.09005 13.4087 2.05005 13.6287 2.05005C14.6287 2.05005 15.5287 2.86005 15.5287 3.95005Z"
            fill="currentColor"
          />
          <path
            d="M22.1784 14.5V15.5C22.1784 15.77 21.9684 15.99 21.6884 16H20.2284C19.6984 16 19.2184 15.61 19.1784 15.09C19.1484 14.78 19.2684 14.49 19.4684 14.29C19.6484 14.1 19.8984 14 20.1684 14H21.6784C21.9684 14.01 22.1784 14.23 22.1784 14.5Z"
            fill="currentColor"
          />
          <path
            d="M20.1587 12.95H21.1787C21.7287 12.95 22.1787 12.5 22.1787 11.95V11.51C22.1787 9.44 20.4887 7.75 18.4187 7.75H6.93871C6.08871 7.75 5.30871 8.03 4.67871 8.51C3.76871 9.19 3.17871 10.28 3.17871 11.51V13.29C3.17871 13.67 3.57871 13.91 3.93871 13.79C4.49871 13.6 5.08871 13.5 5.67871 13.5C8.70871 13.5 11.1787 15.97 11.1787 19C11.1787 19.72 10.9887 20.51 10.6887 21.21C10.5287 21.57 10.7787 22 11.1687 22H18.4187C20.4887 22 22.1787 20.31 22.1787 18.24V18.05C22.1787 17.5 21.7287 17.05 21.1787 17.05H20.3087C19.3487 17.05 18.4287 16.46 18.1787 15.53C17.9787 14.77 18.2187 14.03 18.7187 13.55C19.0887 13.17 19.5987 12.95 20.1587 12.95ZM14.6787 12.75H9.67871C9.26871 12.75 8.92871 12.41 8.92871 12C8.92871 11.59 9.26871 11.25 9.67871 11.25H14.6787C15.0887 11.25 15.4287 11.59 15.4287 12C15.4287 12.41 15.0887 12.75 14.6787 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmptyWalletTime as IconComponent).keywords = [
  "empty",
  "wallet",
  "time",
  "lifeless",
  "void",
  "vacuous",
  "vacant",
  "empty-handed",
  "meaningless",
  "unfilled",
  "bare",
  "clean",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "fourth dimension",
  "clock",
  "meter",
  "clip",
  "sentence",
  "clock time",
  "prison term",
  "space-time",
  "momentum",
];

export default IconEmptyWalletTime as IconComponent;
