import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCallCancelRounded: FC<IconProps> = ({
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
            d="M20 4.00002L16 8M16 4L20 7.99998"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4697 3.46967C15.7626 3.17678 16.2374 3.17678 16.5303 3.46967L18 4.93935L19.4697 3.46969C19.7626 3.17679 20.2374 3.17679 20.5303 3.46969C20.8232 3.76258 20.8232 4.23745 20.5303 4.53035L19.0607 6.00001L20.5303 7.46965C20.8232 7.76255 20.8232 8.23742 20.5303 8.53031C20.2374 8.82321 19.7625 8.82321 19.4697 8.53031L18 7.06067L16.5303 8.53033C16.2375 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L16.9393 6.00001L15.4697 4.53033C15.1768 4.23744 15.1768 3.76256 15.4697 3.46967Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
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
            d="M15.4697 3.46967C15.7626 3.17678 16.2374 3.17678 16.5303 3.46967L18 4.93935L19.4697 3.46969C19.7626 3.17679 20.2374 3.17679 20.5303 3.46969C20.8232 3.76258 20.8232 4.23745 20.5303 4.53035L19.0607 6.00001L20.5303 7.46965C20.8232 7.76255 20.8232 8.23742 20.5303 8.53031C20.2374 8.82321 19.7625 8.82321 19.4697 8.53031L18 7.06067L16.5303 8.53033C16.2375 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L16.9393 6.00001L15.4697 4.53033C15.1768 4.23744 15.1768 3.76256 15.4697 3.46967Z"
            fill="currentColor"
          />
          <path
            d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCallCancelRounded as IconComponentType).keywords = [
  "call",
  "cancel",
  "rounded",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
  "offset",
  "natural",
  "delete",
  "call off",
  "set off",
  "invalidate",
  "strike",
  "write",
  "render",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconCallCancelRounded as IconComponentType;