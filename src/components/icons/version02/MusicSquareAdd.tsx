import { FC } from "react";

const IconMusicSquareAdd: FC<IconProps> = ({
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
            d="M21.6699 8.65002V14.35C21.6699 14.69 21.6599 15.02 21.6399 15.33C20.9199 14.51 19.8499 14 18.6699 14C16.4599 14 14.6699 15.79 14.6699 18C14.6699 18.75 14.8799 19.46 15.2499 20.06C15.4499 20.4 15.7099 20.71 16.0099 20.97C15.6999 20.99 15.3699 21 15.0199 21H9.31992C4.56992 21 2.66992 19.1 2.66992 14.35V8.65002C2.66992 3.90002 4.56992 2 9.31992 2H15.0199C19.7699 2 21.6699 3.90002 21.6699 8.65002Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.38945 14.42C8.19026 14.42 8.83945 13.7708 8.83945 12.97C8.83945 12.1692 8.19026 11.52 7.38945 11.52C6.58864 11.52 5.93945 12.1692 5.93945 12.97C5.93945 13.7708 6.58864 14.42 7.38945 14.42Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1496 12V6.34001C14.1496 5.13001 13.3896 4.96997 12.6296 5.17997L9.73962 5.96995C9.21962 6.10995 8.84961 6.52999 8.84961 7.12999V8.14V8.81999V12.97"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7 13.45C13.5008 13.45 14.15 12.8008 14.15 12C14.15 11.1992 13.5008 10.55 12.7 10.55C11.8992 10.55 11.25 11.1992 11.25 12C11.25 12.8008 11.8992 13.45 12.7 13.45Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.83984 8.83002L14.1498 7.38"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.6699 18C22.6699 18.75 22.4599 19.46 22.0899 20.06C21.3999 21.22 20.1299 22 18.6699 22C17.2099 22 15.9399 21.22 15.2499 20.06C14.8799 19.46 14.6699 18.75 14.6699 18C14.6699 15.79 16.4599 14 18.6699 14C20.8799 14 22.6699 15.79 22.6699 18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20.1597 17.98H17.1797"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6699 16.52V19.51"
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
            d="M19.8799 15.01C18.7899 14.94 17.6699 15.34 16.8399 16.17C15.2799 17.73 15.2799 20.26 16.8399 21.83C17.3699 22.36 18.0199 22.71 18.7099 22.88C19.0899 22.98 19.4899 23.01 19.8899 22.99C20.8399 22.95 21.7699 22.5701 22.4999 21.8401C23.5299 20.8101 23.8799 19.36 23.5499 18.05C23.3899 17.36 23.0299 16.71 22.4999 16.18C21.7799 15.45 20.8399 15.06 19.8799 15.01ZM21.9099 18.98C21.9099 19.19 21.8299 19.37 21.6899 19.51C21.5499 19.65 21.3699 19.73 21.1599 19.73H20.4199V20.51C20.4199 20.72 20.3399 20.9 20.1999 21.04C20.0599 21.18 19.8799 21.26 19.6699 21.26C19.2599 21.26 18.9199 20.92 18.9199 20.51V19.73H18.1699C17.7599 19.73 17.4199 19.39 17.4199 18.98C17.4199 18.57 17.7599 18.23 18.1699 18.23H18.9199V17.52C18.9199 17.11 19.2599 16.77 19.6699 16.77C20.0799 16.77 20.4199 17.11 20.4199 17.52V18.23H21.1599C21.5799 18.23 21.9099 18.57 21.9099 18.98Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.0099 21.97C16.7099 21.71 16.4499 21.4 16.2499 21.06C15.8799 20.46 15.6699 19.75 15.6699 19C15.6699 16.79 17.4599 15 19.6699 15C20.8499 15 21.9199 15.51 22.6399 16.33C22.6499 16.34 22.6499 16.35 22.6599 16.35C22.6599 16.29 22.6699 16.24 22.6699 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2H8.47992C8.19992 2 7.92992 2.00999 7.66992 2.04999C4.51992 2.33999 2.66992 4.45 2.66992 7.81V16.19C2.66992 19.55 4.51992 21.66 7.66992 21.95C7.92992 21.99 8.19992 22 8.47992 22H16.8599C16.9199 22 16.9699 21.99 17.0299 21.99C17.0299 21.98 17.0199 21.98 17.0099 21.97Z"
            fill="currentColor"
          />
          <path
            d="M14.4502 5.3C14.1302 5.05 13.5502 4.81001 12.6302 5.06001L9.65019 5.88002C8.76019 6.11002 8.18019 6.86 8.18019 7.8V9.55V11.71C7.95019 11.63 7.7002 11.57 7.4402 11.57C6.2002 11.57 5.2002 12.58 5.2002 13.81C5.2002 15.04 6.2102 16.05 7.4402 16.05C8.6602 16.05 9.66019 15.06 9.68019 13.85C9.68019 13.84 9.6902 13.83 9.6902 13.82V10.12L13.6602 9.03999V10.72C13.4302 10.64 13.1802 10.58 12.9102 10.58C11.6702 10.58 10.6702 11.59 10.6702 12.82C10.6702 14.06 11.6802 15.06 12.9102 15.06C14.1302 15.06 15.1302 14.07 15.1502 12.85C15.1502 12.84 15.1602 12.83 15.1602 12.81V8.05V6.97999C15.1502 6.21999 14.9102 5.65 14.4502 5.3ZM7.43019 14.55C7.02019 14.55 6.6902 14.22 6.6902 13.81C6.6902 13.4 7.02019 13.07 7.43019 13.07C7.84019 13.07 8.1702 13.4 8.1702 13.81C8.1702 14.22 7.84019 14.55 7.43019 14.55ZM12.9002 13.55C12.4902 13.55 12.1602 13.22 12.1602 12.81C12.1602 12.4 12.4902 12.07 12.9002 12.07C13.3102 12.07 13.6402 12.4 13.6402 12.81C13.6402 13.22 13.3102 13.55 12.9002 13.55Z"
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
            d="M19.8799 15.01C18.7899 14.94 17.6699 15.34 16.8399 16.17C15.2799 17.73 15.2799 20.26 16.8399 21.83C17.3699 22.36 18.0199 22.71 18.7099 22.88C19.0899 22.98 19.4899 23.01 19.8899 22.99C20.8399 22.95 21.7699 22.57 22.4999 21.84C23.5299 20.81 23.8799 19.36 23.5499 18.05C23.3899 17.36 23.0299 16.71 22.4999 16.18C21.7799 15.45 20.8399 15.06 19.8799 15.01ZM21.9099 18.98C21.9099 19.19 21.8299 19.37 21.6899 19.51C21.5499 19.65 21.3699 19.73 21.1599 19.73H20.4199V20.51C20.4199 20.72 20.3399 20.9 20.1999 21.04C20.0599 21.18 19.8799 21.26 19.6699 21.26C19.2599 21.26 18.9199 20.92 18.9199 20.51V19.73H18.1699C17.7599 19.73 17.4199 19.39 17.4199 18.98C17.4199 18.57 17.7599 18.23 18.1699 18.23H18.9199V17.52C18.9199 17.11 19.2599 16.77 19.6699 16.77C20.0799 16.77 20.4199 17.11 20.4199 17.52V18.23H21.1599C21.5799 18.23 21.9099 18.57 21.9099 18.98Z"
            fill="currentColor"
          />
          <path
            d="M12.9002 12.07C12.4902 12.07 12.1602 12.4 12.1602 12.81C12.1602 13.22 12.4902 13.55 12.9002 13.55C13.3102 13.55 13.6402 13.22 13.6402 12.81C13.6402 12.4 13.3102 12.07 12.9002 12.07Z"
            fill="currentColor"
          />
          <path
            d="M7.42945 13.06C7.01945 13.06 6.68945 13.39 6.68945 13.8C6.68945 14.21 7.01945 14.54 7.42945 14.54C7.83945 14.54 8.16945 14.21 8.16945 13.8C8.16945 13.39 7.83945 13.06 7.42945 13.06Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H8.47992C8.19992 2 7.92992 2.01 7.66992 2.05C4.51992 2.34 2.66992 4.45 2.66992 7.81V16.19C2.66992 19.55 4.51992 21.66 7.66992 21.95C7.92992 21.99 8.19992 22 8.47992 22H14.1699C14.5599 22 14.8099 21.56 14.6599 21.2C14.3699 20.51 14.1699 19.71 14.1699 19C14.1699 15.97 16.6399 13.5 19.6699 13.5C20.4299 13.5 21.1699 13.65 21.8499 13.95C22.2199 14.11 22.6699 13.86 22.6699 13.46V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM15.1499 8.05V12.81C15.1499 12.82 15.1399 12.83 15.1399 12.85C15.1199 14.07 14.1299 15.06 12.8999 15.06C11.6599 15.06 10.6599 14.05 10.6599 12.82C10.6599 11.58 11.6699 10.58 12.8999 10.58C13.1599 10.58 13.4099 10.63 13.6499 10.72V9.03L9.67992 10.11V13.81C9.67992 13.82 9.66992 13.83 9.66992 13.84C9.64992 15.06 8.65992 16.04 7.42992 16.04C6.18992 16.04 5.18992 15.03 5.18992 13.8C5.18992 12.57 6.19992 11.56 7.42992 11.56C7.68992 11.56 7.93992 11.61 8.16992 11.7V9.54V7.79C8.16992 6.86 8.74992 6.11 9.63992 5.87L12.6199 5.05C13.5499 4.8 14.1199 5.05 14.4399 5.29C14.8999 5.64 15.1299 6.21 15.1299 6.97V8.05H15.1499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicSquareAdd as IconComponent).keywords = [
  "music",
  "square",
  "add",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconMusicSquareAdd as IconComponent;
