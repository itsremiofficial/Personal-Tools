import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCompassSquare: FC<IconProps> = ({
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
            d="M13.0241 14.5605C10.7143 15.4844 9.55942 15.9463 8.89976 15.4981C8.74336 15.3918 8.60846 15.2569 8.50218 15.1005C8.05392 14.4408 8.51588 13.2859 9.43979 10.9762C9.63686 10.4835 9.73539 10.2372 9.90486 10.0439C9.94804 9.99465 9.99441 9.94829 10.0437 9.9051C10.2369 9.73563 10.4832 9.6371 10.9759 9.44003C13.2857 8.51612 14.4406 8.05416 15.1002 8.50242C15.2566 8.60871 15.3915 8.7436 15.4978 8.90001C15.9461 9.55966 15.4841 10.7146 14.5602 13.0243C14.3631 13.517 14.2646 13.7633 14.0951 13.9566C14.052 14.0058 14.0056 14.0522 13.9563 14.0954C13.7631 14.2649 13.5168 14.3634 13.0241 14.5605Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z"
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
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M13.024 14.5603C13.5166 14.3633 13.763 14.2647 13.9562 14.0953C14.0055 14.0521 14.0518 14.0057 14.095 13.9565C14.2645 13.7632 14.363 13.5169 14.5601 13.0242C15.484 10.7144 15.946 9.55954 15.4977 8.89989C15.3914 8.74348 15.2565 8.60858 15.1001 8.5023C14.4405 8.05404 13.2856 8.516 10.9758 9.43991C10.4831 9.63698 10.2368 9.73551 10.0435 9.90498C9.99429 9.94817 9.94792 9.99453 9.90474 10.0438C9.73527 10.237 9.63673 10.4834 9.43966 10.976C8.51575 13.2858 8.0538 14.4407 8.50206 15.1004C8.60834 15.2568 8.74324 15.3917 8.89964 15.4979C9.5593 15.9462 10.7142 15.4842 13.024 14.5603Z"
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
            d="M12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002ZM13.9563 14.0954C13.7631 14.2649 13.5168 14.3634 13.0241 14.5605C10.7143 15.4844 9.55942 15.9463 8.89976 15.4981C8.74336 15.3918 8.60846 15.2569 8.50218 15.1005C8.05392 14.4408 8.51587 13.2859 9.43979 10.9762C9.63685 10.4835 9.73539 10.2372 9.90486 10.0439C9.94804 9.99465 9.99441 9.94829 10.0437 9.9051C10.2369 9.73563 10.4832 9.6371 10.9759 9.44003C13.2857 8.51612 14.4406 8.05416 15.1002 8.50242C15.2566 8.6087 15.3915 8.7436 15.4978 8.90001C15.9461 9.55966 15.4841 10.7146 14.5602 13.0243C14.3631 13.517 14.2646 13.7633 14.0951 13.9566C14.052 14.0058 14.0056 14.0522 13.9563 14.0954Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCompassSquare as IconComponentType).keywords = [
  "compass",
  "square",
  "orbit",
  "range",
  "dig",
  "circumnavigate",
  "ambit",
  "scope",
  "comprehend",
  "reach",
  "grasp",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconCompassSquare as IconComponentType;