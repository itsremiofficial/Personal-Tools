import { FC } from "react";

const IconFolderFavouriteBookmark: FC<IconProps> = ({
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
            d="M18 6.00012V10.8529C18 11.143 18 11.288 17.9051 11.3466C17.8103 11.4053 17.6806 11.3404 17.4211 11.2107L16.1789 10.5896C16.0911 10.5457 16.0472 10.5237 16 10.5237C15.9528 10.5237 15.9089 10.5457 15.8211 10.5896L14.5789 11.2107C14.3194 11.3404 14.1897 11.4053 14.0949 11.3466C14 11.288 14 11.143 14 10.8529V6.00012"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M2 6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.657 2 17.7714 2 14.0001V6.94987Z"
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
            d="M18 10.8529V6.00012H14V10.8529C14 11.143 14 11.288 14.0949 11.3466C14.1897 11.4053 14.3194 11.3404 14.5789 11.2107L15.8211 10.5896C15.9089 10.5457 15.9528 10.5237 16 10.5237C16.0472 10.5237 16.0911 10.5457 16.1789 10.5896L17.4211 11.2107C17.6806 11.3404 17.8103 11.4053 17.9051 11.3466C18 11.288 18 11.143 18 10.8529Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.657 2 17.7714 2 14.0001V6.94987Z"
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
            d="M14.75 5.75012H16.2021C16.5773 5.75012 16.9258 5.75012 17.25 5.75235V10.6191L16.5448 10.225L16.5361 10.2201C16.5017 10.2008 16.4388 10.1655 16.3765 10.1381C16.2946 10.102 16.1649 10.0561 16 10.0561C15.8351 10.0561 15.7054 10.102 15.6235 10.1381C15.5612 10.1655 15.4983 10.2008 15.4639 10.2201L15.4552 10.225L14.75 10.6191V5.75012Z"
            fill="currentColor"
          />
          <path
            d="M22 11.548V13.7501C22 17.5214 22 19.407 20.8284 20.5785C19.6569 21.7501 17.7712 21.7501 14 21.7501H10C6.22876 21.7501 4.34315 21.7501 3.17157 20.5785C2 19.407 2 17.5214 2 13.7501V6.69987C2 5.81734 2 5.37607 2.06935 5.00851C2.37464 3.39043 3.64031 2.12476 5.25839 1.81947C5.62595 1.75012 6.06722 1.75012 6.94975 1.75012C7.33642 1.75012 7.52976 1.75012 7.71557 1.7675C8.51665 1.84241 9.27652 2.15716 9.89594 2.67064C10.0396 2.78974 10.1763 2.92645 10.4497 3.19987L11 3.75012C11.8158 4.5659 12.2237 4.97379 12.7121 5.24555C12.8851 5.34181 13.0649 5.42502 13.25 5.49455V5.75012V11.174L13.25 11.203C13.2499 11.3381 13.2498 11.5054 13.2684 11.6457C13.2878 11.7915 13.3512 12.1237 13.6686 12.3429C14.0156 12.5826 14.371 12.4923 14.5327 12.4332C14.6682 12.3836 14.8147 12.3015 14.9195 12.2427L14.9448 12.2286L16 11.6389L17.0552 12.2286L17.0805 12.2427C17.1853 12.3015 17.3318 12.3836 17.4673 12.4332C17.629 12.4923 17.9844 12.5826 18.3314 12.3429C18.6488 12.1237 18.7122 11.7915 18.7316 11.6457C18.7502 11.5054 18.7501 11.3381 18.75 11.203L18.75 11.174V5.79698C19.7988 5.86923 20.4872 6.05286 21.0062 6.51959C21.0849 6.59037 21.1598 6.66526 21.2305 6.74395C22 7.59947 22 8.91566 22 11.548Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderFavouriteBookmark as IconComponent).keywords = [
  "folder",
  "favourite",
  "bookmark",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "preferred",
  "favored",
  "favorite",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner",
  "bookmarker",
  "marking",
  "caller",
  "dialing",
  "dialer",
  "maker",
  "add",
  "marker",
  "make",
];

export default IconFolderFavouriteBookmark as IconComponent;
