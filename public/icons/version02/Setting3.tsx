import { FC } from "react";

const IconSetting3: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M16.2402 18.4996V14.5996"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2402 7.45V5.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2396 12.6502C17.6756 12.6502 18.8396 11.4861 18.8396 10.0502C18.8396 8.61426 17.6756 7.4502 16.2396 7.4502C14.8037 7.4502 13.6396 8.61426 13.6396 10.0502C13.6396 11.4861 14.8037 12.6502 16.2396 12.6502Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09961 18.4998V16.5498"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09961 9.4V5.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.1 16.5496C10.5359 16.5496 11.7 15.3855 11.7 13.9496C11.7 12.5137 10.5359 11.3496 9.1 11.3496C7.66406 11.3496 6.5 12.5137 6.5 13.9496C6.5 15.3855 7.66406 16.5496 9.1 16.5496Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M16.25 19.2501C15.84 19.2501 15.5 18.9101 15.5 18.5001V14.6001C15.5 14.1901 15.84 13.8501 16.25 13.8501C16.66 13.8501 17 14.1901 17 14.6001V18.5001C17 18.9101 16.66 19.2501 16.25 19.2501Z"
            fill="currentColor"
          />
          <path
            d="M16.25 8.2C15.84 8.2 15.5 7.86 15.5 7.45V5.5C15.5 5.09 15.84 4.75 16.25 4.75C16.66 4.75 17 5.09 17 5.5V7.45C17 7.86 16.66 8.2 16.25 8.2Z"
            fill="currentColor"
          />
          <path
            d="M9.08984 19.2498C8.67984 19.2498 8.33984 18.9098 8.33984 18.4998V16.5498C8.33984 16.1398 8.67984 15.7998 9.08984 15.7998C9.49984 15.7998 9.83984 16.1398 9.83984 16.5498V18.4998C9.83984 18.9098 9.50984 19.2498 9.08984 19.2498Z"
            fill="currentColor"
          />
          <path
            d="M9.08984 10.15C8.67984 10.15 8.33984 9.81 8.33984 9.4V5.5C8.33984 5.09 8.67984 4.75 9.08984 4.75C9.49984 4.75 9.83984 5.09 9.83984 5.5V9.4C9.83984 9.81 9.50984 10.15 9.08984 10.15Z"
            fill="currentColor"
          />
          <path
            d="M16.25 7.33008C14.75 7.33008 13.52 8.55008 13.52 10.0501C13.52 11.5501 14.74 12.7801 16.25 12.7801C17.75 12.7801 18.97 11.5601 18.97 10.0501C18.97 8.54008 17.75 7.33008 16.25 7.33008Z"
            fill="currentColor"
          />
          <path
            d="M9.09012 11.23C7.59012 11.23 6.37012 12.45 6.37012 13.96C6.37012 15.47 7.59012 16.68 9.09012 16.68C10.5901 16.68 11.8201 15.46 11.8201 13.96C11.8201 12.46 10.6001 11.23 9.09012 11.23Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM8.33992 5.5C8.33992 5.09 8.67992 4.75 9.08992 4.75C9.49992 4.75 9.83992 5.09 9.83992 5.5V9.4C9.83992 9.81 9.49992 10.15 9.08992 10.15C8.67992 10.15 8.33992 9.81 8.33992 9.4V5.5ZM10.1927 16.4313C9.9893 16.5216 9.83992 16.7132 9.83992 16.9358V18.5C9.83992 18.91 9.49992 19.25 9.08992 19.25C8.67992 19.25 8.33992 18.91 8.33992 18.5V16.9358C8.33992 16.7132 8.19052 16.5216 7.98715 16.4311C7.03268 16.0064 6.36992 15.058 6.36992 13.95C6.36992 12.45 7.58992 11.22 9.08992 11.22C10.5899 11.22 11.8199 12.44 11.8199 13.95C11.8199 15.0582 11.1491 16.0066 10.1927 16.4313ZM16.9999 18.5C16.9999 18.91 16.6599 19.25 16.2499 19.25C15.8399 19.25 15.4999 18.91 15.4999 18.5V14.6C15.4999 14.19 15.8399 13.85 16.2499 13.85C16.6599 13.85 16.9999 14.19 16.9999 14.6V18.5ZM16.2499 12.77C14.7499 12.77 13.5199 11.55 13.5199 10.04C13.5199 8.93185 14.1908 7.98342 15.1471 7.55873C15.3505 7.46839 15.4999 7.27681 15.4999 7.05421V5.5C15.4999 5.09 15.8399 4.75 16.2499 4.75C16.6599 4.75 16.9999 5.09 16.9999 5.5V7.06421C16.9999 7.28681 17.1493 7.47835 17.3527 7.56885C18.3072 7.9936 18.9699 8.94195 18.9699 10.05C18.9699 11.55 17.7499 12.77 16.2499 12.77Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting3 as IconComponent).keywords = [
  "setting",
  "3",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconSetting3 as IconComponent;
