import { FC } from "react";

const IconTextBold: FC<IconProps> = ({
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
            d="M5 4.60918C5 3.16844 6.16795 2.00049 7.6087 2.00049H12C14.7614 2.00049 17 4.23906 17 7.00049C17 9.76191 14.7614 12.0005 12 12.0005H5V4.60918Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 12.0005H14C16.7614 12.0005 19 14.2391 19 17.0005C19 19.7619 16.7614 22.0005 14 22.0005H7.05882C5.92177 22.0005 5 21.0787 5 19.9417V12.0005Z"
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
            d="M4 4.60918C4 2.61616 5.61567 1.00049 7.6087 1.00049H12C15.3137 1.00049 18 3.68678 18 7.00049C18 10.3142 15.3137 13.0005 12 13.0005H4V4.60918ZM7.6087 3.00049C6.72024 3.00049 6 3.72073 6 4.60918V11.0005H12C14.2091 11.0005 16 9.20963 16 7.00049C16 4.79135 14.2091 3.00049 12 3.00049H7.6087Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 13.0004V19.9416C4 21.631 5.36948 23.0004 7.05882 23.0004H14C17.3137 23.0004 20 20.3141 20 17.0004C20 14.4264 18.3791 12.2309 16.1022 11.379C15.0293 12.3846 13.5866 13.0004 12 13.0004H14C16.2091 13.0004 18 14.7913 18 17.0004C18 19.2096 16.2091 21.0004 14 21.0004H7.05882C6.47405 21.0004 6 20.5264 6 19.9416V13.0004H4Z"
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
            d="M7.6087 1.00049C5.61567 1.00049 4 2.61616 4 4.60918V19.9417C4 21.631 5.36948 23.0005 7.05882 23.0005H14C17.3137 23.0005 20 20.3142 20 17.0005C20 14.4264 18.3791 12.2309 16.1022 11.3791C17.2702 10.2844 18 8.72764 18 7.00049C18 3.68678 15.3137 1.00049 12 1.00049H7.6087ZM12 11.0005C14.2091 11.0005 16 9.20963 16 7.00049C16 4.79135 14.2091 3.00049 12 3.00049H7.6087C6.72024 3.00049 6 3.72073 6 4.60918V11.0005H12ZM6 13.0005V19.9417C6 20.5264 6.47405 21.0005 7.05882 21.0005H14C16.2091 21.0005 18 19.2096 18 17.0005C18 14.7913 16.2091 13.0005 14 13.0005H6Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextBold as IconComponent).keywords = [
  "text",
  "bold",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "vaulting",
  "heroic",
  "heroical",
  "steep",
  "overreaching",
  "enterprising",
  "bluff",
  "daredevil",
  "positive",
];

export default IconTextBold as IconComponent;
