import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconInboxIn: FC<IconProps> = ({
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
            d="M12 2.00024L12 10.0002M12 10.0002L15 7.00024M12 10.0002L9 7.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 13.0002H5.16026C6.06543 13.0002 6.51802 13.0002 6.91584 13.1832C7.31367 13.3662 7.60821 13.7098 8.19729 14.3971L8.80271 15.1034C9.39179 15.7907 9.68633 16.1343 10.0842 16.3173C10.482 16.5002 10.9346 16.5002 11.8397 16.5002H12.1603C13.0654 16.5002 13.518 16.5002 13.9158 16.3173C14.3137 16.1343 14.6082 15.7907 15.1973 15.1034L15.8027 14.3971C16.3918 13.7098 16.6863 13.3662 17.0842 13.1832C17.482 13.0002 17.9346 13.0002 18.8397 13.0002H22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 2.1272C18.6251 2.28705 19.7191 2.64832 20.5355 3.4648C22 4.92926 22 7.28629 22 12.0003C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0003 16.714 22.0003 12 22.0003C7.28595 22.0003 4.92893 22.0003 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0003C2 7.28629 2 4.92926 3.46447 3.4648C4.28094 2.64832 5.37486 2.28705 7 2.1272"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z"
            fill="currentColor"
          />
          <path
            d="M3.46451 20.5358C4.92902 22.0002 7.28611 22.0002 12.0003 22.0002C16.7145 22.0002 19.0716 22.0002 20.5361 20.5358C21.8931 19.1787 21.9927 17.0553 22 13.0002H18.8402C17.935 13.0002 17.4824 13.0002 17.0846 13.1832C16.6868 13.3662 16.3922 13.7098 15.8031 14.3971L15.1977 15.1034C14.6086 15.7907 14.314 16.1343 13.9162 16.3173C13.5183 16.5002 13.0658 16.5002 12.1606 16.5002H11.84C10.9348 16.5002 10.4822 16.5002 10.0844 16.3173C9.68655 16.1343 9.392 15.7907 8.80291 15.1034L8.19747 14.3971C7.60837 13.7098 7.31382 13.3662 6.91599 13.1832C6.51815 13.0002 6.06555 13.0002 5.16035 13.0002H2C2.0073 17.0553 2.10744 19.1787 3.46451 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M12.5305 11.3304C12.3899 11.471 12.1991 11.55 12.0002 11.55C11.8013 11.55 11.6105 11.471 11.4699 11.3304L8.16987 8.03038C7.87697 7.73749 7.87697 7.26261 8.16987 6.96972C8.46276 6.67683 8.93763 6.67683 9.23053 6.96972L11.2502 8.98939L11.2502 2.00048C11.4933 2.00024 11.7431 2.00024 12 2.00024C12.257 2.00024 12.507 2.00024 12.7502 2.00048V8.98939L14.7699 6.96972C15.0628 6.67683 15.5376 6.67683 15.8305 6.96972C16.1234 7.26261 16.1234 7.73749 15.8305 8.03038L12.5305 11.3304Z"
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
            d="M12 10.7502C12.1989 10.7502 12.3897 10.6712 12.5303 10.5306L15.5303 7.53057C15.8232 7.23768 15.8232 6.76281 15.5303 6.46991C15.2374 6.17702 14.7626 6.17702 14.4697 6.46991L12.75 8.18958V2.00024C12.75 1.58603 12.4142 1.25024 12 1.25024C11.5858 1.25024 11.25 1.58603 11.25 2.00024V8.18958L9.53033 6.46991C9.23744 6.17702 8.76256 6.17702 8.46967 6.46991C8.17678 6.76281 8.17678 7.23768 8.46967 7.53057L11.4697 10.5306C11.6103 10.6712 11.8011 10.7502 12 10.7502Z"
            fill="currentColor"
          />
          <path
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C21.8063 19.265 21.9744 17.3221 21.9966 13.7502H18.8397C17.8659 13.7502 17.6113 13.7663 17.3975 13.8646C17.1838 13.9629 17.0059 14.1458 16.3722 14.8852L15.6794 15.6935C15.1773 16.2806 14.7796 16.7455 14.2292 16.9987C13.6789 17.2518 13.067 17.2512 12.2945 17.2503H11.7055C10.933 17.2512 10.3211 17.2518 9.77076 16.9987C9.22038 16.7455 8.82271 16.2806 8.32058 15.6935L7.62784 14.8852C6.9941 14.1458 6.81622 13.9629 6.60245 13.8646C6.38869 13.7663 6.13407 13.7502 5.16026 13.7502H2.00339C2.02561 17.3221 2.19367 19.265 3.46447 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.3253 2.25452 17.5056 2.04439 14.25 2.00791V4.87837C15.0415 4.59923 15.9579 4.77619 16.591 5.40925C17.4697 6.28793 17.4697 7.71255 16.591 8.59123L13.591 11.5912C13.169 12.0132 12.5967 12.2502 12 12.2502C11.4033 12.2502 10.831 12.0132 10.409 11.5912L7.40901 8.59124C6.53033 7.71256 6.53033 6.28793 7.40901 5.40925C8.04207 4.77619 8.95851 4.59923 9.75 4.87837V2.00791C6.49436 2.04439 4.67466 2.25452 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002L2.00001 12.2502L5.29454 12.2502C6.06705 12.2493 6.67886 12.2487 7.22924 12.5018C7.77961 12.755 8.17729 13.2199 8.67941 13.807L9.37216 14.6153C10.0059 15.3547 10.1838 15.5376 10.3975 15.6359C10.6113 15.7342 10.8659 15.7502 11.8397 15.7502H12.1603C13.1341 15.7502 13.3887 15.7342 13.6025 15.6359C13.8162 15.5376 13.9941 15.3547 14.6278 14.6153L15.3206 13.807C15.8227 13.2199 16.2204 12.755 16.7708 12.5018C17.3211 12.2487 17.933 12.2493 18.7055 12.2502L22 12.2502L22 12.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInboxIn as IconComponentType).keywords = [
  "inbox",
  "in",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox",
  "cbs",
  "nsis",
  "nih",
  "nsi",
  "establishment",
  "immigration",
  "without",
  "elected",
  "adherents",
];

export default IconInboxIn as IconComponentType;
