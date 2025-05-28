import { FC } from "react";

const IconCardPos: FC<IconProps> = ({
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
            d="M4.59961 15.8792L16.5496 3.9292"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.7715 18.279L12.9715 17.079"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.4629 15.5887L16.8529 13.1987"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.27119 10.239L10.9112 3.599C13.0312 1.479 14.0912 1.469 16.1912 3.569L21.1012 8.479C23.2012 10.579 23.1912 11.639 21.0712 13.759L14.4312 20.399C12.3112 22.519 11.2512 22.529 9.15119 20.429L4.24119 15.519C2.14119 13.419 2.14119 12.369 4.27119 10.239Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 21.9985H22.6699"
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
            d="M21.9199 22H3.41992C3.00992 22 2.66992 21.66 2.66992 21.25C2.66992 20.84 3.00992 20.5 3.41992 20.5H21.9199C22.3299 20.5 22.6699 20.84 22.6699 21.25C22.6699 21.66 22.3299 22 21.9199 22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.2598 13.7L14.0298 20.93C12.6098 22.35 10.3198 22.35 8.9098 20.94L4.2998 16.33L16.6598 3.96997L21.2698 8.57997C22.6798 9.98997 22.6798 12.28 21.2598 13.7Z"
            fill="currentColor"
          />
          <path
            d="M16.6595 3.97004L4.2895 16.33L3.3795 15.42C1.9695 14.01 1.9695 11.72 3.3895 10.3L10.6195 3.07004C12.0395 1.65004 14.3295 1.65004 15.7395 3.06004L16.6595 3.97004Z"
            fill="currentColor"
          />
          <path
            d="M13.5602 17.6L12.2102 18.95C11.9302 19.23 11.4802 19.23 11.2002 18.95C10.9202 18.67 10.9202 18.22 11.2002 17.94L12.5502 16.59C12.8302 16.31 13.2802 16.31 13.5602 16.59C13.8402 16.87 13.8402 17.32 13.5602 17.6Z"
            fill="currentColor"
          />
          <path
            d="M17.9403 13.22L15.2503 15.91C14.9703 16.19 14.5203 16.19 14.2403 15.91C13.9603 15.63 13.9603 15.18 14.2403 14.9L16.9303 12.21C17.2103 11.93 17.6603 11.93 17.9403 12.21C18.2103 12.49 18.2103 12.94 17.9403 13.22Z"
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
            d="M22.6719 21.25C22.6719 21.66 22.3319 22 21.9219 22H3.42188C3.01188 22 2.67188 21.66 2.67188 21.25C2.67188 20.84 3.01188 20.5 3.42188 20.5H21.9219C22.3319 20.5 22.6719 20.84 22.6719 21.25Z"
            fill="currentColor"
          />
          <path
            d="M16.0623 4.52001L5.3223 15.26C4.9123 15.67 4.2523 15.67 3.8523 15.26H3.8423C2.4523 13.86 2.4523 11.6 3.8423 10.21L10.9923 3.06001C12.3923 1.66001 14.6523 1.66001 16.0523 3.06001C16.4623 3.45001 16.4623 4.12001 16.0623 4.52001Z"
            fill="currentColor"
          />
          <path
            d="M21.4923 8.48995L18.4423 5.43995C18.0323 5.02995 17.3723 5.02995 16.9723 5.43995L6.2323 16.1799C5.8223 16.5799 5.8223 17.2399 6.2323 17.6499L9.2823 20.7099C10.6823 22.0999 12.9423 22.0999 14.3423 20.7099L21.4823 13.5599C22.9023 12.1599 22.9023 9.88995 21.4923 8.48995ZM13.4323 17.5199L12.2223 18.7399C11.9723 18.9899 11.5623 18.9899 11.3023 18.7399C11.0523 18.4899 11.0523 18.0799 11.3023 17.8199L12.5223 16.5999C12.7623 16.3599 13.1823 16.3599 13.4323 16.5999C13.6823 16.8499 13.6823 17.2799 13.4323 17.5199ZM17.4023 13.5499L14.9623 15.9999C14.7123 16.2399 14.3023 16.2399 14.0423 15.9999C13.7923 15.7499 13.7923 15.3399 14.0423 15.0799L16.4923 12.6299C16.7323 12.3899 17.1523 12.3899 17.4023 12.6299C17.6523 12.8899 17.6523 13.2999 17.4023 13.5499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardPos as IconComponent).keywords = [
  "card",
  "pos",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "polonium",
  "atomic number 84",
  "po river",
  "poc",
  "vpn",
  "pov",
  "psd",
  "sales",
  "ordering",
];

export default IconCardPos as IconComponent;
