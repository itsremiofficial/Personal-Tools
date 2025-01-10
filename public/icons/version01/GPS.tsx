import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGPS: FC<IconProps> = ({
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
            d="M20 12.0002C20 16.4185 16.4183 20.0002 12 20.0002C7.58172 20.0002 4 16.4185 4 12.0002C4 7.58197 7.58172 4.00024 12 4.00024C16.4183 4.00024 20 7.58197 20 12.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 12.0002C15 13.6571 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.6571 9 12.0002C9 10.3434 10.3431 9.00024 12 9.00024C13.6569 9.00024 15 10.3434 15 12.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0002L4 12.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 12.0002L22 12.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 4.00024V2.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22.0002V20.0002"
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
            opacity={duotone ? "0.5" : "1"}
            d="M20 12.0002C20 16.4185 16.4183 20.0002 12 20.0002C7.58172 20.0002 4 16.4185 4 12.0002C4 7.58197 7.58172 4.00024 12 4.00024C16.4183 4.00024 20 7.58197 20 12.0002Z"
            fill="currentColor"
          />
          <path
            d="M12.0001 8.51196C10.0735 8.51196 8.51172 10.0738 8.51172 12.0003C8.51172 13.9269 10.0735 15.4887 12.0001 15.4887C13.9267 15.4887 15.4885 13.9269 15.4885 12.0003C15.4885 10.0738 13.9267 8.51196 12.0001 8.51196Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2.00024C12.75 1.58603 12.4142 1.25024 12 1.25024C11.5858 1.25024 11.25 1.58603 11.25 2.00024V4.03494C11.4969 4.01198 11.7471 4.00024 12 4.00024C12.2529 4.00024 12.5031 4.01198 12.75 4.03494V2.00024Z"
            fill="currentColor"
          />
          <path
            d="M19.9653 12.7502C19.9883 12.5033 20 12.2532 20 12.0002C20 11.7473 19.9883 11.4972 19.9653 11.2502H22C22.4142 11.2502 22.75 11.586 22.75 12.0002C22.75 12.4145 22.4142 12.7502 22 12.7502H19.9653Z"
            fill="currentColor"
          />
          <path
            d="M11.25 19.9656C11.4969 19.9885 11.7471 20.0002 12 20.0002C12.2529 20.0002 12.5031 19.9885 12.75 19.9656V22.0002C12.75 22.4145 12.4142 22.7502 12 22.7502C11.5858 22.7502 11.25 22.4145 11.25 22.0002V19.9656Z"
            fill="currentColor"
          />
          <path
            d="M4.03469 11.2502C4.01174 11.4972 4 11.7473 4 12.0002C4 12.2532 4.01174 12.5033 4.03469 12.7502H2C1.58579 12.7502 1.25 12.4145 1.25 12.0002C1.25 11.586 1.58579 11.2502 2 11.2502H4.03469Z"
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
            d="M2 12.0002C2 12.3856 2.31236 12.6979 2.69767 12.6979H4.59041C4.92078 16.2511 7.74914 19.0795 11.3023 19.4098V21.3026C11.3023 21.6879 11.6147 22.0002 12 22.0002C12.3853 22.0002 12.6977 21.6879 12.6977 21.3026V19.4098C16.2509 19.0795 19.0792 16.2511 19.4096 12.6979H21.3023C21.6876 12.6979 22 12.3856 22 12.0002C22 11.6149 21.6876 11.3026 21.3023 11.3026H19.4096C19.0792 7.74938 16.2509 4.92102 12.6977 4.59066V2.69792C12.6977 2.3126 12.3853 2.00024 12 2.00024C11.6147 2.00024 11.3023 2.3126 11.3023 2.69792V4.59066C7.74914 4.92102 4.92078 7.74938 4.59041 11.3026H2.69767C2.31236 11.3026 2 11.6149 2 12.0002ZM8.51163 12.0002C8.51163 10.0737 10.0734 8.51187 12 8.51187C13.9266 8.51187 15.4884 10.0737 15.4884 12.0002C15.4884 13.9268 13.9266 15.4886 12 15.4886C10.0734 15.4886 8.51163 13.9268 8.51163 12.0002Z"
            fill="currentColor"
          />
          <path
            d="M9.90698 12.0002C9.90698 10.8443 10.8441 9.90722 12 9.90722C13.1559 9.90722 14.093 10.8443 14.093 12.0002C14.093 13.1562 13.1559 14.0933 12 14.0933C10.8441 14.0933 9.90698 13.1562 9.90698 12.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGPS as IconComponentType).keywords = [];

export default IconGPS as IconComponentType;
