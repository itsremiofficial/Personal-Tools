import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconClipboardHeart: FC<IconProps> = ({
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
            d="M16 4.00037C18.175 4.01247 19.3529 4.10892 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731C4.64706 4.10892 5.82497 4.01247 8 4.00037"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 11.6917L11.4813 12.2334C11.7713 12.5111 12.2287 12.5111 12.5187 12.2334L12 11.6917ZM12 15.8279L12 15.0779L12 15.8279ZM11.4865 14.7612C11.0686 14.4546 10.6081 14.0716 10.2595 13.6685C9.89122 13.2427 9.75 12.9117 9.75 12.6971H8.25C8.25 13.4669 8.6912 14.1482 9.1249 14.6497C9.57819 15.1738 10.1391 15.6331 10.5992 15.9706L11.4865 14.7612ZM9.75 12.6971C9.75 12.121 10.0126 11.8704 10.2419 11.79C10.4922 11.7023 10.9558 11.7302 11.4813 12.2334L12.5187 11.15C11.6943 10.3606 10.6579 10.0547 9.74566 10.3745C8.81245 10.7016 8.25 11.5999 8.25 12.6971H9.75ZM13.4008 15.9706C13.8609 15.6331 14.4218 15.1738 14.8751 14.6497C15.3088 14.1482 15.75 13.4669 15.75 12.6971H14.25C14.25 12.9117 14.1088 13.2427 13.7405 13.6685C13.3919 14.0716 12.9314 14.4546 12.5135 14.7613L13.4008 15.9706ZM15.75 12.6971C15.75 11.5999 15.1875 10.7016 14.2543 10.3745C13.3421 10.0547 12.3057 10.3606 11.4813 11.15L12.5187 12.2334C13.0442 11.7302 13.5078 11.7023 13.7581 11.79C13.9874 11.8704 14.25 12.121 14.25 12.6971H15.75ZM10.5992 15.9706C10.9678 16.2411 11.3816 16.5779 12 16.5779L12 15.0779C11.9756 15.0779 11.9605 15.0779 11.9061 15.0491C11.8202 15.0038 11.7128 14.9272 11.4865 14.7612L10.5992 15.9706ZM12.5135 14.7613C12.2872 14.9272 12.1798 15.0038 12.0939 15.0491C12.0395 15.0779 12.0244 15.0779 12 15.0779L12 16.5779C12.6184 16.5779 13.0322 16.2411 13.4008 15.9706L12.5135 14.7613Z"
            fill="currentColor"
          />
          <path
            d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z"
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
            opacity={duotone ? "0.5" : "1"}
            d="M21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.3529 4.10892 18.175 4.01247 16 4.00037H8C5.82497 4.01247 4.64706 4.10892 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986Z"
            fill="currentColor"
          />
          <path
            d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z"
            fill="currentColor"
          />
          <path
            d="M9 12.6971C9 13.6815 10.1649 14.7217 11.0429 15.3659C11.4626 15.6739 11.6725 15.8279 12 15.8279C12.3275 15.8279 12.5374 15.6739 12.9571 15.3659C13.8352 14.7217 15 13.6815 15 12.6971C15 11.0239 13.35 10.3992 12 11.6917C10.65 10.3992 9 11.0239 9 12.6971Z"
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
            d="M9.5 2.00037C8.67157 2.00037 8 2.67194 8 3.50037V4.50037C8 5.32879 8.67157 6.00037 9.5 6.00037H14.5C15.3284 6.00037 16 5.32879 16 4.50037V3.50037C16 2.67194 15.3284 2.00037 14.5 2.00037H9.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 4.03698C5.24209 4.10756 4.44798 4.308 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.552 4.308 18.7579 4.10756 17.5 4.03698V4.50037C17.5 6.15722 16.1569 7.50037 14.5 7.50037H9.5C7.84315 7.50037 6.5 6.15722 6.5 4.50037V4.03698ZM11.0429 15.3659C10.1649 14.7217 9 13.6815 9 12.6971C9 11.0239 10.65 10.3992 12 11.6917C13.35 10.3992 15 11.0239 15 12.6971C15 13.6815 13.8352 14.7217 12.9571 15.3659C12.5374 15.6739 12.3275 15.8279 12 15.8279C11.6725 15.8279 11.4626 15.6739 11.0429 15.3659Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardHeart as IconComponentType).keywords = [
  "clipboard",
  "heart",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
];

export default IconClipboardHeart as IconComponentType;
