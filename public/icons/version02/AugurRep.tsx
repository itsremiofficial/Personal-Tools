import { FC } from "react";

const IconAugurRep: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 11L12.1699 6H13.1699L15.6699 11"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 13L7.66992 15L12.6699 18L17.6699 15L16.6699 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 11.75C15.3999 11.75 15.1299 11.6 14.9999 11.34L12.7099 6.75001H12.6399L10.3499 11.34C10.1699 11.71 9.71986 11.86 9.33986 11.68C8.96986 11.49 8.81986 11.04 8.99986 10.67L11.4999 5.67001C11.6299 5.42001 11.8899 5.26001 12.1699 5.26001H13.1699C13.4499 5.26001 13.7099 5.42001 13.8399 5.67001L16.3399 10.67C16.5299 11.04 16.3799 11.49 15.9999 11.68C15.8999 11.72 15.7799 11.75 15.6699 11.75Z"
            fill="currentColor"
          />
          <path
            d="M12.6697 18.75C12.5397 18.75 12.3997 18.71 12.2797 18.64L7.27969 15.64C6.93969 15.44 6.81969 15.01 6.98969 14.66L7.98969 12.66C8.17969 12.29 8.62969 12.14 8.99969 12.32C9.36969 12.51 9.51969 12.96 9.33969 13.33L8.64969 14.71L12.6697 17.12L16.6897 14.71L15.9997 13.33C15.8097 12.96 15.9597 12.51 16.3397 12.32C16.7097 12.14 17.1597 12.28 17.3497 12.66L18.3497 14.66C18.5297 15.01 18.3997 15.44 18.0597 15.64L13.0597 18.64C12.9397 18.71 12.7997 18.75 12.6697 18.75Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM8.99992 10.66L11.4999 5.66C11.6299 5.41 11.8899 5.25 12.1699 5.25H13.1699C13.4499 5.25 13.7099 5.41 13.8399 5.66L16.3399 10.66C16.5299 11.03 16.3799 11.48 15.9999 11.67C15.8899 11.72 15.7799 11.75 15.6699 11.75C15.3999 11.75 15.1299 11.6 14.9999 11.34L12.7099 6.75H12.6399L10.3499 11.34C10.1699 11.71 9.71992 11.86 9.33992 11.68C8.95992 11.49 8.80992 11.04 8.99992 10.66ZM18.0599 15.64L13.0599 18.64C12.9399 18.71 12.8099 18.75 12.6699 18.75C12.5299 18.75 12.3999 18.71 12.2799 18.64L7.27992 15.64C6.93992 15.44 6.81992 15.01 6.98992 14.66L7.98992 12.66C8.17992 12.29 8.62992 12.14 8.99992 12.32C9.36992 12.51 9.51992 12.96 9.33992 13.33L8.64992 14.71L12.6699 17.12L16.6899 14.71L15.9999 13.33C15.8099 12.96 15.9599 12.51 16.3399 12.32C16.7099 12.14 17.1599 12.28 17.3499 12.66L18.3499 14.66C18.5199 15.01 18.3899 15.44 18.0599 15.64Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAugurRep as IconComponent).keywords = [
  "augur",
  "rep",
  "betoken",
  "predict",
  "forecast",
  "prognosticate",
  "bode",
  "omen",
  "portend",
  "presage",
  "foretell",
  "repp",
  "llp",
  "representing",
  "seller",
  "dep",
  "rpp",
  "agent",
  "representative",
  "sir",
];

export default IconAugurRep as IconComponent;
