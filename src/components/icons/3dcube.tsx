import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const Icon3dcube: FC<IconProps> = ({
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
            d="M12.92 2.25984L19.43 5.76984C20.19 6.17984 20.19 7.34984 19.43 7.75984L12.92 11.2698C12.34 11.5798 11.66 11.5798 11.08 11.2698L4.57 7.75984C3.81 7.34984 3.81 6.17984 4.57 5.76984L11.08 2.25984C11.66 1.94984 12.34 1.94984 12.92 2.25984Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.61 10.1302L9.66 13.1602C10.41 13.5402 10.89 14.3102 10.89 15.1502V20.8702C10.89 21.7002 10.02 22.2302 9.28 21.8602L3.23 18.8302C2.48 18.4502 2 17.6802 2 16.8402V11.1202C2 10.2902 2.87 9.76017 3.61 10.1302Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.3894 10.1302L14.3394 13.1602C13.5894 13.5402 13.1094 14.3102 13.1094 15.1502V20.8702C13.1094 21.7002 13.9794 22.2302 14.7194 21.8602L20.7694 18.8302C21.5194 18.4502 21.9994 17.6802 21.9994 16.8402V11.1202C21.9994 10.2902 21.1294 9.76017 20.3894 10.1302Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3297 5.68003L13.0597 2.30003C12.3997 1.94003 11.5997 1.94003 10.9397 2.30003L4.66969 5.68003C4.20969 5.93003 3.92969 6.41003 3.92969 6.96003C3.92969 7.50003 4.20969 7.99003 4.66969 8.24003L10.9397 11.62C11.2697 11.8 11.6397 11.89 11.9997 11.89C12.3597 11.89 12.7297 11.8 13.0597 11.62L19.3297 8.24003C19.7897 7.99003 20.0697 7.51003 20.0697 6.96003C20.0697 6.41003 19.7897 5.93003 19.3297 5.68003Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.3207 9.9299C20.8907 9.6699 20.3707 9.6399 19.9307 9.8699L14.1007 12.7899C13.2507 13.2199 12.7207 14.0699 12.7207 15.0299V20.5399C12.7207 21.0399 12.9707 21.4999 13.4007 21.7599C13.6307 21.8999 13.8907 21.9699 14.1507 21.9699C14.3707 21.9699 14.5907 21.9199 14.7907 21.8199L20.6207 18.8999C21.4707 18.4699 22.0007 17.6199 22.0007 16.6599V11.1499C22.0007 10.6499 21.7507 10.1999 21.3207 9.9299Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon3dcube as IconComponentType).keywords = ["3dcube"];

export default Icon3dcube as IconComponentType;
