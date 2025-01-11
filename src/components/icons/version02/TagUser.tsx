import { FC } from "react";

const IconTagUser: FC<IconProps> = ({
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
            d="M18.6699 18.86H17.9099C17.1099 18.86 16.3499 19.17 15.7899 19.73L14.0799 21.42C13.2999 22.19 12.0299 22.19 11.2499 21.42L9.53992 19.73C8.97992 19.17 8.20992 18.86 7.41992 18.86H6.66992C5.00992 18.86 3.66992 17.53 3.66992 15.89V4.97C3.66992 3.33 5.00992 2 6.66992 2H18.6699C20.3299 2 21.6699 3.33 21.6699 4.97V15.88C21.6699 17.52 20.3299 18.86 18.6699 18.86Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.74 8.95005C12.7 8.95005 12.64 8.95005 12.59 8.95005C11.54 8.91005 10.71 8.06005 10.71 7.00005C10.71 5.92005 11.58 5.05005 12.66 5.05005C13.74 5.05005 14.61 5.93005 14.61 7.00005C14.62 8.06005 13.79 8.92005 12.74 8.95005Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.91986 11.96C8.58986 12.85 8.58986 14.3 9.91986 15.19C11.4299 16.2 13.9099 16.2 15.4199 15.19C16.7499 14.3 16.7499 12.85 15.4199 11.96C13.9099 10.96 11.4399 10.96 9.91986 11.96Z"
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
            d="M12.74 8.95005C12.7 8.95005 12.64 8.95005 12.59 8.95005C11.54 8.91005 10.71 8.06005 10.71 7.00005C10.71 5.92005 11.58 5.05005 12.66 5.05005C13.74 5.05005 14.61 5.93005 14.61 7.00005C14.62 8.06005 13.79 8.92005 12.74 8.95005Z"
            fill="currentColor"
          />
          <path
            d="M9.91986 11.96C8.58986 12.85 8.58986 14.3 9.91986 15.19C11.4299 16.2 13.9099 16.2 15.4199 15.19C16.7499 14.3 16.7499 12.85 15.4199 11.96C13.9099 10.96 11.4399 10.96 9.91986 11.96Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 2H6.66992C5.00992 2 3.66992 3.33 3.66992 4.97V15.88C3.66992 17.52 5.00992 18.85 6.66992 18.85H7.42992C8.22992 18.85 8.98992 19.16 9.54992 19.72L11.2599 21.41C12.0399 22.18 13.3099 22.18 14.0899 21.41L15.7999 19.72C16.3599 19.16 17.1299 18.85 17.9199 18.85H18.6699C20.3299 18.85 21.6699 17.52 21.6699 15.88V4.97C21.6699 3.33 20.3299 2 18.6699 2ZM12.6699 5.05C13.7499 5.05 14.6199 5.93 14.6199 7C14.6199 8.06 13.7799 8.91 12.7399 8.95C12.6999 8.95 12.6399 8.95 12.5899 8.95C11.5399 8.91 10.7099 8.06 10.7099 7C10.7199 5.93 11.5899 5.05 12.6699 5.05ZM15.4199 15.19C13.9099 16.2 11.4299 16.2 9.91992 15.19C8.58992 14.31 8.58992 12.85 9.91992 11.96C11.4399 10.95 13.9199 10.95 15.4199 11.96C16.7499 12.85 16.7499 14.3 15.4199 15.19Z"
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
            d="M18.6699 2H6.66992C5.00992 2 3.66992 3.33 3.66992 4.97V15.88C3.66992 17.52 5.00992 18.86 6.66992 18.86H7.42992C8.21992 18.86 8.98992 19.17 9.54992 19.73L11.2599 21.42C12.0399 22.19 13.2999 22.19 14.0799 21.42L15.7899 19.73C16.3499 19.17 17.1199 18.86 17.9099 18.86H18.6699C20.3299 18.86 21.6699 17.52 21.6699 15.88V4.97C21.6699 3.33 20.3299 2 18.6699 2ZM12.6699 5.55C13.7499 5.55 14.6199 6.43 14.6199 7.5C14.6199 8.56 13.7799 9.41 12.7399 9.45C12.6999 9.45 12.6399 9.45 12.5899 9.45C11.5399 9.41 10.7099 8.56 10.7099 7.5C10.7199 6.43 11.5899 5.55 12.6699 5.55ZM15.4199 14.69C13.9099 15.7 11.4299 15.7 9.91992 14.69C8.58992 13.81 8.58992 12.35 9.91992 11.46C11.4399 10.45 13.9199 10.45 15.4199 11.46C16.7499 12.35 16.7499 13.8 15.4199 14.69Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagUser as IconComponent).keywords = [
  "tag",
  "user",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
];

export default IconTagUser as IconComponent;