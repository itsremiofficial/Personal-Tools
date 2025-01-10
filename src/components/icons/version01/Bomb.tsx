import { FC } from "react";

const IconBomb: FC<IconProps> = ({
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
          <circle
            cx="9.5"
            cy="14.5005"
            r="7.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 7.00049L15 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17.9811 2.35365C18.1668 1.88277 18.8332 1.88277 19.0189 2.35365L19.6733 4.0129C19.73 4.15667 19.8438 4.27047 19.9876 4.32717L21.6468 4.98157C22.1177 5.16728 22.1177 5.8337 21.6468 6.01941L19.9876 6.67381C19.8438 6.73051 19.73 6.84431 19.6733 6.98807L19.0189 8.64733C18.8332 9.11821 18.1668 9.11821 17.9811 8.64733L17.3267 6.98807C17.27 6.84431 17.1562 6.73051 17.0124 6.67381L15.3532 6.01941C14.8823 5.8337 14.8823 5.16728 15.3532 4.98157L17.0124 4.32717C17.1562 4.27047 17.27 4.15667 17.3267 4.0129L17.9811 2.35365Z"
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
            d="M9.5 22.0005C13.6421 22.0005 17 18.6426 17 14.5005C17 10.3584 13.6421 7.00049 9.5 7.00049C5.35786 7.00049 2 10.3584 2 14.5005C2 18.6426 5.35786 22.0005 9.5 22.0005Z"
            fill="currentColor"
          />
          <path
            d="M17.9811 2.35365C18.1668 1.88277 18.8332 1.88277 19.0189 2.35365L19.6733 4.0129C19.73 4.15667 19.8438 4.27047 19.9876 4.32717L21.6468 4.98157C22.1177 5.16728 22.1177 5.8337 21.6468 6.01941L19.9876 6.67381C19.8438 6.73051 19.73 6.84431 19.6733 6.98807L19.0189 8.64733C18.8332 9.11821 18.1668 9.11821 17.9811 8.64733L17.3267 6.98807C17.27 6.84431 17.1562 6.73051 17.0124 6.67381L15.3532 6.01941C14.8823 5.8337 14.8823 5.16728 15.3532 4.98157L17.0124 4.32717C17.1562 4.27047 17.27 4.15667 17.3267 4.0129L17.9811 2.35365Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M16.4772 6.46265L14.2466 8.6933C14.6344 9.01068 14.9899 9.36615 15.3072 9.75398L17.5378 7.52333L17.3267 6.988C17.27 6.84424 17.1562 6.73044 17.0124 6.67374L16.4772 6.46265Z"
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
            d="M17 14.5005C17 18.6426 13.6421 22.0005 9.5 22.0005C5.35786 22.0005 2 18.6426 2 14.5005C2 10.3584 5.35786 7.00049 9.5 7.00049C13.6421 7.00049 17 10.3584 17 14.5005Z"
            fill="currentColor"
          />
          <path
            d="M17.9811 2.35365C18.1668 1.88277 18.8332 1.88277 19.0189 2.35365L19.6733 4.0129C19.73 4.15667 19.8438 4.27047 19.9876 4.32717L21.6468 4.98157C22.1177 5.16728 22.1177 5.8337 21.6468 6.01941L19.9876 6.67381C19.8438 6.73051 19.73 6.84431 19.6733 6.98807L19.0189 8.64733C18.8332 9.11821 18.1668 9.11821 17.9811 8.64733L17.3267 6.98807C17.27 6.84431 17.1562 6.73051 17.0124 6.67381L15.3532 6.01941C14.8823 5.8337 14.8823 5.16728 15.3532 4.98157L17.0124 4.32717C17.1562 4.27047 17.27 4.15667 17.3267 4.0129L17.9811 2.35365Z"
            fill="currentColor"
          />
          <path
            d="M16.0175 9.04377L16.7669 8.29435L16.4669 7.53361L15.7063 7.23364L14.9568 7.9831C15.3407 8.30485 15.6957 8.65989 16.0175 9.04377Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBomb as IconComponent).keywords = [
  "bomb",
  "bombard",
  "bomb calorimeter",
  "flunk",
  "dud",
  "fail",
  "turkey",
  "flush it",
  "warhead",
  "nuke",
];

export default IconBomb as IconComponent;
