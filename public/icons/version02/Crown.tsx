import { FC } from "react";

const IconCrown: FC<IconProps> = ({
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
            d="M2.66992 15.29V5.71C2.66992 4.38 3.43992 4.06 4.37992 5L6.96992 7.59C7.35992 7.98 7.99992 7.98 8.37992 7.59L11.9599 4C12.3499 3.61 12.9899 3.61 13.3699 4L16.9599 7.59C17.3499 7.98 17.9899 7.98 18.3699 7.59L20.9599 5C21.8999 4.06 22.6699 4.38 22.6699 5.71V15.3C22.6699 18.3 20.6699 20.3 17.6699 20.3H7.66992C4.90992 20.29 2.66992 18.05 2.66992 15.29Z"
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
            d="M22.6702 5.71V15.29C22.6702 18.05 20.4302 20.29 17.6702 20.29H7.67024C7.21024 20.29 6.77024 20.23 6.34024 20.11C5.72024 19.94 5.52024 19.15 5.98024 18.69L16.6102 8.06C16.8302 7.84 17.1602 7.79 17.4702 7.85C17.7902 7.91 18.1402 7.82 18.3902 7.58L20.9602 5C21.9002 4.06 22.6702 4.37 22.6702 5.71Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.3099 7.36L4.83992 17.83C4.35992 18.31 3.55992 18.19 3.23992 17.59C2.86992 16.91 2.66992 16.12 2.66992 15.29V5.71C2.66992 4.37 3.43992 4.06 4.37992 5L6.95992 7.59C7.34992 7.97 7.98992 7.97 8.37992 7.59L11.9599 4C12.3499 3.61 12.9899 3.61 13.3799 4L15.3199 5.94C15.6999 6.33 15.6999 6.97 15.3099 7.36Z"
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
            d="M22.6702 5.71V15.29C22.6702 18.05 20.4302 20.29 17.6702 20.29H7.67024C7.21024 20.29 6.77024 20.23 6.34024 20.11C5.72024 19.94 5.52024 19.15 5.98024 18.69L16.6102 8.06C16.8302 7.84 17.1602 7.79 17.4702 7.85C17.7902 7.91 18.1402 7.82 18.3902 7.58L20.9602 5C21.9002 4.06 22.6702 4.37 22.6702 5.71Z"
            fill="currentColor"
          />
          <path
            d="M15.3099 7.36L4.83992 17.83C4.35992 18.31 3.55992 18.19 3.23992 17.59C2.86992 16.91 2.66992 16.12 2.66992 15.29V5.71C2.66992 4.37 3.43992 4.06 4.37992 5L6.95992 7.59C7.34992 7.97 7.98992 7.97 8.37992 7.59L11.9599 4C12.3499 3.61 12.9899 3.61 13.3799 4L15.3199 5.94C15.6999 6.33 15.6999 6.97 15.3099 7.36Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCrown as IconComponent).keywords = [
  "crown",
  "diadem",
  "coronate",
  "pate",
  "tip",
  "crest",
  "summit",
  "top",
  "peak",
  "treetop",
];

export default IconCrown as IconComponent;
