import { FC } from "react";

const IconGoogleDrive: FC<IconProps> = ({
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
            d="M15.8499 3H9.49988L2.08984 15.71L5.26984 21H20.0898C20.0898 21 23.2698 15.55 23.2698 15.63C23.2698 15.71 15.8499 3 15.8499 3Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.49023 3L20.0802 21"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8497 3L5.25977 21"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.16992 15.71H22.6699"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.37012 15.71L5.26013 21L2.08008 15.71H8.37012Z"
            fill="currentColor"
          />
          <path
            d="M12.6701 8.41L8.37012 15.71H2.08008L9.49011 3L12.6701 8.41Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.8502 3L12.6702 8.41L9.49023 3H15.8502Z"
            fill="currentColor"
          />
          <path
            d="M23.2599 15.63C23.2599 15.63 23.24 15.66 23.2 15.71H16.9699L12.6699 8.41L15.8499 3C15.8499 3 23.2099 15.63 23.2599 15.63Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M23.1998 15.71C22.7798 16.37 20.0797 21 20.0797 21L16.9697 15.71H23.1998Z"
            fill="currentColor"
          />
          <path
            d="M20.0797 21H5.25977L8.36975 15.71H16.9697L20.0797 21Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.9701 15.71H8.37012L12.6701 8.41003L16.9701 15.71Z"
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
            d="M6.61006 16.77L4.95008 19.59C4.83008 19.8 4.52002 19.8 4.39002 19.59L2.70008 16.77C2.57008 16.55 2.73005 16.28 2.98005 16.28H6.33003C6.58003 16.28 6.73006 16.56 6.61006 16.77Z"
            fill="none"
          />
          <path
            d="M12.3598 8.41L8.40983 14.88C8.31983 15.03 8.15985 15.11 7.98985 15.11H2.91984C2.53984 15.11 2.29985 14.71 2.48985 14.39L8.94987 3.73001C9.13987 3.42001 9.60984 3.41001 9.79984 3.73001L12.3598 7.94C12.4498 8.08 12.4498 8.26 12.3598 8.41Z"
            fill="none"
          />
          <path
            d="M14.3899 14.49H10.91C10.71 14.49 10.58 14.27 10.68 14.09L12.42 11.14C12.52 10.97 12.77 10.97 12.87 11.14L14.61 14.09C14.72 14.27 14.5899 14.49 14.3899 14.49Z"
            fill="none"
          />
          <path
            d="M14.3299 3.39999L12.8799 5.87C12.7799 6.04 12.5199 6.04 12.4199 5.87L10.9699 3.39999C10.8699 3.21999 10.9899 3 11.1999 3H14.0999C14.3099 3 14.4299 3.21999 14.3299 3.39999Z"
            fill="none"
          />
          <path
            d="M22.8399 14.37C23.0399 14.7 22.7899 15.12 22.4099 15.12H17.5399C17.3699 15.12 17.2199 15.03 17.1299 14.89L13.3199 8.42001C13.2299 8.27001 13.2299 8.09 13.3199 7.94L15.7899 3.73001C15.9699 3.42001 16.4299 3.41001 16.6099 3.73001C17.8299 5.84001 21.5599 12.18 22.8399 14.37Z"
            fill="none"
          />
          <path
            d="M22.5997 16.77C22.0497 17.7 21.4597 18.7 20.9197 19.61C20.7897 19.83 20.4797 19.82 20.3497 19.6L18.6897 16.77C18.5597 16.55 18.7197 16.27 18.9797 16.27H22.3097C22.5697 16.28 22.7297 16.55 22.5997 16.77Z"
            fill="none"
          />
          <path
            d="M18.6896 21H6.60962C6.24962 21 6.0296 20.61 6.2096 20.3L8.53962 16.34C8.61962 16.2 8.76964 16.11 8.93964 16.11H16.3596C16.5196 16.11 16.6796 16.2 16.7596 16.34L19.0896 20.3C19.2696 20.61 19.0496 21 18.6896 21Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGoogleDrive as IconComponent).keywords = [
  "google",
  "drive",
  "valley",
  "adsense",
  "adwords",
  "googe",
  "goole",
  "wikipedia",
  "yahoo",
  "youtube",
  "bing",
  "force",
  "effort",
  "driving force",
  "labour",
  "get",
  "push",
  "cause",
  "beat back",
  "movement",
];

export default IconGoogleDrive as IconComponent;
