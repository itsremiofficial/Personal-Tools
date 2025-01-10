import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPhoneRounded: FC<IconProps> = ({
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
            d="M5.00659 6.93321C5.04956 5.79972 5.70084 4.77436 6.53785 3.93735C7.9308 2.5444 10.1532 2.73156 11.0376 4.31629L11.6866 5.47922C12.2723 6.52871 12.0372 7.90545 11.1147 8.82793M17.067 18.9936C18.2004 18.9506 19.2258 18.2993 20.0628 17.4623C21.4558 16.0694 21.2686 13.8469 19.6839 12.9625L18.5209 12.3135C17.4715 11.7278 16.0947 11.9629 15.1722 12.8854"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.00655 6.93323C4.93421 8.84136 5.41713 12.0819 8.6677 15.3324C11.9183 18.583 15.1588 19.0659 17.0669 18.9936M15.1722 12.8854C15.1722 12.8854 14.0532 14.0043 12.0245 11.9756C9.99578 9.94689 11.1147 8.82794 11.1147 8.82794"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6866 6.47922L10.0376 5.31629C9.15317 3.73156 6.93076 3.5444 5.53781 4.93735C4.7008 5.77436 4.04952 6.79972 4.00655 7.93321C3.95086 9.40227 4.22428 11.6611 5.83644 14.1062L10.1147 9.82793C11.0372 8.90545 11.2723 7.52871 10.6866 6.47922ZM14.1722 13.8854L9.89393 18.1637C12.3391 19.7758 14.5979 20.0493 16.0669 19.9936C17.2004 19.9506 18.2258 19.2993 19.0628 18.4623C20.4557 17.0694 20.2686 14.8469 18.6838 13.9625L17.5209 13.3135C16.4714 12.7278 15.0947 12.9629 14.1722 13.8854Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11.0245 12.9757C8.99576 10.9469 10.1147 9.828 10.1147 9.828L5.83643 14.1063C6.31827 14.8371 6.91971 15.5845 7.66769 16.3325C8.41567 17.0805 9.16311 17.6819 9.89392 18.1638L14.1722 13.8855C14.1722 13.8855 13.0532 15.0044 11.0245 12.9757Z"
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
            d="M10.0376 5.31629L10.6866 6.47922C11.2723 7.5287 11.0372 8.90544 10.1147 9.82792C10.1147 9.82792 10.1147 9.82792 10.1147 9.82793C10.1146 9.82804 8.99588 10.947 11.0245 12.9756C13.0525 15.0036 14.1714 13.8862 14.1722 13.8854C14.1722 13.8854 14.1722 13.8854 14.1722 13.8854C15.0947 12.9629 16.4714 12.7278 17.5209 13.3135L18.6838 13.9625C20.2686 14.8469 20.4557 17.0694 19.0628 18.4623C18.2258 19.2993 17.2004 19.9506 16.0669 19.9936C14.1588 20.0659 10.9183 19.583 7.6677 16.3324C4.41713 13.0818 3.93421 9.84135 4.00655 7.93321C4.04952 6.79972 4.7008 5.77436 5.53781 4.93735C6.93076 3.5444 9.15317 3.73156 10.0376 5.31629Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPhoneRounded as IconComponentType).keywords = [
  "phone",
  "rounded",
  "telephone",
  "call",
  "earphone",
  "earpiece",
  "headphone",
  "call up",
  "ring",
  "sound",
  "speech sound",
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

export default IconPhoneRounded as IconComponentType;
