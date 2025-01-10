import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapPointAdd: FC<IconProps> = ({
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
            d="M4 10.1435C4 5.64612 7.58172 2.00024 12 2.00024C16.4183 2.00024 20 5.64612 20 10.1435C20 14.6057 17.4467 19.8127 13.4629 21.6747C12.5343 22.1088 11.4657 22.1088 10.5371 21.6747C6.55332 19.8127 4 14.6057 4 10.1435Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9.5 10.0002H14.5M12 12.5002L12 7.50024"
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
            d="M10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747Z"
            fill="currentColor"
          />
          <path
            d="M12.75 7.50024C12.75 7.08603 12.4142 6.75024 12 6.75024C11.5858 6.75024 11.25 7.08603 11.25 7.50024V9.25024H9.5C9.08579 9.25024 8.75 9.58603 8.75 10.0002C8.75 10.4145 9.08579 10.7502 9.5 10.7502H11.25V12.5002C11.25 12.9145 11.5858 13.2502 12 13.2502C12.4142 13.2502 12.75 12.9145 12.75 12.5002V10.7502H14.5C14.9142 10.7502 15.25 10.4145 15.25 10.0002C15.25 9.58603 14.9142 9.25024 14.5 9.25024H12.75V7.50024Z"
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
            d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM12 6.75024C12.4142 6.75024 12.75 7.08603 12.75 7.50024V9.25024H14.5C14.9142 9.25024 15.25 9.58603 15.25 10.0002C15.25 10.4145 14.9142 10.7502 14.5 10.7502H12.75V12.5002C12.75 12.9145 12.4142 13.2502 12 13.2502C11.5858 13.2502 11.25 12.9145 11.25 12.5002V10.7502H9.5C9.08579 10.7502 8.75 10.4145 8.75 10.0002C8.75 9.58603 9.08579 9.25024 9.5 9.25024H11.25V7.50024C11.25 7.08603 11.5858 6.75024 12 6.75024Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointAdd as IconComponentType).keywords = [
  "map",
  "point",
  "add",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconMapPointAdd as IconComponentType;
