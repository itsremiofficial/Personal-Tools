import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSetting2: FC<IconProps> = ({
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
            opacity={duotone ? "0.34" : "1"}
            d="M12.6699 15C14.3268 15 15.6699 13.6569 15.6699 12C15.6699 10.3431 14.3268 9 12.6699 9C11.0131 9 9.66992 10.3431 9.66992 12C9.66992 13.6569 11.0131 15 12.6699 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 12.8799V11.1199C2.66992 10.0799 3.51992 9.21994 4.56992 9.21994C6.37992 9.21994 7.11992 7.93994 6.20992 6.36994C5.68992 5.46994 5.99992 4.29994 6.90992 3.77994L8.63992 2.78994C9.42992 2.31994 10.4499 2.59994 10.9199 3.38994L11.0299 3.57994C11.9299 5.14994 13.4099 5.14994 14.3199 3.57994L14.4299 3.38994C14.8999 2.59994 15.9199 2.31994 16.7099 2.78994L18.4399 3.77994C19.3499 4.29994 19.6599 5.46994 19.1399 6.36994C18.2299 7.93994 18.9699 9.21994 20.7799 9.21994C21.8199 9.21994 22.6799 10.0699 22.6799 11.1199V12.8799C22.6799 13.9199 21.8299 14.7799 20.7799 14.7799C18.9699 14.7799 18.2299 16.0599 19.1399 17.6299C19.6599 18.5399 19.3499 19.6999 18.4399 20.2199L16.7099 21.2099C15.9199 21.6799 14.8999 21.3999 14.4299 20.6099L14.3199 20.4199C13.4199 18.8499 11.9399 18.8499 11.0299 20.4199L10.9199 20.6099C10.4499 21.3999 9.42992 21.6799 8.63992 21.2099L6.90992 20.2199C5.99992 19.6999 5.68992 18.5299 6.20992 17.6299C7.11992 16.0599 6.37992 14.7799 4.56992 14.7799C3.51992 14.7799 2.66992 13.9199 2.66992 12.8799Z"
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
            d="M2.66992 12.8799V11.1199C2.66992 10.0799 3.51992 9.21994 4.56992 9.21994C6.37992 9.21994 7.11992 7.93994 6.20992 6.36994C5.68992 5.46994 5.99992 4.29994 6.90992 3.77994L8.63992 2.78994C9.42992 2.31994 10.4499 2.59994 10.9199 3.38994L11.0299 3.57994C11.9299 5.14994 13.4099 5.14994 14.3199 3.57994L14.4299 3.38994C14.8999 2.59994 15.9199 2.31994 16.7099 2.78994L18.4399 3.77994C19.3499 4.29994 19.6599 5.46994 19.1399 6.36994C18.2299 7.93994 18.9699 9.21994 20.7799 9.21994C21.8199 9.21994 22.6799 10.0699 22.6799 11.1199V12.8799C22.6799 13.9199 21.8299 14.7799 20.7799 14.7799C18.9699 14.7799 18.2299 16.0599 19.1399 17.6299C19.6599 18.5399 19.3499 19.6999 18.4399 20.2199L16.7099 21.2099C15.9199 21.6799 14.8999 21.3999 14.4299 20.6099L14.3199 20.4199C13.4199 18.8499 11.9399 18.8499 11.0299 20.4199L10.9199 20.6099C10.4499 21.3999 9.42992 21.6799 8.63992 21.2099L6.90992 20.2199C5.99992 19.6999 5.68992 18.5299 6.20992 17.6299C7.11992 16.0599 6.37992 14.7799 4.56992 14.7799C3.51992 14.7799 2.66992 13.9199 2.66992 12.8799Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 15.25C14.4648 15.25 15.9199 13.7949 15.9199 12C15.9199 10.2051 14.4648 8.75 12.6699 8.75C10.875 8.75 9.41992 10.2051 9.41992 12C9.41992 13.7949 10.875 15.25 12.6699 15.25Z"
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
            d="M20.7699 9.21994C18.9599 9.21994 18.2199 7.93994 19.1199 6.36994C19.6399 5.45994 19.3299 4.29994 18.4199 3.77994L16.6899 2.78994C15.8999 2.31994 14.8799 2.59994 14.4099 3.38994L14.2999 3.57994C13.3999 5.14994 11.9199 5.14994 11.0099 3.57994L10.8999 3.38994C10.4499 2.59994 9.42992 2.31994 8.63992 2.78994L6.90992 3.77994C5.99992 4.29994 5.68992 5.46994 6.20992 6.37994C7.11992 7.93994 6.37992 9.21994 4.56992 9.21994C3.52992 9.21994 2.66992 10.0699 2.66992 11.1199V12.8799C2.66992 13.9199 3.51992 14.7799 4.56992 14.7799C6.37992 14.7799 7.11992 16.0599 6.20992 17.6299C5.68992 18.5399 5.99992 19.6999 6.90992 20.2199L8.63992 21.2099C9.42992 21.6799 10.4499 21.3999 10.9199 20.6099L11.0299 20.4199C11.9299 18.8499 13.4099 18.8499 14.3199 20.4199L14.4299 20.6099C14.8999 21.3999 15.9199 21.6799 16.7099 21.2099L18.4399 20.2199C19.3499 19.6999 19.6599 18.5299 19.1399 17.6299C18.2299 16.0599 18.9699 14.7799 20.7799 14.7799C21.8199 14.7799 22.6799 13.9299 22.6799 12.8799V11.1199C22.6699 10.0799 21.8199 9.21994 20.7699 9.21994ZM12.6699 15.2499C10.8799 15.2499 9.41992 13.7899 9.41992 11.9999C9.41992 10.2099 10.8799 8.74994 12.6699 8.74994C14.4599 8.74994 15.9199 10.2099 15.9199 11.9999C15.9199 13.7899 14.4599 15.2499 12.6699 15.2499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting2 as IconComponentType).keywords = [
  "setting",
  "2",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
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

export default IconSetting2 as IconComponentType;
