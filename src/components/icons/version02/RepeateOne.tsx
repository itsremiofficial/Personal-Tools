import { FC } from "react";

const IconRepeateOne: FC<IconProps> = ({
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
            d="M14.6702 3L17.1102 5.34003L9.16016 5.32001C5.59016 5.32001 2.66016 8.25003 2.66016 11.84C2.66016 13.63 3.39016 15.26 4.57016 16.44"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.67 21L8.22998 18.66L16.18 18.68C19.75 18.68 22.68 15.75 22.68 12.16C22.68 10.37 21.95 8.74 20.77 7.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.9199 14.67V9.33002L11.4199 11"
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
            d="M4.57993 17.18C4.38993 17.18 4.19993 17.11 4.04993 16.96C2.67993 15.58 1.91992 13.76 1.91992 11.83C1.91992 7.82 5.16992 4.55998 9.16992 4.55998L15.2399 4.58L14.1499 3.53997C13.8499 3.24997 13.8399 2.77997 14.1299 2.47997C14.4199 2.17997 14.8899 2.17001 15.1899 2.46001L17.6299 4.79997C17.8499 5.00997 17.9199 5.33998 17.8099 5.61998C17.6999 5.89998 17.4199 6.09001 17.1099 6.09001L9.15991 6.06999C5.98991 6.06999 3.40991 8.66001 3.40991 11.84C3.40991 13.37 4.00991 14.82 5.09991 15.91C5.38991 16.2 5.38991 16.68 5.09991 16.97C4.95991 17.11 4.76993 17.18 4.57993 17.18Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6698 21.75C10.4798 21.75 10.2998 21.6799 10.1498 21.5399L7.70984 19.2C7.48984 18.99 7.41982 18.66 7.52982 18.38C7.64982 18.1 7.92983 17.9499 8.22983 17.9099L16.1798 17.93C19.3498 17.93 21.9298 15.3399 21.9298 12.1599C21.9298 10.6299 21.3298 9.18 20.2398 8.09C19.9498 7.8 19.9498 7.32 20.2398 7.03C20.5298 6.74 21.0098 6.74 21.2998 7.03C22.6698 8.41 23.4298 10.2299 23.4298 12.1599C23.4298 16.1699 20.1798 19.43 16.1798 19.43L10.1098 19.4099L11.1998 20.45C11.4998 20.74 11.5098 21.21 11.2198 21.51C11.0598 21.67 10.8698 21.75 10.6698 21.75Z"
            fill="currentColor"
          />
          <path
            d="M12.9199 15.42C12.5099 15.42 12.1699 15.08 12.1699 14.67V11.28L11.9799 11.49C11.6999 11.8 11.2299 11.82 10.9199 11.55C10.6099 11.28 10.5899 10.8 10.8599 10.49L12.3599 8.82002C12.5699 8.59002 12.8999 8.51001 13.1899 8.62001C13.4799 8.73001 13.6699 9.01002 13.6699 9.32002V14.67C13.6699 15.09 13.3299 15.42 12.9199 15.42Z"
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
            d="M4.57992 17.18C4.38992 17.18 4.19992 17.11 4.04992 16.96C2.67992 15.58 1.91992 13.76 1.91992 11.83C1.91992 7.82 5.16992 4.56 9.16992 4.56L15.2399 4.58L14.1499 3.54C13.8499 3.25 13.8399 2.78 14.1299 2.48C14.4199 2.18 14.8899 2.17 15.1899 2.46L17.6299 4.8C17.8499 5.01 17.9199 5.34 17.8099 5.62C17.6999 5.9 17.4199 6.09 17.1099 6.09L9.16992 6.07C5.99992 6.07 3.41992 8.66 3.41992 11.84C3.41992 13.37 4.01992 14.82 5.10992 15.91C5.39992 16.2 5.39992 16.68 5.10992 16.97C4.95992 17.11 4.76992 17.18 4.57992 17.18Z"
            fill="currentColor"
          />
          <path
            d="M10.6698 21.75C10.4798 21.75 10.2998 21.68 10.1498 21.54L7.70982 19.2C7.48982 18.99 7.41982 18.66 7.52982 18.38C7.64982 18.1 7.92982 17.95 8.22982 17.91L16.1798 17.93C19.3498 17.93 21.9298 15.34 21.9298 12.16C21.9298 10.63 21.3298 9.18 20.2398 8.09C19.9498 7.8 19.9498 7.32 20.2398 7.03C20.5298 6.74 21.0098 6.74 21.2998 7.03C22.6698 8.41 23.4298 10.23 23.4298 12.16C23.4298 16.17 20.1798 19.43 16.1798 19.43L10.1098 19.41L11.1998 20.45C11.4998 20.74 11.5098 21.21 11.2198 21.51C11.0598 21.67 10.8698 21.75 10.6698 21.75Z"
            fill="currentColor"
          />
          <path
            d="M12.9199 15.42C12.5099 15.42 12.1699 15.08 12.1699 14.67V11.28L11.9799 11.49C11.6999 11.8 11.2299 11.82 10.9199 11.55C10.6099 11.28 10.5899 10.8 10.8599 10.49L12.3599 8.82C12.5699 8.59 12.8999 8.51 13.1899 8.62C13.4799 8.74 13.6699 9.01 13.6699 9.33V14.68C13.6699 15.09 13.3299 15.42 12.9199 15.42Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeateOne as IconComponent).keywords = [
  "repeate",
  "one",
  "combined",
  "united",
  "same",
  "unity",
  "unitary",
  "cardinal",
  "one and only",
  "extraordinary",
];

export default IconRepeateOne as IconComponent;
