import { FC } from "react";

const IconSignpost: FC<IconProps> = ({
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
            d="M8.70399 3.50024H15.5C16.9045 3.50024 17.6067 3.50024 18.1111 3.8373C18.3295 3.98322 18.517 4.17072 18.6629 4.3891C19 4.89355 19 5.59578 19 7.00024C19 8.40471 19 9.10694 18.6629 9.61138C18.517 9.82976 18.3295 10.0173 18.1111 10.1632C17.6067 10.5002 16.9045 10.5002 15.5 10.5002H8.70399C8.04642 10.5002 7.71764 10.5002 7.41593 10.402C7.28282 10.3587 7.15463 10.3015 7.03346 10.2314C6.75882 10.0726 6.53915 9.82794 6.09981 9.33868C5.24911 8.39131 4.82376 7.91762 4.72136 7.36405C4.67687 7.12355 4.67687 6.87694 4.72136 6.63644C4.82376 6.08287 5.24911 5.60918 6.09981 4.66181C6.53915 4.17255 6.75882 3.92792 7.03346 3.76904C7.15463 3.69895 7.28282 3.64177 7.41593 3.59844C7.71764 3.50024 8.04642 3.50024 8.70399 3.50024Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15.296 12.5002H8.5C7.09554 12.5002 6.39331 12.5002 5.88886 12.8373C5.67048 12.9832 5.48298 13.1707 5.33706 13.3891C5 13.8936 5 14.5958 5 16.0002C5 17.4047 5 18.1069 5.33706 18.6114C5.48298 18.8298 5.67048 19.0173 5.88886 19.1632C6.39331 19.5002 7.09554 19.5002 8.5 19.5002H15.296C15.9536 19.5002 16.2824 19.5002 16.5841 19.402C16.7172 19.3587 16.8454 19.3015 16.9665 19.2314C17.2412 19.0726 17.4608 18.8279 17.9002 18.3387C18.7509 17.3913 19.1762 16.9176 19.2786 16.364C19.3231 16.1236 19.3231 15.8769 19.2786 15.6364C19.1762 15.0829 18.7509 14.6092 17.9002 13.6618C17.4608 13.1725 17.2412 12.9279 16.9665 12.769C16.8454 12.6989 16.7172 12.6418 16.5841 12.5984C16.2824 12.5002 15.9536 12.5002 15.296 12.5002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.75 2.00024C12.75 1.58603 12.4142 1.25024 12 1.25024C11.5858 1.25024 11.25 1.58603 11.25 2.00024H12.75ZM12.75 11.0002C12.75 10.586 12.4142 10.2502 12 10.2502C11.5858 10.2502 11.25 10.586 11.25 11.0002H12.75ZM12.75 20.0002C12.75 19.586 12.4142 19.2502 12 19.2502C11.5858 19.2502 11.25 19.586 11.25 20.0002H12.75ZM14 22.7502C14.4142 22.7502 14.75 22.4145 14.75 22.0002C14.75 21.586 14.4142 21.2502 14 21.2502V22.7502ZM10 21.2502C9.58579 21.2502 9.25 21.586 9.25 22.0002C9.25 22.4145 9.58579 22.7502 10 22.7502V21.2502ZM11.25 2.00024V3.00024H12.75V2.00024H11.25ZM11.25 11.0002V12.0002H12.75V11.0002H11.25ZM11.25 20.0002V22.0002H12.75V20.0002H11.25ZM14 21.2502H10V22.7502H14V21.2502Z"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 10.5002H11.25V12.5002H12.75V10.5002ZM11.25 3.50024H12.75V2.00024C12.75 1.58603 12.4142 1.25024 12 1.25024C11.5858 1.25024 11.25 1.58603 11.25 2.00024V3.50024ZM11.25 21.2502V19.5002H12.75V21.2502H14C14.4142 21.2502 14.75 21.586 14.75 22.0002C14.75 22.4145 14.4142 22.7502 14 22.7502H10C9.58579 22.7502 9.25 22.4145 9.25 22.0002C9.25 21.586 9.58579 21.2502 10 21.2502H11.25Z"
            fill="currentColor"
          />
          <path
            d="M15.5 10.5002C16.9045 10.5002 17.6067 10.5002 18.1111 10.1632C18.3295 10.0173 18.517 9.82977 18.6629 9.61138C19 9.10694 19 8.40471 19 7.00024C19 5.59578 19 4.89355 18.6629 4.3891C18.517 4.17072 18.3295 3.98322 18.1111 3.8373C17.6067 3.50024 16.9045 3.50024 15.5 3.50024H12.75H11.25H8.70399C8.04642 3.50024 7.71764 3.50024 7.41593 3.59844C7.28282 3.64177 7.15463 3.69895 7.03346 3.76904C6.75882 3.92792 6.53915 4.17255 6.09981 4.66181C5.24911 5.60918 4.82376 6.08287 4.72136 6.63644C4.67687 6.87694 4.67687 7.12355 4.72136 7.36405C4.82376 7.91762 5.24911 8.39131 6.09981 9.33868C6.53915 9.82794 6.75882 10.0726 7.03346 10.2314C7.15463 10.3015 7.28282 10.3587 7.41593 10.402C7.71764 10.5002 8.04642 10.5002 8.70399 10.5002H11.25H12.75H15.5Z"
            fill="currentColor"
          />
          <path
            d="M8.49999 19.5002C7.09553 19.5002 6.3933 19.5002 5.88885 19.1632C5.67047 19.0173 5.48297 18.8298 5.33705 18.6114C4.99999 18.1069 4.99999 17.4047 4.99999 16.0002C4.99999 14.5958 4.99999 13.8936 5.33705 13.3891C5.48297 13.1707 5.67047 12.9832 5.88885 12.8373C6.3933 12.5002 7.09553 12.5002 8.49999 12.5002H11.25H12.75H15.296C15.9536 12.5002 16.2823 12.5002 16.5841 12.5984C16.7172 12.6418 16.8454 12.6989 16.9665 12.769C17.2412 12.9279 17.4608 13.1725 17.9002 13.6618C18.7509 14.6092 19.1762 15.0829 19.2786 15.6364C19.3231 15.8769 19.3231 16.1236 19.2786 16.364C19.1762 16.9176 18.7509 17.3913 17.9002 18.3387C17.4608 18.8279 17.2412 19.0726 16.9665 19.2314C16.8454 19.3015 16.7172 19.3587 16.5841 19.402C16.2823 19.5002 15.9536 19.5002 15.296 19.5002H12.75H11.25H8.49999Z"
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
            d="M18.1111 10.1632C17.6067 10.5002 16.9045 10.5002 15.5 10.5002H12.75V12.5002H15.296C15.9536 12.5002 16.2823 12.5002 16.5841 12.5984C16.7172 12.6418 16.8454 12.6989 16.9665 12.769C17.2412 12.9279 17.4608 13.1725 17.9002 13.6618C18.7509 14.6092 19.1762 15.0829 19.2786 15.6364C19.3231 15.8769 19.3231 16.1236 19.2786 16.364C19.1762 16.9176 18.7509 17.3913 17.9002 18.3387C17.4608 18.8279 17.2412 19.0726 16.9665 19.2314C16.8454 19.3015 16.7172 19.3587 16.5841 19.402C16.2823 19.5002 15.9536 19.5002 15.296 19.5002H12.75V21.2502H14C14.4142 21.2502 14.75 21.586 14.75 22.0002C14.75 22.4145 14.4142 22.7502 14 22.7502H9.99999C9.58578 22.7502 9.24999 22.4145 9.24999 22.0002C9.24999 21.586 9.58578 21.2502 9.99999 21.2502H11.25V19.5002H8.49999C7.09553 19.5002 6.3933 19.5002 5.88885 19.1632C5.67047 19.0173 5.48297 18.8298 5.33705 18.6114C4.99999 18.1069 4.99999 17.4047 4.99999 16.0002C4.99999 14.5958 4.99999 13.8936 5.33705 13.3891C5.48297 13.1707 5.67047 12.9832 5.88885 12.8373C6.3933 12.5002 7.09553 12.5002 8.49999 12.5002H11.25V10.5002H8.70399C8.04642 10.5002 7.71764 10.5002 7.41593 10.402C7.28282 10.3587 7.15463 10.3015 7.03346 10.2314C6.75882 10.0726 6.53915 9.82794 6.09981 9.33868C5.24911 8.39131 4.82376 7.91762 4.72136 7.36405C4.67687 7.12355 4.67687 6.87694 4.72136 6.63644C4.82376 6.08287 5.24911 5.60918 6.09981 4.66181L6.09981 4.66181C6.53915 4.17255 6.75882 3.92792 7.03346 3.76904C7.15463 3.69895 7.28282 3.64177 7.41593 3.59844C7.71764 3.50024 8.04642 3.50024 8.70399 3.50024H11.25V2.00024C11.25 1.58603 11.5858 1.25024 12 1.25024C12.4142 1.25024 12.75 1.58603 12.75 2.00024V3.50024H15.5C16.9045 3.50024 17.6067 3.50024 18.1111 3.8373C18.3295 3.98322 18.517 4.17072 18.6629 4.3891C19 4.89355 19 5.59578 19 7.00024C19 8.40471 19 9.10694 18.6629 9.61138C18.517 9.82977 18.3295 10.0173 18.1111 10.1632Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSignpost as IconComponent).keywords = [
  "signpost",
  "guidepost",
  "signage",
  "milestone",
  "beacon",
  "landmark",
  "hatch",
  "guide",
  "billboard",
  "panel",
];

export default IconSignpost as IconComponent;
