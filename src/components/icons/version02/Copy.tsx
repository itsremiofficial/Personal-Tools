import { FC } from "react";

const IconCopy: FC<IconProps> = ({
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
            d="M16.6699 12.9V17.1C16.6699 20.6 15.2699 22 11.7699 22H7.56992C4.06992 22 2.66992 20.6 2.66992 17.1V12.9C2.66992 9.4 4.06992 8 7.56992 8H11.7699C15.2699 8 16.6699 9.4 16.6699 12.9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 6.9V11.1C22.6699 14.6 21.2699 16 17.7699 16H16.6699V12.9C16.6699 9.4 15.2699 8 11.7699 8H8.66992V6.9C8.66992 3.4 10.0699 2 13.5699 2H17.7699C21.2699 2 22.6699 3.4 22.6699 6.9Z"
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
            d="M16.6699 12.9V17.1C16.6699 20.6 15.2699 22 11.7699 22H7.56992C4.06992 22 2.66992 20.6 2.66992 17.1V12.9C2.66992 9.4 4.06992 8 7.56992 8H11.7699C15.2699 8 16.6699 9.4 16.6699 12.9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.7697 2H13.5697C10.1197 2 8.71969 3.37 8.67969 6.75H11.7697C15.9697 6.75 17.9197 8.7 17.9197 12.9V15.99C21.2997 15.95 22.6697 14.55 22.6697 11.1V6.9C22.6697 3.4 21.2697 2 17.7697 2Z"
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
            d="M16.6699 12.9V17.1C16.6699 20.6 15.2699 22 11.7699 22H7.56992C4.06992 22 2.66992 20.6 2.66992 17.1V12.9C2.66992 9.4 4.06992 8 7.56992 8H11.7699C15.2699 8 16.6699 9.4 16.6699 12.9Z"
            fill="currentColor"
          />
          <path
            d="M17.7697 2H13.5697C10.4866 2 9.04066 3.09409 8.73943 5.73901C8.67641 6.29235 9.13468 6.75 9.69159 6.75H11.7697C15.9697 6.75 17.9197 8.7 17.9197 12.9V14.9781C17.9197 15.535 18.3773 15.9933 18.9307 15.9303C21.5756 15.629 22.6697 14.1831 22.6697 11.1V6.9C22.6697 3.4 21.2697 2 17.7697 2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCopy as IconComponent).keywords = [
  "copy",
  "simulate",
  "transcript",
  "imitate",
  "emulate",
  "re-create",
  "ape",
  "written matter",
  "replicate",
  "replica",
];

export default IconCopy as IconComponent;
