import { FC } from "react";

const IconMagniferZoomOut: FC<IconProps> = ({
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
            cx="11.5"
            cy="11.5005"
            r="9.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18.5 18.5005L22 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 11.5005H11.5H14"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M17.1001 18.1229C17.4671 17.8095 17.809 17.4676 18.1224 17.1006L21.7887 20.7669C22.071 21.0492 22.071 21.5069 21.7887 21.7892C21.5064 22.0715 21.0487 22.0715 20.7664 21.7892L17.1001 18.1229Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.02393 11.157C8.02393 10.7577 8.34758 10.4341 8.74682 10.4341H13.5661C13.9653 10.4341 14.289 10.7577 14.289 11.157C14.289 11.5562 13.9653 11.8799 13.5661 11.8799H8.74682C8.34758 11.8799 8.02393 11.5562 8.02393 11.157Z"
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
            d="M21.7883 21.7888C22.0706 21.5065 22.0706 21.0487 21.7883 20.7664L18.1224 17.1006C19.4884 15.5011 20.3133 13.4255 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137C13.4249 20.3137 15.5006 19.489 17.1 18.123L20.7659 21.7888C21.0483 22.0711 21.506 22.0711 21.7883 21.7888ZM8.0241 11.1571C8.0241 10.7579 8.34775 10.4342 8.74699 10.4342H13.5663C13.9655 10.4342 14.2892 10.7579 14.2892 11.1571C14.2892 11.5564 13.9655 11.88 13.5663 11.88H8.74699C8.34775 11.88 8.0241 11.5564 8.0241 11.1571Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferZoomOut as IconComponent).keywords = [
  "magnifer",
  "zoom",
  "out",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "away",
  "outer",
  "exterior",
  "retired",
  "extinct",
  "dead",
  "down",
  "extinguished",
  "come out",
];

export default IconMagniferZoomOut as IconComponent;
