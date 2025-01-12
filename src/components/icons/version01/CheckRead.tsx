import { FC } from "react";

const IconCheckRead: FC<IconProps> = ({
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
            d="M4 12.9002L7.14286 16.5002L15 7.50018"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0002 7.56274L11.4286 16.5627L11.0002 16.0002"
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M18.581 9.47456C18.843 9.15369 18.7952 8.68122 18.4743 8.41928C18.1534 8.15733 17.681 8.20511 17.419 8.52598L12.2514 14.8561C12.0385 14.7805 11.7939 14.8017 11.5901 14.9347C11.2432 15.1611 11.1456 15.6258 11.372 15.9727L11.6575 16.4102C11.7883 16.6105 12.0068 16.7365 12.2457 16.7492C12.4846 16.7619 12.7153 16.6599 12.8666 16.4746L18.581 9.47456Z"
            fill="currentColor"
          />
          <path
            d="M14.581 9.47455C14.843 9.15367 14.7952 8.68121 14.4743 8.41927C14.1534 8.15733 13.681 8.20511 13.419 8.52598L8.28574 14.8143L6.58102 12.726C6.31908 12.4051 5.84662 12.3573 5.52574 12.6193C5.20487 12.8812 5.15709 13.3537 5.41903 13.6745L7.70474 16.4745C7.84718 16.649 8.0605 16.7503 8.28574 16.7503C8.51098 16.7503 8.7243 16.649 8.86673 16.4745L14.581 9.47455Z"
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
            d="M12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002ZM14.4743 8.41925C14.7952 8.68119 14.8429 9.15365 14.581 9.47453L8.86671 16.4745C8.72427 16.649 8.51096 16.7502 8.28571 16.7502C8.06047 16.7502 7.84716 16.649 7.70472 16.4745L5.419 13.6745C5.15707 13.3537 5.20484 12.8812 5.52572 12.6192C5.84659 12.3573 6.31906 12.4051 6.581 12.726L8.28571 14.8142L13.419 8.52596C13.6809 8.20509 14.1534 8.15731 14.4743 8.41925ZM18.4743 8.41926C18.7952 8.6812 18.8429 9.15366 18.581 9.47453L12.8665 16.4745C12.7152 16.6599 12.4846 16.7619 12.2457 16.7492C12.0068 16.7365 11.7883 16.6105 11.6575 16.4102L11.3719 15.9727C11.1455 15.6258 11.2432 15.1611 11.5901 14.9347C11.7939 14.8016 12.0384 14.7805 12.2514 14.8561L17.419 8.52595C17.681 8.20508 18.1534 8.15731 18.4743 8.41926Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCheckRead as IconComponent).keywords = [
  "check",
  "read",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
  "study",
  "interpret",
  "learn",
  "say",
  "translate",
  "scan",
  "show",
  "understand",
  "register",
];

export default IconCheckRead as IconComponent;
