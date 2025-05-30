import { FC } from "react";

const IconTram: FC<IconProps> = ({
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
            d="M4 10.0005C4 6.22925 4 4.34363 5.17157 3.17206C6.34315 2.00049 8.22876 2.00049 12 2.00049C15.7712 2.00049 17.6569 2.00049 18.8284 3.17206C20 4.34363 20 6.22925 20 10.0005V12.0005C20 15.7717 20 17.6573 18.8284 18.8289C17.6569 20.0005 15.7712 20.0005 12 20.0005C8.22876 20.0005 6.34315 20.0005 5.17157 18.8289C4 17.6573 4 15.7717 4 12.0005V10.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M4 13.0005H20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 16.0005H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16.0005H8.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 20.0005L6 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 20.0005L18 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 2.00049V2.50049C10 3.60506 10.8954 4.50049 12 4.50049C13.1046 4.50049 14 3.60506 14 2.50049V2.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M6.37564 19.5727C5.89807 19.402 5.50578 19.1631 5.1716 18.8289C4.19727 17.8546 4.03323 16.3864 4.00562 13.7505H19.9944C19.9668 16.3864 19.8028 17.8546 18.8285 18.8289C18.4943 19.163 18.1021 19.4019 17.6247 19.5726L18.671 21.6652C18.8563 22.0357 18.7061 22.4862 18.3356 22.6715C17.9651 22.8567 17.5146 22.7065 17.3294 22.3361L16.1054 19.8882C15.0571 20.0005 13.726 20.0005 12 20.0005C10.2742 20.0005 8.94326 20.0005 7.89494 19.8882L6.67101 22.3361C6.48577 22.7065 6.03526 22.8567 5.66478 22.6715C5.29429 22.4862 5.14413 22.0357 5.32937 21.6652L6.37564 19.5727ZM14.75 16.0005C14.75 15.5863 15.0858 15.2505 15.5 15.2505H17C17.4142 15.2505 17.75 15.5863 17.75 16.0005C17.75 16.4147 17.4142 16.7505 17 16.7505H15.5C15.0858 16.7505 14.75 16.4147 14.75 16.0005ZM7.00002 15.2505C6.58581 15.2505 6.25002 15.5863 6.25002 16.0005C6.25002 16.4147 6.58581 16.7505 7.00002 16.7505H8.50002C8.91424 16.7505 9.25002 16.4147 9.25002 16.0005C9.25002 15.5863 8.91424 15.2505 8.50002 15.2505H7.00002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.17157 3.17202C4 4.34359 4 6.22921 4 10.0004V13.7505H20V10.0004C20 6.22921 20 4.34359 18.8284 3.17202C17.9495 2.29313 16.6688 2.07356 14.4917 2.01871C14.2216 2.0119 14 2.23026 14 2.50044C14 3.60501 13.1046 4.50044 12 4.50044C10.8954 4.50044 10 3.60501 10 2.50044C10 2.23026 9.77845 2.0119 9.50835 2.01871C7.33118 2.07356 6.05046 2.29313 5.17157 3.17202Z"
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
            d="M6.37562 19.5728C5.89805 19.4021 5.50576 19.1632 5.17157 18.829C4.19724 17.8547 4.03321 16.3865 4.00559 13.7506H19.9944C19.9668 16.3865 19.8028 17.8547 18.8284 18.829C18.4943 19.1631 18.1021 19.402 17.6247 19.5727L18.671 21.6653C18.8562 22.0358 18.7061 22.4863 18.3356 22.6716C17.9651 22.8568 17.5146 22.7066 17.3293 22.3362L16.1054 19.8883C15.057 20.0006 13.726 20.0006 12 20.0006C10.2742 20.0006 8.94323 20.0006 7.89491 19.8883L6.67098 22.3362C6.48574 22.7066 6.03524 22.8568 5.66475 22.6716C5.29427 22.4863 5.1441 22.0358 5.32934 21.6653L6.37562 19.5728ZM14.75 16.0006C14.75 15.5864 15.0858 15.2506 15.5 15.2506H17C17.4142 15.2506 17.75 15.5864 17.75 16.0006C17.75 16.4148 17.4142 16.7506 17 16.7506H15.5C15.0858 16.7506 14.75 16.4148 14.75 16.0006ZM7 15.2506C6.58579 15.2506 6.25 15.5864 6.25 16.0006C6.25 16.4148 6.58579 16.7506 7 16.7506H8.5C8.91421 16.7506 9.25 16.4148 9.25 16.0006C9.25 15.5864 8.91421 15.2506 8.5 15.2506H7Z"
            fill="currentColor"
          />
          <path
            d="M20 12.2506V10.0006C20 6.22935 20 4.34373 18.8284 3.17216C17.9495 2.29327 16.6688 2.07371 14.4917 2.01885C14.2216 2.01205 14 2.2304 14 2.50059C14 3.60516 13.1046 4.50059 12 4.50059C10.8954 4.50059 10 3.60516 10 2.50059C10 2.2304 9.77845 2.01205 9.50835 2.01885C7.33118 2.07371 6.05046 2.29327 5.17157 3.17216C4 4.34373 4 6.22935 4 10.0006V12.2506H20Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTram as IconComponent).keywords = [
  "tram",
  "streetcar",
  "tramway",
  "trolley car",
  "tramcar",
  "trolley",
  "ropeway",
  "aerial tramway",
  "cable tramway",
  "bus",
];

export default IconTram as IconComponent;
