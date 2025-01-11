import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShop: FC<IconProps> = ({
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
            d="M9.50004 2.00049H14.5L15.1518 8.51786C15.3382 10.3825 13.874 12.0005 12 12.0005C10.1261 12.0005 8.66184 10.3825 8.8483 8.51786L9.50004 2.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M3.32975 5.35181C3.50783 4.46142 3.59687 4.01622 3.77791 3.65533C4.15938 2.89488 4.84579 2.33216 5.66628 2.10724C6.05567 2.00049 6.50969 2.00049 7.41771 2.00049H9.50002L8.77549 9.24576C8.61911 10.8096 7.30318 12.0005 5.73155 12.0005C3.8011 12.0005 2.35324 10.2344 2.73183 8.34142L3.32975 5.35181Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20.6703 5.35181C20.4922 4.46142 20.4031 4.01622 20.2221 3.65533C19.8406 2.89488 19.1542 2.33216 18.3337 2.10724C17.9443 2.00049 17.4903 2.00049 16.5823 2.00049H14.5L15.2245 9.24576C15.3809 10.8096 16.6968 12.0005 18.2685 12.0005C20.1989 12.0005 21.6468 10.2344 21.2682 8.34142L20.6703 5.35181Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.75 21.5005C8.75 21.9147 9.08579 22.2505 9.5 22.2505C9.91421 22.2505 10.25 21.9147 10.25 21.5005H8.75ZM13.75 21.5005C13.75 21.9147 14.0858 22.2505 14.5 22.2505C14.9142 22.2505 15.25 21.9147 15.25 21.5005H13.75ZM13.75 16.2015L14.125 15.5519L13.75 16.2015ZM14.299 16.7505L13.6495 17.1255V17.1255L14.299 16.7505ZM9.70096 16.7505L10.3505 17.1255L9.70096 16.7505ZM10.25 16.2015L10.625 16.851L10.25 16.2015ZM12.5 21.2505H11.5V22.7505H12.5V21.2505ZM4.25 14.0005V11.0005H2.75V14.0005H4.25ZM19.75 11.0005V14.0005H21.25V11.0005H19.75ZM11.5 21.2505C9.59318 21.2505 8.23851 21.2489 7.21085 21.1107C6.20476 20.9755 5.62511 20.7218 5.2019 20.2986L4.14124 21.3592C4.88961 22.1076 5.83855 22.4397 7.01098 22.5974C8.16182 22.7521 9.63558 22.7505 11.5 22.7505V21.2505ZM2.75 14.0005C2.75 15.8649 2.74841 17.3387 2.90313 18.4895C3.06076 19.6619 3.39288 20.6109 4.14124 21.3592L5.2019 20.2986C4.77869 19.8754 4.52502 19.2957 4.38976 18.2896C4.25159 17.262 4.25 15.9073 4.25 14.0005H2.75ZM12.5 22.7505C14.3644 22.7505 15.8382 22.7521 16.989 22.5974C18.1614 22.4397 19.1104 22.1076 19.8588 21.3592L18.7981 20.2986C18.3749 20.7218 17.7952 20.9755 16.7892 21.1107C15.7615 21.2489 14.4068 21.2505 12.5 21.2505V22.7505ZM19.75 14.0005C19.75 15.9073 19.7484 17.262 19.6102 18.2896C19.475 19.2957 19.2213 19.8754 18.7981 20.2986L19.8588 21.3592C20.6071 20.6109 20.9392 19.6619 21.0969 18.4895C21.2516 17.3387 21.25 15.8649 21.25 14.0005H19.75ZM10.25 21.5005V18.5005H8.75V21.5005H10.25ZM13.75 18.5005V21.5005H15.25V18.5005H13.75ZM12 16.7505C12.4811 16.7505 12.7918 16.7512 13.0273 16.7725C13.2524 16.793 13.3341 16.8274 13.375 16.851L14.125 15.5519C13.8178 15.3746 13.4918 15.3085 13.1627 15.2787C12.8438 15.2498 12.4535 15.2505 12 15.2505V16.7505ZM15.25 18.5005C15.25 18.047 15.2507 17.6567 15.2218 17.3378C15.192 17.0087 15.1259 16.6827 14.9486 16.3755L13.6495 17.1255C13.6731 17.1664 13.7075 17.2481 13.7279 17.4732C13.7493 17.7087 13.75 18.0194 13.75 18.5005H15.25ZM13.375 16.851C13.489 16.9168 13.5837 17.0115 13.6495 17.1255L14.9486 16.3755C14.7511 16.0334 14.467 15.7494 14.125 15.5519L13.375 16.851ZM10.25 18.5005C10.25 18.0194 10.2507 17.7087 10.2721 17.4732C10.2925 17.2481 10.3269 17.1664 10.3505 17.1255L9.05144 16.3755C8.87407 16.6827 8.80802 17.0087 8.77818 17.3378C8.74928 17.6567 8.75 18.047 8.75 18.5005H10.25ZM12 15.2505C11.5465 15.2505 11.1562 15.2498 10.8373 15.2787C10.5082 15.3085 10.1822 15.3746 9.875 15.5519L10.625 16.851C10.6659 16.8274 10.7476 16.793 10.9727 16.7725C11.2082 16.7512 11.5189 16.7505 12 16.7505V15.2505ZM10.3505 17.1255C10.4163 17.0115 10.511 16.9168 10.625 16.851L9.875 15.5519C9.53296 15.7494 9.24892 16.0334 9.05144 16.3755L10.3505 17.1255Z"
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
            d="M14.5 21.9918V18.5005C14.5 17.5659 14.5 17.0986 14.299 16.7505C14.1674 16.5225 13.978 16.3331 13.75 16.2014C13.4019 16.0005 12.9346 16.0005 12 16.0005C11.0654 16.0005 10.5981 16.0005 10.25 16.2014C10.022 16.3331 9.83261 16.5225 9.70096 16.7505C9.5 17.0986 9.5 17.5659 9.5 18.5005V21.9918H14.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.73204 12.0005C4.84126 12.0005 4.05323 11.6244 3.5 11.0334V14.0005C3.5 17.7717 3.5 19.6573 4.67157 20.8289C5.61466 21.772 7.02043 21.9559 9.5 21.9918H14.5C16.9796 21.9559 18.3853 21.772 19.3284 20.8289C20.5 19.6573 20.5 17.7717 20.5 14.0005V11.0344C19.9468 11.6249 19.1592 12.0005 18.269 12.0005C16.6973 12.0005 15.3814 10.8096 15.225 9.24572L15.152 8.51782C15.3385 10.3825 13.8742 12.0005 12.0003 12.0005C10.139 12.0005 8.6819 10.4043 8.84499 8.5556L8.77598 9.24572C8.6196 10.8096 7.30367 12.0005 5.73204 12.0005ZM14.5 18.5005V21.9918H9.5V18.5005C9.5 17.5659 9.5 17.0986 9.70096 16.7505C9.83261 16.5225 10.022 16.3331 10.25 16.2014C10.5981 16.0005 11.0654 16.0005 12 16.0005C12.9346 16.0005 13.4019 16.0005 13.75 16.2014C13.978 16.3331 14.1674 16.5225 14.299 16.7505C14.5 17.0986 14.5 17.5659 14.5 18.5005Z"
            fill="currentColor"
          />
          <path
            d="M9.4998 2.00049H14.4998L15.1515 8.51786C15.338 10.3825 13.8737 12.0005 11.9998 12.0005C10.1259 12.0005 8.6616 10.3825 8.84806 8.51786L9.4998 2.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M3.32975 5.35181C3.50783 4.46142 3.59687 4.01622 3.77791 3.65533C4.15938 2.89488 4.84579 2.33216 5.66628 2.10724C6.05567 2.00049 6.50969 2.00049 7.41771 2.00049H9.50002L8.77549 9.24576C8.61911 10.8096 7.30318 12.0005 5.73155 12.0005C3.8011 12.0005 2.35324 10.2344 2.73183 8.34142L3.32975 5.35181Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M20.6703 5.35181C20.4922 4.46142 20.4031 4.01622 20.2221 3.65533C19.8406 2.89488 19.1542 2.33216 18.3337 2.10724C17.9443 2.00049 17.4903 2.00049 16.5823 2.00049H14.5L15.2245 9.24576C15.3809 10.8096 16.6968 12.0005 18.2685 12.0005C20.1989 12.0005 21.6468 10.2344 21.2682 8.34142L20.6703 5.35181Z"
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
            d="M3.77791 3.65533C3.59687 4.01622 3.50783 4.46142 3.32975 5.35181L2.73183 8.34142C2.35324 10.2344 3.8011 12.0005 5.73155 12.0005C7.30318 12.0005 8.61911 10.8096 8.77549 9.24576L8.8445 8.55564C8.68141 10.4043 10.1385 12.0005 11.9998 12.0005C13.8737 12.0005 15.338 10.3825 15.1515 8.51786L15.2245 9.24576C15.3809 10.8096 16.6968 12.0005 18.2685 12.0005C20.1989 12.0005 21.6468 10.2344 21.2682 8.34142L20.6703 5.35181C20.4922 4.46144 20.4031 4.01622 20.2221 3.65533C19.8406 2.89488 19.1542 2.33216 18.3337 2.10724C17.9443 2.00049 17.4903 2.00049 16.5823 2.00049H14.4998H7.41771C6.50969 2.00049 6.05567 2.00049 5.66628 2.10724C4.84579 2.33216 4.15938 2.89488 3.77791 3.65533Z"
            fill="currentColor"
          />
          <path
            d="M18.2685 13.5004C19.0856 13.5004 19.8448 13.2881 20.5 12.9194V14.0005C20.5 17.7717 20.5 19.6573 19.3284 20.8289C18.3853 21.772 16.9796 21.9559 14.5 21.9918V18.5005C14.5 17.5659 14.5 17.0986 14.299 16.7505C14.1674 16.5225 13.978 16.3331 13.75 16.2015C13.4019 16.0005 12.9346 16.0005 12 16.0005C11.0654 16.0005 10.5981 16.0005 10.25 16.2015C10.022 16.3331 9.83261 16.5225 9.70096 16.7505C9.5 17.0986 9.5 17.5659 9.5 18.5005V21.9918C7.02043 21.9559 5.61466 21.772 4.67157 20.8289C3.5 19.6573 3.5 17.7717 3.5 14.0005V12.9194C4.15524 13.2881 4.91439 13.5004 5.73157 13.5004C6.92864 13.5004 8.02617 13.0369 8.84435 12.2724C9.67168 13.0326 10.7765 13.5004 11.9998 13.5004C13.2232 13.5004 14.3281 13.0325 15.1555 12.2722C15.9737 13.0368 17.0713 13.5004 18.2685 13.5004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShop as IconComponentType).keywords = [
  "shop",
  "workshop",
  "store",
  "browse",
  "sponsor",
  "give away",
  "patronize",
  "snitch",
  "tell on",
  "betray",
];

export default IconShop as IconComponentType;