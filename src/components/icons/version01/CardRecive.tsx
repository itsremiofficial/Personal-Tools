import { FC } from "react";

const IconCardRecive: FC<IconProps> = ({
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
            d="M19 14.0005V20.0005M19 20.0005L21 18.0005M19 20.0005L17 18.0005"
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
            d="M10 20.0005H14C14.6595 20.0005 15.2613 20.0005 15.8118 19.9942L15.409 19.5915C14.5303 18.7128 14.5303 17.2882 15.409 16.4095C15.7847 16.0338 16.2601 15.8188 16.75 15.7643V14.0005C16.75 12.7578 17.7574 11.7505 19 11.7505C20.2426 11.7505 21.25 12.7578 21.25 14.0005V15.7643C21.4739 15.7892 21.6947 15.8476 21.9044 15.9396C22 14.9176 22 13.6365 22 12.0005C22 11.5586 22 10.3925 21.9981 10.0005H2.00189C2 10.3925 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4697 20.5308C18.7626 20.8237 19.2374 20.8237 19.5303 20.5308L21.5303 18.5308C21.8232 18.2379 21.8232 17.7631 21.5303 17.4702C21.2374 17.1773 20.7626 17.1773 20.4697 17.4702L19.75 18.1898V14.0005C19.75 13.5863 19.4142 13.2505 19 13.2505C18.5858 13.2505 18.25 13.5863 18.25 14.0005V18.1898L17.5303 17.4702C17.2374 17.1773 16.7626 17.1773 16.4697 17.4702C16.1768 17.7631 16.1768 18.2379 16.4697 18.5308L18.4697 20.5308Z"
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
            d="M18.4697 20.5308C18.7626 20.8237 19.2374 20.8237 19.5303 20.5308L21.5303 18.5308C21.8232 18.2379 21.8232 17.7631 21.5303 17.4702C21.2374 17.1773 20.7626 17.1773 20.4697 17.4702L19.75 18.1898V14.0005C19.75 13.5863 19.4142 13.2505 19 13.2505C18.5858 13.2505 18.25 13.5863 18.25 14.0005V18.1898L17.5303 17.4702C17.2374 17.1773 16.7626 17.1773 16.4697 17.4702C16.1768 17.7631 16.1768 18.2379 16.4697 18.5308L18.4697 20.5308Z"
            fill="currentColor"
          />
          <path
            d="M10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C21.672 6.0156 21.9082 7.22931 21.9743 9.25049H2.02572C2.09185 7.22931 2.32803 6.0156 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20.0005H14C14.6595 20.0005 15.2613 20.0005 15.8118 19.9942L15.409 19.5915C14.5303 18.7128 14.5303 17.2882 15.409 16.4095C15.7847 16.0338 16.2601 15.8188 16.75 15.7643V14.0005C16.75 12.7578 17.7574 11.7505 19 11.7505C20.2426 11.7505 21.25 12.7578 21.25 14.0005V15.7643C21.4739 15.7892 21.6947 15.8476 21.9044 15.9396C22 14.9176 22 13.6365 22 12.0005C22 11.5586 22 11.1425 21.9981 10.7505H2.00189C2 11.1425 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005ZM6 15.2505C5.58579 15.2505 5.25 15.5863 5.25 16.0005C5.25 16.4147 5.58579 16.7505 6 16.7505H10C10.4142 16.7505 10.75 16.4147 10.75 16.0005C10.75 15.5863 10.4142 15.2505 10 15.2505H6ZM12.5 15.2505C12.0858 15.2505 11.75 15.5863 11.75 16.0005C11.75 16.4147 12.0858 16.7505 12.5 16.7505H14C14.4142 16.7505 14.75 16.4147 14.75 16.0005C14.75 15.5863 14.4142 15.2505 14 15.2505H12.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardRecive as IconComponent).keywords = [
  "card",
  "recive",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "eyehole",
];

export default IconCardRecive as IconComponent;
