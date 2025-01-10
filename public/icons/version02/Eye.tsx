import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconEye: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.2498 11.9999C16.2498 13.9799 14.6498 15.5799 12.6698 15.5799C10.6898 15.5799 9.08984 13.9799 9.08984 11.9999C9.08984 10.0199 10.6898 8.41992 12.6698 8.41992C14.6498 8.41992 16.2498 10.0199 16.2498 11.9999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6698 20.2702C16.1998 20.2702 19.4898 18.1902 21.7798 14.5902C22.6798 13.1802 22.6798 10.8102 21.7798 9.40021C19.4898 5.80021 16.1998 3.72021 12.6698 3.72021C9.13977 3.72021 5.84977 5.80021 3.55977 9.40021C2.65977 10.8102 2.65977 13.1802 3.55977 14.5902C5.84977 18.1902 9.13977 20.2702 12.6698 20.2702Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.9199 9.15018C19.6099 5.52017 16.2299 3.43018 12.6699 3.43018C10.8899 3.43018 9.15992 3.95018 7.57992 4.92018C5.99992 5.90018 4.57992 7.33017 3.41992 9.15018C2.41992 10.7202 2.41992 13.2702 3.41992 14.8402C5.72992 18.4802 9.10992 20.5602 12.6699 20.5602C14.4499 20.5602 16.1799 20.0402 17.7599 19.0702C19.3399 18.0902 20.7599 16.6602 21.9199 14.8402C22.9199 13.2802 22.9199 10.7202 21.9199 9.15018ZM12.6699 16.0402C10.4299 16.0402 8.62992 14.2302 8.62992 12.0002C8.62992 9.77018 10.4299 7.96018 12.6699 7.96018C14.9099 7.96018 16.7099 9.77018 16.7099 12.0002C16.7099 14.2302 14.9099 16.0402 12.6699 16.0402Z"
            fill="currentColor"
          />
          <path
            d="M12.6698 9.14014C11.0998 9.14014 9.81982 10.4201 9.81982 12.0001C9.81982 13.5701 11.0998 14.8501 12.6698 14.8501C14.2398 14.8501 15.5298 13.5701 15.5298 12.0001C15.5298 10.4301 14.2398 9.14014 12.6698 9.14014Z"
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
            d="M21.9199 9.15018C19.6099 5.52017 16.2299 3.43018 12.6699 3.43018C10.8899 3.43018 9.15992 3.95018 7.57992 4.92018C5.99992 5.90018 4.57992 7.33017 3.41992 9.15018C2.41992 10.7202 2.41992 13.2702 3.41992 14.8402C5.72992 18.4802 9.10992 20.5602 12.6699 20.5602C14.4499 20.5602 16.1799 20.0402 17.7599 19.0702C19.3399 18.0902 20.7599 16.6602 21.9199 14.8402C22.9199 13.2802 22.9199 10.7202 21.9199 9.15018ZM12.6699 16.0402C10.4299 16.0402 8.62992 14.2302 8.62992 12.0002C8.62992 9.77018 10.4299 7.96018 12.6699 7.96018C14.9099 7.96018 16.7099 9.77018 16.7099 12.0002C16.7099 14.2302 14.9099 16.0402 12.6699 16.0402Z"
            fill="currentColor"
          />
          <path
            d="M12.6698 9.14014C11.0998 9.14014 9.81982 10.4201 9.81982 12.0001C9.81982 13.5701 11.0998 14.8501 12.6698 14.8501C14.2398 14.8501 15.5298 13.5701 15.5298 12.0001C15.5298 10.4301 14.2398 9.14014 12.6698 9.14014Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEye as IconComponentType).keywords = [
  "eye",
  "optic",
  "heart",
  "eyeball",
  "oculus",
  "peeper",
  "middle",
  "center",
  "centre",
  "ocular",
];

export default IconEye as IconComponentType;
