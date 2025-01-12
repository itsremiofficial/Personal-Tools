import { FC } from "react";

const IconTransferVertical: FC<IconProps> = ({
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
            d="M10 4L10 20L4 14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 20L14 4L20 9.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M20 10.25C20.3093 10.25 20.5869 10.0602 20.699 9.77191C20.8111 9.48366 20.7348 9.15614 20.5068 8.94715L14.5068 3.44715C14.2875 3.24617 13.9703 3.19374 13.698 3.3135C13.4258 3.43327 13.25 3.70259 13.25 4.00002L13.25 20C13.25 20.4142 13.5858 20.75 14 20.75C14.4142 20.75 14.75 20.4142 14.75 20L14.75 10.25L20 10.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.00003 13.75L9.25003 13.75L9.25003 4C9.25003 3.58579 9.58581 3.25 10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V20C10.75 20.2974 10.5743 20.5667 10.302 20.6865C10.0298 20.8063 9.71248 20.7538 9.49323 20.5529L3.49324 15.0529C3.26524 14.8439 3.18892 14.5164 3.30105 14.2281C3.41317 13.9399 3.69074 13.75 4.00003 13.75Z"
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
            d="M4.00003 13.75C3.69074 13.75 3.41317 13.9399 3.30105 14.2281C3.18892 14.5164 3.26524 14.8439 3.49324 15.0529L9.49324 20.5529C9.71249 20.7539 10.0298 20.8063 10.302 20.6865C10.5743 20.5668 10.75 20.2974 10.75 20L10.75 4.00002C10.75 3.5858 10.4142 3.25002 10 3.25002C9.58582 3.25002 9.25003 3.5858 9.25003 4.00002V13.75H4.00003Z"
            fill="currentColor"
          />
          <path
            d="M20 10.25L14.75 10.25V20C14.75 20.4142 14.4142 20.75 14 20.75C13.5858 20.75 13.25 20.4142 13.25 20L13.25 4.00002C13.25 3.70259 13.4258 3.43327 13.698 3.3135C13.9703 3.19374 14.2876 3.24617 14.5068 3.44715L20.5068 8.94715C20.7348 9.15614 20.8111 9.48366 20.699 9.77191C20.5869 10.0602 20.3093 10.25 20 10.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTransferVertical as IconComponent).keywords = [
  "transfer",
  "vertical",
  "transference",
  "transport",
  "transpose",
  "change",
  "transferral",
  "reassign",
  "remove",
  "transmit",
  "conveyance",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
];

export default IconTransferVertical as IconComponent;
