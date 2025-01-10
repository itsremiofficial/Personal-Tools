import { FC } from "react";

const IconCart: FC<IconProps> = ({
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
            d="M3.86376 16.4557C3.00581 13.0239 2.57684 11.308 3.47767 10.1543C4.3785 9.00049 6.14721 9.00049 9.68462 9.00049H14.3153C17.8527 9.00049 19.6214 9.00049 20.5222 10.1543C21.4231 11.308 20.9941 13.0239 20.1362 16.4557C19.5905 18.6384 19.3176 19.7297 18.5039 20.3651C17.6901 21.0005 16.5652 21.0005 14.3153 21.0005H9.68462C7.43476 21.0005 6.30983 21.0005 5.49605 20.3651C4.68227 19.7297 4.40943 18.6384 3.86376 16.4557Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 9.50049L18.7896 6.89514C18.5157 5.89054 18.3787 5.38824 18.0978 5.00995C17.818 4.63322 17.4378 4.34283 17.0008 4.17201C16.5619 4.00049 16.0413 4.00049 15 4.00049M4.5 9.50049L5.2104 6.89514C5.48432 5.89053 5.62128 5.38823 5.90221 5.00995C6.18199 4.63322 6.56216 4.34283 6.99922 4.17201C7.43808 4.00049 7.95872 4.00049 9 4.00049"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 4.00049C9 3.4482 9.44772 3.00049 10 3.00049H14C14.5523 3.00049 15 3.4482 15 4.00049C15 4.55277 14.5523 5.00049 14 5.00049H10C9.44772 5.00049 9 4.55277 9 4.00049Z"
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
            d="M10.0234 2.00049C9.05694 2.00049 8.27344 2.78399 8.27344 3.75049C8.27344 4.71699 9.05694 5.50049 10.0234 5.50049H14.0234C14.9899 5.50049 15.7734 4.71699 15.7734 3.75049C15.7734 2.78399 14.9899 2.00049 14.0234 2.00049H10.0234Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.88671 16.2057C3.02876 12.7739 2.59979 11.058 3.50062 9.90425C4.40145 8.75049 6.17016 8.75049 9.70756 8.75049H14.3382C17.8757 8.75049 19.6444 8.75049 20.5452 9.90425C21.446 11.058 21.0171 12.7739 20.1591 16.2057C19.6134 18.3884 19.3406 19.4797 18.5268 20.1151C17.713 20.7505 16.5881 20.7505 14.3382 20.7505H9.70756C7.45771 20.7505 6.33278 20.7505 5.519 20.1151C4.70521 19.4797 4.43238 18.3884 3.88671 16.2057Z"
            fill="currentColor"
          />
          <path
            d="M15.6039 4.50288C15.7126 4.27498 15.7734 4.01989 15.7734 3.75058C15.7734 3.48253 15.7132 3.22855 15.6055 3.00146C16.289 3.00643 16.8217 3.03781 17.2973 3.22367C17.8655 3.44574 18.3597 3.82324 18.7234 4.313C19.0903 4.80708 19.2626 5.44037 19.4996 6.31202L19.546 6.48239L20.0587 9.44537C19.6501 9.16344 19.1231 8.99591 18.4414 8.89636L18.0801 6.80834C17.7964 5.76863 17.6934 5.4419 17.5191 5.20732C17.3233 4.9436 17.0572 4.74033 16.7512 4.62076C16.5314 4.53485 16.2658 4.50957 15.6039 4.50288Z"
            fill="currentColor"
          />
          <path
            d="M8.44142 3.00147C8.3337 3.22855 8.27344 3.48253 8.27344 3.75058C8.27344 4.01989 8.33427 4.27499 8.44294 4.50288C7.78109 4.50958 7.51551 4.53485 7.29571 4.62076C6.98976 4.74033 6.72365 4.9436 6.5278 5.20732C6.35359 5.4419 6.25059 5.76863 5.96681 6.80834L5.60551 8.89627C4.92397 8.99576 4.39697 9.16318 3.98828 9.44491L4.50092 6.48239L4.54731 6.31203C4.78439 5.44038 4.95663 4.80708 5.32356 4.313C5.68728 3.82324 6.18149 3.44574 6.74968 3.22367C7.22521 3.03782 7.75793 3.00644 8.44142 3.00147Z"
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
            d="M8.41799 3.25138C8.69867 2.65966 9.30155 2.25049 10 2.25049H14C14.6984 2.25049 15.3013 2.65966 15.582 3.25138C16.2655 3.25635 16.7983 3.28773 17.2738 3.47358C17.842 3.69565 18.3362 4.07315 18.6999 4.56291C19.0668 5.05699 19.2391 5.69028 19.4762 6.56193L20.2181 9.28321L20.4985 10.1245C20.5065 10.1344 20.5144 10.1443 20.5222 10.1544C21.4231 11.3081 20.9941 13.024 20.1362 16.4558C19.5905 18.6385 19.3176 19.7298 18.5039 20.3652C17.6901 21.0006 16.5652 21.0006 14.3153 21.0006H9.68462C7.43476 21.0006 6.30983 21.0006 5.49605 20.3652C4.68227 19.7298 4.40943 18.6385 3.86376 16.4558C3.00581 13.024 2.57684 11.3081 3.47767 10.1544C3.48555 10.1443 3.4935 10.1343 3.50152 10.1243L3.7819 9.2832L4.52384 6.56194C4.76092 5.69029 4.93316 5.05699 5.30009 4.56291C5.66381 4.07315 6.15802 3.69565 6.72621 3.47358C7.20175 3.28773 7.73447 3.25635 8.41799 3.25138ZM8.41951 4.75279C7.75763 4.75949 7.49204 4.78476 7.27224 4.87067C6.96629 4.99024 6.70018 5.19351 6.50433 5.45723C6.32822 5.69437 6.22488 6.02569 5.93398 7.09255L5.36442 9.18139C6.38451 9.0006 7.77753 9.0006 9.68462 9.0006H14.3153C16.2224 9.0006 17.6155 9.0006 18.6356 9.18141L18.066 7.09255C17.7751 6.02569 17.6718 5.69437 17.4957 5.45723C17.2998 5.19351 17.0337 4.99024 16.7278 4.87067C16.508 4.78476 16.2424 4.75949 15.5805 4.75279C15.2992 5.34279 14.6972 5.75049 14 5.75049H10C9.30281 5.75049 8.70084 5.34279 8.41951 4.75279Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCart as IconComponent).keywords = [
  "cart",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon",
];

export default IconCart as IconComponent;
