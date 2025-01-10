import { FC } from "react";

const IconCassette: FC<IconProps> = ({
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
            d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.5 13.75C13.5 12.5074 14.5074 11.5 15.75 11.5C16.9926 11.5 18 12.5074 18 13.75C18 14.9926 16.9926 16 15.75 16C14.5074 16 13.5 14.9926 13.5 13.75Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 13.75C6 12.5074 7.00736 11.5 8.25 11.5C9.49264 11.5 10.5 12.5074 10.5 13.75C10.5 14.9926 9.49264 16 8.25 16C7.00736 16 6 14.9926 6 13.75Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17.5 4.5L16.9733 5.90449C16.5025 7.15997 16.2671 7.7877 15.7532 8.14385C15.2393 8.5 14.5688 8.5 13.228 8.5H10.772C9.43116 8.5 8.76073 8.5 8.24681 8.14385C7.73289 7.7877 7.49749 7.15997 7.02669 5.90449L6.5 4.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 4V8.5"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4V8H10.772C9.43116 8 8.76073 8 8.24681 7.64385C7.73289 7.2877 7.49749 6.65997 7.02669 5.40449L6.5 4H12Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M16.9733 5.40449L17.5 4H12V8H13.228C14.5688 8 15.2393 8 15.7532 7.64385C16.2671 7.2877 16.5025 6.65997 16.9733 5.40449Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 5.17138C2 6.34295 2 8.22857 2 11.9998C2 15.771 2 17.6567 3.17157 18.8282C4.34315 19.9998 6.22876 19.9998 10 19.9998H14C17.7712 19.9998 19.6569 19.9998 20.8284 18.8282C22 17.6567 22 15.771 22 11.9998C22 8.22857 22 6.34295 20.8284 5.17138C20.0914 4.43431 19.0717 4.16095 17.4776 4.05957L16.9733 5.4043C16.5025 6.65977 16.2671 7.28751 15.7532 7.64366C15.2393 7.99981 14.5688 7.99981 13.228 7.99981H10.772C9.43116 7.99981 8.76073 7.99981 8.24681 7.64366C7.73289 7.28751 7.49749 6.65978 7.02669 5.40431L6.52241 4.05957C4.92835 4.16095 3.90865 4.43431 3.17157 5.17138ZM8.25 11.5C7.00736 11.5 6 12.5074 6 13.75C6 14.9926 7.00736 16 8.25 16C9.49264 16 10.5 14.9926 10.5 13.75C10.5 12.5074 9.49264 11.5 8.25 11.5ZM15.75 11.5C14.5074 11.5 13.5 12.5074 13.5 13.75C13.5 14.9926 14.5074 16 15.75 16C16.9926 16 18 14.9926 18 13.75C18 12.5074 16.9926 11.5 15.75 11.5Z"
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
            d="M10 4H11.2498V7.75H10.7718C10.0846 7.75 9.63052 7.74892 9.28215 7.7101C8.95249 7.67336 8.79169 7.60912 8.67378 7.52741C8.55586 7.44569 8.43926 7.31769 8.2891 7.02191C8.13043 6.70936 7.97 6.28461 7.7287 5.64115L7.12455 4.03008C7.93898 4 8.88743 4 10 4Z"
            fill="currentColor"
          />
          <path
            d="M15.75 12.25C14.9216 12.25 14.25 12.9216 14.25 13.75C14.25 14.5784 14.9216 15.25 15.75 15.25C16.5784 15.25 17.25 14.5784 17.25 13.75C17.25 12.9216 16.5784 12.25 15.75 12.25Z"
            fill="currentColor"
          />
          <path
            d="M6.75 13.75C6.75 12.9216 7.42157 12.25 8.25 12.25C9.07843 12.25 9.75 12.9216 9.75 13.75C9.75 14.5784 9.07843 15.25 8.25 15.25C7.42157 15.25 6.75 14.5784 6.75 13.75Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 5.17157C3.7497 4.59344 4.50171 4.3006 5.56837 4.15226L6.33839 6.20566C6.56168 6.80115 6.75063 7.30507 6.95159 7.70092C7.16532 8.12192 7.42338 8.48586 7.81938 8.7603C8.21539 9.03473 8.64677 9.14857 9.11601 9.20087C9.55723 9.25004 10.0954 9.25002 10.7314 9.25H13.2682C13.9042 9.25002 14.4423 9.25004 14.8835 9.20087C15.3528 9.14857 15.7841 9.03473 16.1802 8.7603C16.5762 8.48586 16.8342 8.12192 17.0479 7.70092C17.2489 7.30507 17.4378 6.80118 17.6611 6.2057L18.4312 4.1522C19.4981 4.30052 20.2502 4.59336 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157ZM12.75 13.75C12.75 12.0931 14.0931 10.75 15.75 10.75C17.4069 10.75 18.75 12.0931 18.75 13.75C18.75 15.4069 17.4069 16.75 15.75 16.75C14.0931 16.75 12.75 15.4069 12.75 13.75ZM8.25 10.75C6.59315 10.75 5.25 12.0931 5.25 13.75C5.25 15.4069 6.59315 16.75 8.25 16.75C9.90685 16.75 11.25 15.4069 11.25 13.75C11.25 12.0931 9.90685 10.75 8.25 10.75Z"
            fill="currentColor"
          />
          <path
            d="M16.875 4.03006C16.0607 4 15.1124 4 14 4H12.7498V7.75H13.2278C13.915 7.75 14.369 7.74892 14.7174 7.7101C15.0471 7.67336 15.2078 7.60912 15.3258 7.52741C15.4437 7.44569 15.5603 7.31769 15.7104 7.02191C15.8691 6.70936 16.0295 6.28461 16.2708 5.64115L16.875 4.03006Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCassette as IconComponent).keywords = [
  "cassette",
  "audiotape",
  "videotape",
  "video",
  "wiretap",
  "inbox",
  "ink",
  "audio",
  "rack",
  "tape",
];

export default IconCassette as IconComponent;
