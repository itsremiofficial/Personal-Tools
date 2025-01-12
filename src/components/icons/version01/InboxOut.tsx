import { FC } from "react";

const IconInboxOut: FC<IconProps> = ({
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
            d="M17 2.12711C18.6251 2.28696 19.7191 2.64823 20.5355 3.46471C22 4.92917 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92917 3.46447 3.46471C4.28094 2.64823 5.37486 2.28696 7 2.12711"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 10.0002L12 2.00024M12 2.00024L15 5.00024M12 2.00024L9 5.00024"
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
            d="M12.5305 5.96991C12.3899 5.82926 12.1991 5.75024 12.0002 5.75024C11.8013 5.75024 11.6105 5.82926 11.4699 5.96991L8.16987 9.26991C7.87697 9.56281 7.87697 10.0377 8.16987 10.3306C8.46276 10.6235 8.93763 10.6235 9.23053 10.3306L11.2502 8.3109L11.2502 16.4976C10.7163 16.4893 10.3847 16.4554 10.0844 16.3173C9.68655 16.1343 9.392 15.7907 8.80291 15.1034L8.19747 14.3971C7.60837 13.7098 7.31382 13.3662 6.91599 13.1832C6.51815 13.0002 6.06555 13.0002 5.16035 13.0002H2C2.0073 17.0553 2.10744 19.1787 3.46451 20.5358C4.92902 22.0002 7.28611 22.0002 12.0003 22.0002C16.7145 22.0002 19.0716 22.0002 20.5361 20.5358C21.8931 19.1787 21.9927 17.0553 22 13.0002H18.8402C17.935 13.0002 17.4824 13.0002 17.0846 13.1832C16.6868 13.3662 16.3922 13.7098 15.8031 14.3971L15.1977 15.1034C14.6086 15.7907 14.314 16.1343 13.9162 16.3173C13.6158 16.4554 13.2842 16.4893 12.7502 16.4976V8.3109L14.7699 10.3306C15.0628 10.6235 15.5376 10.6235 15.8305 10.3306C16.1234 10.0377 16.1234 9.56281 15.8305 9.26991L12.5305 5.96991Z"
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
            d="M12 1.25024C12.1989 1.25024 12.3897 1.32926 12.5303 1.46991L15.5303 4.46991C15.8232 4.76281 15.8232 5.23768 15.5303 5.53057C15.2374 5.82347 14.7626 5.82347 14.4697 5.53057L12.75 3.8109V10.0002C12.75 10.4145 12.4142 10.7502 12 10.7502C11.5858 10.7502 11.25 10.4145 11.25 10.0002V3.8109L9.53033 5.53057C9.23744 5.82347 8.76256 5.82347 8.46967 5.53057C8.17678 5.23768 8.17678 4.76281 8.46967 4.46991L11.4697 1.46991C11.6103 1.32926 11.8011 1.25024 12 1.25024Z"
            fill="currentColor"
          />
          <path
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C21.8063 19.265 21.9744 17.3221 21.9966 13.7502H18.8397C17.8659 13.7502 17.6113 13.7663 17.3975 13.8646C17.1838 13.9629 17.0059 14.1458 16.3722 14.8852L15.6794 15.6935C15.1773 16.2806 14.7796 16.7455 14.2292 16.9987C13.6789 17.2518 13.067 17.2512 12.2945 17.2503H11.7055C10.933 17.2512 10.3211 17.2518 9.77076 16.9987C9.22038 16.7455 8.82271 16.2806 8.32058 15.6935L7.62784 14.8852C6.9941 14.1458 6.81622 13.9629 6.60245 13.8646C6.38869 13.7663 6.13407 13.7502 5.16026 13.7502H2.00339C2.02561 17.3221 2.19367 19.265 3.46447 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.5152 2.44438 18.0616 2.13494 15.6794 2.04109C15.5259 2.03505 15.3686 2.02989 15.2072 2.02551L16.591 3.40925C17.4697 4.28793 17.4697 5.71255 16.591 6.59124C15.9579 7.22429 15.0415 7.40126 14.25 7.12212V10.0002C14.25 11.2429 13.2426 12.2502 12 12.2502C10.7574 12.2502 9.75 11.2429 9.75 10.0002V7.12212C8.95851 7.40125 8.04207 7.22429 7.40901 6.59123C6.53033 5.71255 6.53033 4.28793 7.40901 3.40925L8.78506 2.02572C6.12449 2.09855 4.5495 2.37968 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002L2.00001 12.2502L5.29454 12.2502C6.06705 12.2493 6.67886 12.2487 7.22924 12.5018C7.77961 12.755 8.17729 13.2199 8.67941 13.807L9.37216 14.6153C10.0059 15.3547 10.1838 15.5376 10.3975 15.6359C10.6113 15.7342 10.8659 15.7502 11.8397 15.7502H12.1603C13.1341 15.7502 13.3887 15.7342 13.6025 15.6359C13.8162 15.5376 13.9941 15.3547 14.6278 14.6153L15.3206 13.807C15.8227 13.2199 16.2204 12.755 16.7708 12.5018C17.3211 12.2487 17.933 12.2493 18.7055 12.2502L22 12.2502L22 12.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInboxOut as IconComponent).keywords = [
  "inbox",
  "out",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox",
  "away",
  "outer",
  "exterior",
  "retired",
  "extinct",
  "dead",
  "down",
  "extinguished",
  "come out",
];

export default IconInboxOut as IconComponent;
