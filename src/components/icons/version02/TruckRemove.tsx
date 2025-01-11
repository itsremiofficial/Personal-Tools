import { FC } from "react";

const IconTruckRemove: FC<IconProps> = ({
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
            d="M15.6709 2V12C15.6709 13.1 14.7709 14 13.6709 14H2.6709V7.62C3.4009 8.49 4.52093 9.03 5.76093 9C6.77093 8.98 7.6809 8.59 8.3609 7.94C8.6709 7.68 8.93092 7.34999 9.13092 6.98999C9.49092 6.37999 9.6909 5.65997 9.6709 4.90997C9.6409 3.73997 9.12091 2.71 8.31091 2H15.6709Z"
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
          <path
            d="M9.6709 5C9.6709 5.75 9.46088 6.46 9.09088 7.06C8.88088 7.42 8.6109 7.74 8.3009 8C7.6009 8.63 6.6809 9 5.6709 9C4.2109 9 2.94092 8.22 2.25092 7.06C1.88092 6.46 1.6709 5.75 1.6709 5C1.6709 3.74 2.2509 2.61 3.1709 1.88C3.8609 1.33 4.7309 1 5.6709 1C7.8809 1 9.6709 2.79 9.6709 5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.74036 6.04016L4.63037 3.93018"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.71106 3.95996L4.60107 6.06995"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M5.66992 1C4.72992 1 3.85992 1.33 3.16992 1.88C2.24992 2.61 1.66992 3.74 1.66992 5C1.66992 5.75 1.87994 6.46 2.24994 7.06C2.93994 8.22 4.20992 9 5.66992 9C6.67992 9 7.59993 8.63 8.29993 8C8.60993 7.74 8.8799 7.42 9.0899 7.06C9.4599 6.46 9.66992 5.75 9.66992 5C9.66992 2.79 7.87992 1 5.66992 1ZM7.2699 6.58002C7.1199 6.73002 6.92993 6.79999 6.73993 6.79999C6.54993 6.79999 6.3599 6.73002 6.2099 6.58002L5.67993 6.04999L5.12994 6.59998C4.97994 6.74998 4.78991 6.82001 4.59991 6.82001C4.40991 6.82001 4.21995 6.74998 4.06995 6.59998C3.77995 6.30998 3.77995 5.82998 4.06995 5.53998L4.61993 4.98999L4.0899 4.46002C3.7999 4.17002 3.7999 3.69002 4.0899 3.40002C4.3799 3.11002 4.8599 3.11002 5.1499 3.40002L5.67993 3.92999L6.17993 3.42999C6.46993 3.13999 6.94993 3.13999 7.23993 3.42999C7.52993 3.71999 7.52993 4.19999 7.23993 4.48999L6.73993 4.98999L7.2699 5.52002C7.5599 5.81002 7.5599 6.28002 7.2699 6.58002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 3V12C15.6699 13.1 14.7699 14 13.6699 14H2.66992V7.62C3.39992 8.49 4.51995 9.03 5.75995 9C6.76995 8.98 7.67992 8.59 8.35992 7.94C8.66992 7.68 8.92994 7.34999 9.12994 6.98999C9.48994 6.37999 9.68992 5.65997 9.66992 4.90997C9.63992 3.73997 9.11994 2.71 8.30994 2H14.6699C15.2199 2 15.6699 2.45 15.6699 3Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 14V17C22.6699 18.66 21.3299 20 19.6699 20H18.6699C18.6699 18.9 17.7699 18 16.6699 18C15.5699 18 14.6699 18.9 14.6699 20H10.6699C10.6699 18.9 9.76992 18 8.66992 18C7.56992 18 6.66992 18.9 6.66992 20H5.66992C4.00992 20 2.66992 18.66 2.66992 17V14H13.6699C14.7699 14 15.6699 13.1 15.6699 12V5H17.5099C18.2299 5 18.8899 5.39001 19.2499 6.01001L20.9599 9H19.6699C19.1199 9 18.6699 9.45 18.6699 10V13C18.6699 13.55 19.1199 14 19.6699 14H22.6699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 22C9.77449 22 10.6699 21.1046 10.6699 20C10.6699 18.8954 9.77449 18 8.66992 18C7.56535 18 6.66992 18.8954 6.66992 20C6.66992 21.1046 7.56535 22 8.66992 22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 22C17.7745 22 18.6699 21.1046 18.6699 20C18.6699 18.8954 17.7745 18 16.6699 18C15.5654 18 14.6699 18.8954 14.6699 20C14.6699 21.1046 15.5654 22 16.6699 22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
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
          <path
            d="M13.7509 1.97998H6.3609C4.3209 1.97998 2.6709 3.62998 2.6709 5.66998V12.06C2.6709 12.61 3.1209 13.06 3.6709 13.06H12.8209C13.8409 13.06 14.6709 12.23 14.6709 11.21V2.89998C14.6709 2.38998 14.2609 1.97998 13.7509 1.97998ZM10.2709 9.09998C10.1209 9.23998 9.9309 9.30998 9.7409 9.30998C9.5509 9.30998 9.3609 9.23998 9.2109 9.09998L8.6809 8.56998L8.1309 9.11998C7.9809 9.26998 7.7909 9.33998 7.6009 9.33998C7.4109 9.33998 7.2209 9.26998 7.0709 9.11998C6.7809 8.82998 6.7809 8.34998 7.0709 8.05998L7.6209 7.50998L7.0909 6.97998C6.8009 6.68998 6.8009 6.20998 7.0909 5.91998C7.3909 5.62998 7.8609 5.62998 8.1609 5.91998L8.6809 6.44998L9.1809 5.93998C9.4809 5.64998 9.9509 5.64998 10.2509 5.93998C10.5409 6.23998 10.5409 6.70998 10.2509 7.00998L9.7409 7.50998L10.2709 8.02998C10.5609 8.32998 10.5609 8.79998 10.2709 9.09998Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckRemove as IconComponent).keywords = [
  "truck",
  "remove",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconTruckRemove as IconComponent;