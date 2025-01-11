import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDiplomaVerified: FC<IconProps> = ({
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
            d="M7 17.9987C4.82497 17.9866 3.64706 17.8902 2.87868 17.1218C2 16.2431 2 14.8289 2 12.0005L2 8.00049C2 5.17206 2 3.75785 2.87868 2.87917C3.75736 2.00049 5.17157 2.00049 8 2.00049L16 2.00049C18.8284 2.00049 20.2426 2.00049 21.1213 2.87917C22 3.75785 22 5.17206 22 8.00049V12.0005C22 14.8289 22 16.2431 21.1213 17.1218C20.3915 17.8517 19.2921 17.9753 17.3197 17.9962L16.5 17.9987"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 6.00049L15 6.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 9.50049H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.8907 13.9459C11.53 13.4012 12.4702 13.4012 13.1094 13.9459C13.3833 14.1794 13.7239 14.3204 14.0827 14.3491C14.9199 14.4159 15.5847 15.0807 15.6515 15.9179C15.6802 16.2767 15.8212 16.6173 16.0547 16.8912C16.5994 17.5305 16.5994 18.4706 16.0547 19.1099C15.8212 19.3838 15.6802 19.7244 15.6515 20.0832C15.5847 20.9204 14.9199 21.5852 14.0827 21.652C13.7239 21.6807 13.3833 21.8217 13.1094 22.0552C12.4702 22.5999 11.53 22.5999 10.8907 22.0552C10.6168 21.8217 10.2762 21.6807 9.91743 21.652C9.08021 21.5852 8.41539 20.9204 8.34858 20.0832C8.31995 19.7244 8.17888 19.3838 7.94543 19.1099C7.40068 18.4706 7.40068 17.5305 7.94543 16.8912C8.17888 16.6173 8.31995 16.2767 8.34858 15.9179C8.4154 15.0807 9.08021 14.4159 9.91743 14.3491C10.2762 14.3204 10.6168 14.1794 10.8907 13.9459Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10.5 18.2005L11.3571 19.0005L13.5 17.0005"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1092 13.5004C12.4699 12.9556 11.5297 12.9556 10.8905 13.5004C10.6165 13.7338 10.276 13.8749 9.91719 13.9035C9.07997 13.9703 8.41515 14.6351 8.34834 15.4724C8.31971 15.8311 8.17863 16.1717 7.94519 16.4457C7.40043 17.0849 7.40043 18.0251 7.94519 18.6643C8.17863 18.9383 8.31971 19.2789 8.34834 19.6376C8.41515 20.4748 9.07997 21.1397 9.91719 21.2065C10.276 21.2351 10.6165 21.3762 10.8905 21.6096C11.5297 22.1544 12.4699 22.1544 13.1092 21.6096C13.3831 21.3762 13.7237 21.2351 14.0824 21.2065C14.9197 21.1397 15.5845 20.4748 15.6513 19.6376C15.6799 19.2789 15.821 18.9383 16.0544 18.6643C16.5992 18.0251 16.5992 17.0849 16.0544 16.4457C15.821 16.1717 15.6799 15.8311 15.6513 15.4724C15.5845 14.6351 14.9197 13.9703 14.0824 13.9035C13.7237 13.8749 13.3831 13.7338 13.1092 13.5004ZM14.0117 17.1035C14.3146 16.8208 14.3309 16.3463 14.0483 16.0434C13.7657 15.7406 13.2911 15.7243 12.9883 16.0069L11.3571 17.5293L11.0117 17.2069C10.7089 16.9243 10.2343 16.9406 9.95171 17.2434C9.66909 17.5463 9.68545 18.0208 9.98826 18.3035L10.8454 19.1035C11.1336 19.3724 11.5807 19.3724 11.8689 19.1035L14.0117 17.1035Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0005V8.00049C2 5.17206 2 3.75785 2.87868 2.87917C3.75736 2.00049 5.17157 2.00049 8 2.00049H16C18.8284 2.00049 20.2426 2.00049 21.1213 2.87917C22 3.75785 22 5.17206 22 8.00049V12.0005C22 14.8289 22 16.2431 21.1213 17.1218C20.2855 17.9576 18.9652 17.9984 16.4042 18.0004C16.5467 17.4707 16.4302 16.8866 16.0544 16.4458C15.821 16.1718 15.6799 15.8313 15.6513 15.4725C15.5845 14.6353 14.9197 13.9704 14.0824 13.9036C13.7237 13.875 13.3831 13.7339 13.1092 13.5005C12.4699 12.9557 11.5297 12.9557 10.8905 13.5005C10.6165 13.7339 10.276 13.875 9.91719 13.9036C9.07997 13.9704 8.41515 14.6353 8.34834 15.4725C8.31971 15.8313 8.17863 16.1718 7.94519 16.4458C7.56948 16.8866 7.4529 17.4707 7.59543 18.0004C5.03465 17.9984 3.71443 17.9576 2.87868 17.1218C2 16.2431 2 14.8289 2 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M8.25 6.00049C8.25 5.58627 8.58579 5.25049 9 5.25049H15C15.4142 5.25049 15.75 5.58627 15.75 6.00049C15.75 6.4147 15.4142 6.75049 15 6.75049H9C8.58579 6.75049 8.25 6.4147 8.25 6.00049Z"
            fill="currentColor"
          />
          <path
            d="M7 8.75049C6.58579 8.75049 6.25 9.08627 6.25 9.50049C6.25 9.9147 6.58579 10.2505 7 10.2505H17C17.4142 10.2505 17.75 9.9147 17.75 9.50049C17.75 9.08627 17.4142 8.75049 17 8.75049H7Z"
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
            d="M2 12.0005V8.00049C2 5.17206 2 3.75785 2.87868 2.87917C3.75736 2.00049 5.17157 2.00049 8 2.00049H16C18.8284 2.00049 20.2426 2.00049 21.1213 2.87917C22 3.75785 22 5.17206 22 8.00049V12.0005C22 14.8289 22 16.2431 21.1213 17.1218C20.4749 17.7682 19.5388 17.9391 17.963 17.9843C17.9593 17.2484 17.7037 16.5136 17.1961 15.918C17.1674 15.8844 17.1501 15.8425 17.1465 15.7984C17.0211 14.2269 15.7733 12.979 14.2018 12.8536C14.1577 12.8501 14.1158 12.8327 14.0821 12.804C12.8822 11.7815 11.1174 11.7815 9.91755 12.804C9.88386 12.8327 9.84198 12.8501 9.79786 12.8536C8.22638 12.979 6.9785 14.2269 6.85309 15.7984C6.84957 15.8425 6.83222 15.8844 6.80352 15.918C6.29595 16.5136 6.04033 17.2484 6.03666 17.9842C4.4611 17.939 3.52501 17.7681 2.87868 17.1218C2 16.2431 2 14.8289 2 12.0005ZM8.25 6.00049C8.25 5.58627 8.58579 5.25049 9 5.25049H15C15.4142 5.25049 15.75 5.58627 15.75 6.00049C15.75 6.4147 15.4142 6.75049 15 6.75049H9C8.58579 6.75049 8.25 6.4147 8.25 6.00049ZM7 8.75049C6.58579 8.75049 6.25 9.08627 6.25 9.50049C6.25 9.9147 6.58579 10.2505 7 10.2505H17C17.4142 10.2505 17.75 9.9147 17.75 9.50049C17.75 9.08627 17.4142 8.75049 17 8.75049H7Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1092 13.9457C12.4699 13.4009 11.5297 13.4009 10.8905 13.9457C10.6165 14.1791 10.276 14.3202 9.91719 14.3488C9.07997 14.4156 8.41515 15.0805 8.34834 15.9177C8.31971 16.2764 8.17863 16.617 7.94519 16.891C7.40043 17.5302 7.40043 18.4704 7.94519 19.1096C8.17863 19.3836 8.31971 19.7242 8.34834 20.0829C8.41515 20.9202 9.07997 21.585 9.91719 21.6518C10.276 21.6804 10.6165 21.8215 10.8905 22.0549C11.5297 22.5997 12.4699 22.5997 13.1092 22.0549C13.3831 21.8215 13.7237 21.6804 14.0824 21.6518C14.9197 21.585 15.5845 20.9202 15.6513 20.0829C15.6799 19.7242 15.821 19.3836 16.0544 19.1096C16.5992 18.4704 16.5992 17.5302 16.0544 16.891C15.821 16.617 15.6799 16.2764 15.6513 15.9177C15.5845 15.0805 14.9197 14.4156 14.0824 14.3488C13.7237 14.3202 13.3831 14.1791 13.1092 13.9457ZM14.0117 17.5488C14.3146 17.2662 14.3309 16.7916 14.0483 16.4888C13.7657 16.1859 13.2911 16.1696 12.9883 16.4522L11.3571 17.9746L11.0117 17.6522C10.7089 17.3696 10.2343 17.3859 9.95171 17.6888C9.66909 17.9916 9.68545 18.4662 9.98826 18.7488L10.8454 19.5488C11.1336 19.8177 11.5807 19.8177 11.8689 19.5488L14.0117 17.5488Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiplomaVerified as IconComponentType).keywords = [
  "diploma",
  "verified",
  "sheepskin",
  "degree",
  "graduation",
  "postgraduate",
  "graduate",
  "university",
  "graduated",
  "educated",
  "baccalaureate",
  "proven",
  "corroborated",
  "supported",
  "proved",
  "substantiated",
  "validated",
  "verification",
  "attested",
  "verifiable",
];

export default IconDiplomaVerified as IconComponentType;