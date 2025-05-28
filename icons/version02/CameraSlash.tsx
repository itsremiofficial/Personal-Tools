import { FC } from "react";

const IconCameraSlash: FC<IconProps> = ({
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
            d="M6.66992 10H9.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.42969 22H17.9097C20.6697 22 21.7697 20.31 21.8997 18.25L22.4197 9.99001C22.4797 9.06001 22.1897 8.19001 21.6797 7.51001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6701 6C18.0601 6 17.5001 5.65 17.2201 5.11L16.5001 3.66C16.0401 2.75 14.8401 2 13.8201 2H11.5301C10.5001 2 9.30009 2.75 8.84009 3.66L8.12009 5.11C7.84009 5.65 7.28009 6 6.67009 6C4.50009 6 2.78009 7.83 2.92009 9.99L3.44009 18.25C3.49009 19.07 3.70009 19.84 4.11009 20.46"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 17.31C11.2199 17.74 11.9199 18 12.6699 18C14.4599 18 15.9199 16.54 15.9199 14.75C15.9199 14.11 15.7399 13.52 15.4199 13.02"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
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
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.4196 9.99L21.8996 18.25C21.7696 20.31 20.6696 22 17.9096 22H7.42965C6.83965 22 6.32965 21.92 5.88965 21.78L20.9196 6.75C21.8996 7.48 22.5096 8.67 22.4196 9.99Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6701 6L4.15009 20.52C3.70009 19.89 3.49009 19.1 3.44009 18.25L2.92009 9.99C2.78009 7.83 4.50009 6 6.67009 6C7.28009 6 7.84009 5.65 8.12009 5.11L8.84009 3.66C9.30009 2.75 10.5001 2 11.5301 2H13.8201C14.8401 2 16.0401 2.75 16.5001 3.66L17.2201 5.11C17.5001 5.65 18.0601 6 18.6701 6Z"
            fill="currentColor"
          />
          <path
            d="M10.1699 10.75H7.16992C6.75992 10.75 6.41992 10.41 6.41992 10C6.41992 9.59 6.75992 9.25 7.16992 9.25H10.1699C10.5799 9.25 10.9199 9.59 10.9199 10C10.9199 10.41 10.5799 10.75 10.1699 10.75Z"
            fill="currentColor"
          />
          <path
            d="M13.2398 11.43L9.3498 15.32C9.3198 15.14 9.2998 14.94 9.2998 14.75C9.2998 12.89 10.8098 11.38 12.6698 11.38C12.8598 11.38 13.0598 11.4 13.2398 11.43Z"
            fill="currentColor"
          />
          <path
            d="M16.0499 14.75C16.0499 16.61 14.5299 18.12 12.6699 18.12C11.7999 18.12 11.0099 17.79 10.4199 17.25L15.1699 12.5C15.7199 13.09 16.0499 13.88 16.0499 14.75Z"
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
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
            fill="currentColor"
          />
          <path
            d="M17.2201 5.11L16.5001 3.66C16.0401 2.75 14.8401 2 13.8201 2H11.5301C10.5001 2 9.30009 2.75 8.84009 3.66L8.12009 5.11C7.84009 5.65 7.28009 6 6.67009 6C4.50009 6 2.78009 7.83 2.92009 9.99L3.44009 18.25C3.49009 19.1 3.70009 19.89 4.15009 20.52L18.6701 6C18.0601 6 17.5001 5.65 17.2201 5.11ZM10.1701 10.75H7.17009C6.76009 10.75 6.42009 10.41 6.42009 10C6.42009 9.59 6.76009 9.25 7.17009 9.25H10.1701C10.5801 9.25 10.9201 9.59 10.9201 10C10.9201 10.41 10.5801 10.75 10.1701 10.75Z"
            fill="currentColor"
          />
          <path
            d="M22.4202 9.99L21.9002 18.25C21.7702 20.31 20.6702 22 17.9102 22H8.08018C7.19018 22 6.74018 20.92 7.37018 20.29L9.84018 17.82C10.1502 17.51 10.6302 17.47 11.0202 17.69C11.7102 18.08 12.5402 18.23 13.4202 18.04C14.6902 17.77 15.7202 16.73 15.9702 15.45C16.1402 14.59 15.9902 13.78 15.6102 13.11C15.3902 12.72 15.4202 12.23 15.7402 11.92L20.2402 7.42C20.6502 7.01 21.3402 7.06 21.6902 7.53C22.2102 8.21 22.4802 9.07 22.4202 9.99Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCameraSlash as IconComponent).keywords = [
  "camera",
  "slash",
  "photographic camera",
  "television camera",
  "photography",
  "photographer",
  "photographing",
  "photograph",
  "photo",
  "imaging",
  "photographic",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconCameraSlash as IconComponent;
