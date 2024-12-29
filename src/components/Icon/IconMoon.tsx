import { FC } from "react";
import { IconProps } from "../../types/types";

const IconMoon: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          fill="none"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.02911 12.421C2.38911 17.571 6.75911 21.761 11.9891 21.991C15.6791 22.151 18.9791 20.431 20.9591 17.721C21.7791 16.611 21.3391 15.871 19.9691 16.121C19.2991 16.241 18.6091 16.291 17.8891 16.261C12.9991 16.061 8.99911 11.971 8.97911 7.14094C8.96911 5.84094 9.23911 4.61094 9.72911 3.49094C10.2691 2.25094 9.61911 1.66094 8.36911 2.19094C4.40911 3.86094 1.69911 7.85094 2.02911 12.421Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className={className}
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.00068 18.9994C9.00068 19.8394 9.13068 20.6594 9.37068 21.4194C5.53068 20.0894 2.63068 16.5594 2.33068 12.4294C2.03068 8.03938 4.56068 3.93938 8.65068 2.21938C9.71068 1.77938 10.2507 2.09938 10.4807 2.32938C10.7007 2.54938 11.0107 3.07938 10.5707 4.08938C10.1207 5.12938 9.90068 6.22938 9.90068 7.36938C9.91068 9.40938 10.7107 11.2994 12.0107 12.7494C10.1807 14.2094 9.00068 16.4694 9.00068 18.9994Z" />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
          />
        </svg>
      )}
    </>
  );
};

export default IconMoon;