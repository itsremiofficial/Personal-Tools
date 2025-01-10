import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSortByAlphabet: FC<IconProps> = ({
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
            d="M13 7.00024L3 7.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 12.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 17.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M11.3161 16.6925C11.1461 17.0702 11.3145 17.5142 11.6922 17.6842C12.07 17.8542 12.514 17.6857 12.6839 17.308L11.3161 16.6925ZM16.5 7.00024L17.1839 6.69247C17.0628 6.42333 16.7951 6.25024 16.5 6.25024C16.2049 6.25024 15.9372 6.42333 15.8161 6.69247L16.5 7.00024ZM20.3161 17.308C20.486 17.6857 20.93 17.8542 21.3078 17.6842C21.6855 17.5142 21.8539 17.0702 21.6839 16.6925L20.3161 17.308ZM19.3636 13.3639L20.0476 13.0561L19.3636 13.3639ZM13.6364 12.6139C13.2222 12.6139 12.8864 12.9497 12.8864 13.3639C12.8864 13.7781 13.2222 14.1139 13.6364 14.1139V12.6139ZM12.6839 17.308L17.1839 7.30802L15.8161 6.69247L11.3161 16.6925L12.6839 17.308ZM21.6839 16.6925L20.0476 13.0561L18.6797 13.6717L20.3161 17.308L21.6839 16.6925ZM20.0476 13.0561L17.1839 6.69247L15.8161 7.30802L18.6797 13.6717L20.0476 13.0561ZM19.3636 12.6139H13.6364V14.1139H19.3636V12.6139Z"
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
            d="M17.1839 6.69247C17.0628 6.42333 16.7951 6.25024 16.4999 6.25024C16.2048 6.25024 15.9371 6.42333 15.816 6.69247L11.316 16.6925C11.146 17.0702 11.3144 17.5142 11.6922 17.6842C12.0699 17.8542 12.5139 17.6857 12.6839 17.308L14.1212 14.1139H18.8786L20.316 17.308C20.486 17.6857 20.93 17.8542 21.3077 17.6842C21.6854 17.5142 21.8539 17.0702 21.6839 16.6925L17.1839 6.69247ZM16.4999 8.82789L14.7962 12.6139H18.2036L16.4999 8.82789Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 7.00024C2.25 6.58603 2.58579 6.25024 3 6.25024H13C13.4142 6.25024 13.75 6.58603 13.75 7.00024C13.75 7.41446 13.4142 7.75024 13 7.75024H3C2.58579 7.75024 2.25 7.41446 2.25 7.00024Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.25 12.0002C2.25 11.586 2.58579 11.2502 3 11.2502H10C10.4142 11.2502 10.75 11.586 10.75 12.0002C10.75 12.4145 10.4142 12.7502 10 12.7502H3C2.58579 12.7502 2.25 12.4145 2.25 12.0002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.25 17.0002C2.25 16.586 2.58579 16.2502 3 16.2502H8C8.41421 16.2502 8.75 16.586 8.75 17.0002C8.75 17.4145 8.41421 17.7502 8 17.7502H3C2.58579 17.7502 2.25 17.4145 2.25 17.0002Z"
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
            d="M2.25 7.00024C2.25 6.58603 2.58579 6.25024 3 6.25024H13C13.4142 6.25024 13.75 6.58603 13.75 7.00024C13.75 7.41446 13.4142 7.75024 13 7.75024H3C2.58579 7.75024 2.25 7.41446 2.25 7.00024ZM16.5 6.25024C16.7951 6.25024 17.0628 6.42333 17.1839 6.69247L21.6839 16.6925C21.8539 17.0702 21.6855 17.5142 21.3078 17.6842C20.93 17.8542 20.486 17.6857 20.3161 17.308L18.8787 14.1139H14.1213L12.6839 17.308C12.514 17.6857 12.07 17.8542 11.6922 17.6842C11.3145 17.5142 11.1461 17.0702 11.3161 16.6925L15.8161 6.69247C15.9372 6.42333 16.2049 6.25024 16.5 6.25024ZM14.7963 12.6139H18.2037L16.5 8.82789L14.7963 12.6139ZM2.25 12.0002C2.25 11.586 2.58579 11.2502 3 11.2502H10C10.4142 11.2502 10.75 11.586 10.75 12.0002C10.75 12.4145 10.4142 12.7502 10 12.7502H3C2.58579 12.7502 2.25 12.4145 2.25 12.0002ZM2.25 17.0002C2.25 16.586 2.58579 16.2502 3 16.2502H8C8.41421 16.2502 8.75 16.586 8.75 17.0002C8.75 17.4145 8.41421 17.7502 8 17.7502H3C2.58579 17.7502 2.25 17.4145 2.25 17.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSortByAlphabet as IconComponentType).keywords = [
  "sort",
  "by",
  "alphabet",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
  "win by a nose",
  "saved by the bell",
  "lead by the nose",
  "pull oneself up by one's bootstraps",
  "by a landslide",
  "set by the ears",
  "have someone by the short and curlies",
  "trial by fire",
  "by the way",
  "alphabetical",
  "orthography",
  "spelling",
  "alphabetic",
  "language",
  "letter",
  "script",
  "alpha",
  "books",
];

export default IconSortByAlphabet as IconComponentType;
