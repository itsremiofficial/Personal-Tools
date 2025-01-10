import { FC } from "react";

const IconPrinterSlash: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.91992 7H17.4199V5C17.4199 3 16.6699 2 14.4199 2H10.9199C8.66992 2 7.91992 3 7.91992 5V7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6402 15H16.6702V19C16.6702 21 15.6702 22 13.6702 22H11.6702C9.98023 22 9.00023 21.29 8.74023 19.86"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66992 18C4.66992 18 3.66992 17 3.66992 15V10C3.66992 8 4.66992 7 6.66992 7H17.2599"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6399 7.52002C21.3299 8.00002 21.6699 8.83002 21.6699 10V15C21.6699 17 20.6699 18 18.6699 18H16.6699V15H13.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 15H16.46"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 11H9.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
            stroke="currentColor"
            strokeWidth={width}
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 7C4.66992 7 3.66992 8 3.66992 10V15C3.66992 17 4.66992 18 6.66992 18L8.66992 16V15H9.66992L17.6699 7H6.66992ZM7.66992 11.75C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H9.66992C10.0799 10.25 10.4199 10.59 10.4199 11C10.4199 11.41 10.0799 11.75 9.66992 11.75H7.66992Z"
            fill="currentColor"
          />
          <path d="M9.66992 15L8.66992 16V15H9.66992Z" fill="currentColor" />
          <path
            d="M17.6699 5V7H7.66992V5C7.66992 3.34 9.00992 2 10.6699 2H14.6699C16.3299 2 17.6699 3.34 17.6699 5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.2003 1.46967C23.4931 1.76256 23.4931 2.23744 23.2003 2.53033L3.20025 22.5303C2.90736 22.8232 2.43248 22.8232 2.13959 22.5303C1.8467 22.2374 1.8467 21.7626 2.13959 21.4697L22.1396 1.46967C22.4325 1.17678 22.9074 1.17678 23.2003 1.46967Z"
            fill="currentColor"
          />
          <path
            d="M10.4199 11C10.4199 11.41 10.0799 11.75 9.66992 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H9.66992C10.0799 10.25 10.4199 10.59 10.4199 11Z"
            fill="currentColor"
          />
          <path
            d="M18.4199 15C18.4199 15.41 18.0799 15.75 17.6699 15.75H11.9199L13.4199 14.25H17.6699C18.0799 14.25 18.4199 14.59 18.4199 15Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 15V19C16.6699 20.66 15.3299 22 13.6699 22H11.6699C10.0099 22 8.66992 20.66 8.66992 19L12.6699 15H16.6699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 10.0001V15.0001C21.6699 17.0001 20.6699 18.0001 18.6699 18.0001H16.6699V15.0001H12.6699L20.3399 7.33008C21.2299 7.78008 21.6699 8.67008 21.6699 10.0001Z"
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
            d="M6.66992 7C4.66992 7 3.66992 8 3.66992 10V15C3.66992 17 4.66992 18 6.66992 18L8.66992 16V15H9.66992L17.6699 7H6.66992ZM7.66992 11.75C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H9.66992C10.0799 10.25 10.4199 10.59 10.4199 11C10.4199 11.41 10.0799 11.75 9.66992 11.75H7.66992Z"
            fill="currentColor"
          />
          <path d="M9.66992 15L8.66992 16V15H9.66992Z" fill="currentColor" />
          <path
            d="M17.6699 5V7H7.66992V5C7.66992 3.34 9.00992 2 10.6699 2H14.6699C16.3299 2 17.6699 3.34 17.6699 5Z"
            fill="currentColor"
          />
          <path
            d="M23.2004 1.46994C22.9104 1.17994 22.4304 1.17994 22.1404 1.46994L2.14035 21.4699C1.85035 21.7599 1.85035 22.2399 2.14035 22.5299C2.29035 22.6799 2.48035 22.7499 2.67035 22.7499C2.86035 22.7499 3.05035 22.6799 3.20035 22.5299L23.2004 2.52994C23.4904 2.23994 23.4904 1.75994 23.2004 1.46994Z"
            fill="currentColor"
          />
          <path
            d="M17.67 14.25H13.6271C13.4945 14.25 13.3674 14.3027 13.2736 14.3964L12.67 15L11.92 15.75L9.47003 18.2C8.83003 18.84 8.70003 20 9.22003 20.74C9.76003 21.5 10.66 22 11.67 22H13.67C15.33 22 16.67 20.66 16.67 19V15.75H17.67C18.08 15.75 18.42 15.41 18.42 15C18.42 14.59 18.08 14.25 17.67 14.25Z"
            fill="currentColor"
          />
          <path
            d="M19.6899 7.98012L16.1299 11.5401C15.4999 12.1701 15.9499 13.2501 16.8399 13.2501H17.5799C18.4499 13.2501 19.2599 13.8401 19.3999 14.7001C19.5511 15.6155 18.983 16.4391 18.1633 16.6796C17.8984 16.7573 17.6699 16.974 17.6699 17.2501V17.5001C17.6699 17.7763 17.8938 18.0001 18.1699 18.0001H18.6699C20.3299 18.0001 21.6699 16.6601 21.6699 15.0001V10.0001C21.6699 9.21012 21.5099 8.57012 21.1999 8.09012C20.8599 7.58012 20.1199 7.55012 19.6899 7.98012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPrinterSlash as IconComponent).keywords = [
  "printer",
  "slash",
  "pressman",
  "printing machine",
  "printout",
  "copier",
  "printing",
  "impression",
  "print",
  "ink",
  "typesetting",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconPrinterSlash as IconComponent;
