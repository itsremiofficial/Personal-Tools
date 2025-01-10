import { FC } from "react";

const IconDropperMinimalistic: FC<IconProps> = ({
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
            d="M19 15.8833V8.00024C19 6.11463 19 5.17182 18.4142 4.58603C17.8284 4.00024 16.8856 4.00024 15 4.00024H9C7.11438 4.00024 6.17157 4.00024 5.58579 4.58603C5 5.17182 5 6.11462 5 8.00024V15.8833C5 16.6441 5.31911 17.37 5.87966 17.8843C9.3416 21.0609 14.6584 21.0609 18.1203 17.8843C18.6809 17.37 19 16.6441 19 15.8833Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19 8.00024H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19 14.0002H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 11.9169C14 13.0675 13.1046 14.0002 12 14.0002C10.8954 14.0002 10 13.0675 10 11.9169C10 11.197 10.783 10.2361 11.3691 9.61767C11.7161 9.25155 12.2839 9.25155 12.6309 9.61767C13.217 10.2361 14 11.197 14 11.9169Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M19 11.0002H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 21.0002V22.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 4.00024C14 2.89567 13.1046 2.00024 12 2.00024C10.8954 2.00024 10 2.89567 10 4.00024"
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
            d="M19 15.8833V8.00024C19 6.11463 19 5.17182 18.4142 4.58603C17.8284 4.00024 16.8856 4.00024 15 4.00024H9C7.11438 4.00024 6.17157 4.00024 5.58579 4.58603C5 5.17182 5 6.11462 5 8.00024V15.8833C5 16.6441 5.31911 17.37 5.87966 17.8843C9.3416 21.0609 14.6584 21.0609 18.1203 17.8843C18.6809 17.37 19 16.6441 19 15.8833Z"
            fill="currentColor"
          />
          <path
            d="M14 11.917C14 13.0676 13.1046 14.0003 12 14.0003C10.8954 14.0003 10 13.0676 10 11.917C10 11.1971 10.783 10.2362 11.3691 9.61773C11.7161 9.25161 12.2839 9.25161 12.6309 9.61773C13.217 10.2362 14 11.1971 14 11.917Z"
            fill="currentColor"
          />
          <path
            d="M18.9983 7.25024H17C16.5858 7.25024 16.25 7.58603 16.25 8.00024C16.25 8.41446 16.5858 8.75024 17 8.75024H19V8.00024C19 7.73168 19 7.48225 18.9983 7.25024Z"
            fill="currentColor"
          />
          <path
            d="M19 10.2502H17C16.5858 10.2502 16.25 10.586 16.25 11.0002C16.25 11.4145 16.5858 11.7502 17 11.7502H19V10.2502Z"
            fill="currentColor"
          />
          <path
            d="M19 13.2502H17C16.5858 13.2502 16.25 13.586 16.25 14.0002C16.25 14.4145 16.5858 14.7502 17 14.7502H19V13.2502Z"
            fill="currentColor"
          />
          <path
            d="M14 4.00024C14 2.89567 13.1046 2.00024 12 2.00024C10.8954 2.00024 10 2.89567 10 4.00024H14Z"
            fill="currentColor"
          />
          <path
            d="M11.25 20.2358C11.7491 20.2771 12.2509 20.2771 12.75 20.2358V21.2503C12.75 21.6645 12.4142 22.0003 12 22.0003C11.5858 22.0003 11.25 21.6645 11.25 21.2503V20.2358Z"
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
            d="M19 11.7502V13.2502H17C16.5858 13.2502 16.25 13.586 16.25 14.0002C16.25 14.4145 16.5858 14.7502 17 14.7502H19V15.8833C19 16.6441 18.6809 17.37 18.1203 17.8843C16.5867 19.2915 14.6891 20.0754 12.75 20.2358V21.2502C12.75 21.6645 12.4142 22.0002 12 22.0002C11.5858 22.0002 11.25 21.6645 11.25 21.2502V20.2358C9.31089 20.0754 7.41327 19.2915 5.87966 17.8843C5.31911 17.37 5 16.6441 5 15.8833V8.00024C5 6.11462 5 5.17182 5.58579 4.58603C6.17157 4.00024 7.11438 4.00024 9 4.00024H15C16.8856 4.00024 17.8284 4.00024 18.4142 4.58603C18.9166 5.08839 18.9881 5.85331 18.9983 7.25024H17C16.5858 7.25024 16.25 7.58603 16.25 8.00024C16.25 8.41446 16.5858 8.75024 17 8.75024H19V10.2502H17C16.5858 10.2502 16.25 10.586 16.25 11.0002C16.25 11.4145 16.5858 11.7502 17 11.7502H19ZM12 14.0002C13.1046 14.0002 14 13.0675 14 11.9169C14 11.197 13.217 10.2361 12.6309 9.61768C12.2839 9.25156 11.7161 9.25156 11.3691 9.61768C10.783 10.2361 10 11.197 10 11.9169C10 13.0675 10.8954 14.0002 12 14.0002Z"
            fill="currentColor"
          />
          <path
            d="M13.7325 3.00025C13.3866 2.40244 12.7403 2.00024 12 2.00024C11.2597 2.00024 10.6134 2.40244 10.2676 3.00025L13.7325 3.00025Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDropperMinimalistic as IconComponent).keywords = [
  "dropper",
  "minimalistic",
  "eye dropper",
  "strainer",
  "sieve",
  "colander",
  "eyedropper",
  "dropperful",
  "dripper",
  "syringe",
  "drops",
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

export default IconDropperMinimalistic as IconComponent;
