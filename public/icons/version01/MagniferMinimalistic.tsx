import { FC } from "react";

const IconMagniferMinimalistic: FC<IconProps> = ({
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
            d="M20 20.0005L22 22.0005"
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
            opacity={duotone ? "0.5" : "1"}
            d="M20.3133 11.1571C20.3133 16.2142 16.2137 20.3137 11.1566 20.3137C6.09956 20.3137 2 16.2142 2 11.1571C2 6.10005 6.09956 2.00049 11.1566 2.00049C16.2137 2.00049 20.3133 6.10005 20.3133 11.1571Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8387 18.8392C19.121 18.5569 19.5787 18.5569 19.861 18.8392L21.7887 20.7669C22.071 21.0492 22.071 21.5069 21.7887 21.7892C21.5064 22.0715 21.0487 22.0715 20.7664 21.7892L18.8387 19.8615C18.5564 19.5792 18.5564 19.1215 18.8387 18.8392Z"
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
            d="M20.3133 11.1571C20.3133 16.2142 16.2137 20.3137 11.1566 20.3137C6.09956 20.3137 2 16.2142 2 11.1571C2 6.10005 6.09956 2.00049 11.1566 2.00049C16.2137 2.00049 20.3133 6.10005 20.3133 11.1571Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8382 18.8387C19.1205 18.5564 19.5783 18.5564 19.8606 18.8387L21.7883 20.7664C22.0706 21.0487 22.0706 21.5065 21.7883 21.7888C21.506 22.0711 21.0483 22.0711 20.7659 21.7888L18.8382 19.861C18.5559 19.5787 18.5559 19.121 18.8382 18.8387Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferMinimalistic as IconComponent).keywords = [
  "magnifer",
  "minimalistic",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconMagniferMinimalistic as IconComponent;
