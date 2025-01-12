import { FC } from "react";

const IconElement2: FC<IconProps> = ({
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
            d="M11.1699 19.9V4.1C11.1699 2.6 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.6 2.66992 4.1V19.9C2.66992 21.4 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.4 11.1699 19.9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 19.77V15.73C22.6699 14.14 22.0299 13.5 20.4399 13.5H16.3999C14.8099 13.5 14.1699 14.14 14.1699 15.73V19.77C14.1699 21.36 14.8099 22 16.3999 22H20.4399C22.0299 22 22.6699 21.36 22.6699 19.77Z"
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
            d="M11.6699 19.9V4.1C11.6699 2.6 11.0299 2 9.43992 2H5.39992C3.80992 2 3.16992 2.6 3.16992 4.1V19.9C3.16992 21.4 3.80992 22 5.39992 22H9.43992C11.0299 22 11.6699 21.4 11.6699 19.9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.1699 19.64V15.36C22.1699 14.06 21.1699 13 19.9399 13H15.8999C14.6699 13 13.6699 14.06 13.6699 15.36V19.64C13.6699 20.94 14.6699 22 15.8999 22H19.9399C21.1699 22 22.1699 20.94 22.1699 19.64Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.1699 8.64V4.36C22.1699 3.06 21.1699 2 19.9399 2H15.8999C14.6699 2 13.6699 3.06 13.6699 4.36V8.64C13.6699 9.94 14.6699 11 15.8999 11H19.9399C21.1699 11 22.1699 9.94 22.1699 8.64Z"
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
            d="M11.6699 19.9V4.1C11.6699 2.6 11.0299 2 9.43992 2H5.39992C3.80992 2 3.16992 2.6 3.16992 4.1V19.9C3.16992 21.4 3.80992 22 5.39992 22H9.43992C11.0299 22 11.6699 21.4 11.6699 19.9Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 19.64V15.36C22.1699 14.06 21.1699 13 19.9399 13H15.8999C14.6699 13 13.6699 14.06 13.6699 15.36V19.64C13.6699 20.94 14.6699 22 15.8999 22H19.9399C21.1699 22 22.1699 20.94 22.1699 19.64Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 8.64V4.36C22.1699 3.06 21.1699 2 19.9399 2H15.8999C14.6699 2 13.6699 3.06 13.6699 4.36V8.64C13.6699 9.94 14.6699 11 15.8999 11H19.9399C21.1699 11 22.1699 9.94 22.1699 8.64Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElement2 as IconComponent).keywords = [
  "element",
  "2",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconElement2 as IconComponent;
