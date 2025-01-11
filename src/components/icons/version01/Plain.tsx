import { FC } from "react";

const IconPlain: FC<IconProps> = ({
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
            d="M18.6357 15.6704L20.3521 10.521C21.8516 6.02266 22.6013 3.77347 21.414 2.5862C20.2268 1.39893 17.9776 2.14866 13.4792 3.64812L8.32987 5.36457C4.69923 6.57478 2.88392 7.17988 2.36806 8.06723C1.87731 8.91137 1.87731 9.95393 2.36806 10.7981C2.88392 11.6854 4.69923 12.2905 8.32987 13.5007C8.91282 13.6951 9.2043 13.7922 9.44793 13.9553C9.68404 14.1134 9.88687 14.3162 10.0449 14.5523C10.208 14.7959 10.3052 15.0874 10.4995 15.6704C11.7097 19.301 12.3148 21.1163 13.2022 21.6322C14.0463 22.1229 15.0889 22.1229 15.933 21.6322C16.8204 21.1163 17.4255 19.301 18.6357 15.6704Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.2116 8.84878C16.5061 8.55752 16.5087 8.08265 16.2174 7.78814C15.9262 7.49363 15.4513 7.49099 15.1568 7.78226L16.2116 8.84878ZM10.6626 14.3365L16.2116 8.84878L15.1568 7.78226L9.60787 13.27L10.6626 14.3365Z"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.245 7.76039L21.4166 2.5888L21.414 2.5862C20.2268 1.39893 17.9776 2.14866 13.4792 3.64812L8.32987 5.36457C4.69923 6.57478 2.88392 7.17988 2.36806 8.06723C1.87731 8.91137 1.87731 9.95393 2.36806 10.7981C2.88392 11.6854 4.69923 12.2905 8.32987 13.5007C8.77981 13.6507 9.28601 13.5436 9.62294 13.2098L15.1286 7.7552C15.4383 7.44833 15.9382 7.45065 16.245 7.76039Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.6356 15.6697L20.3521 10.5204C21.8505 6.02528 22.6002 3.77609 21.4166 2.58813L16.245 7.75973C16.5519 8.06947 16.5495 8.56933 16.2398 8.8762L10.8231 14.2428C10.4517 14.6107 10.3342 15.1738 10.4995 15.6697C11.7097 19.3003 12.3148 21.1157 13.2021 21.6315C14.0463 22.1223 15.0888 22.1223 15.933 21.6315C16.8203 21.1157 17.4254 19.3003 18.6356 15.6697Z"
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
            d="M18.6357 15.6704L20.3521 10.521C21.8516 6.02266 22.6013 3.77347 21.414 2.5862C20.2268 1.39893 17.9776 2.14866 13.4792 3.64812L8.32987 5.36457C4.69923 6.57478 2.88392 7.17988 2.36806 8.06723C1.87731 8.91137 1.87731 9.95393 2.36806 10.7981C2.88392 11.6854 4.69923 12.2905 8.32987 13.5007C8.77981 13.6507 9.28601 13.5436 9.62294 13.2098L15.1286 7.7552C15.4383 7.44833 15.9382 7.45065 16.245 7.76039C16.5519 8.07014 16.5496 8.57 16.2398 8.87687L10.8231 14.2434C10.4518 14.6113 10.3342 15.1745 10.4995 15.6704C11.7097 19.301 12.3148 21.1163 13.2022 21.6322C14.0463 22.1229 15.0889 22.1229 15.933 21.6322C16.8204 21.1163 17.4255 19.301 18.6357 15.6704Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlain as IconComponent).keywords = [
  "plain",
  "self-coloured",
  "solid",
  "trim",
  "homely",
  "mere",
  "kick",
  "tailored",
  "sheer",
  "apparent",
];

export default IconPlain as IconComponent;