import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFolderCross: FC<IconProps> = ({
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
              d="M14.4795 15.7304L10.9395 12.1904"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4404 12.2305L10.9004 15.7705"
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
            d="M22.5398 9.44H2.7998V6.42C2.7998 3.98 4.7798 2 7.2198 2H9.5498C11.1798 2 11.6898 2.53 12.3398 3.4L13.7398 5.26C14.0498 5.67 14.0898 5.73 14.6698 5.73H17.4598C19.8298 5.72 21.8498 7.28 22.5398 9.44Z"
            fill="currentColor"
          />
          <path
            d="M22.6599 10.8399C22.6399 10.3599 22.5599 9.88994 22.4099 9.43994H2.66992V16.6499C2.66992 19.5999 5.06992 21.9999 8.01992 21.9999H17.3199C20.2699 21.9999 22.6699 19.5999 22.6699 16.6499V11.0699C22.6699 10.9999 22.6699 10.9099 22.6599 10.8399ZM15.0099 17.7799C14.8599 17.9199 14.6699 17.9999 14.4799 17.9999C14.2899 17.9999 14.0999 17.9299 13.9499 17.7799L12.7099 16.5399L11.4299 17.8199C11.2799 17.9699 11.0899 18.0399 10.8999 18.0399C10.7099 18.0399 10.5199 17.9699 10.3699 17.8199C10.0799 17.5299 10.0799 17.0499 10.3699 16.7599L11.6499 15.4799L10.4099 14.2399C10.1199 13.9499 10.1199 13.4699 10.4099 13.1799C10.6999 12.8899 11.1799 12.8899 11.4699 13.1799L12.7099 14.4199L13.9099 13.2199C14.1999 12.9299 14.6799 12.9299 14.9699 13.2199C15.2599 13.5099 15.2599 13.9899 14.9699 14.2799L13.7699 15.4799L15.0099 16.7199C15.2999 17.0099 15.2999 17.4899 15.0099 17.7799Z"
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
            d="M22.6533 11.7464C22.6514 11.1954 22.2043 10.7498 21.6533 10.7498L3.66991 10.7501C3.11763 10.7501 2.66992 11.1978 2.66992 11.7501V16.6501C2.66992 19.6001 5.06992 22.0001 8.01992 22.0001H17.3199C20.2699 22.0001 22.6699 19.6001 22.6699 16.6501L22.6533 11.7464ZM15.0099 18.2801C14.8599 18.4201 14.6699 18.5001 14.4799 18.5001C14.2899 18.5001 14.0899 18.4201 13.9499 18.2801L12.7099 17.0401L11.4299 18.3201C11.2899 18.4601 11.0899 18.5401 10.8999 18.5401C10.7099 18.5401 10.5199 18.4601 10.3699 18.3201C10.0799 18.0301 10.0799 17.5501 10.3699 17.2601L11.6499 15.9801L10.4099 14.7401C10.1199 14.4501 10.1199 13.9701 10.4099 13.6801C10.7099 13.3901 11.1799 13.3901 11.4699 13.6801L12.7099 14.9201L13.9099 13.7201C14.1999 13.4301 14.6699 13.4301 14.9699 13.7201C15.2599 14.0201 15.2599 14.4901 14.9699 14.7801L13.7699 15.9801L15.0099 17.2201C15.2999 17.5101 15.2999 17.9901 15.0099 18.2801Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderCross as IconComponentType).keywords = [
  "folder",
  "cross",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization",
];

export default IconFolderCross as IconComponentType;
