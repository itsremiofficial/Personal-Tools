import { FC } from "react";

const IconUserTag: FC<IconProps> = ({
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
            d="M18.6699 18.86H17.9099C17.1099 18.86 16.3499 19.17 15.7899 19.73L14.0799 21.42C13.2999 22.19 12.0299 22.19 11.2499 21.42L9.53992 19.73C8.97992 19.17 8.20992 18.86 7.41992 18.86H6.66992C5.00992 18.86 3.66992 17.53 3.66992 15.89V4.97998C3.66992 3.33998 5.00992 2.01001 6.66992 2.01001H18.6699C20.3299 2.01001 21.6699 3.33998 21.6699 4.97998V15.89C21.6699 17.52 20.3299 18.86 18.6699 18.86Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 10.0001C13.9567 10.0001 14.9999 8.95687 14.9999 7.67004C14.9999 6.38322 13.9567 5.34009 12.6699 5.34009C11.383 5.34009 10.3398 6.38322 10.3398 7.67004C10.3398 8.95687 11.383 10.0001 12.6699 10.0001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 15.6599C16.6699 13.8599 14.8799 12.3999 12.6699 12.3999C10.4599 12.3999 8.66992 13.8599 8.66992 15.6599"
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
            d="M18.6699 18.86H17.9099C17.1099 18.86 16.3499 19.17 15.7899 19.73L14.0799 21.42C13.2999 22.19 12.0299 22.19 11.2499 21.42L9.53992 19.73C8.97992 19.17 8.20992 18.86 7.41992 18.86H6.66992C5.00992 18.86 3.66992 17.53 3.66992 15.89V4.97998C3.66992 3.33998 5.00992 2.01001 6.66992 2.01001H18.6699C20.3299 2.01001 21.6699 3.33998 21.6699 4.97998V15.89C21.6699 17.52 20.3299 18.86 18.6699 18.86Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 10.41C13.9567 10.41 14.9999 9.36684 14.9999 8.08002C14.9999 6.79319 13.9567 5.75 12.6699 5.75C11.383 5.75 10.3398 6.79319 10.3398 8.08002C10.3398 9.36684 11.383 10.41 12.6699 10.41Z"
            fill="currentColor"
          />
          <path
            d="M15.3501 15.0601C16.1601 15.0601 16.6301 14.1601 16.1801 13.4901C15.5001 12.4801 14.1801 11.8 12.6701 11.8C11.1601 11.8 9.84008 12.4801 9.16008 13.4901C8.71008 14.1601 9.1801 15.0601 9.9901 15.0601H15.3501Z"
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
            d="M18.6699 2H6.66992C5.00992 2 3.66992 3.33 3.66992 4.97V15.88C3.66992 17.52 5.00992 18.85 6.66992 18.85H7.42992C8.22992 18.85 8.98992 19.16 9.54992 19.72L11.2599 21.41C12.0399 22.18 13.3099 22.18 14.0899 21.41L15.7999 19.72C16.3599 19.16 17.1299 18.85 17.9199 18.85H18.6699C20.3299 18.85 21.6699 17.52 21.6699 15.88V4.97C21.6699 3.33 20.3299 2 18.6699 2ZM12.6699 5.75C13.9599 5.75 14.9999 6.79 14.9999 8.08C14.9999 9.37 13.9599 10.41 12.6699 10.41C11.3799 10.41 10.3399 9.36 10.3399 8.08C10.3399 6.79 11.3799 5.75 12.6699 5.75ZM15.3499 15.06H9.98992C9.17992 15.06 8.70992 14.16 9.15992 13.49C9.83992 12.48 11.1599 11.8 12.6699 11.8C14.1799 11.8 15.4999 12.48 16.1799 13.49C16.6299 14.16 16.1499 15.06 15.3499 15.06Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserTag as IconComponent).keywords = [
  "user",
  "tag",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
];

export default IconUserTag as IconComponent;
