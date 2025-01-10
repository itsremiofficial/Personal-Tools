import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGamepadCharge: FC<IconProps> = ({
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
            d="M10.165 4.77922L10.6669 5.13443C11.0567 5.41029 11.5225 5.55844 12 5.55844C12.4776 5.55844 12.9434 5.41029 13.3332 5.13441L13.8351 4.77922C14.5514 4.27225 15.4074 4 16.2849 4H16.8974C17.3016 4 17.7099 4.02549 18.0908 4.16059C20.4735 5.00566 22.1125 8.09503 21.994 15.1026C21.9701 16.5145 21.6397 18.075 20.3658 18.6842C19.9688 18.8741 19.5033 19 18.9733 19C18.3373 19 17.8322 18.8187 17.4424 18.5632C16.5285 17.9642 15.8588 16.9639 14.8888 16.4609C14.3048 16.1581 13.6566 16 12.9989 16H11.0011C10.3434 16 9.69519 16.1581 9.11125 16.4609C8.14122 16.9639 7.47153 17.9642 6.55763 18.5632C6.1678 18.8187 5.66273 19 5.02671 19C4.49667 19 4.03121 18.8741 3.63423 18.6842C2.3603 18.075 2.02992 16.5145 2.00604 15.1026C1.88749 8.09504 3.52645 5.00566 5.90915 4.16059C6.29009 4.02549 6.69838 4 7.10257 4H7.71504C8.59264 4 9.44862 4.27225 10.165 4.77922Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22V19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.5 16.5V18C10.5 18.5523 10.9477 19 11.5 19H12.5C13.0523 19 13.5 18.5523 13.5 18V16.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7.5 9V12M6 10.5L9 10.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M19 10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25C17.5 9.83579 17.8358 9.5 18.25 9.5C18.6642 9.5 19 9.83579 19 10.25Z"
              fill="currentColor"
            />
            <path
              d="M16 10.25C16 10.6642 15.6642 11 15.25 11C14.8358 11 14.5 10.6642 14.5 10.25C14.5 9.83579 14.8358 9.5 15.25 9.5C15.6642 9.5 16 9.83579 16 10.25Z"
              fill="currentColor"
            />
            <path
              d="M16.75 8C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5C16.3358 9.5 16 9.16421 16 8.75C16 8.33579 16.3358 8 16.75 8Z"
              fill="currentColor"
            />
            <path
              d="M16.75 11C17.1642 11 17.5 11.3358 17.5 11.75C17.5 12.1642 17.1642 12.5 16.75 12.5C16.3358 12.5 16 12.1642 16 11.75C16 11.3358 16.3358 11 16.75 11Z"
              fill="currentColor"
            />
          </g>
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
            d="M12.7499 18.968C13.1812 18.857 13.4999 18.4655 13.4999 17.9996V17.2733C13.4999 17.1099 13.3953 16.9649 13.2403 16.9132C12.4351 16.6448 11.5646 16.6448 10.7594 16.9132C10.6044 16.9649 10.4999 17.1099 10.4999 17.2733V17.9996C10.4999 18.4655 10.8186 18.857 11.2499 18.968V22.25C11.2499 22.6642 11.5856 23 11.9999 23C12.4141 23 12.7499 22.6642 12.7499 22.25V18.968Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M10.165 4.77922L10.6669 5.13443C11.0567 5.41029 11.5225 5.55844 12 5.55844C12.4776 5.55844 12.9434 5.41029 13.3332 5.13441L13.8351 4.77922C14.5514 4.27225 15.4074 4 16.2849 4H16.8974C17.3016 4 17.7099 4.02549 18.0908 4.16059C20.4735 5.00566 22.1125 8.09503 21.994 15.1026C21.9701 16.5145 21.6397 18.075 20.3658 18.6842C19.9688 18.8741 19.5033 19 18.9733 19C18.3373 19 17.8322 18.8187 17.4424 18.5632C17.0336 18.2953 16.6737 17.9471 16.3139 17.599C15.8693 17.1688 15.4249 16.7389 14.8888 16.4609C14.3048 16.1581 13.6566 16 12.9989 16H11.0011C10.3434 16 9.69519 16.1581 9.11125 16.4609C8.57511 16.7389 8.13071 17.1688 7.68612 17.599C7.32633 17.9471 6.96641 18.2953 6.55763 18.5632C6.1678 18.8187 5.66273 19 5.02671 19C4.49667 19 4.03121 18.8741 3.63423 18.6842C2.3603 18.075 2.02992 16.5145 2.00604 15.1026C1.88749 8.09504 3.52645 5.00566 5.90915 4.16059C6.29009 4.02549 6.69838 4 7.10257 4H7.71504C8.59264 4 9.44862 4.27225 10.165 4.77922Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M16.75 8C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5C16.3358 9.5 16 9.16421 16 8.75C16 8.33579 16.3358 8 16.75 8Z"
            fill="currentColor"
          />
          <path
            d="M7.5 8.25C7.91421 8.25 8.25 8.58579 8.25 9V9.75H9C9.41421 9.75 9.75 10.0858 9.75 10.5C9.75 10.9142 9.41421 11.25 9 11.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H6.75V9C6.75 8.58579 7.08579 8.25 7.5 8.25Z"
            fill="currentColor"
          />
          <path
            d="M19 10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25C17.5 9.83579 17.8358 9.5 18.25 9.5C18.6642 9.5 19 9.83579 19 10.25Z"
            fill="currentColor"
          />
          <path
            d="M15.25 11C15.6642 11 16 10.6642 16 10.25C16 9.83579 15.6642 9.5 15.25 9.5C14.8358 9.5 14.5 9.83579 14.5 10.25C14.5 10.6642 14.8358 11 15.25 11Z"
            fill="currentColor"
          />
          <path
            d="M17.5 11.75C17.5 11.3358 17.1642 11 16.75 11C16.3358 11 16 11.3358 16 11.75C16 12.1642 16.3358 12.5 16.75 12.5C17.1642 12.5 17.5 12.1642 17.5 11.75Z"
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
            d="M12.7499 19.968C13.1812 19.857 13.4999 19.4655 13.4999 18.9996V18.2733C13.4999 18.1099 13.3953 17.9649 13.2403 17.9132C12.4351 17.6448 11.5646 17.6448 10.7594 17.9132C10.6044 17.9649 10.4999 18.1099 10.4999 18.2733V18.9996C10.4999 19.4655 10.8186 19.857 11.2499 19.968V23.25C11.2499 23.6642 11.5856 24 11.9999 24C12.4141 24 12.7499 23.6642 12.7499 23.25V19.968Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6669 6.13443L10.165 5.77922C9.44862 5.27225 8.59264 5 7.71504 5H7.10257C6.69838 5 6.29009 5.02549 5.90915 5.16059C3.52645 6.00566 1.88749 9.09504 2.00604 16.1026C2.02992 17.5145 2.3603 19.075 3.63423 19.6842C4.03121 19.8741 4.49667 20 5.02671 20C5.66273 20 6.1678 19.8187 6.55763 19.5632C6.96641 19.2953 7.32633 18.9471 7.68612 18.599C8.13071 18.1688 8.57511 17.7389 9.11125 17.4609C9.69519 17.1581 10.3434 17 11.0011 17H12.9989C13.6566 17 14.3048 17.1581 14.8888 17.4609C15.4249 17.7389 15.8693 18.1688 16.3139 18.599C16.6737 18.9471 17.0336 19.2953 17.4424 19.5632C17.8322 19.8187 18.3373 20 18.9733 20C19.5033 20 19.9688 19.8741 20.3658 19.6842C21.6397 19.075 21.9701 17.5145 21.994 16.1026C22.1125 9.09503 20.4735 6.00566 18.0908 5.16059C17.7099 5.02549 17.3016 5 16.8974 5H16.2849C15.4074 5 14.5514 5.27225 13.8351 5.77922L13.3332 6.13441C12.9434 6.41029 12.4776 6.55844 12 6.55844C11.5225 6.55844 11.0567 6.41029 10.6669 6.13443ZM16.75 9C17.1642 9 17.5 9.33579 17.5 9.75C17.5 10.1642 17.1642 10.5 16.75 10.5C16.3358 10.5 16 10.1642 16 9.75C16 9.33579 16.3358 9 16.75 9ZM7.5 9.25C7.91421 9.25 8.25 9.58579 8.25 10V10.75H9C9.41421 10.75 9.75 11.0858 9.75 11.5C9.75 11.9142 9.41421 12.25 9 12.25H8.25V13C8.25 13.4142 7.91421 13.75 7.5 13.75C7.08579 13.75 6.75 13.4142 6.75 13V12.25H6C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75H6.75V10C6.75 9.58579 7.08579 9.25 7.5 9.25ZM19 11.25C19 11.6642 18.6642 12 18.25 12C17.8358 12 17.5 11.6642 17.5 11.25C17.5 10.8358 17.8358 10.5 18.25 10.5C18.6642 10.5 19 10.8358 19 11.25ZM15.25 12C15.6642 12 16 11.6642 16 11.25C16 10.8358 15.6642 10.5 15.25 10.5C14.8358 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.8358 12 15.25 12ZM17.5 12.75C17.5 12.3358 17.1642 12 16.75 12C16.3358 12 16 12.3358 16 12.75C16 13.1642 16.3358 13.5 16.75 13.5C17.1642 13.5 17.5 13.1642 17.5 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGamepadCharge as IconComponentType).keywords = [
  "gamepad",
  "charge",
  "joypad",
  "thumbstick",
  "d-pad",
  "tv game",
  "fighting stick",
  "button masher",
  "fire button",
  "hat switch",
  "gameboard",
  "consign",
  "commission",
  "mission",
  "appoint",
  "billing",
  "guardianship",
  "tutelage",
  "institutionalize",
  "send",
];

export default IconGamepadCharge as IconComponentType;
