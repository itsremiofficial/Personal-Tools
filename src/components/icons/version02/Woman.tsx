import { FC } from "react";

const IconWoman: FC<IconProps> = ({
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
            d="M12.6699 16C16.5359 16 19.6699 12.866 19.6699 9C19.6699 5.13401 16.5359 2 12.6699 2C8.80393 2 5.66992 5.13401 5.66992 9C5.66992 12.866 8.80393 16 12.6699 16Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 16V22"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6699 19H9.66992"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M19.6699 9C19.6699 12.62 16.9299 15.59 13.4199 15.96C13.1699 15.99 12.9199 16 12.6699 16C12.4199 16 12.1699 15.99 11.9199 15.96C8.40992 15.59 5.66992 12.62 5.66992 9C5.66992 5.13 8.79992 2 12.6699 2C16.5399 2 19.6699 5.13 19.6699 9Z"
            fill="currentColor"
          />
          <path
            d="M16.4199 19C16.4199 19.41 16.0799 19.75 15.6699 19.75H13.4199V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V19.75H9.66992C9.25992 19.75 8.91992 19.41 8.91992 19C8.91992 18.59 9.25992 18.25 9.66992 18.25H11.9199V15.96C12.1699 15.99 12.4199 16 12.6699 16C12.9199 16 13.1699 15.99 13.4199 15.96V18.25H15.6699C16.0799 18.25 16.4199 18.59 16.4199 19Z"
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
            d="M19.6699 9C19.6699 5.13 16.5399 2 12.6699 2C8.79992 2 5.66992 5.13 5.66992 9C5.66992 12.62 8.40992 15.59 11.9199 15.96V18.25H9.66992C9.25992 18.25 8.91992 18.59 8.91992 19C8.91992 19.41 9.25992 19.75 9.66992 19.75H11.9199V22C11.9199 22.41 12.2599 22.75 12.6699 22.75C13.0799 22.75 13.4199 22.41 13.4199 22V19.75H15.6699C16.0799 19.75 16.4199 19.41 16.4199 19C16.4199 18.59 16.0799 18.25 15.6699 18.25H13.4199V15.96C16.9299 15.59 19.6699 12.62 19.6699 9Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWoman as IconComponent).keywords = [
  "woman",
  "lady",
  "girl",
  "mother",
  "person",
  "female",
  "husband",
  "wife",
  "womon",
  "businesswoman",
];

export default IconWoman as IconComponent;
