import { FC } from "react";

const IconRadialBlur: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.33995 16.9997C6.10137 21.7826 12.2173 23.4214 17.0002 20.66C18.9498 19.5344 20.377 17.8514 21.1967 15.9286C22.388 13.1341 22.2963 9.83304 20.6605 6.99972C19.0246 4.1664 16.2117 2.43642 13.196 2.07088C11.1209 1.81935 8.94981 2.21386 7.00021 3.33946C2.21728 6.10089 0.578527 12.2168 3.33995 16.9997Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15.5 14.25C15.5 14.9404 14.9404 15.5 14.25 15.5C13.5596 15.5 13 14.9404 13 14.25C13 13.5596 13.5596 13 14.25 13C14.9404 13 15.5 13.5596 15.5 14.25Z"
            stroke="currentColor"
          />
          <path
            d="M15.5 9.75C15.5 10.4404 14.9404 11 14.25 11C13.5596 11 13 10.4404 13 9.75C13 9.05964 13.5596 8.5 14.25 8.5C14.9404 8.5 15.5 9.05964 15.5 9.75Z"
            stroke="currentColor"
          />
          <path
            d="M11 14.25C11 14.9404 10.4404 15.5 9.75 15.5C9.05964 15.5 8.5 14.9404 8.5 14.25C8.5 13.5596 9.05964 13 9.75 13C10.4404 13 11 13.5596 11 14.25Z"
            stroke="currentColor"
          />
          <path
            d="M11 9.75C11 10.4404 10.4404 11 9.75 11C9.05964 11 8.5 10.4404 8.5 9.75C8.5 9.05964 9.05964 8.5 9.75 8.5C10.4404 8.5 11 9.05964 11 9.75Z"
            stroke="currentColor"
          />
          <path
            d="M15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25Z"
            fill="currentColor"
          />
          <path
            d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z"
            fill="currentColor"
          />
          <path
            d="M15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25Z"
            fill="currentColor"
          />
          <path
            d="M15 5.75C15 6.16421 14.6642 6.5 14.25 6.5C13.8358 6.5 13.5 6.16421 13.5 5.75C13.5 5.33579 13.8358 5 14.25 5C14.6642 5 15 5.33579 15 5.75Z"
            fill="currentColor"
          />
          <path
            d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z"
            fill="currentColor"
          />
          <path
            d="M10.5 5.75C10.5 6.16421 10.1642 6.5 9.75 6.5C9.33579 6.5 9 6.16421 9 5.75C9 5.33579 9.33579 5 9.75 5C10.1642 5 10.5 5.33579 10.5 5.75Z"
            fill="currentColor"
          />
          <path
            d="M18.25 9C18.6642 9 19 9.33579 19 9.75C19 10.1642 18.6642 10.5 18.25 10.5C17.8358 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.8358 9 18.25 9Z"
            fill="currentColor"
          />
          <path
            d="M5.75 9C6.16421 9 6.5 9.33579 6.5 9.75C6.5 10.1642 6.16421 10.5 5.75 10.5C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9Z"
            fill="currentColor"
          />
          <path
            d="M18.25 13.5C18.6642 13.5 19 13.8358 19 14.25C19 14.6642 18.6642 15 18.25 15C17.8358 15 17.5 14.6642 17.5 14.25C17.5 13.8358 17.8358 13.5 18.25 13.5Z"
            fill="currentColor"
          />
          <path
            d="M5.75 13.5C6.16421 13.5 6.5 13.8358 6.5 14.25C6.5 14.6642 6.16421 15 5.75 15C5.33579 15 5 14.6642 5 14.25C5 13.8358 5.33579 13.5 5.75 13.5Z"
            fill="currentColor"
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
          />
          <path
            d="M15.5 9.75C15.5 10.4404 14.9404 11 14.25 11C13.5596 11 13 10.4404 13 9.75C13 9.05964 13.5596 8.5 14.25 8.5C14.9404 8.5 15.5 9.05964 15.5 9.75Z"
            fill="currentColor"
          />
          <path
            d="M11 9.75C11 10.4404 10.4404 11 9.75 11C9.05964 11 8.5 10.4404 8.5 9.75C8.5 9.05964 9.05964 8.5 9.75 8.5C10.4404 8.5 11 9.05964 11 9.75Z"
            fill="currentColor"
          />
          <path
            d="M5.75 9C6.16421 9 6.5 9.33579 6.5 9.75C6.5 10.1642 6.16421 10.5 5.75 10.5C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9Z"
            fill="currentColor"
          />
          <path
            d="M10.5 5.75C10.5 6.16421 10.1642 6.5 9.75 6.5C9.33579 6.5 9 6.16421 9 5.75C9 5.33579 9.33579 5 9.75 5C10.1642 5 10.5 5.33579 10.5 5.75Z"
            fill="currentColor"
          />
          <path
            d="M15 5.75C15 6.16421 14.6642 6.5 14.25 6.5C13.8358 6.5 13.5 6.16421 13.5 5.75C13.5 5.33579 13.8358 5 14.25 5C14.6642 5 15 5.33579 15 5.75Z"
            fill="currentColor"
          />
          <path
            d="M19 9.75C19 9.33579 18.6642 9 18.25 9C17.8358 9 17.5 9.33579 17.5 9.75C17.5 10.1642 17.8358 10.5 18.25 10.5C18.6642 10.5 19 10.1642 19 9.75Z"
            fill="currentColor"
          />
          <path
            d="M19 14.25C19 13.8358 18.6642 13.5 18.25 13.5C17.8358 13.5 17.5 13.8358 17.5 14.25C17.5 14.6642 17.8358 15 18.25 15C18.6642 15 19 14.6642 19 14.25Z"
            fill="currentColor"
          />
          <path
            d="M15.5 14.25C15.5 14.9404 14.9404 15.5 14.25 15.5C13.5596 15.5 13 14.9404 13 14.25C13 13.5596 13.5596 13 14.25 13C14.9404 13 15.5 13.5596 15.5 14.25Z"
            fill="currentColor"
          />
          <path
            d="M9.75 15.5C10.4404 15.5 11 14.9404 11 14.25C11 13.5596 10.4404 13 9.75 13C9.05964 13 8.5 13.5596 8.5 14.25C8.5 14.9404 9.05964 15.5 9.75 15.5Z"
            fill="currentColor"
          />
          <path
            d="M5.75 13.5C6.16421 13.5 6.5 13.8358 6.5 14.25C6.5 14.6642 6.16421 15 5.75 15C5.33579 15 5 14.6642 5 14.25C5 13.8358 5.33579 13.5 5.75 13.5Z"
            fill="currentColor"
          />
          <path
            d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z"
            fill="currentColor"
          />
          <path
            d="M14.25 19C14.6642 19 15 18.6642 15 18.25C15 17.8358 14.6642 17.5 14.25 17.5C13.8358 17.5 13.5 17.8358 13.5 18.25C13.5 18.6642 13.8358 19 14.25 19Z"
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
            d="M16.9997 20.66C12.2168 23.4214 6.10089 21.7826 3.33946 16.9997C0.578039 12.2168 2.21679 6.10089 6.99972 3.33946C8.94932 2.21386 11.1204 1.81935 13.1955 2.07088C16.2112 2.43642 19.0242 4.1664 20.66 6.99972C22.2958 9.83304 22.3875 13.1341 21.1962 15.9286C20.3765 17.8514 18.9493 19.5344 16.9997 20.66ZM14.25 6.5C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5C13.8358 5 13.5 5.33579 13.5 5.75C13.5 6.16421 13.8358 6.5 14.25 6.5ZM14.25 11C14.9404 11 15.5 10.4404 15.5 9.75C15.5 9.05964 14.9404 8.5 14.25 8.5C13.5596 8.5 13 9.05964 13 9.75C13 10.4404 13.5596 11 14.25 11ZM14.25 15.5C14.9404 15.5 15.5 14.9404 15.5 14.25C15.5 13.5596 14.9404 13 14.25 13C13.5596 13 13 13.5596 13 14.25C13 14.9404 13.5596 15.5 14.25 15.5ZM11 14.25C11 14.9404 10.4404 15.5 9.75 15.5C9.05964 15.5 8.5 14.9404 8.5 14.25C8.5 13.5596 9.05964 13 9.75 13C10.4404 13 11 13.5596 11 14.25ZM9.75 11C10.4404 11 11 10.4404 11 9.75C11 9.05964 10.4404 8.5 9.75 8.5C9.05964 8.5 8.5 9.05964 8.5 9.75C8.5 10.4404 9.05964 11 9.75 11ZM15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25ZM9.75 19C10.1642 19 10.5 18.6642 10.5 18.25C10.5 17.8358 10.1642 17.5 9.75 17.5C9.33579 17.5 9 17.8358 9 18.25C9 18.6642 9.33579 19 9.75 19ZM9.75 6.5C10.1642 6.5 10.5 6.16421 10.5 5.75C10.5 5.33579 10.1642 5 9.75 5C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5ZM18.25 9C18.6642 9 19 9.33579 19 9.75C19 10.1642 18.6642 10.5 18.25 10.5C17.8358 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.8358 9 18.25 9ZM6.5 9.75C6.5 9.33579 6.16421 9 5.75 9C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5C6.16421 10.5 6.5 10.1642 6.5 9.75ZM18.25 13.5C18.6642 13.5 19 13.8358 19 14.25C19 14.6642 18.6642 15 18.25 15C17.8358 15 17.5 14.6642 17.5 14.25C17.5 13.8358 17.8358 13.5 18.25 13.5ZM6.5 14.25C6.5 13.8358 6.16421 13.5 5.75 13.5C5.33579 13.5 5 13.8358 5 14.25C5 14.6642 5.33579 15 5.75 15C6.16421 15 6.5 14.6642 6.5 14.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadialBlur as IconComponent).keywords = [
  "radial",
  "blur",
  "stellate",
  "symmetric",
  "symmetrical",
  "radial tire",
  "radial ply tire",
  "cross-sectional",
  "radar",
  "cross",
  "radio",
  "blear",
  "smutch",
  "smudge",
  "glaze over",
  "smear",
  "confuse",
  "obscure",
  "slur",
  "fuzz",
];

export default IconRadialBlur as IconComponent;
