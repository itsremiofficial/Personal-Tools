import { FC } from "react";

const IconTicketDiscount: FC<IconProps> = ({
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
            d="M20.1699 12.5C20.1699 11.12 21.2899 10 22.6699 10V9C22.6699 5 21.6699 4 17.6699 4H7.66992C3.66992 4 2.66992 5 2.66992 9V9.5C4.04992 9.5 5.16992 10.62 5.16992 12C5.16992 13.38 4.04992 14.5 2.66992 14.5V15C2.66992 19 3.66992 20 7.66992 20H17.6699C21.6699 20 22.6699 19 22.6699 15C21.2899 15 20.1699 13.88 20.1699 12.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 14.75L15.6699 8.75"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6644 14.75H15.6734"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66443 9.25H9.67341"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M21.9699 10.84C22.3599 10.84 22.6699 10.53 22.6699 10.14V9.20999C22.6699 5.10999 21.4199 3.85999 17.3199 3.85999H8.01992C3.91992 3.85999 2.66992 5.10999 2.66992 9.20999V9.67999C2.66992 10.07 2.97992 10.38 3.36992 10.38C4.26992 10.38 4.99992 11.11 4.99992 12.01C4.99992 12.91 4.26992 13.63 3.36992 13.63C2.97992 13.63 2.66992 13.94 2.66992 14.33V14.8C2.66992 18.9 3.91992 20.15 8.01992 20.15H17.3199C21.4199 20.15 22.6699 18.9 22.6699 14.8C22.6699 14.41 22.3599 14.1 21.9699 14.1C21.0699 14.1 20.3399 13.37 20.3399 12.47C20.3399 11.57 21.0699 10.84 21.9699 10.84Z"
            fill="currentColor"
          />
          <path
            d="M15.6702 15.88C15.1102 15.88 14.6602 15.43 14.6602 14.88C14.6602 14.33 15.1102 13.88 15.6602 13.88C16.2102 13.88 16.6602 14.33 16.6602 14.88C16.6602 15.43 16.2302 15.88 15.6702 15.88Z"
            fill="currentColor"
          />
          <path
            d="M9.67016 10.88C9.11016 10.88 8.66016 10.43 8.66016 9.88C8.66016 9.33 9.11016 8.88 9.66016 8.88C10.2102 8.88 10.6602 9.33 10.6602 9.88C10.6602 10.43 10.2302 10.88 9.67016 10.88Z"
            fill="currentColor"
          />
          <path
            d="M9.30023 16.43C9.11023 16.43 8.92023 16.36 8.77023 16.21C8.48023 15.92 8.48023 15.44 8.77023 15.15L15.5002 8.42001C15.7902 8.13001 16.2702 8.13001 16.5602 8.42001C16.8502 8.71001 16.8502 9.19001 16.5602 9.48001L9.83023 16.21C9.69023 16.36 9.49023 16.43 9.30023 16.43Z"
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
            d="M21.9719 10.84C22.3619 10.84 22.6719 10.53 22.6719 10.14V9.20999C22.6719 5.10999 21.4219 3.85999 17.3219 3.85999H8.02187C3.92188 3.85999 2.67188 5.10999 2.67188 9.20999V9.67999C2.67188 10.07 2.98188 10.38 3.37188 10.38C4.27188 10.38 5.00187 11.11 5.00187 12.01C5.00187 12.91 4.27188 13.63 3.37188 13.63C2.98188 13.63 2.67188 13.94 2.67188 14.33V14.8C2.67188 18.9 3.92188 20.15 8.02187 20.15H17.3219C21.4219 20.15 22.6719 18.9 22.6719 14.8C22.6719 14.41 22.3619 14.1 21.9719 14.1C21.0719 14.1 20.3419 13.37 20.3419 12.47C20.3419 11.57 21.0719 10.84 21.9719 10.84ZM9.67188 8.87999C10.2219 8.87999 10.6719 9.32999 10.6719 9.87999C10.6719 10.43 10.2319 10.88 9.67188 10.88C9.12187 10.88 8.67188 10.43 8.67188 9.87999C8.67188 9.32999 9.11188 8.87999 9.67188 8.87999ZM15.6719 15.88C15.1119 15.88 14.6619 15.43 14.6619 14.88C14.6619 14.33 15.1119 13.88 15.6619 13.88C16.2119 13.88 16.6619 14.33 16.6619 14.88C16.6619 15.43 16.2319 15.88 15.6719 15.88ZM16.5719 9.47999L9.84188 16.21C9.69187 16.36 9.50188 16.43 9.31188 16.43C9.12188 16.43 8.93187 16.36 8.78187 16.21C8.49187 15.92 8.49187 15.44 8.78187 15.15L15.5119 8.41999C15.8019 8.12999 16.2819 8.12999 16.5719 8.41999C16.8619 8.70999 16.8619 9.18999 16.5719 9.47999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTicketDiscount as IconComponent).keywords = [
  "ticket",
  "discount",
  "fine",
  "coupon",
  "itinerary",
  "passport",
  "place",
  "engineer",
  "flag",
  "airfare",
  "travel",
  "bank discount",
  "discount rate",
  "rebate",
  "deduction",
  "dismiss",
  "brush aside",
  "brush off",
  "ignore",
  "disregard",
];

export default IconTicketDiscount as IconComponent;
