import { FC } from "react";

const IconShapes: FC<IconProps> = ({
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
            d="M17.6396 12.25V16.75C17.6396 20.5 16.1396 22 12.3896 22H7.88965C4.13965 22 2.63965 20.5 2.63965 16.75V12.25C2.63965 8.5 4.13965 7 7.88965 7H12.3896C16.1396 7 17.6396 8.5 17.6396 12.25Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6399 7.5C22.6399 10.37 20.4499 12.72 17.6399 12.97V12.25C17.6399 8.5 16.1399 7 12.3899 7H11.6699C11.9199 4.19 14.2699 2 17.1399 2C19.9299 2 22.2299 4.07 22.5799 6.77C22.6199 7 22.6399 7.25 22.6399 7.5Z"
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
            d="M12.4199 7H11.6699H7.66992C4.90992 7 2.66992 9.24 2.66992 12V17C2.66992 19.76 4.90992 22 7.66992 22H12.6699C15.4299 22 17.6699 19.76 17.6699 17V13V12.25C17.6699 9.35 15.3199 7 12.4199 7Z"
            fill="currentColor"
          />
          <path
            d="M17.1702 2C14.3002 2 11.9502 4.2 11.7002 7H12.4202C15.3202 7 17.6702 9.35 17.6702 12.25V12.97C20.4702 12.72 22.6702 10.36 22.6702 7.5C22.6702 4.46 20.2102 2 17.1702 2Z"
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
            d="M12.4199 7H11.6699H7.66992C4.90992 7 2.66992 9.24 2.66992 12V17C2.66992 19.76 4.90992 22 7.66992 22H12.6699C15.4299 22 17.6699 19.76 17.6699 17V13V12.25C17.6699 9.35 15.3199 7 12.4199 7Z"
            fill="currentColor"
          />
          <path
            d="M22.5496 6.33008C23.0741 8.88967 21.8318 11.212 19.8287 12.3057C19.5211 12.4737 19.1696 12.2341 19.1696 11.8836V11.7501C19.1696 8.31008 16.3596 5.50008 12.9196 5.50008H12.786C12.4356 5.50008 12.1959 5.14855 12.3639 4.84094C13.4576 2.83786 15.78 1.5955 18.3396 2.12008C20.4296 2.55008 22.1196 4.24008 22.5496 6.33008Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShapes as IconComponent).keywords = [
  "shapes",
  "form",
  "determine",
  "pattern",
  "embodiment",
  "influence",
  "frame",
  "configuration",
  "build",
  "regulate",
];

export default IconShapes as IconComponent;
