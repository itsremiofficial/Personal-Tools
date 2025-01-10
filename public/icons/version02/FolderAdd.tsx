import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFolderAdd: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.7305 16.5V11.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1699 14H10.1699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.6699 11V17C22.6699 21 21.6699 22 17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44 11.5699 3.2L13.0699 5.2C13.4499 5.7 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M22.4099 9.44H2.66992V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.41992C11.0499 2 11.5599 2.53 12.2099 3.4L13.6099 5.26C13.9199 5.67 13.9599 5.73 14.5399 5.73H17.3299C19.6999 5.72 21.7199 7.28 22.4099 9.44Z"
            fill="currentColor"
          />
          <path
            d="M22.6599 10.8399C22.6399 10.3499 22.5599 9.88994 22.4099 9.43994H2.66992V16.6499C2.66992 19.5999 5.06992 21.9999 8.01992 21.9999H17.3199C20.2699 21.9999 22.6699 19.5999 22.6699 16.6499V11.0699C22.6699 10.9999 22.6699 10.9099 22.6599 10.8399ZM15.1699 16.2499H13.4799V17.9999C13.4799 18.4099 13.1399 18.7499 12.7299 18.7499C12.3199 18.7499 11.9799 18.4099 11.9799 17.9999V16.2499H10.1699C9.75992 16.2499 9.41992 15.9099 9.41992 15.4999C9.41992 15.0899 9.75992 14.7499 10.1699 14.7499H11.9799V12.9999C11.9799 12.5899 12.3199 12.2499 12.7299 12.2499C13.1399 12.2499 13.4799 12.5899 13.4799 12.9999V14.7499H15.1699C15.5799 14.7499 15.9199 15.0899 15.9199 15.4999C15.9199 15.9099 15.5799 16.2499 15.1699 16.2499Z"
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
            d="M21.6868 7.99175C22.0847 8.55833 21.6104 9.25 20.9181 9.25H3.66992C3.11764 9.25 2.66992 8.80228 2.66992 8.25V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.40992C11.0399 2 11.5499 2.53 12.1999 3.4L13.5999 5.26C13.9099 5.67 13.9499 5.72 14.5299 5.72H17.3199C19.1245 5.72 20.7216 6.61709 21.6868 7.99175Z"
            fill="currentColor"
          />
          <path
            d="M22.6533 11.7464C22.6514 11.1954 22.2043 10.7498 21.6533 10.7498L3.66991 10.7501C3.11763 10.7501 2.66992 11.1978 2.66992 11.7501V16.6501C2.66992 19.6001 5.06992 22.0001 8.01992 22.0001H17.3199C20.2699 22.0001 22.6699 19.6001 22.6699 16.6501L22.6533 11.7464ZM15.1699 16.7501H13.4799V18.5001C13.4799 18.9101 13.1399 19.2501 12.7299 19.2501C12.3099 19.2501 11.9799 18.9101 11.9799 18.5001V16.7501H10.1699C9.75992 16.7501 9.41992 16.4101 9.41992 16.0001C9.41992 15.5901 9.75992 15.2501 10.1699 15.2501H11.9799V13.5001C11.9799 13.0901 12.3099 12.7501 12.7299 12.7501C13.1399 12.7501 13.4799 13.0901 13.4799 13.5001V15.2501H15.1699C15.5799 15.2501 15.9199 15.5901 15.9199 16.0001C15.9199 16.4101 15.5799 16.7501 15.1699 16.7501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderAdd as IconComponentType).keywords = [
  "folder",
  "add",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconFolderAdd as IconComponentType;
