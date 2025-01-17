import { FC } from "react";

const IconSidebarCode: FC<IconProps> = ({
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
            d="M2 11.0004C2 7.22913 2 5.34351 3.17157 4.17194C4.34315 3.00037 6.22876 3.00037 10 3.00037H14C17.7712 3.00037 19.6569 3.00037 20.8284 4.17194C22 5.34351 22 7.22913 22 11.0004V13.0004C22 16.7716 22 18.6572 20.8284 19.8288C19.6569 21.0004 17.7712 21.0004 14 21.0004H10C6.22876 21.0004 4.34315 21.0004 3.17157 19.8288C2 18.6572 2 16.7716 2 13.0004V11.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 21.0004L15 3.00037"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 14.0004L5 15.0004L6 16.0004M10.5 16.0004L11.5 17.0004L10.5 18.0004M9 14.0004L7.5 18.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 4.17185C2 5.34342 2 7.22904 2 11.0003V13.0003C2 16.7715 2 18.6571 3.17157 19.8287C4.34315 21.0003 6.22876 21.0003 10 21.0003H14C14.0843 21.0003 14.9176 21.0003 15 21.0003L15 3.00031C14.9176 3.00029 14.0843 3.00028 14 3.00028H10C6.22876 3.00028 4.34315 3.00028 3.17157 4.17185Z"
            fill="currentColor"
          />
          <path
            d="M22 13.0004V11.0004C22 7.22913 22 5.34351 20.8284 4.17194C19.8541 3.19761 17.6359 3.03357 15 3.00596V20.9948C17.6359 20.9672 19.8541 20.8031 20.8284 19.8288C22 18.6572 22 16.7716 22 13.0004Z"
            fill="currentColor"
          />
          <path
            d="M9.26334 13.2982C9.65118 13.4436 9.84769 13.8759 9.70225 14.2638L8.20225 18.2638C8.05681 18.6516 7.6245 18.8481 7.23666 18.7027C6.84882 18.5573 6.65231 18.1249 6.79775 17.7371L8.29775 13.7371C8.44319 13.3493 8.8755 13.1528 9.26334 13.2982Z"
            fill="currentColor"
          />
          <path
            d="M6.53033 13.4701C6.82322 13.763 6.82322 14.2379 6.53033 14.5308L6.06066 15.0004L6.53033 15.4701C6.82322 15.763 6.82322 16.2379 6.53033 16.5308C6.23744 16.8237 5.76256 16.8237 5.46967 16.5308L4.46967 15.5308C4.17678 15.2379 4.17678 14.763 4.46967 14.4701L5.46967 13.4701C5.76256 13.1772 6.23744 13.1772 6.53033 13.4701Z"
            fill="currentColor"
          />
          <path
            d="M9.96967 15.4701C10.2626 15.1772 10.7374 15.1772 11.0303 15.4701L12.0303 16.4701C12.3232 16.763 12.3232 17.2379 12.0303 17.5308L11.0303 18.5308C10.7374 18.8237 10.2626 18.8237 9.96967 18.5308C9.67678 18.2379 9.67678 17.763 9.96967 17.4701L10.4393 17.0004L9.96967 16.5308C9.67678 16.2379 9.67678 15.763 9.96967 15.4701Z"
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
            d="M2 11.0004C2 7.22914 2 5.34352 3.17157 4.17194C4.34315 3.00037 6.22876 3.00037 10 3.00037H14H14.25L14.25 21.0004H14H10C6.22876 21.0004 4.34315 21.0004 3.17157 19.8288C2 18.6572 2 16.7716 2 13.0004V11.0004ZM15.75 20.9948L15.75 3.00596C18.3859 3.03358 19.8541 3.19762 20.8284 4.17194C22 5.34352 22 7.22914 22 11.0004V13.0004C22 16.7716 22 18.6572 20.8284 19.8288C19.8541 20.8031 18.3859 20.9672 15.75 20.9948ZM9.96967 15.47C10.2626 15.1771 10.7374 15.1771 11.0303 15.47L12.0303 16.47C12.3232 16.7629 12.3232 17.2378 12.0303 17.5307L11.0303 18.5307C10.7374 18.8236 10.2626 18.8236 9.96967 18.5307C9.67678 18.2378 9.67678 17.7629 9.96967 17.47L10.4393 17.0004L9.96967 16.5307C9.67678 16.2378 9.67678 15.7629 9.96967 15.47ZM9.70225 14.2637C9.84769 13.8759 9.65118 13.4436 9.26334 13.2981C8.8755 13.1527 8.44319 13.3492 8.29775 13.737L6.79775 17.737C6.65231 18.1249 6.84882 18.5572 7.23666 18.7026C7.6245 18.8481 8.05681 18.6516 8.20225 18.2637L9.70225 14.2637ZM6.53033 13.47C6.82322 13.7629 6.82322 14.2378 6.53033 14.5307L6.06066 15.0004L6.53033 15.47C6.82322 15.7629 6.82322 16.2378 6.53033 16.5307C6.23744 16.8236 5.76256 16.8236 5.46967 16.5307L4.46967 15.5307C4.17678 15.2378 4.17678 14.7629 4.46967 14.47L5.46967 13.47C5.76256 13.1771 6.23744 13.1771 6.53033 13.47Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarCode as IconComponent).keywords = [
  "sidebar",
  "code",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
];

export default IconSidebarCode as IconComponent;
