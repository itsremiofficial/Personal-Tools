import { FC } from "react";

const IconUndoLeftSquare: FC<IconProps> = ({
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
            d="M6.5 9.50026H14.0385C15.4063 9.50026 16.0902 9.50026 16.5859 9.82073C16.8235 9.97438 17.0259 10.1767 17.1795 10.4144C17.5 10.91 17.5 11.5939 17.5 12.9618C17.5 14.3297 17.5 15.0136 17.1795 15.5092C17.0259 15.7469 16.8235 15.9492 16.5859 16.1029C16.0902 16.4233 15.4063 16.4233 14.0385 16.4233H9.5M6.5 9.50026L8.75 7.42334M6.5 9.50026L8.75 11.5772"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.3011 6.91463C9.58205 7.219 9.56307 7.69349 9.25871 7.97445L8.41824 8.75027L14.0758 8.75027C14.7279 8.75025 15.2721 8.75024 15.7133 8.79399C16.1748 8.83976 16.6038 8.93919 16.9931 9.19091C17.3199 9.40218 17.5981 9.68039 17.8093 10.0071C18.0611 10.3965 18.1605 10.8255 18.2063 11.287C18.25 11.7281 18.25 12.2723 18.25 12.9245V12.9991C18.25 13.6513 18.25 14.1955 18.2063 14.6366C18.1605 15.0981 18.0611 15.5271 17.8094 15.9165C17.5981 16.2432 17.3199 16.5214 16.9931 16.7327C16.6038 16.9844 16.1748 17.0839 15.7133 17.1296C15.2721 17.1734 14.7279 17.1734 14.0758 17.1733H9.5C9.08579 17.1733 8.75 16.8376 8.75 16.4233C8.75 16.0091 9.08579 15.6733 9.5 15.6733H14.0385C14.7376 15.6733 15.2069 15.6725 15.5652 15.6369C15.9116 15.6026 16.0724 15.5418 16.1787 15.4731C16.3272 15.377 16.4537 15.2506 16.5497 15.102C16.6185 14.9957 16.6793 14.8349 16.7136 14.4886C16.7491 14.1303 16.75 13.6609 16.75 12.9618C16.75 12.2627 16.7491 11.7933 16.7136 11.435C16.6793 11.0887 16.6184 10.9279 16.5497 10.8216C16.4537 10.673 16.3272 10.5466 16.1787 10.4506C16.0724 10.3818 15.9116 10.321 15.5652 10.2867C15.2069 10.2511 14.7376 10.2503 14.0385 10.2503H8.41824L9.25871 11.0261C9.56307 11.307 9.58205 11.7815 9.3011 12.0859C9.02015 12.3903 8.54565 12.4092 8.24129 12.1283L5.99129 10.0514C5.83748 9.90939 5.75 9.70959 5.75 9.50027C5.75 9.29094 5.83748 9.09114 5.99129 8.94916L8.24129 6.87224C8.54565 6.59129 9.02015 6.61027 9.3011 6.91463Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.25871 7.97395C9.56308 7.693 9.58205 7.21851 9.3011 6.91414C9.02015 6.60978 8.54565 6.5908 8.24129 6.87175L5.99129 8.94867C5.83748 9.09065 5.75 9.29045 5.75 9.49977C5.75 9.7091 5.83748 9.9089 5.99129 10.0509L8.24129 12.1278C8.54565 12.4088 9.02015 12.3898 9.3011 12.0854C9.58205 11.781 9.56308 11.3065 9.25871 11.0256L8.41824 10.2498H14.0385C14.7376 10.2498 15.2069 10.2506 15.5652 10.2862C15.9116 10.3205 16.0724 10.3813 16.1787 10.4501C16.3272 10.5461 16.4537 10.6726 16.5497 10.8211C16.6184 10.9274 16.6793 11.0882 16.7136 11.4345C16.7491 11.7929 16.75 12.2622 16.75 12.9613C16.75 13.6604 16.7491 14.1298 16.7136 14.4881C16.6793 14.8344 16.6185 14.9952 16.5497 15.1015C16.4537 15.2501 16.3272 15.3765 16.1787 15.4726C16.0724 15.5413 15.9116 15.6021 15.5652 15.6365C15.2069 15.672 14.7376 15.6729 14.0385 15.6729H9.5C9.08579 15.6729 8.75 16.0086 8.75 16.4229C8.75 16.8371 9.08579 17.1729 9.5 17.1729H14.0758C14.7279 17.1729 15.2721 17.1729 15.7133 17.1291C16.1748 17.0834 16.6038 16.9839 16.9931 16.7322C17.3199 16.5209 17.5981 16.2427 17.8094 15.916C18.0611 15.5266 18.1605 15.0976 18.2063 14.6361C18.25 14.195 18.25 13.6508 18.25 12.9987V12.924C18.25 12.2718 18.25 11.7276 18.2063 11.2865C18.1605 10.825 18.0611 10.396 17.8093 10.0067C17.5981 9.6799 17.3199 9.40169 16.9931 9.19042C16.6038 8.9387 16.1748 8.83927 15.7133 8.7935C15.2721 8.74975 14.7279 8.74976 14.0758 8.74977L8.41824 8.74977L9.25871 7.97395Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUndoLeftSquare as IconComponent).keywords = [
  "undo",
  "left",
  "square",
  "unmake",
  "dispose",
  "rescind",
  "disconnect",
  "vacate",
  "revoke",
  "rid",
  "annul",
  "repeal",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
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

export default IconUndoLeftSquare as IconComponent;
