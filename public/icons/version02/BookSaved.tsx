import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBookSaved: FC<IconProps> = ({
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
            d="M22.6699 4.67019V16.7402C22.6699 17.7002 21.8899 18.6002 20.9299 18.7202L20.5999 18.7602C18.4199 19.0502 15.0599 20.1602 13.1399 21.2202C12.8799 21.3702 12.4499 21.3702 12.1799 21.2202L12.1399 21.2002C10.2199 20.1502 6.86995 19.0502 4.69995 18.7602L4.40991 18.7202C3.44991 18.6002 2.66992 17.7002 2.66992 16.7402V4.66018C2.66992 3.47018 3.63989 2.57019 4.8299 2.67019C6.92989 2.84019 10.1099 3.90022 11.8899 5.01022L12.1399 5.16018C12.4299 5.34018 12.91 5.34018 13.2 5.16018L13.3699 5.05019C13.9999 4.66019 14.7999 4.27019 15.6699 3.92019C16.9799 3.40019 18.4399 2.98024 19.6699 2.78024C19.9399 2.73024 20.1999 2.7002 20.4399 2.6802H20.4999C21.6899 2.5802 22.6699 3.47019 22.6699 4.67019Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 5.49023V20.4902"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 2.78027V8.00024L17.6699 6.67023L15.6699 8.00024V3.92023C16.9799 3.40023 18.4399 2.98027 19.6699 2.78027Z"
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
            d="M12.6699 5.30019V21.3302C12.8399 21.3302 13.0199 21.3002 13.1599 21.2202L13.2 21.2002C15.12 20.1502 18.4699 19.0502 20.6399 18.7602L20.9299 18.7202C21.8899 18.6002 22.6699 17.7002 22.6699 16.7402V4.66018C22.6699 3.47018 21.6999 2.57019 20.5099 2.67019C18.4099 2.84019 15.23 3.90022 13.45 5.01022L13.2 5.16018C13.05 5.25018 12.8599 5.30019 12.6699 5.30019Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 4.67002V16.74C2.66992 17.7 3.44991 18.6 4.40991 18.72L4.73993 18.76C6.91993 19.05 10.28 20.16 12.2 21.22C12.33 21.3 12.4899 21.3301 12.6699 21.3301V5.30002C12.4799 5.30002 12.2899 5.25001 12.1399 5.16001L11.9699 5.05002C10.1899 3.93002 6.9999 2.86003 4.8999 2.68003H4.8399C3.6499 2.58003 2.66992 3.47002 2.66992 4.67002Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 2.78027V7.07025C19.6699 7.47025 19.2299 7.71023 18.8899 7.49023L17.6699 6.68024L16.45 7.49023C16.12 7.71023 15.6699 7.47025 15.6699 7.07025V3.92023C16.9799 3.40023 18.4399 2.98027 19.6699 2.78027Z"
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
            d="M11.9199 6.00008V19.9101C11.9199 20.6201 11.1999 21.1101 10.5499 20.8401C8.68992 20.0601 6.37992 19.3801 4.73992 19.1601L4.42992 19.1201C3.45992 19.0001 2.66992 18.1101 2.66992 17.1401V5.25008C2.66992 4.05008 3.63992 3.08008 4.83992 3.08008H4.90992C6.78992 3.24008 9.55992 4.12008 11.3899 5.11008C11.7199 5.29008 11.9199 5.62008 11.9199 6.00008Z"
            fill="currentColor"
          />
          <path
            d="M20.4999 3.08008H20.4399C20.1999 3.10008 19.9399 3.13008 19.6699 3.18008C18.4399 3.38008 16.9799 3.80008 15.6699 4.32008C15.0499 4.57008 14.4699 4.84008 13.9599 5.11008C13.6299 5.29008 13.4199 5.63008 13.4199 6.00008V19.9101C13.4199 20.6201 14.1399 21.1101 14.7899 20.8401C16.6499 20.0601 18.9599 19.3801 20.5999 19.1601L20.9099 19.1201C21.8799 19.0001 22.6699 18.1101 22.6699 17.1401V5.25008C22.6699 4.05008 21.6999 3.08008 20.4999 3.08008ZM19.9399 13.7301C19.9399 14.1201 19.6599 14.2901 19.3199 14.1001L18.2599 13.5101C18.1499 13.4501 17.9699 13.4501 17.8499 13.5101L16.7899 14.1001C16.4499 14.2901 16.1699 14.1201 16.1699 13.7301V10.6601C16.1699 10.2001 16.5499 9.82008 17.0099 9.82008H19.1099C19.5699 9.82008 19.9499 10.2001 19.9499 10.6601V13.7301H19.9399Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookSaved as IconComponentType).keywords = [
  "book",
  "saved",
  "daybook",
  "record",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
  "blessed",
  "protected",
  "salvageable",
  "redeemed",
  "reclaimed",
  "preserved",
  "ransomed",
  "rescued",
  "salvation",
];

export default IconBookSaved as IconComponentType;