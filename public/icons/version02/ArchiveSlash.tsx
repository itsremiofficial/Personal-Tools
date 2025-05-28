import { FC } from "react";

const IconArchiveSlash: FC<IconProps> = ({
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
            d="M22.6699 2L2.66992 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.3499 8.70996V19.71C21.3499 21.72 19.9099 22.57 18.1499 21.59L11.6699 17.54"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.99023 19.95V5.86C3.99023 3.74 5.72023 2 7.85023 2H17.5002C18.7102 2 19.7902 2.56 20.5002 3.44"
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
            d="M21.3499 6.31982V19.9498C21.3499 21.7498 20.0599 22.5098 18.4899 21.6398L13.6099 18.9198C13.0899 18.6398 12.2499 18.6398 11.7299 18.9198L6.84992 21.6398C6.42992 21.8698 6.02992 21.9898 5.66992 21.9998L21.3499 6.31982Z"
            fill="currentColor"
          />
          <path
            d="M20.7902 3.88L4.06023 20.61C4.01023 20.41 3.99023 20.19 3.99023 19.95V5.86C3.99023 3.74 5.72023 2 7.85023 2H17.4902C18.8902 2 20.1202 2.75 20.7902 3.88Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
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
            d="M20.7902 3.88L4.06023 20.61C4.01023 20.41 3.99023 20.19 3.99023 19.95V5.86C3.99023 3.74 5.72023 2 7.85023 2H17.4902C18.8902 2 20.1202 2.75 20.7902 3.88Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
            fill="currentColor"
          />
          <path
            d="M19.9601 7.71005L12.5701 15.1001C12.1101 15.5601 12.2001 16.3301 12.7601 16.6601L20.1501 21.0901C20.8201 21.4901 21.6601 21.0101 21.6601 20.2301V8.41005C21.6701 7.52005 20.5901 7.08005 19.9601 7.71005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveSlash as IconComponent).keywords = [
  "archive",
  "slash",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
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

export default IconArchiveSlash as IconComponent;
