import { FC } from "react";

const IconCardSend: FC<IconProps> = ({
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
            d="M19 20.0005V14.0005M19 14.0005L21 16.0005M19 14.0005L17 16.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 16.0005H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 16.0005H12.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 10.0005L22 10.0005"
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
            d="M14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005C2 11.5586 2.00188 10.3925 2.00377 10.0005H22C22.0019 10.3925 22 11.5586 22 12.0005C22 12.66 22 13.2618 21.9937 13.8122L20.591 12.4095C19.7123 11.5308 18.2877 11.5308 17.409 12.4095L15.409 14.4095C14.5303 15.2882 14.5303 16.7128 15.409 17.5915C15.7847 17.9671 16.2601 18.1822 16.75 18.2366V19.9748C15.964 20.0005 15.0559 20.0005 14 20.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4697 13.4702C18.7626 13.1773 19.2374 13.1773 19.5303 13.4702L21.5303 15.4702C21.8232 15.7631 21.8232 16.2379 21.5303 16.5308C21.2374 16.8237 20.7626 16.8237 20.4697 16.5308L19.75 15.8111V20.0005C19.75 20.4147 19.4142 20.7505 19 20.7505C18.5858 20.7505 18.25 20.4147 18.25 20.0005V15.8111L17.5303 16.5308C17.2374 16.8237 16.7626 16.8237 16.4697 16.5308C16.1768 16.2379 16.1768 15.7631 16.4697 15.4702L18.4697 13.4702Z"
            fill="currentColor"
          />
          <path
            d="M12.5 15.2505C12.0858 15.2505 11.75 15.5863 11.75 16.0005C11.75 16.4147 12.0858 16.7505 12.5 16.7505H14C14.4142 16.7505 14.75 16.4147 14.75 16.0005C14.75 15.5863 14.4142 15.2505 14 15.2505H12.5Z"
            fill="currentColor"
          />
          <path
            d="M6 15.2505C5.58579 15.2505 5.25 15.5863 5.25 16.0005C5.25 16.4147 5.58579 16.7505 6 16.7505H10C10.4142 16.7505 10.75 16.4147 10.75 16.0005C10.75 15.5863 10.4142 15.2505 10 15.2505H6Z"
            fill="currentColor"
          />
          <path
            d="M9.99484 4.00049H14.0052C17.7861 4.00049 19.6766 4.00049 20.8512 5.11627C21.6969 5.91964 21.9337 7.07556 22 9.00049V10.0005H2V9.00049C2.0663 7.07556 2.3031 5.91964 3.14881 5.11627C4.3234 4.00049 6.21388 4.00049 9.99484 4.00049Z"
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
            d="M18.4697 13.4702C18.7626 13.1773 19.2374 13.1773 19.5303 13.4702L21.5303 15.4702C21.8232 15.7631 21.8232 16.2379 21.5303 16.5308C21.2374 16.8237 20.7626 16.8237 20.4697 16.5308L19.75 15.8111V20.0005C19.75 20.4147 19.4142 20.7505 19 20.7505C18.5858 20.7505 18.25 20.4147 18.25 20.0005V15.8111L17.5303 16.5308C17.2374 16.8237 16.7626 16.8237 16.4697 16.5308C16.1768 16.2379 16.1768 15.7631 16.4697 15.4702L18.4697 13.4702Z"
            fill="currentColor"
          />
          <path
            d="M10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C21.672 6.0156 21.9082 7.22931 21.9743 9.25049H2.02572C2.09185 7.22931 2.32803 6.0156 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20.0005H14C15.0559 20.0005 15.964 20.0005 16.75 19.9748V18.2366C16.2601 18.1822 15.7847 17.9671 15.409 17.5915C14.5303 16.7128 14.5303 15.2882 15.409 14.4095L17.409 12.4095C18.2877 11.5308 19.7123 11.5308 20.591 12.4095L21.9937 13.8122C22 13.2618 22 12.66 22 12.0005C22 11.5586 22 11.1425 21.9981 10.7505H2.00189C2 11.1425 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005ZM5.25 16.0005C5.25 15.5863 5.58579 15.2505 6 15.2505H10C10.4142 15.2505 10.75 15.5863 10.75 16.0005C10.75 16.4147 10.4142 16.7505 10 16.7505H6C5.58579 16.7505 5.25 16.4147 5.25 16.0005ZM12.5 15.2505C12.0858 15.2505 11.75 15.5863 11.75 16.0005C11.75 16.4147 12.0858 16.7505 12.5 16.7505H14C14.4142 16.7505 14.75 16.4147 14.75 16.0005C14.75 15.5863 14.4142 15.2505 14 15.2505H12.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardSend as IconComponent).keywords = [
  "card",
  "send",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
];

export default IconCardSend as IconComponent;