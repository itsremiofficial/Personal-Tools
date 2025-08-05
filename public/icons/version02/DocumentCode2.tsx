import { FC } from "react";

const IconDocumentCode2: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6699 22H16.6699C20.1699 22 21.6699 20 21.6699 17V7C21.6699 4 20.1699 2 16.6699 2H8.66992C5.16992 2 3.66992 4 3.66992 7V14"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1699 4.5V6.5C15.1699 7.6 16.0699 8.5 17.1699 8.5H19.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.66992 17L2.66992 19L4.66992 21"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 17L9.66992 19L7.66992 21"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H9.66992C10.8799 21.09 11.6699 19.63 11.6699 18C11.6699 15.24 9.42992 13 6.66992 13C5.53992 13 4.49992 13.37 3.66992 14V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1699 3.75C15.5841 3.75 15.9199 4.08579 15.9199 4.5V6.5C15.9199 7.18579 16.4841 7.75 17.1699 7.75H19.1699C19.5841 7.75 19.9199 8.08579 19.9199 8.5C19.9199 8.91421 19.5841 9.25 19.1699 9.25H17.1699C15.6557 9.25 14.4199 8.01421 14.4199 6.5V4.5C14.4199 4.08579 14.7557 3.75 15.1699 3.75Z"
            fill="currentColor"
          />
          <path
            d="M6.66992 13C3.90992 13 1.66992 15.24 1.66992 18C1.66992 20.76 3.90992 23 6.66992 23C9.42992 23 11.6699 20.76 11.6699 18C11.6699 15.24 9.42992 13 6.66992 13ZM5.82993 19.27C6.07993 19.52 6.07993 19.93 5.82993 20.19C5.69993 20.32 5.53993 20.38 5.36993 20.38C5.19993 20.38 5.03991 20.32 4.90991 20.19L3.17993 18.46C2.92993 18.21 2.92993 17.8 3.17993 17.54L4.90991 15.81C5.15991 15.56 5.56993 15.56 5.82993 15.81C6.07993 16.06 6.07993 16.47 5.82993 16.73L4.55994 18L5.82993 19.27ZM10.1499 18.46L8.41992 20.19C8.28992 20.32 8.12993 20.38 7.95993 20.38C7.78993 20.38 7.62991 20.32 7.49991 20.19C7.24991 19.94 7.24991 19.53 7.49991 19.27L8.76993 18L7.49991 16.73C7.24991 16.48 7.24991 16.07 7.49991 15.81C7.74991 15.56 8.15992 15.56 8.41992 15.81L10.1499 17.54C10.3999 17.8 10.3999 18.2 10.1499 18.46Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6699 2H8.66992C5.16992 2 3.66992 4 3.66992 7V11.47C3.66992 11.82 4.00992 12.06 4.32992 11.94C5.42992 11.51 6.67992 11.37 7.96992 11.63C10.5699 12.15 12.6399 14.29 13.0699 16.9C13.3299 18.49 13.0099 20 12.2799 21.25C12.0799 21.58 12.3199 22 12.7099 22H16.6699C20.1699 22 21.6699 20 21.6699 17V7C21.6699 4 20.1699 2 16.6699 2ZM19.1699 9.25H17.1699C15.6499 9.25 14.4199 8.02 14.4199 6.5V4.5C14.4199 4.09 14.7599 3.75 15.1699 3.75C15.5799 3.75 15.9199 4.09 15.9199 4.5V6.5C15.9199 7.19 16.4799 7.75 17.1699 7.75H19.1699C19.5799 7.75 19.9199 8.09 19.9199 8.5C19.9199 8.91 19.5799 9.25 19.1699 9.25Z"
            fill="currentColor"
          />
          <path
            d="M6.66992 13C3.90992 13 1.66992 15.24 1.66992 18C1.66992 20.76 3.90992 23 6.66992 23C9.42992 23 11.6699 20.76 11.6699 18C11.6699 15.24 9.42992 13 6.66992 13ZM5.82992 19.27C6.07992 19.52 6.07992 19.93 5.82992 20.19C5.69992 20.32 5.53992 20.38 5.36992 20.38C5.19992 20.38 5.03992 20.32 4.90992 20.19L3.17992 18.46C2.92992 18.21 2.92992 17.8 3.17992 17.54L4.90992 15.81C5.15992 15.56 5.56992 15.56 5.82992 15.81C6.07992 16.06 6.07992 16.47 5.82992 16.73L4.55992 18L5.82992 19.27ZM10.1499 18.46L8.41992 20.19C8.28992 20.32 8.12992 20.38 7.95992 20.38C7.78992 20.38 7.62992 20.32 7.49992 20.19C7.24992 19.94 7.24992 19.53 7.49992 19.27L8.77992 18L7.50992 16.73C7.25992 16.48 7.25992 16.07 7.50992 15.81C7.75992 15.56 8.16992 15.56 8.42992 15.81L10.1599 17.54C10.3999 17.8 10.3999 18.2 10.1499 18.46Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentCode2 as IconComponent).keywords = [
  "document",
  "code",
  "2",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
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

export default IconDocumentCode2 as IconComponent;
