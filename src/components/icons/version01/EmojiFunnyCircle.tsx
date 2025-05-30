import { FC } from "react";

const IconEmojiFunnyCircle: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.9126 15.9331C10.1709 16.2485 11.5985 16.2487 13.0351 15.8638C14.4717 15.4788 15.7079 14.7649 16.64 13.8626"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <ellipse
            cx="14.5094"
            cy="9.77454"
            rx="1"
            ry="1.5"
            transform="rotate(-15 14.5094 9.77454)"
            fill="currentColor"
          />
          <ellipse
            cx="8.71402"
            cy="11.3275"
            rx="1"
            ry="1.5"
            transform="rotate(-15 8.71402 11.3275)"
            fill="currentColor"
          />
          <path
            d="M13 15.9999L13.478 16.9737C13.8393 17.7099 14.7249 18.0193 15.4661 17.6685C16.2223 17.3105 16.5394 16.403 16.1708 15.6519L15.7115 14.7163"
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          />
          <path
            d="M14.8978 11.2237C15.4313 11.0808 15.6899 10.3162 15.4755 9.51599C15.2611 8.71579 14.6548 8.18298 14.1213 8.32592C13.5879 8.46886 13.3292 9.23343 13.5436 10.0336C13.7581 10.8338 14.3643 11.3666 14.8978 11.2237Z"
            fill="currentColor"
          />
          <path
            d="M9.10238 12.7767C9.63585 12.6337 9.89449 11.8692 9.68008 11.069C9.46567 10.2688 8.85939 9.73596 8.32592 9.8789C7.79246 10.0218 7.53381 10.7864 7.74823 11.5866C7.96264 12.3868 8.56892 12.9196 9.10238 12.7767Z"
            fill="currentColor"
          />
          <path
            d="M8.18524 15.751C8.28594 15.3492 8.69329 15.1052 9.09507 15.2059C10.2254 15.4892 11.5234 15.4927 12.8411 15.1396C14.1589 14.7865 15.2813 14.1345 16.1185 13.324C16.4161 13.0359 16.8909 13.0436 17.179 13.3412C17.4671 13.6388 17.4594 14.1136 17.1618 14.4017C16.8143 14.7381 16.4298 15.0495 16.0129 15.3304L16.1709 15.6523C16.5396 16.4034 16.2225 17.3108 15.4663 17.6688C14.7251 18.0197 13.8395 17.7102 13.4781 16.9741L13.2819 16.5742L13.2294 16.5885C11.674 17.0052 10.1168 17.0083 8.73039 16.6609C8.32861 16.5602 8.08453 16.1528 8.18524 15.751Z"
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.1851 15.7508C8.2858 15.349 8.69315 15.1049 9.09494 15.2056C10.2252 15.4889 11.5232 15.4924 12.841 15.1393C14.1588 14.7862 15.2811 14.1342 16.1183 13.3237C16.4159 13.0356 16.8908 13.0433 17.1789 13.3409C17.467 13.6385 17.4593 14.1133 17.1617 14.4014C16.8142 14.7378 16.4297 15.0492 16.0128 15.3301L16.1708 15.652C16.5394 16.4031 16.2223 17.3106 15.4661 17.6685C14.7249 18.0194 13.8393 17.71 13.478 16.9738L13.2817 16.574L13.2292 16.5882C11.6739 17.005 10.1166 17.0081 8.73026 16.6606C8.32847 16.5599 8.0844 16.1526 8.1851 15.7508ZM15.4754 9.51572C15.6898 10.3159 15.4311 11.0805 14.8977 11.2234C14.3642 11.3664 13.7579 10.8336 13.5435 10.0334C13.3291 9.23316 13.5877 8.4686 14.1212 8.32565C14.6547 8.18271 15.2609 8.71552 15.4754 9.51572ZM9.10225 12.7764C9.63571 12.6335 9.89436 11.8689 9.67994 11.0687C9.46553 10.2685 8.85926 9.73569 8.32579 9.87863C7.79232 10.0216 7.53368 10.7861 7.74809 11.5863C7.9625 12.3865 8.56878 12.9194 9.10225 12.7764Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmojiFunnyCircle as IconComponent).keywords = [
  "emoji",
  "funny",
  "circle",
  "emoticon",
  "reaction",
  "react",
  "emote",
  "smiley",
  "sticker",
  "emojipasta",
  "reaction gif",
  "hashflag",
  "humorous",
  "comical",
  "amusing",
  "humourous",
  "comically",
  "risible",
  "laughable",
  "mirthful",
  "comic",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconEmojiFunnyCircle as IconComponent;
