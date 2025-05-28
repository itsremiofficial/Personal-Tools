import { FC } from "react";

const IconMobile: FC<IconProps> = ({
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
            d="M20.6699 7V17C20.6699 21 19.6699 22 15.6699 22H9.66992C5.66992 22 4.66992 21 4.66992 17V7C4.66992 3 5.66992 2 9.66992 2H15.6699C19.6699 2 20.6699 3 20.6699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 5.5H10.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6701 19.1C13.5262 19.1 14.2201 18.406 14.2201 17.55C14.2201 16.694 13.5262 16 12.6701 16C11.8141 16 11.1201 16.694 11.1201 17.55C11.1201 18.406 11.8141 19.1 12.6701 19.1Z"
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
            d="M16.9099 2H8.42992C5.66992 2 4.66992 3 4.66992 5.81V18.19C4.66992 21 5.66992 22 8.42992 22H16.8999C19.6699 22 20.6699 21 20.6699 18.19V5.81C20.6699 3 19.6699 2 16.9099 2Z"
            fill="currentColor"
          />
          <path
            d="M14.6699 6.25H10.6699C10.2599 6.25 9.91992 5.91 9.91992 5.5C9.91992 5.09 10.2599 4.75 10.6699 4.75H14.6699C15.0799 4.75 15.4199 5.09 15.4199 5.5C15.4199 5.91 15.0799 6.25 14.6699 6.25Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 19.3C13.6364 19.3 14.4199 18.5165 14.4199 17.55C14.4199 16.5835 13.6364 15.8 12.6699 15.8C11.7034 15.8 10.9199 16.5835 10.9199 17.55C10.9199 18.5165 11.7034 19.3 12.6699 19.3Z"
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
            d="M16.9099 2H8.42992C5.66992 2 4.66992 3 4.66992 5.81V18.19C4.66992 21 5.66992 22 8.42992 22H16.8999C19.6699 22 20.6699 21 20.6699 18.19V5.81C20.6699 3 19.6699 2 16.9099 2ZM12.6699 19.3C11.7099 19.3 10.9199 18.51 10.9199 17.55C10.9199 16.59 11.7099 15.8 12.6699 15.8C13.6299 15.8 14.4199 16.59 14.4199 17.55C14.4199 18.51 13.6299 19.3 12.6699 19.3ZM14.6699 6.25H10.6699C10.2599 6.25 9.91992 5.91 9.91992 5.5C9.91992 5.09 10.2599 4.75 10.6699 4.75H14.6699C15.0799 4.75 15.4199 5.09 15.4199 5.5C15.4199 5.91 15.0799 6.25 14.6699 6.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMobile as IconComponent).keywords = [
  "mobile",
  "transportable",
  "movable",
  "moveable",
  "moving",
  "raiseable",
  "maneuverable",
  "manoeuvrable",
  "raisable",
  "rotatable",
];

export default IconMobile as IconComponent;
