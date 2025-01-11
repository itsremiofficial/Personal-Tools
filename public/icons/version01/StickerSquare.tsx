import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconStickerSquare: FC<IconProps> = ({
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
            d="M12 22H15C18.866 22 22 18.866 22 15V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 22C15 20.1387 15 19.2081 15.2447 18.4549C15.7393 16.9327 16.9327 15.7393 18.4549 15.2447C19.2081 15 20.1387 15 22 15"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M22 15C21.4162 15 20.9239 15 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15 20.9239 15 21.4162 15 22C15.4827 22 15.954 21.9511 16.4092 21.8581L16.4107 21.8578L16.4582 21.8479L16.4617 21.8472L16.5 21.8389C19.162 21.2577 21.2577 19.162 21.8389 16.5C21.9444 16.0168 22 15.5149 22 15Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28596 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28596 22 12C22 13.1283 22 14.1217 21.9799 15C21.4049 15 20.9191 15.0001 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15.0001 20.9191 15 21.4049 15 21.9799C14.1217 22 13.1283 22 12 22Z"
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
            d="M16.5 21.8389C16.4873 21.8417 16.4745 21.8444 16.4617 21.8472L16.4582 21.8479C16.4424 21.8512 16.4266 21.8545 16.4107 21.8578L16.4092 21.8581C16.4256 21.8548 16.4419 21.8514 16.4582 21.8479C16.4722 21.8449 16.4861 21.8419 16.5 21.8389Z"
            fill="currentColor"
          />
          <path
            d="M22 15C21.4162 15 20.9239 15 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15 20.9239 15 21.4162 15 22C15.4827 22 15.954 21.9511 16.4092 21.8581L16.4107 21.8578L16.4582 21.8479L16.4617 21.8472L16.5 21.8389C19.162 21.2577 21.2577 19.162 21.8389 16.5C21.9444 16.0168 22 15.5149 22 15Z"
            fill="currentColor"
          />
          <path
            d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22H13.5L13.4999 21.7409C13.499 20.1325 13.4984 18.9754 13.8181 17.9914C14.4611 16.0125 16.0125 14.4611 17.9914 13.8181C18.9754 13.4984 20.1325 13.499 21.7409 13.4999L22 13.5V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStickerSquare as IconComponentType).keywords = [
  "sticker",
  "square",
  "label",
  "gummed label",
  "sticky",
  "bonding",
  "paster",
  "adhesive",
  "tab",
  "decal",
  "thumbnail",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconStickerSquare as IconComponentType;