import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconArmchair: FC<IconProps> = ({
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
            d="M6.82143 21.0001H17.1786C18.1745 21.0001 18.6725 21.0001 19.0845 20.8998C20.4888 20.5579 21.5854 19.3882 21.906 17.8902C22 17.4508 22 16.9196 22 15.8573V11.2457C22 10.0055 21.0574 9.00012 19.8947 9.00012C18.732 9.00012 17.7895 10.0055 17.7895 11.2457V16.3335H6.21053V11.2457C6.21053 10.0055 5.26797 9.00012 4.10526 9.00012C2.94256 9.00012 2 10.0055 2 11.2457V15.8573C2 16.9196 2 17.4508 2.09402 17.8902C2.41456 19.3882 3.51119 20.5579 4.91555 20.8998C5.32748 21.0001 5.82546 21.0001 6.82143 21.0001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 10.0001V8.15397C6 5.85338 6 4.70308 6.48231 3.84628C6.79827 3.28497 7.25273 2.81887 7.8 2.4948C8.63538 2.00012 9.75692 2.00012 12 2.00012C14.2431 2.00012 15.3646 2.00012 16.2 2.4948C16.7473 2.81887 17.2017 3.28497 17.5177 3.84628C18 4.70308 18 5.85338 18 8.15397V10.0001"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 22.0001V21.0001M4.5 22.0001V21.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M17.1786 21.0001H6.82143C6.07648 21.0001 5.61013 21.0001 5.25 20.9582V21.2495V22.25C5.25 22.6643 4.91421 23 4.5 23C4.08579 23 3.75 22.6643 3.75 22.25V20.3839C2.92435 19.8284 2.31864 18.9399 2.09402 17.8902C2 17.4508 2 16.9196 2 15.8573V11.2457C2 10.0055 2.94256 9.00012 4.10526 9.00012C5.26797 9.00012 6.21053 10.0055 6.21053 11.2457V14.3335C6.21053 15.2763 6.21053 15.7477 6.50342 16.0406C6.79631 16.3335 7.26772 16.3335 8.21053 16.3335H15.7895C16.7323 16.3335 17.2037 16.3335 17.4966 16.0406C17.7895 15.7477 17.7895 15.2763 17.7895 14.3335V11.2457C17.7895 10.0055 18.732 9.00012 19.8947 9.00012C21.0574 9.00012 22 10.0055 22 11.2457V15.8573C22 16.9196 22 17.4508 21.906 17.8902C21.6814 18.9399 21.0756 19.8285 20.25 20.3839V22.2501C20.25 22.6643 19.9142 23.0001 19.5 23.0001C19.0858 23.0001 18.75 22.6643 18.75 22.2501V20.9582C18.3899 21.0001 17.9235 21.0001 17.1786 21.0001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 8.15397V8.67199V17.0001H18V8.67205V8.15395C18 5.85337 18 4.70308 17.5177 3.84628C17.2017 3.28497 16.7473 2.81887 16.2 2.4948C15.3646 2.00012 14.2431 2.00012 12 2.00012C9.75692 2.00012 8.63538 2.00012 7.8 2.4948C7.25273 2.81887 6.79827 3.28497 6.48231 3.84628C6 4.70308 6 5.85338 6 8.15397Z"
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
            d="M17.1786 21.0001H6.82143C6.07648 21.0001 5.61013 21.0001 5.25 20.9582V21.2495V22.25C5.25 22.6643 4.91421 23 4.5 23C4.08579 23 3.75 22.6643 3.75 22.25V20.3839C2.92435 19.8284 2.31864 18.9399 2.09402 17.8902C2 17.4508 2 16.9196 2 15.8573V11.2457C2 10.0055 2.94256 9.00012 4.10526 9.00012C5.26797 9.00012 6.21053 10.0055 6.21053 11.2457V14.3335C6.21053 15.2763 6.21053 15.7477 6.50342 16.0406C6.79631 16.3335 7.26772 16.3335 8.21053 16.3335H15.7895C16.7323 16.3335 17.2037 16.3335 17.4966 16.0406C17.7895 15.7477 17.7895 15.2763 17.7895 14.3335V11.2457C17.7895 10.0055 18.732 9.00012 19.8947 9.00012C21.0574 9.00012 22 10.0055 22 11.2457V15.8573C22 16.9196 22 17.4508 21.906 17.8902C21.6814 18.9399 21.0756 19.8285 20.25 20.3839V22.2501C20.25 22.6643 19.9142 23.0001 19.5 23.0001C19.0858 23.0001 18.75 22.6643 18.75 22.2501V20.9582C18.3899 21.0001 17.9235 21.0001 17.1786 21.0001Z"
            fill="currentColor"
          />
          <path
            d="M6 8.67199V8.15397C6 5.85338 6 4.70308 6.48231 3.84628C6.79827 3.28497 7.25273 2.81887 7.8 2.4948C8.63538 2.00012 9.75692 2.00012 12 2.00012C14.2431 2.00012 15.3646 2.00012 16.2 2.4948C16.7473 2.81887 17.2017 3.28497 17.5177 3.84628C18 4.70308 18 5.85337 18 8.15395V8.67205C17.2539 9.27601 16.7895 10.2232 16.7895 11.2457V14.3335C16.7895 14.8049 16.7895 15.0406 16.6431 15.187C16.4966 15.3335 16.2609 15.3335 15.7895 15.3335H8.21057C7.73916 15.3335 7.50346 15.3335 7.35701 15.187C7.21057 15.0406 7.21057 14.8049 7.21057 14.3335V11.2457C7.21057 10.2232 6.74612 9.27594 6 8.67199Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArmchair as IconComponentType).keywords = [
  "armchair",
  "impractical",
  "couch",
  "chair",
  "sofa",
  "wheelchair",
  "seat",
  "lounge",
  "philosophizing",
  "informal",
];

export default IconArmchair as IconComponentType;
