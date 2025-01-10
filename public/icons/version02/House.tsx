import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHouse: FC<IconProps> = ({
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
            d="M2.66992 22H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.62012 22.0003L3.67012 9.97023C3.67012 9.36023 3.96012 8.78029 4.44012 8.40029L11.4401 2.95027C12.1601 2.39027 13.1701 2.39027 13.9001 2.95027L20.9001 8.39028C21.3901 8.77028 21.6701 9.35023 21.6701 9.97023V22.0003"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.6699 17H11.6699C10.8399 17 10.1699 17.67 10.1699 18.5V22H15.1699V18.5C15.1699 17.67 14.4999 17 13.6699 17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.1699 13.75H8.16992C7.61992 13.75 7.16992 13.3 7.16992 12.75V11.25C7.16992 10.7 7.61992 10.25 8.16992 10.25H10.1699C10.7199 10.25 11.1699 10.7 11.1699 11.25V12.75C11.1699 13.3 10.7199 13.75 10.1699 13.75Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 13.75H15.1699C14.6199 13.75 14.1699 13.3 14.1699 12.75V11.25C14.1699 10.7 14.6199 10.25 15.1699 10.25H17.1699C17.7199 10.25 18.1699 10.7 18.1699 11.25V12.75C18.1699 13.3 17.7199 13.75 17.1699 13.75Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M19.6697 7L19.6397 4H15.2397"
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
            d="M22.6699 22.75H2.66992C2.25992 22.75 1.91992 22.41 1.91992 22C1.91992 21.59 2.25992 21.25 2.66992 21.25H22.6699C23.0799 21.25 23.4199 21.59 23.4199 22C23.4199 22.41 23.0799 22.75 22.6699 22.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6701 9.98017V22.0002H3.62012L3.67012 9.97016C3.67012 9.36016 3.95012 8.78022 4.44012 8.40022L11.4401 2.96021C12.1601 2.39021 13.1801 2.39021 13.9001 2.96021L15.2401 4.00019L19.6701 7.4402L20.9001 8.40022C21.3901 8.78022 21.6701 9.36017 21.6701 9.98017Z"
            fill="currentColor"
          />
          <path
            d="M13.6699 17H11.6699C10.8399 17 10.1699 17.67 10.1699 18.5V22H15.1699V18.5C15.1699 17.67 14.4999 17 13.6699 17Z"
            fill="currentColor"
          />
          <path
            d="M10.1699 13.75H8.16992C7.61992 13.75 7.16992 13.3 7.16992 12.75V11.25C7.16992 10.7 7.61992 10.25 8.16992 10.25H10.1699C10.7199 10.25 11.1699 10.7 11.1699 11.25V12.75C11.1699 13.3 10.7199 13.75 10.1699 13.75Z"
            fill="currentColor"
          />
          <path
            d="M17.1699 13.75H15.1699C14.6199 13.75 14.1699 13.3 14.1699 12.75V11.25C14.1699 10.7 14.6199 10.25 15.1699 10.25H17.1699C17.7199 10.25 18.1699 10.7 18.1699 11.25V12.75C18.1699 13.3 17.7199 13.75 17.1699 13.75Z"
            fill="currentColor"
          />
          <path
            d="M19.6697 7.44L15.2397 4H18.6497C19.1997 4 19.6497 4.43999 19.6497 4.98999L19.6697 7.44Z"
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
            d="M22.6699 21.2502H21.6699V9.98021C21.6699 9.36021 21.3899 8.78021 20.8999 8.40021L19.6699 7.44021L19.6499 4.99021C19.6499 4.44021 19.1999 4.00021 18.6499 4.00021H15.2399L13.8999 2.96021C13.1799 2.39021 12.1599 2.39021 11.4399 2.96021L4.43992 8.40021C3.94992 8.78021 3.66992 9.36021 3.66992 9.97021L3.61992 21.2502H2.66992C2.25992 21.2502 1.91992 21.5902 1.91992 22.0002C1.91992 22.4102 2.25992 22.7502 2.66992 22.7502H22.6699C23.0799 22.7502 23.4199 22.4102 23.4199 22.0002C23.4199 21.5902 23.0799 21.2502 22.6699 21.2502ZM7.16992 12.7502V11.2502C7.16992 10.7002 7.61992 10.2502 8.16992 10.2502H10.1699C10.7199 10.2502 11.1699 10.7002 11.1699 11.2502V12.7502C11.1699 13.3002 10.7199 13.7502 10.1699 13.7502H8.16992C7.61992 13.7502 7.16992 13.3002 7.16992 12.7502ZM15.1699 21.2502H10.1699V18.5002C10.1699 17.6702 10.8399 17.0002 11.6699 17.0002H13.6699C14.4999 17.0002 15.1699 17.6702 15.1699 18.5002V21.2502ZM18.1699 12.7502C18.1699 13.3002 17.7199 13.7502 17.1699 13.7502H15.1699C14.6199 13.7502 14.1699 13.3002 14.1699 12.7502V11.2502C14.1699 10.7002 14.6199 10.2502 15.1699 10.2502H17.1699C17.7199 10.2502 18.1699 10.7002 18.1699 11.2502V12.7502Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHouse as IconComponentType).keywords = [
  "house",
  "mansion",
  "home",
  "household",
  "put up",
  "firm",
  "family",
  "sign",
  "menage",
  "theatre",
];

export default IconHouse as IconComponentType;
