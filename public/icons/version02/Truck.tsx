import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTruck: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M15.6709 2V12C15.6709 13.1 14.7709 14 13.6709 14H2.6709V6C2.6709 3.79 4.4609 2 6.6709 2H15.6709Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6709 14V17C22.6709 18.66 21.3309 20 19.6709 20H18.6709C18.6709 18.9 17.7709 18 16.6709 18C15.5709 18 14.6709 18.9 14.6709 20H10.6709C10.6709 18.9 9.7709 18 8.6709 18C7.5709 18 6.6709 18.9 6.6709 20H5.6709C4.0109 20 2.6709 18.66 2.6709 17V14H13.6709C14.7709 14 15.6709 13.1 15.6709 12V5H17.5109C18.2309 5 18.8909 5.39001 19.2509 6.01001L20.9609 9H19.6709C19.1209 9 18.6709 9.45 18.6709 10V13C18.6709 13.55 19.1209 14 19.6709 14H22.6709Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6709 12V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.6709 12Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M15.6699 3V12C15.6699 13.1 14.7699 14 13.6699 14H2.66992V6C2.66992 3.79 4.45992 2 6.66992 2H14.6699C15.2199 2 15.6699 2.45 15.6699 3Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 14V17C22.6699 18.66 21.3299 20 19.6699 20H18.6699C18.6699 18.9 17.7699 18 16.6699 18C15.5699 18 14.6699 18.9 14.6699 20H10.6699C10.6699 18.9 9.76992 18 8.66992 18C7.56992 18 6.66992 18.9 6.66992 20H5.66992C4.00992 20 2.66992 18.66 2.66992 17V14H13.6699C14.7699 14 15.6699 13.1 15.6699 12V5H17.5099C18.2299 5 18.8899 5.39001 19.2499 6.01001L20.9599 9H19.6699C19.1199 9 18.6699 9.45 18.6699 10V13C18.6699 13.55 19.1199 14 19.6699 14H22.6699Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 22C9.77449 22 10.6699 21.1046 10.6699 20C10.6699 18.8954 9.77449 18 8.66992 18C7.56535 18 6.66992 18.8954 6.66992 20C6.66992 21.1046 7.56535 22 8.66992 22Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 22C17.7745 22 18.6699 21.1046 18.6699 20C18.6699 18.8954 17.7745 18 16.6699 18C15.5654 18 14.6699 18.8954 14.6699 20C14.6699 21.1046 15.5654 22 16.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.53V14H19.6699C19.1199 14 18.6699 13.55 18.6699 13V10C18.6699 9.45 19.1199 9 19.6699 9H20.9599L22.4099 11.54C22.5799 11.84 22.6699 12.18 22.6699 12.53Z"
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
            d="M14.6709 2.92V11.23C14.6709 12.25 13.8409 13.08 12.8209 13.08H3.6709C3.1209 13.08 2.6709 12.63 2.6709 12.08V5.69C2.6709 3.65 4.3209 2 6.3609 2H13.7409C14.2609 2 14.6709 2.41 14.6709 2.92Z"
            fill="currentColor"
          />
          <path
            d="M22.1709 15.5C22.4509 15.5 22.6709 15.72 22.6709 16V17C22.6709 18.66 21.3309 20 19.6709 20C19.6709 18.35 18.3209 17 16.6709 17C15.0209 17 13.6709 18.35 13.6709 20H11.6709C11.6709 18.35 10.3209 17 8.6709 17C7.0209 17 5.6709 18.35 5.6709 20C4.0109 20 2.6709 18.66 2.6709 17V15C2.6709 14.45 3.1209 14 3.6709 14H13.1709C14.5509 14 15.6709 12.88 15.6709 11.5V6C15.6709 5.45 16.1209 5 16.6709 5H17.5109C18.2309 5 18.8909 5.39 19.2509 6.01L19.8909 7.13C19.9809 7.29 19.8609 7.5 19.6709 7.5C18.2909 7.5 17.1709 8.62 17.1709 10V13C17.1709 14.38 18.2909 15.5 19.6709 15.5H22.1709Z"
            fill="currentColor"
          />
          <path
            d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z"
            fill="currentColor"
          />
          <path
            d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z"
            fill="currentColor"
          />
          <path
            d="M22.6709 12.53V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.4109 11.54C22.5809 11.84 22.6709 12.18 22.6709 12.53Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruck as IconComponentType).keywords = [
  "truck",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
];

export default IconTruck as IconComponentType;
