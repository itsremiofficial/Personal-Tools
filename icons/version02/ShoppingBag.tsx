import { FC } from "react";

const IconShoppingBag: FC<IconProps> = ({
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
            d="M9.06995 6.5H16.27C19.67 6.5 20.01 8.09 20.24 10.03L21.14 17.53C21.43 19.99 20.67 22 17.17 22H8.17995C4.66995 22 3.90995 19.99 4.20995 17.53L5.10995 10.03C5.32995 8.09 5.66995 6.5 9.06995 6.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 8V4.5C8.66992 3 9.66992 2 11.1699 2H14.1699C15.6699 2 16.6699 3 16.6699 4.5V8"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.0799 17.0298H8.66992"
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
            opacity={duotone ? "0.4" : "1"}
            d="M17.1598 22H8.17976C4.66976 22 3.90977 19.99 4.19977 17.53L5.09976 10.03C5.32976 8.09 5.66976 6.5 9.06976 6.5H16.2698C19.6698 6.5 20.0098 8.09 20.2398 10.03L20.9898 16.28L21.1398 17.53C21.1498 17.61 21.1598 17.69 21.1698 17.77C21.3798 20.12 20.5598 22 17.1598 22Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 8.75C16.2599 8.75 15.9199 8.41 15.9199 8V4.5C15.9199 3.42 15.2499 2.75 14.1699 2.75H11.1699C10.0899 2.75 9.41992 3.42 9.41992 4.5V8C9.41992 8.41 9.07992 8.75 8.66992 8.75C8.25992 8.75 7.91992 8.41 7.91992 8V4.5C7.91992 2.59 9.25992 1.25 11.1699 1.25H14.1699C16.0799 1.25 17.4199 2.59 17.4199 4.5V8C17.4199 8.41 17.0799 8.75 16.6699 8.75Z"
            fill="currentColor"
          />
          <path
            d="M21.1699 17.7698C21.1399 17.7798 21.1099 17.7798 21.0799 17.7798H8.66992C8.25992 17.7798 7.91992 17.4398 7.91992 17.0298C7.91992 16.6098 8.25992 16.2798 8.66992 16.2798H20.9899L21.1399 17.5298C21.1499 17.6098 21.1599 17.6898 21.1699 17.7698Z"
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
            d="M16.6699 8.75C16.2599 8.75 15.9199 8.41 15.9199 8V4.5C15.9199 3.42 15.2499 2.75 14.1699 2.75H11.1699C10.0899 2.75 9.41992 3.42 9.41992 4.5V8C9.41992 8.41 9.07992 8.75 8.66992 8.75C8.25992 8.75 7.91992 8.41 7.91992 8V4.5C7.91992 2.59 9.25992 1.25 11.1699 1.25H14.1699C16.0799 1.25 17.4199 2.59 17.4199 4.5V8C17.4199 8.41 17.0799 8.75 16.6699 8.75Z"
            fill="currentColor"
          />
          <path
            d="M8.66977 17.78C8.25977 17.78 7.91977 17.44 7.91977 17.03C7.91977 16.61 8.25977 16.28 8.66977 16.28H20.4298C20.7298 16.28 20.9598 16.02 20.9298 15.72L20.2498 10.03C20.0098 8.09 19.6698 6.5 16.2698 6.5H9.06977C5.66977 6.5 5.32977 8.09 5.09977 10.03L4.19977 17.53C3.90977 19.99 4.66977 22 8.17977 22H17.1598C20.3198 22 21.2498 20.37 21.1998 18.25C21.1898 17.98 20.9698 17.78 20.6998 17.78H8.66977Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShoppingBag as IconComponent).keywords = [
  "shopping",
  "bag",
  "shopper",
  "marketing",
  "errand",
  "grocery",
  "store",
  "supermarket",
  "teleshopping",
  "retail",
  "market",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
];

export default IconShoppingBag as IconComponent;
