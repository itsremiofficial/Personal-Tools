import { FC } from "react";

const IconSubtitle: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1703 17.08H16.3203"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.6399 17.08H7.16992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1696 13.32H12.6396"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.93992 13.32H7.16992"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M18.1703 17.83H16.3203C15.9103 17.83 15.5703 17.49 15.5703 17.08C15.5703 16.67 15.9103 16.33 16.3203 16.33H18.1703C18.5803 16.33 18.9203 16.67 18.9203 17.08C18.9203 17.49 18.5803 17.83 18.1703 17.83Z"
            fill="currentColor"
          />
          <path
            d="M13.6399 17.83H7.16992C6.75992 17.83 6.41992 17.49 6.41992 17.08C6.41992 16.67 6.75992 16.33 7.16992 16.33H13.6399C14.0499 16.33 14.3899 16.67 14.3899 17.08C14.3899 17.49 14.0599 17.83 13.6399 17.83Z"
            fill="currentColor"
          />
          <path
            d="M18.1696 14.07H12.6396C12.2296 14.07 11.8896 13.73 11.8896 13.32C11.8896 12.91 12.2296 12.57 12.6396 12.57H18.1696C18.5796 12.57 18.9196 12.91 18.9196 13.32C18.9196 13.73 18.5796 14.07 18.1696 14.07Z"
            fill="currentColor"
          />
          <path
            d="M9.93992 14.07H7.16992C6.75992 14.07 6.41992 13.73 6.41992 13.32C6.41992 12.91 6.75992 12.57 7.16992 12.57H9.93992C10.3499 12.57 10.6899 12.91 10.6899 13.32C10.6899 13.73 10.3499 14.07 9.93992 14.07Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM7.16992 12.57H9.93992C10.3499 12.57 10.6899 12.91 10.6899 13.32C10.6899 13.73 10.3499 14.07 9.93992 14.07H7.16992C6.75992 14.07 6.41992 13.73 6.41992 13.32C6.41992 12.91 6.75992 12.57 7.16992 12.57ZM13.6399 17.83H7.16992C6.75992 17.83 6.41992 17.49 6.41992 17.08C6.41992 16.67 6.75992 16.33 7.16992 16.33H13.6399C14.0499 16.33 14.3899 16.67 14.3899 17.08C14.3899 17.49 14.0599 17.83 13.6399 17.83ZM18.1699 17.83H16.3199C15.9099 17.83 15.5699 17.49 15.5699 17.08C15.5699 16.67 15.9099 16.33 16.3199 16.33H18.1699C18.5799 16.33 18.9199 16.67 18.9199 17.08C18.9199 17.49 18.5799 17.83 18.1699 17.83ZM18.1699 14.07H12.6399C12.2299 14.07 11.8899 13.73 11.8899 13.32C11.8899 12.91 12.2299 12.57 12.6399 12.57H18.1699C18.5799 12.57 18.9199 12.91 18.9199 13.32C18.9199 13.73 18.5799 14.07 18.1699 14.07Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSubtitle as IconComponent).keywords = [
  "subtitle",
  "caption",
  "subhead",
  "captioning",
  "subheading",
  "heading",
  "transcript",
  "header",
  "tag",
  "subsection",
];

export default IconSubtitle as IconComponent;
