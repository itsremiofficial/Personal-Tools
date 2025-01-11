import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSafe2: FC<IconProps> = ({
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.5 12.0005C13.5 12.8289 12.8284 13.5005 12 13.5005C11.1716 13.5005 10.5 12.8289 10.5 12.0005C10.5 11.1721 11.1716 10.5005 12 10.5005C12.8284 10.5005 13.5 11.1721 13.5 12.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 15.2505C10.2051 15.2505 8.75 13.7954 8.75 12.0005H7.25C7.25 14.6238 9.37665 16.7505 12 16.7505V15.2505ZM15.25 12.0005C15.25 13.7954 13.7949 15.2505 12 15.2505V16.7505C14.6234 16.7505 16.75 14.6238 16.75 12.0005H15.25ZM12 8.75049C13.7949 8.75049 15.25 10.2056 15.25 12.0005H16.75C16.75 9.37714 14.6234 7.25049 12 7.25049V8.75049ZM12 7.25049C9.37665 7.25049 7.25 9.37714 7.25 12.0005H8.75C8.75 10.2056 10.2051 8.75049 12 8.75049V7.25049ZM12.75 12.0005V8.00049H11.25V12.0005H12.75ZM11.7046 12.6898L15.2046 14.1898L15.7954 12.8111L12.2954 11.3111L11.7046 12.6898ZM11.7046 11.3111L8.20456 12.8111L8.79544 14.1898L12.2954 12.6898L11.7046 11.3111Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.25 7.00049C5.25 6.58627 4.91421 6.25049 4.5 6.25049C4.08579 6.25049 3.75 6.58627 3.75 7.00049H5.25ZM3.75 10.0005C3.75 10.4147 4.08579 10.7505 4.5 10.7505C4.91421 10.7505 5.25 10.4147 5.25 10.0005H3.75ZM5.25 14.0005C5.25 13.5863 4.91421 13.2505 4.5 13.2505C4.08579 13.2505 3.75 13.5863 3.75 14.0005H5.25ZM3.75 17.0005C3.75 17.4147 4.08579 17.7505 4.5 17.7505C4.91421 17.7505 5.25 17.4147 5.25 17.0005H3.75ZM11 5.75049H13V4.25049H11V5.75049ZM18.25 11.0005V13.0005H19.75V11.0005H18.25ZM13 18.2505H11V19.7505H13V18.2505ZM5.75 13.0005V11.0005H4.25V13.0005H5.75ZM11 18.2505C9.56458 18.2505 8.56347 18.2489 7.80812 18.1473C7.07434 18.0487 6.68577 17.8682 6.40901 17.5915L5.34835 18.6521C5.95027 19.2541 6.70814 19.5129 7.60825 19.634C8.48678 19.7521 9.60699 19.7505 11 19.7505V18.2505ZM4.25 13.0005C4.25 14.3935 4.24841 15.5137 4.36652 16.3922C4.48754 17.2923 4.74643 18.0502 5.34835 18.6521L6.40901 17.5915C6.13225 17.3147 5.9518 16.9261 5.85315 16.1924C5.75159 15.437 5.75 14.4359 5.75 13.0005H4.25ZM18.25 13.0005C18.25 14.4359 18.2484 15.437 18.1469 16.1924C18.0482 16.9261 17.8678 17.3147 17.591 17.5915L18.6517 18.6521C19.2536 18.0502 19.5125 17.2923 19.6335 16.3922C19.7516 15.5137 19.75 14.3935 19.75 13.0005H18.25ZM13 19.7505C14.393 19.7505 15.5132 19.7521 16.3918 19.634C17.2919 19.5129 18.0497 19.2541 18.6517 18.6521L17.591 17.5915C17.3142 17.8682 16.9257 18.0487 16.1919 18.1473C15.4365 18.2489 14.4354 18.2505 13 18.2505V19.7505ZM13 5.75049C14.4354 5.75049 15.4365 5.75208 16.1919 5.85364C16.9257 5.95229 17.3142 6.13274 17.591 6.4095L18.6517 5.34884C18.0497 4.74692 17.2919 4.48803 16.3918 4.36701C15.5132 4.2489 14.393 4.25049 13 4.25049V5.75049ZM19.75 11.0005C19.75 9.60748 19.7516 8.48727 19.6335 7.60874C19.5125 6.70863 19.2536 5.95075 18.6517 5.34884L17.591 6.4095C17.8678 6.68626 18.0482 7.07483 18.1469 7.80861C18.2484 8.56396 18.25 9.56507 18.25 11.0005H19.75ZM11 4.25049C9.60699 4.25049 8.48678 4.2489 7.60825 4.36701C6.70814 4.48803 5.95027 4.74692 5.34835 5.34884L6.40901 6.4095C6.68577 6.13273 7.07434 5.95229 7.80812 5.85364C8.56347 5.75208 9.56458 5.75049 11 5.75049V4.25049ZM5.75 11.0005C5.75 9.56507 5.75159 8.56396 5.85315 7.80861C5.9518 7.07483 6.13225 6.68626 6.40901 6.4095L5.34835 5.34884C4.74643 5.95075 4.48754 6.70863 4.36652 7.60874C4.24841 8.48727 4.25 9.60748 4.25 11.0005H5.75ZM3.75 7.00049V10.0005H5.25V7.00049H3.75ZM3.75 14.0005V17.0005H5.25V14.0005H3.75Z"
            fill="currentColor"
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
            d="M12.75 8.83745V9.87852C13.6239 10.1874 14.25 11.0208 14.25 12.0005C14.25 12.0496 14.2484 12.0984 14.2453 12.1468L15.2025 12.557C15.2337 12.3762 15.25 12.1902 15.25 12.0005C15.25 10.4637 14.1833 9.17604 12.75 8.83745Z"
            fill="currentColor"
          />
          <path
            d="M11.25 8.83745C9.81665 9.17604 8.75 10.4637 8.75 12.0005C8.75 12.1902 8.76626 12.3762 8.79747 12.557L9.75468 12.1468C9.75158 12.0984 9.75 12.0496 9.75 12.0005C9.75 11.0208 10.3761 10.1874 11.25 9.87852V8.83745Z"
            fill="currentColor"
          />
          <path
            d="M14.6113 13.9356L13.6544 13.5255C13.2432 13.9713 12.6542 14.2505 12 14.2505C11.3458 14.2505 10.7568 13.9713 10.3456 13.5255L9.38865 13.9356C9.98087 14.7335 10.9301 15.2505 12 15.2505C13.0699 15.2505 14.0191 14.7335 14.6113 13.9356Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0549 4.25049H10.9451C9.57755 4.25047 8.47521 4.25045 7.60825 4.36701C6.70814 4.48803 5.95027 4.74692 5.34835 5.34884C5.07033 5.62686 4.8655 5.93814 4.71362 6.28135C4.64592 6.26127 4.57422 6.25049 4.5 6.25049C4.08579 6.25049 3.75 6.58628 3.75 7.00049V10.0005C3.75 10.3271 3.95871 10.6049 4.25002 10.7078V13.2932C3.95871 13.3961 3.75 13.6739 3.75 14.0005V17.0005C3.75 17.4147 4.08579 17.7505 4.5 17.7505C4.57422 17.7505 4.64592 17.7397 4.71362 17.7196C4.8655 18.0628 5.07033 18.3741 5.34835 18.6521C5.95027 19.2541 6.70814 19.513 7.60825 19.634C8.47522 19.7505 9.57754 19.7505 10.9451 19.7505H13.0549C14.4225 19.7505 15.5248 19.7505 16.3918 19.634C17.2919 19.513 18.0497 19.2541 18.6516 18.6521C19.2536 18.0502 19.5125 17.2923 19.6335 16.3922C19.75 15.5253 19.75 14.423 19.75 13.0554V10.9456C19.75 9.57803 19.75 8.47571 19.6335 7.60874C19.5125 6.70863 19.2536 5.95076 18.6516 5.34884C18.0497 4.74692 17.2919 4.48803 16.3918 4.36701C15.5248 4.25045 14.4225 4.25047 13.0549 4.25049ZM7.25 12.0005C7.25 9.37714 9.37665 7.25049 12 7.25049C14.6234 7.25049 16.75 9.37714 16.75 12.0005C16.75 14.6238 14.6234 16.7505 12 16.7505C9.37665 16.7505 7.25 14.6238 7.25 12.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM10.9451 4.25049H13.0549C14.4225 4.25047 15.5248 4.25045 16.3918 4.36701C17.2919 4.48803 18.0497 4.74692 18.6516 5.34884C19.2536 5.95076 19.5125 6.70863 19.6335 7.60874C19.75 8.47571 19.75 9.57803 19.75 10.9456V13.0554C19.75 14.423 19.75 15.5253 19.6335 16.3922C19.5125 17.2923 19.2536 18.0502 18.6516 18.6521C18.0497 19.2541 17.2919 19.513 16.3918 19.634C15.5248 19.7505 14.4225 19.7505 13.0549 19.7505H10.9451C9.57754 19.7505 8.47522 19.7505 7.60825 19.634C6.70814 19.513 5.95027 19.2541 5.34835 18.6521C5.07033 18.3741 4.8655 18.0628 4.71362 17.7196C4.64592 17.7397 4.57422 17.7505 4.5 17.7505C4.08579 17.7505 3.75 17.4147 3.75 17.0005V14.0005C3.75 13.6739 3.95871 13.3961 4.25002 13.2932V10.7078C3.95871 10.6049 3.75 10.3271 3.75 10.0005V7.00049C3.75 6.58628 4.08579 6.25049 4.5 6.25049C4.57422 6.25049 4.64592 6.26127 4.71362 6.28135C4.8655 5.93814 5.07033 5.62686 5.34835 5.34884C5.95027 4.74692 6.70814 4.48803 7.60825 4.36701C8.47521 4.25045 9.57755 4.25047 10.9451 4.25049Z"
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
            d="M8.75 12.0005C8.75 10.4637 9.81665 9.17604 11.25 8.83745V9.87852C10.3761 10.1874 9.75 11.0208 9.75 12.0005C9.75 12.0496 9.75158 12.0984 9.75468 12.1468L8.79747 12.557C8.76626 12.3762 8.75 12.1902 8.75 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.75 9.87852V8.83745C14.1833 9.17604 15.25 10.4637 15.25 12.0005C15.25 12.1902 15.2337 12.3762 15.2025 12.557L14.2453 12.1468C14.2484 12.0984 14.25 12.0496 14.25 12.0005C14.25 11.0208 13.6239 10.1874 12.75 9.87852Z"
            fill="currentColor"
          />
          <path
            d="M13.6544 13.5255L14.6113 13.9356C14.0191 14.7335 13.0699 15.2505 12 15.2505C10.9301 15.2505 9.98087 14.7335 9.38865 13.9356L10.3456 13.5255C10.7568 13.9713 11.3458 14.2505 12 14.2505C12.6542 14.2505 13.2432 13.9713 13.6544 13.5255Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.80812 5.85364C7.07434 5.95229 6.68577 6.13274 6.40901 6.4095C6.13225 6.68626 5.9518 7.07483 5.85315 7.80861C5.75159 8.56396 5.75 9.56507 5.75 11.0005V13.0005C5.75 14.4359 5.75159 15.437 5.85315 16.1924C5.9518 16.9261 6.13225 17.3147 6.40901 17.5915C6.68577 17.8682 7.07434 18.0487 7.80812 18.1473C8.56347 18.2489 9.56458 18.2505 11 18.2505H13C14.4354 18.2505 15.4365 18.2489 16.1919 18.1473C16.9257 18.0487 17.3142 17.8682 17.591 17.5915C17.8678 17.3147 18.0482 16.9261 18.1469 16.1924C18.2484 15.437 18.25 14.4359 18.25 13.0005V11.0005C18.25 9.56507 18.2484 8.56396 18.1469 7.80861C18.0482 7.07483 17.8678 6.68626 17.591 6.4095C17.3142 6.13274 16.9257 5.95229 16.1919 5.85364C15.4365 5.75208 14.4354 5.75049 13 5.75049H11C9.56458 5.75049 8.56347 5.75208 7.80812 5.85364ZM12 7.25049C9.37665 7.25049 7.25 9.37714 7.25 12.0005C7.25 14.6238 9.37665 16.7505 12 16.7505C14.6234 16.7505 16.75 14.6238 16.75 12.0005C16.75 9.37714 14.6234 7.25049 12 7.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005ZM13.0549 4.25049C14.4225 4.25047 15.5248 4.25045 16.3918 4.36701C17.2919 4.48803 18.0497 4.74692 18.6516 5.34884C19.2536 5.95076 19.5125 6.70863 19.6335 7.60874C19.75 8.47571 19.75 9.57803 19.75 10.9456V13.0554C19.75 14.4229 19.75 15.5253 19.6335 16.3922C19.5125 17.2923 19.2536 18.0502 18.6516 18.6521C18.0497 19.2541 17.2919 19.513 16.3918 19.634C15.5248 19.7505 14.4225 19.7505 13.0549 19.7505H10.9451C9.57754 19.7505 8.47522 19.7505 7.60825 19.634C6.70814 19.513 5.95027 19.2541 5.34835 18.6521C5.07033 18.3741 4.8655 18.0628 4.71362 17.7196C4.64592 17.7397 4.57422 17.7505 4.5 17.7505C4.08579 17.7505 3.75 17.4147 3.75 17.0005V14.0005C3.75 13.6739 3.95871 13.3961 4.25002 13.2932V10.7078C3.95871 10.6049 3.75 10.3271 3.75 10.0005V7.00049C3.75 6.58628 4.08579 6.25049 4.5 6.25049C4.57422 6.25049 4.64592 6.26127 4.71362 6.28135C4.8655 5.93814 5.07033 5.62686 5.34835 5.34884C5.95027 4.74692 6.70814 4.48803 7.60825 4.36701C8.47522 4.25045 9.57754 4.25047 10.9451 4.25049H13.0549Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSafe2 as IconComponentType).keywords = [
  "safe",
  "2",
  "secure",
  "safe and sound",
  "safety",
  "risk-free",
  "dependable",
  "harmless",
  "innocuous",
  "off the hook",
  "sound",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconSafe2 as IconComponentType;