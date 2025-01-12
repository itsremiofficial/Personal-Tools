import { FC } from "react";

const IconPerfume: FC<IconProps> = ({
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
            d="M7 5.42168V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V5.42168V7H7V5.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7H7"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 5.00021C7.55228 5.00021 8 5.05228 8 4.5C8 3.94772 7.55228 4.00035 7 4.00035"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 7C5.58172 7 2 10.3556 2 14.495C2 16.4098 2.76642 18.1569 4.02754 19.4817C4.47765 19.9546 4.7027 20.191 5.64624 20.5955C6.58979 21 7.24039 21 8.5416 21H11.4584C12.7596 21 13.4102 21 14.3538 20.5955C15.2973 20.191 15.5224 19.9546 15.9725 19.4817C17.2336 18.1569 18 16.4098 18 14.495C18 10.3556 14.4183 7 10 7Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.5 13C3.93501 13.5805 5.64292 14.7308 7.86069 14.9805C10.856 15.3178 12.4244 12.8237 15.3979 13.3176C16.446 13.4917 17.4232 13.7921 18 14.112"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.5 5H14.3197C15.0959 5 15.8615 5.18073 16.5557 5.52786L17.5 6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20.5 5.24977C21.6958 5.94012 22.2174 7.27523 21.6651 8.23182C21.1128 9.1884 19.6958 9.40422 18.5 8.71387C17.3043 8.02351 16.7827 6.6884 17.335 5.73182C17.8872 4.77523 19.3043 4.55941 20.5 5.24977Z"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5.75018C7.03169 5.75018 7.06798 5.75046 7.10681 5.75075C7.20388 5.75148 7.31673 5.75233 7.41273 5.74932C7.55169 5.74497 7.74039 5.73199 7.92888 5.67364C8.13123 5.61101 8.36593 5.48561 8.53721 5.23926C8.70287 5.00099 8.75 4.73415 8.75 4.49997C8.75 4.26583 8.70288 3.99889 8.53706 3.76057C8.36561 3.51414 8.13071 3.3889 7.92838 3.32643C7.73991 3.26823 7.55124 3.25537 7.4124 3.25108C7.31696 3.24814 7.20446 3.249 7.10767 3.24974C7.06848 3.25004 7.03186 3.25032 7 3.25032V5.75018Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M2.14677 13.0586C2.05045 13.5235 2 14.0037 2 14.495C2 16.4098 2.76642 18.1569 4.02754 19.4817C4.47765 19.9546 4.7027 20.191 5.64624 20.5955C6.58979 21 7.24039 21 8.5416 21H11.4584C12.7596 21 13.4102 21 14.3538 20.5955C15.2973 20.191 15.5224 19.9546 15.9725 19.4817C17.2336 18.1569 18 16.4098 18 14.495C18 14.3624 17.9963 14.2305 17.9891 14.0995C17.3923 13.7837 16.3893 13.4877 15.314 13.3157C12.2445 12.8247 10.6256 15.304 7.53362 14.9687C5.31944 14.7286 3.59759 13.6511 2.14677 13.0586Z"
              fill="currentColor"
            />
            <path
              d="M7.53362 14.9687C10.6256 15.304 12.2445 12.8247 15.314 13.3157C16.3893 13.4877 17.3923 13.7837 17.9891 14.0995C17.7696 10.144 14.2767 7 10 7C6.1061 7 2.86197 9.60638 2.14677 13.0586C3.59759 13.6511 5.31944 14.7286 7.53362 14.9687Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M13 7.54481V5C13 3.58579 13 2.87868 12.5607 2.43934C12.1213 2 11.4142 2 10 2C8.58579 2 7.87868 2 7.43934 2.43934C7.23882 2.63986 7.12982 2.89616 7.07057 3.25002L7.10767 3.24974C7.20446 3.249 7.31696 3.24814 7.4124 3.25108C7.55124 3.25537 7.73991 3.26823 7.92838 3.32643C8.13071 3.3889 8.36561 3.51414 8.53706 3.76057C8.70288 3.99889 8.75 4.26583 8.75 4.49997C8.75 4.73415 8.70287 5.00099 8.53721 5.23926C8.36593 5.48561 8.13123 5.61101 7.92888 5.67364C7.74039 5.73199 7.55169 5.74497 7.41273 5.74932C7.31674 5.75233 7.2038 5.75148 7.10673 5.75075C7.06794 5.75046 7.03166 5.75018 7 5.75018V7.54481C7.92643 7.19347 8.9391 7 10 7C11.0609 7 12.0736 7.19347 13 7.54481Z"
            fill="currentColor"
          />
          <path
            d="M2.14677 13.0586C2.05045 13.5235 2 14.0037 2 14.495C2 16.4098 2.76642 18.1569 4.02754 19.4817C4.47765 19.9546 4.7027 20.191 5.64624 20.5955C6.58979 21 7.24039 21 8.5416 21H11.4584C12.7596 21 13.4102 21 14.3538 20.5955C15.2973 20.191 15.5224 19.9546 15.9725 19.4817C17.2336 18.1569 18 16.4098 18 14.495C18 14.3624 17.9963 14.2305 17.9891 14.0995C17.3923 13.7837 16.3893 13.4877 15.314 13.3157C12.2445 12.8247 10.6256 15.304 7.53362 14.9687C5.31944 14.7286 3.59759 13.6511 2.14677 13.0586Z"
            fill="currentColor"
          />
          <path
            d="M20.548 5.37835C21.8012 6.0247 22.3479 7.27471 21.7691 8.17033C21.1902 9.06594 19.7051 9.268 18.452 8.62165C17.1988 7.9753 16.6521 6.72529 17.2309 5.82967C17.8098 4.93406 19.2949 4.732 20.548 5.37835Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 5.75H14.3197C14.9795 5.75 15.6302 5.90361 16.2203 6.19868L17.0002 6.58865C17.005 6.32283 17.0794 6.06411 17.2309 5.82967C17.3701 5.61442 17.5615 5.43923 17.7895 5.30625L16.8911 4.85704C16.0927 4.45784 15.2124 4.25 14.3197 4.25H13V5.75Z"
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
            d="M2.39929 12.1502C3.44991 9.15925 6.45581 7 10 7C13.9567 7 17.2425 9.69112 17.8859 13.2263C17.2308 12.9498 16.3815 12.7207 15.5208 12.5777C13.786 12.2896 12.4605 12.8901 11.326 13.4081L11.3146 13.4133C10.1612 13.9399 9.20366 14.377 7.94462 14.2352C6.94182 14.1223 6.03898 13.8043 5.19054 13.4285C4.80692 13.2586 4.44218 13.0806 4.08037 12.9039L3.95984 12.8451C3.56515 12.6526 3.16738 12.4609 2.78125 12.3047L2.39929 12.1502Z"
            fill="currentColor"
          />
          <path
            d="M2.05293 13.6282C2.01797 13.9126 2 14.2018 2 14.495C2 16.4098 2.76642 18.1569 4.02754 19.4817C4.47765 19.9546 4.7027 20.191 5.64624 20.5955C6.58979 21 7.24039 21 8.5416 21H11.4584C12.7596 21 13.4102 21 14.3538 20.5955C15.2973 20.191 15.5224 19.9546 15.9725 19.4817C17.1305 18.2652 17.8714 16.6927 17.9848 14.9612L17.6362 14.7678C17.1648 14.5064 16.2817 14.2247 15.275 14.0575C14.0363 13.8517 13.0909 14.2512 11.949 14.7726L11.8399 14.8224C10.7452 15.3233 9.45291 15.9145 7.77677 15.7258C6.5618 15.589 5.5018 15.207 4.58308 14.8C4.17233 14.6181 3.78222 14.4276 3.42327 14.2523L3.30241 14.1934C2.90397 13.9991 2.55013 13.8293 2.21875 13.6953L2.05293 13.6282Z"
            fill="currentColor"
          />
          <path
            d="M12.5607 2.43934C12.9143 2.793 12.9833 3.32016 12.9967 4.25H14.3197C15.2124 4.25 16.0927 4.45784 16.8911 4.85704L17.7272 5.27508C18.4082 4.7263 19.5274 4.68818 20.5002 5.24981C21.6959 5.94017 22.2175 7.27528 21.6652 8.23186C21.1129 9.18845 19.6959 9.40427 18.5002 8.71391C17.6556 8.2263 17.1473 7.41702 17.1163 6.64665L16.2203 6.19868C15.6302 5.90361 14.9795 5.75 14.3197 5.75H13V6.48428C12.059 6.17023 11.0485 6 10 6C8.95092 6 7.94058 6.17005 7 6.48381V5.75018C7.03166 5.75018 7.06794 5.75046 7.10673 5.75075C7.20379 5.75148 7.31674 5.75233 7.41273 5.74932C7.55169 5.74497 7.74039 5.73199 7.92888 5.67364C8.13123 5.61101 8.36593 5.48561 8.53721 5.23926C8.70287 5.00099 8.75 4.73415 8.75 4.49997C8.75 4.26583 8.70288 3.99889 8.53706 3.76057C8.36561 3.51414 8.13071 3.3889 7.92838 3.32643C7.73991 3.26823 7.55124 3.25537 7.4124 3.25108C7.31696 3.24814 7.20446 3.249 7.10767 3.24974L7.07057 3.25002C7.12982 2.89616 7.23882 2.63986 7.43934 2.43934C7.87868 2 8.58579 2 10 2C11.4142 2 12.1213 2 12.5607 2.43934Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPerfume as IconComponent).keywords = [
  "perfume",
  "aromatize",
  "fragrance",
  "aroma",
  "scent",
  "essence",
  "fragrant",
  "smell",
  "odor",
  "incense",
];

export default IconPerfume as IconComponent;
