import { FC } from "react";

const IconAsteroid: FC<IconProps> = ({
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
            d="M12 2C6.47715 2 2 6.47715 2 12C2 12.4447 2.02903 12.8826 2.0853 13.312C2.61321 17.3405 5.53889 20.6144 9.38261 21.654C10.2169 21.8796 11.0944 22 12 22C16.8786 22 20.9413 18.5064 21.8227 13.8845C21.9391 13.2742 22 12.6442 22 12C22 8.87326 20.565 6.08169 18.3176 4.24796C16.5954 2.84273 14.3961 2 12 2Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.08545 13.312C2.68675 13.1097 3.33065 13 4.00015 13C7.31386 13 10.0002 15.6863 10.0002 19C10.0002 19.9529 9.77804 20.8538 9.38276 21.654"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.8227 13.8846C19.0727 13.3375 17 10.9108 17 8.00008C17 6.58023 17.4932 5.27556 18.3176 4.24805"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13 8.5C13 9.88071 11.8807 11 10.5 11C9.11929 11 8 9.88071 8 8.5C8 7.11929 9.11929 6 10.5 6C11.8807 6 13 7.11929 13 8.5Z"
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
            d="M12 2C6.47715 2 2 6.47715 2 12C2 12.4447 2.02903 12.8826 2.0853 13.312C2.6866 13.1097 3.33065 13 4.00015 13C7.31386 13 10.0002 15.6863 10.0002 19C10.0002 19.9529 9.77789 20.8538 9.38261 21.654C10.2169 21.8796 11.0944 22 12 22C16.8786 22 20.9413 18.5064 21.8227 13.8845C19.0727 13.3374 17 10.9108 17 8.00008C17 6.58023 17.4932 5.27547 18.3176 4.24796C16.5954 2.84273 14.3961 2 12 2Z"
            fill="currentColor"
          />
          <path
            d="M2.08496 13.312C2.61288 17.3405 5.53856 20.6144 9.38227 21.654C9.77755 20.8538 9.99981 19.9529 9.99981 19C9.99981 15.6863 7.31352 13 3.99981 13C3.33031 13 2.68626 13.1097 2.08496 13.312Z"
            fill="currentColor"
          />
          <path
            d="M21.8227 13.8846C21.9391 13.2743 22 12.6443 22 12.0001C22 8.87334 20.565 6.08177 18.3176 4.24805C17.4932 5.27556 17 6.58031 17 8.00017C17 10.9109 19.0727 13.3375 21.8227 13.8846Z"
            fill="currentColor"
          />
          <path
            d="M16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16Z"
            fill="currentColor"
          />
          <path
            d="M13 8.5C13 9.88071 11.8807 11 10.5 11C9.11929 11 8 9.88071 8 8.5C8 7.11929 9.11929 6 10.5 6C11.8807 6 13 7.11929 13 8.5Z"
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
            d="M2 12C2 6.47715 6.47715 2 12 2C14.1266 2 16.0982 2.66383 17.7188 3.79559C16.7998 4.94874 16.25 6.41105 16.25 7.99974C16.25 11.2675 18.5713 13.9914 21.6545 14.6155C20.5047 18.8698 16.6179 22 12 22C11.3615 22 10.7369 21.9402 10.1316 21.8258C10.5287 20.9653 10.75 20.0075 10.75 19C10.75 15.2721 7.7279 12.25 3.99998 12.25C3.31014 12.25 2.64323 12.3537 2.0147 12.5469C2.00494 12.3658 2 12.1835 2 12ZM16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16ZM10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z"
            fill="currentColor"
          />
          <path
            d="M17.75 7.99974C17.75 6.76899 18.1726 5.63896 18.8812 4.74396C20.8021 6.56624 22 9.14322 22 12C22 12.3861 21.9781 12.7672 21.9355 13.1419C19.5463 12.6503 17.75 10.534 17.75 7.99974Z"
            fill="currentColor"
          />
          <path
            d="M8.65778 21.4278C5.40825 20.2758 2.93116 17.4914 2.21252 14.0605L2.32447 14.0228C2.84969 13.8461 3.41284 13.75 3.99998 13.75C6.89948 13.75 9.24998 16.1005 9.24998 19C9.24998 19.8351 9.05555 20.6226 8.71017 21.3218L8.65778 21.4278Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAsteroid as IconComponent).keywords = [
  "asteroid",
  "angulate",
  "angular",
  "minor planet",
  "planetoid",
  "star-shaped",
  "hyalitis",
  "meteor",
  "planet",
  "ceres",
];

export default IconAsteroid as IconComponent;
