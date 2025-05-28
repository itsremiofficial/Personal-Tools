import { FC } from "react";

const IconRecord: FC<IconProps> = ({
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
            d="M21 11.5001C21 13.4331 19.433 15.0001 17.5 15.0001C15.567 15.0001 14 13.4331 14 11.5001C14 9.56713 15.567 8.00012 17.5 8.00012C19.433 8.00012 21 9.56713 21 11.5001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 11.5001C10 13.4331 8.433 15.0001 6.5 15.0001C4.567 15.0001 3 13.4331 3 11.5001C3 9.56713 4.567 8.00012 6.5 8.00012C8.433 8.00012 10 9.56713 10 11.5001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.5 15.0001H17.5"
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
            d="M22 12.0001C22 14.2093 20.2091 16.0001 18 16.0001C15.7909 16.0001 14 14.2093 14 12.0001C14 9.79098 15.7909 8.00012 18 8.00012C20.2091 8.00012 22 9.79098 22 12.0001Z"
            fill="currentColor"
          />
          <path
            d="M10 12.0001C10 14.2093 8.20914 16.0001 6 16.0001C3.79086 16.0001 2 14.2093 2 12.0001C2 9.79098 3.79086 8.00012 6 8.00012C8.20914 8.00012 10 9.79098 10 12.0001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 16.0001H18C16.9856 16.0001 16.0593 15.6225 15.3542 15.0001H8.64582C7.94069 15.6225 7.01445 16.0001 6 16.0001Z"
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
            d="M5.88889 16.0001C3.74111 16.0001 2 14.2093 2 12.0001C2 9.79098 3.74111 8.00012 5.88889 8.00012C8.03666 8.00012 9.77778 9.79098 9.77778 12.0001C9.77778 12.85 9.5201 13.6379 9.08073 14.2858H14.9193C14.4799 13.6379 14.2222 12.85 14.2222 12.0001C14.2222 9.79098 15.9633 8.00012 18.1111 8.00012C20.2589 8.00012 22 9.79098 22 12.0001C22 14.2093 20.2589 16.0001 18.1111 16.0001H5.88889Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecord as IconComponent).keywords = [
  "record",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate",
];

export default IconRecord as IconComponent;
