import { FC } from "react";

const IconPointOnMap: FC<IconProps> = ({
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
            d="M18 8.00024L18.9487 8.31647C19.9387 8.64648 20.4337 8.81149 20.7169 9.20432C21 9.59715 21 10.1189 21 11.1625V16.8292C21 18.1201 21 18.7656 20.6603 19.1802C20.5449 19.321 20.4048 19.4397 20.247 19.5303C19.7821 19.7973 19.1455 19.6912 17.8721 19.4789C16.6157 19.2695 15.9875 19.1648 15.3648 19.2169C15.1463 19.2352 14.9292 19.2679 14.715 19.3146C14.1046 19.448 13.5299 19.7353 12.3806 20.3099C10.8809 21.0598 10.131 21.4347 9.33284 21.5503C9.09242 21.5851 8.8498 21.6024 8.60688 21.6019C7.80035 21.6004 7.01186 21.3375 5.43488 20.8119L5.05132 20.684C4.06129 20.354 3.56627 20.189 3.28314 19.7962C3 19.4033 3 18.8815 3 17.838V12.9082C3 11.2494 3 10.4199 3.48841 9.97382C3.57388 9.89576 3.66809 9.82786 3.76917 9.77147C4.34681 9.44918 5.13369 9.71148 6.70746 10.2361"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M6 7.70055C6 4.55236 8.68629 2.00024 12 2.00024C15.3137 2.00024 18 4.55236 18 7.70055C18 10.8241 16.085 14.4689 13.0972 15.7724C12.4007 16.0762 11.5993 16.0762 10.9028 15.7724C7.91499 14.4689 6 10.8241 6 7.70055Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="8.00024"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M3 13.0371C3 11.9341 3 11.3826 3.39264 11.0609C3.53204 10.9467 3.70147 10.8553 3.89029 10.7924C4.42213 10.6153 5.12109 10.7897 6.51901 11.1385C7.58626 11.4048 8.11989 11.538 8.6591 11.5242C8.85714 11.5191 9.05401 11.4994 9.24685 11.4653C9.77191 11.3724 10.2399 11.1388 11.176 10.6717L12.5583 9.98186C13.7574 9.38351 14.3569 9.08434 15.0451 9.01536C15.7333 8.94637 16.4168 9.11693 17.7839 9.45804L18.9487 9.74866C19.9387 9.99568 20.4337 10.1192 20.7169 10.4132C21 10.7073 21 11.0979 21 11.879V17.9634C21 19.0664 21 19.6179 20.6074 19.9396C20.468 20.0538 20.2985 20.1452 20.1097 20.2081C19.5779 20.3852 18.8789 20.2108 17.481 19.862C16.4137 19.5957 15.8801 19.4625 15.3409 19.4763C15.1429 19.4814 14.946 19.5011 14.7532 19.5352C14.2281 19.6281 13.7601 19.8617 12.824 20.3288L11.4417 21.0186C10.2426 21.617 9.64311 21.9161 8.95493 21.9851C8.26674 22.0541 7.58319 21.8836 6.21609 21.5425L5.05132 21.2518C4.06129 21.0048 3.56627 20.8813 3.28314 20.5872C3 20.2932 3 19.9026 3 19.1215V13.0371Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00024C8.68629 2.00024 6 4.55236 6 7.70055C6 10.8241 7.91499 14.4689 10.9028 15.7724C11.5993 16.0762 12.4007 16.0762 13.0972 15.7724C16.085 14.4689 18 10.8241 18 7.70055C18 4.55236 15.3137 2.00024 12 2.00024ZM12 10.0002C13.1046 10.0002 14 9.10481 14 8.00024C14 6.89567 13.1046 6.00024 12 6.00024C10.8954 6.00024 10 6.89567 10 8.00024C10 9.10481 10.8954 10.0002 12 10.0002Z"
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
            d="M21 16.8292V11.1625C21 10.119 21 9.59716 20.7169 9.20433C20.4881 8.887 20.1212 8.71834 19.4667 8.49127C19.3328 10.0975 18.8009 11.7378 17.9655 13.1734C16.9928 14.845 15.5484 16.3396 13.697 17.1472C12.618 17.6179 11.382 17.6179 10.303 17.1472C8.45164 16.3396 7.00718 14.845 6.03449 13.1734C5.40086 12.0845 4.9418 10.8778 4.69862 9.65758C4.31607 9.60123 4.0225 9.63014 3.76917 9.77148C3.66809 9.82788 3.57388 9.89578 3.48841 9.97384C3 10.4199 3 11.2494 3 12.9083V17.838C3 18.8816 3 19.4034 3.28314 19.7962C3.56627 20.189 4.06129 20.354 5.05132 20.684L5.43488 20.8119L5.43489 20.8119C7.01186 21.3375 7.80035 21.6004 8.60688 21.6019C8.8498 21.6024 9.09242 21.5851 9.33284 21.5503C10.131 21.4347 10.8809 21.0598 12.3806 20.3099C13.5299 19.7353 14.1046 19.448 14.715 19.3147C14.9292 19.2679 15.1463 19.2352 15.3648 19.2169C15.9875 19.1648 16.6157 19.2695 17.8721 19.4789C19.1455 19.6912 19.7821 19.7973 20.247 19.5303C20.4048 19.4397 20.5449 19.321 20.6603 19.1802C21 18.7656 21 18.1201 21 16.8292Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00024C8.68629 2.00024 6 4.55236 6 7.70055C6 10.8241 7.91499 14.4689 10.9028 15.7724C11.5993 16.0762 12.4007 16.0762 13.0972 15.7724C16.085 14.4689 18 10.8241 18 7.70055C18 4.55236 15.3137 2.00024 12 2.00024ZM12 10.0002C13.1046 10.0002 14 9.10481 14 8.00024C14 6.89567 13.1046 6.00024 12 6.00024C10.8954 6.00024 10 6.89567 10 8.00024C10 9.10481 10.8954 10.0002 12 10.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPointOnMap as IconComponent).keywords = [
  "point",
  "on",
  "map",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "bps",
  "add",
  "nso",
  "our",
  "bsi",
  "nbs",
  "opti",
  "sno",
  "weap",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
];

export default IconPointOnMap as IconComponent;