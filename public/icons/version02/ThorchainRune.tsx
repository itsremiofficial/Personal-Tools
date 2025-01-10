import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconThorchainRune: FC<IconProps> = ({
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
            d="M6.74996 21.91L17.0499 17.57C17.7599 17.27 17.9399 16.36 17.3999 15.81L13.3399 11.7L5.52993 20.18C4.74993 21.03 5.67996 22.36 6.74996 21.91ZM9.29995 7.59999L13.3499 11.7L19.8399 3.76999C20.5499 2.89999 19.6199 1.64999 18.5799 2.08999L9.63991 5.83999C8.93991 6.12999 8.75995 7.04999 9.29995 7.59999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.0498 17.57L6.74979 21.91C5.67979 22.36 4.74979 21.03 5.53979 20.18L13.3498 11.7L17.3998 15.82C17.9398 16.36 17.7598 17.28 17.0498 17.57Z"
            fill="currentColor"
          />
          <path
            d="M19.8399 3.77L13.3499 11.7L9.29995 7.6C8.75995 7.05 8.93995 6.13 9.64995 5.84L18.5899 2.09C19.6299 1.65 20.5599 2.9 19.8399 3.77Z"
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
            d="M17.0498 17.57L6.7498 21.91C5.6798 22.36 4.74978 21.03 5.53978 20.18L13.3498 11.7L17.3998 15.82C17.9398 16.36 17.7598 17.28 17.0498 17.57Z"
            fill="none"
          />
          <path
            d="M19.8399 3.76999L13.3499 11.7L9.29996 7.59999C8.75996 7.04999 8.93993 6.12999 9.64993 5.83999L18.5899 2.08999C19.6299 1.64999 20.5599 2.89999 19.8399 3.76999Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconThorchainRune as IconComponentType).keywords = [
  "thorchain",
  "rune",
  "runic letter",
  "sigil",
  "runestone",
  "glyph",
  "runestones",
  "sigils",
  "amulet",
  "aett",
  "mage",
];

export default IconThorchainRune as IconComponentType;
