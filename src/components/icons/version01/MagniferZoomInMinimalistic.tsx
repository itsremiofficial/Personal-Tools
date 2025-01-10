import { FC } from "react";

const IconMagniferZoomInMinimalistic: FC<IconProps> = ({
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
            d="M9 11.5005H11.5M11.5 11.5005H14M11.5 11.5005V14.0005M11.5 11.5005V9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1565 8.0249C11.5557 8.0249 11.8793 8.34855 11.8793 8.74779V10.4345H13.5661C13.9653 10.4345 14.289 10.7582 14.289 11.1574C14.289 11.5567 13.9653 11.8803 13.5661 11.8803H11.8793V13.5671C11.8793 13.9663 11.5557 14.29 11.1565 14.29C10.7572 14.29 10.4336 13.9663 10.4336 13.5671V11.8803H8.74682C8.34758 11.8803 8.02393 11.5567 8.02393 11.1574C8.02393 10.7582 8.34758 10.4345 8.74682 10.4345H10.4336V8.74779C10.4336 8.34855 10.7572 8.0249 11.1565 8.0249Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137ZM19.8606 18.8387C19.5783 18.5564 19.1205 18.5564 18.8382 18.8387C18.5559 19.121 18.5559 19.5787 18.8382 19.861L20.7659 21.7888C21.0483 22.0711 21.506 22.0711 21.7883 21.7888C22.0706 21.5065 22.0706 21.0487 21.7883 20.7664L19.8606 18.8387ZM11.8795 10.4342V8.74746C11.8795 8.14511 11.3976 8.01455 11.1566 8.02457C10.7574 8.02457 10.4337 8.34822 10.4337 8.74746V10.4342H8.747C8.34776 10.4342 8.02411 10.7579 8.02411 11.1571C8.02411 11.5563 8.34776 11.88 8.747 11.88H10.4337V13.5667C10.4337 13.966 10.7574 14.2896 11.1566 14.2896C11.5559 14.2896 11.8795 13.966 11.8795 13.5667V11.88H13.5663C13.9655 11.88 14.2892 11.5563 14.2892 11.1571C14.2892 10.7579 13.9655 10.4342 13.5663 10.4342H11.8795Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferZoomInMinimalistic as IconComponent).keywords = [
  "magnifer",
  "zoom",
  "in",
  "minimalistic",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "cbs",
  "nsis",
  "nih",
  "nsi",
  "establishment",
  "immigration",
  "without",
  "elected",
  "adherents",
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

export default IconMagniferZoomInMinimalistic as IconComponent;
