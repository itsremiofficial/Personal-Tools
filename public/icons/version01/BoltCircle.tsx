import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBoltCircle: FC<IconProps> = ({
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
            d="M9.21249 10.1735L11.2275 8.56879C12.5301 7.53154 13.1813 7.01292 13.5907 7.26907C14 7.52522 13.7875 8.3184 13.3624 9.90475L13.3223 10.0543C13.169 10.6265 13.0923 10.9126 13.2271 11.141L13.2343 11.1529C13.374 11.3786 13.6717 11.4584 14.2672 11.6179C15.3389 11.9051 15.8747 12.0487 15.9687 12.4222C15.9702 12.4284 15.9717 12.4346 15.9731 12.4408C16.0556 12.8166 15.6329 13.1533 14.7874 13.8265L12.7724 15.4311C11.4698 16.4684 10.8186 16.987 10.4092 16.7308C9.99991 16.4747 10.2125 15.6815 10.6375 14.0951L10.6776 13.9456C10.8309 13.3735 10.9076 13.0874 10.7729 12.8589L10.7657 12.8471C10.626 12.6214 10.3282 12.5416 9.73271 12.382C8.66108 12.0949 8.12526 11.9513 8.03126 11.5778C8.0297 11.5716 8.02824 11.5654 8.02688 11.5592C7.94436 11.1833 8.36707 10.8467 9.21249 10.1735Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
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
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
            fill="currentColor"
          />
          <path
            d="M11.2274 8.56904L9.21236 10.1737C8.36695 10.8469 7.94424 11.1836 8.02675 11.5594L8.03114 11.578C8.12514 11.9515 8.66096 12.0951 9.73259 12.3823C10.3281 12.5418 10.6259 12.6216 10.7656 12.8473L10.7727 12.8592C10.9075 13.0876 10.8308 13.3737 10.6775 13.9459L10.6374 14.0954L10.6374 14.0954C10.2123 15.6818 9.99979 16.4749 10.4091 16.7311C10.8184 16.9872 11.4697 16.4686 12.7722 15.4314L12.7723 15.4314L14.7873 13.8267C15.6327 13.1535 16.0554 12.8169 15.9729 12.441L15.9686 12.4224C15.8745 12.0489 15.3387 11.9053 14.2671 11.6182C13.6716 11.4586 13.3738 11.3788 13.2341 11.1531L13.227 11.1412C13.0922 10.9128 13.1689 10.6267 13.3222 10.0546L13.3623 9.905C13.7873 8.31864 13.9999 7.52547 13.5905 7.26931C13.1812 7.01316 12.5299 7.53179 11.2274 8.56904Z"
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
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2274 8.56904L9.21236 10.1737C8.36695 10.8469 7.94424 11.1836 8.02675 11.5594L8.03114 11.578C8.12514 11.9515 8.66096 12.0951 9.73259 12.3823C10.3281 12.5418 10.6259 12.6216 10.7656 12.8473L10.7727 12.8592C10.9075 13.0876 10.8308 13.3737 10.6775 13.9459L10.6374 14.0954C10.2123 15.6818 9.99979 16.4749 10.4091 16.7311C10.8184 16.9872 11.4697 16.4686 12.7723 15.4314L14.7873 13.8267C15.6327 13.1535 16.0554 12.8169 15.9729 12.441L15.9686 12.4224C15.8745 12.0489 15.3387 11.9053 14.2671 11.6182C13.6716 11.4586 13.3738 11.3788 13.2341 11.1531L13.227 11.1412C13.0922 10.9128 13.1689 10.6267 13.3222 10.0546L13.3623 9.905C13.7873 8.31864 13.9999 7.52547 13.5905 7.26931C13.1812 7.01316 12.5299 7.53179 11.2274 8.56904Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoltCircle as IconComponentType).keywords = [
  "bolt",
  "circle",
  "deadbolt",
  "thunderbolt",
  "run out",
  "slap",
  "smack",
  "bang",
  "gobble",
  "go off",
  "absquatulate",
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

export default IconBoltCircle as IconComponentType;
