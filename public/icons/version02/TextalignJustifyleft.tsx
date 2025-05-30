import { FC } from "react";

const IconTextalignJustifyleft: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.6719 4.5H3.67188"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6719 9.5H3.67188"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6719 14.5H3.67188"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6719 19.5H3.67188"
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
            d="M12.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H12.6719C13.0819 3.75 13.4219 4.09 13.4219 4.5C13.4219 4.91 13.0819 5.25 12.6719 5.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6719 10.25H3.67188C3.26188 10.25 2.92188 9.91 2.92188 9.5C2.92188 9.09 3.26188 8.75 3.67188 8.75H12.6719C13.0819 8.75 13.4219 9.09 13.4219 9.5C13.4219 9.91 13.0819 10.25 12.6719 10.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6719 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H21.6719C22.0819 18.75 22.4219 19.09 22.4219 19.5C22.4219 19.91 22.0819 20.25 21.6719 20.25Z"
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
            d="M12.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H12.6719C13.0819 3.75 13.4219 4.09 13.4219 4.5C13.4219 4.91 13.0819 5.25 12.6719 5.25Z"
            fill="currentColor"
          />
          <path
            d="M12.6719 10.25H3.67188C3.26188 10.25 2.92188 9.91 2.92188 9.5C2.92188 9.09 3.26188 8.75 3.67188 8.75H12.6719C13.0819 8.75 13.4219 9.09 13.4219 9.5C13.4219 9.91 13.0819 10.25 12.6719 10.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H21.6719C22.0819 18.75 22.4219 19.09 22.4219 19.5C22.4219 19.91 22.0819 20.25 21.6719 20.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextalignJustifyleft as IconComponent).keywords = [
  "textalign",
  "justifyleft",
];

export default IconTextalignJustifyleft as IconComponent;
