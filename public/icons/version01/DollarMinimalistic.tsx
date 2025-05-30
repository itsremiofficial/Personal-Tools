import { FC } from "react";

const IconDollarMinimalistic: FC<IconProps> = ({
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 17.0005V17.5005V18.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 6.00049V6.50049V7.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15 9.50049C15 8.11978 13.6569 7.00049 12 7.00049C10.3431 7.00049 9 8.11978 9 9.50049C9 10.8812 10.3431 12.0005 12 12.0005C13.6569 12.0005 15 13.1198 15 14.5005C15 15.8812 13.6569 17.0005 12 17.0005C10.3431 17.0005 9 15.8812 9 14.5005"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.75 6.00049C12.75 5.58627 12.4142 5.25049 12 5.25049C11.5858 5.25049 11.25 5.58627 11.25 6.00049V6.31722C9.61957 6.60916 8.25 7.8341 8.25 9.50049C8.25 11.4176 10.0628 12.7505 12 12.7505C13.3765 12.7505 14.25 13.6562 14.25 14.5005C14.25 15.3448 13.3765 16.2505 12 16.2505C10.6235 16.2505 9.75 15.3448 9.75 14.5005C9.75 14.0863 9.41421 13.7505 9 13.7505C8.58579 13.7505 8.25 14.0863 8.25 14.5005C8.25 16.1669 9.61957 17.3918 11.25 17.6838V18.0005C11.25 18.4147 11.5858 18.7505 12 18.7505C12.4142 18.7505 12.75 18.4147 12.75 18.0005V17.6838C14.3804 17.3918 15.75 16.1669 15.75 14.5005C15.75 12.5833 13.9372 11.2505 12 11.2505C10.6235 11.2505 9.75 10.3448 9.75 9.50049C9.75 8.65622 10.6235 7.75049 12 7.75049C13.3765 7.75049 14.25 8.65622 14.25 9.50049C14.25 9.9147 14.5858 10.2505 15 10.2505C15.4142 10.2505 15.75 9.9147 15.75 9.50049C15.75 7.8341 14.3804 6.60916 12.75 6.31722V6.00049Z"
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
            d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005ZM12.75 6.00049C12.75 5.58627 12.4142 5.25049 12 5.25049C11.5858 5.25049 11.25 5.58627 11.25 6.00049V6.31722C9.61957 6.60916 8.25 7.8341 8.25 9.50049C8.25 11.4176 10.0628 12.7505 12 12.7505C13.3765 12.7505 14.25 13.6562 14.25 14.5005C14.25 15.3448 13.3765 16.2505 12 16.2505C10.6235 16.2505 9.75 15.3448 9.75 14.5005C9.75 14.0863 9.41421 13.7505 9 13.7505C8.58579 13.7505 8.25 14.0863 8.25 14.5005C8.25 16.1669 9.61957 17.3918 11.25 17.6838V18.0005C11.25 18.4147 11.5858 18.7505 12 18.7505C12.4142 18.7505 12.75 18.4147 12.75 18.0005V17.6838C14.3804 17.3918 15.75 16.1669 15.75 14.5005C15.75 12.5833 13.9372 11.2505 12 11.2505C10.6235 11.2505 9.75 10.3448 9.75 9.50049C9.75 8.65622 10.6235 7.75049 12 7.75049C13.3765 7.75049 14.25 8.65622 14.25 9.50049C14.25 9.9147 14.5858 10.2505 15 10.2505C15.4142 10.2505 15.75 9.9147 15.75 9.50049C15.75 7.8341 14.3804 6.60916 12.75 6.31722V6.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDollarMinimalistic as IconComponent).keywords = [
  "dollar",
  "minimalistic",
  "dollar bill",
  "dollar sign",
  "buck",
  "clam",
  "dollar mark",
  "one dollar bill",
  "loonie",
  "dime",
  "penny",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconDollarMinimalistic as IconComponent;
