import { FC } from "react";

const IconBill: FC<IconProps> = ({
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
            d="M4.33984 2.5V14.47C4.33984 15.45 4.79984 16.38 5.58984 16.97L10.7998 20.87C11.9098 21.7 13.4398 21.7 14.5498 20.87L19.7598 16.97C20.5498 16.38 21.0098 15.45 21.0098 14.47V2.5H4.33984Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M2.66992 2.5H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 8H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 13H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.33984 2.5V14.47C4.33984 15.45 4.79984 16.38 5.58984 16.97L10.7998 20.87C11.9098 21.7 13.4398 21.7 14.5498 20.87L19.7598 16.97C20.5498 16.38 21.0098 15.45 21.0098 14.47V2.5H4.33984Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 3.25H2.66992C2.25992 3.25 1.91992 2.91 1.91992 2.5C1.91992 2.09 2.25992 1.75 2.66992 1.75H22.6699C23.0799 1.75 23.4199 2.09 23.4199 2.5C23.4199 2.91 23.0799 3.25 22.6699 3.25Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 8.75H8.66992C8.25992 8.75 7.91992 8.41 7.91992 8C7.91992 7.59 8.25992 7.25 8.66992 7.25H16.6699C17.0799 7.25 17.4199 7.59 17.4199 8C17.4199 8.41 17.0799 8.75 16.6699 8.75Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 13.75H8.66992C8.25992 13.75 7.91992 13.41 7.91992 13C7.91992 12.59 8.25992 12.25 8.66992 12.25H16.6699C17.0799 12.25 17.4199 12.59 17.4199 13C17.4199 13.41 17.0799 13.75 16.6699 13.75Z"
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
            d="M22.6699 3.25H2.66992C2.25992 3.25 1.91992 2.91 1.91992 2.5C1.91992 2.09 2.25992 1.75 2.66992 1.75H22.6699C23.0799 1.75 23.4199 2.09 23.4199 2.5C23.4199 2.91 23.0799 3.25 22.6699 3.25Z"
            fill="currentColor"
          />
          <path
            d="M4.33984 2.5V14.47C4.33984 15.45 4.79984 16.38 5.58984 16.97L10.7998 20.87C11.9098 21.7 13.4398 21.7 14.5498 20.87L19.7598 16.97C20.5498 16.38 21.0098 15.45 21.0098 14.47V2.5H4.33984ZM16.6698 13.75H8.66984C8.25984 13.75 7.91984 13.41 7.91984 13C7.91984 12.59 8.25984 12.25 8.66984 12.25H16.6698C17.0798 12.25 17.4198 12.59 17.4198 13C17.4198 13.41 17.0798 13.75 16.6698 13.75ZM16.6698 8.75H8.66984C8.25984 8.75 7.91984 8.41 7.91984 8C7.91984 7.59 8.25984 7.25 8.66984 7.25H16.6698C17.0798 7.25 17.4198 7.59 17.4198 8C17.4198 8.41 17.0798 8.75 16.6698 8.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBill as IconComponent).keywords = [
  "bill",
  "billhook",
  "handbill",
  "visor",
  "vizor",
  "flyer",
  "broadside",
  "nib",
  "circular",
  "eyeshade",
];

export default IconBill as IconComponent;
