import { FC } from "react";

const IconFolderPathConnect: FC<IconProps> = ({
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
            d="M16.5 7.50012L13.5 7.50012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M5 5.21746C5 4.64381 5 4.35699 5.04855 4.11807C5.26225 3.06632 6.14822 2.24364 7.28087 2.0452C7.53817 2.00012 7.84705 2.00012 8.46482 2.00012C8.7355 2.00012 8.87083 2.00012 9.0009 2.01142C9.56166 2.06011 10.0936 2.2647 10.5272 2.59846C10.6277 2.67587 10.7234 2.76473 10.9148 2.94246L11.3 3.30012C11.871 3.83038 12.1566 4.09551 12.4985 4.27215C12.6863 4.36918 12.8855 4.44581 13.0922 4.50053C13.4685 4.60012 13.8723 4.60012 14.6799 4.60012H14.9415C16.7841 4.60012 17.7055 4.60012 18.3043 5.10027C18.3594 5.14628 18.4118 5.19496 18.4614 5.24611C19 5.8022 19 6.65772 19 8.36876V9.80012C19 12.2514 19 13.4771 18.1799 14.2386C17.3598 15.0001 16.0399 15.0001 13.4 15.0001H10.6C7.96013 15.0001 6.6402 15.0001 5.8201 14.2386C5 13.4771 5 12.2514 5 9.80012V5.21746Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 20.0001H14M2 20.0001H10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.0001V15.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="20.0001"
            r="2"
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
            d="M2 20.0001C2 19.5859 2.33579 19.2501 2.75 19.2501H10H11.25V18.0001V15.0001H12.75V18.0001V19.2501H14H21.25C21.6642 19.2501 22 19.5859 22 20.0001C22 20.4143 21.6642 20.7501 21.25 20.7501H14H10H2.75C2.33579 20.7501 2 20.4143 2 20.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 9.80012V8.36876C19 6.65772 19 5.8022 18.4614 5.24611C18.4118 5.19496 18.3594 5.14628 18.3043 5.10027C17.7055 4.60012 16.7841 4.60012 14.9415 4.60012H14.6799C13.8723 4.60012 13.4685 4.60012 13.0922 4.50053C12.8855 4.44581 12.6863 4.36918 12.4985 4.27215C12.1566 4.09551 11.871 3.83038 11.3 3.30012L10.9148 2.94246C10.7234 2.76473 10.6277 2.67587 10.5272 2.59846C10.0936 2.2647 9.56166 2.06011 9.0009 2.01142C8.87083 2.00012 8.7355 2.00012 8.46482 2.00012C7.84705 2.00012 7.53817 2.00012 7.28087 2.0452C6.14822 2.24364 5.26225 3.06632 5.04855 4.11807C5 4.35699 5 4.64381 5 5.21746V9.80012C5 12.2514 5 13.4771 5.8201 14.2386C6.6402 15.0001 7.96013 15.0001 10.6 15.0001H11.25H12.75H13.4C16.0399 15.0001 17.3598 15.0001 18.1799 14.2386C19 13.4771 19 12.2514 19 9.80012ZM13.5 6.75012C13.0858 6.75012 12.75 7.08591 12.75 7.50012C12.75 7.91434 13.0858 8.25012 13.5 8.25012H16.5C16.9142 8.25012 17.25 7.91434 17.25 7.50012C17.25 7.08591 16.9142 6.75012 16.5 6.75012H13.5Z"
            fill="currentColor"
          />
          <circle cx="12" cy="20.0001" r="2" fill="currentColor" />
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
            d="M19 8.36876V9.80012C19 12.2514 19 13.4771 18.1799 14.2386C17.3598 15.0001 16.0399 15.0001 13.4 15.0001H12.75V18.0001C12.75 18.048 12.7455 18.0949 12.7369 18.1403C13.2444 18.3415 13.6499 18.7444 13.8546 19.2501H14H21.25C21.6642 19.2501 22 19.5859 22 20.0001C22 20.4143 21.6642 20.7501 21.25 20.7501H14H13.8546C13.5579 21.4831 12.8394 22.0001 12 22.0001C11.1607 22.0001 10.4421 21.4831 10.1454 20.7501H10H2.75C2.33579 20.7501 2 20.4143 2 20.0001C2 19.5859 2.33579 19.2501 2.75 19.2501H10H10.1454C10.3501 18.7444 10.7556 18.3415 11.2631 18.1403C11.2545 18.0949 11.25 18.048 11.25 18.0001V15.0001H10.6C7.96015 15.0001 6.64022 15.0001 5.82012 14.2386C5.00002 13.4771 5.00002 12.2514 5.00002 9.80012V5.21746C5.00002 4.64381 5.00002 4.35699 5.04856 4.11807C5.26227 3.06632 6.14824 2.24364 7.28089 2.0452C7.53818 2.00012 7.84707 2.00012 8.46484 2.00012C8.73552 2.00012 8.87085 2.00012 9.00092 2.01142C9.56167 2.06011 10.0936 2.2647 10.5272 2.59846C10.6277 2.67587 10.7234 2.76473 10.9148 2.94246L11.3 3.30012C11.8711 3.83038 12.1566 4.09551 12.4985 4.27215C12.6863 4.36918 12.8856 4.44581 13.0923 4.50053C13.4685 4.60012 13.8723 4.60012 14.6799 4.60012H14.9415C16.7841 4.60012 17.7055 4.60012 18.3043 5.10027C18.3594 5.14628 18.4118 5.19496 18.4614 5.24611C19 5.8022 19 6.65772 19 8.36876ZM12.75 7.50012C12.75 7.08591 13.0858 6.75012 13.5 6.75012H16.5C16.9142 6.75012 17.25 7.08591 17.25 7.50012C17.25 7.91434 16.9142 8.25012 16.5 8.25012H13.5C13.0858 8.25012 12.75 7.91434 12.75 7.50012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderPathConnect as IconComponent).keywords = [
  "folder",
  "path",
  "connect",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "way",
  "route",
  "track",
  "way of life",
  "course",
  "pathway",
  "footway",
  "footpath",
  "trailhead",
  "link",
  "unite",
  "associate",
  "relate",
  "join",
  "plug in",
  "tie in",
  "tie",
  "touch base",
];

export default IconFolderPathConnect as IconComponent;
