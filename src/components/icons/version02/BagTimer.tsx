import { FC } from "react";

const IconBagTimer: FC<IconProps> = ({
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
            d="M12.6699 19C14.8791 19 16.6699 17.2091 16.6699 15C16.6699 12.7909 14.8791 11 12.6699 11C10.4608 11 8.66992 12.7909 8.66992 15C8.66992 17.2091 10.4608 19 12.6699 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.9199 13.75V14.68C12.9199 15.03 12.7399 15.36 12.4299 15.54L11.6699 16"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66975 22H15.6697C19.6897 22 20.4097 20.39 20.6197 18.43L21.3697 12.43C21.6397 9.99 20.9397 8 16.6697 8H8.66975C4.39975 8 3.69975 9.99 3.96975 12.43L4.71975 18.43C4.92975 20.39 5.64975 22 9.66975 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 7.67001V6.70001C8.16992 4.45001 9.97992 2.24001 12.2299 2.03001C14.9099 1.77001 17.1699 3.88001 17.1699 6.51001V7.89001"
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
            d="M16.8603 8.8599C16.4703 8.8599 16.1603 8.5499 16.1603 8.1599V6.8799C16.1603 5.8999 15.7403 4.9599 15.0203 4.2999C14.2803 3.6299 13.3303 3.3199 12.3303 3.4099C10.6503 3.5699 9.18027 5.2799 9.18027 7.0599V7.9599C9.18027 8.3499 8.87027 8.6599 8.48027 8.6599C8.09027 8.6599 7.78027 8.3499 7.78027 7.9599V7.0599C7.78027 4.5599 9.80027 2.2499 12.1903 2.0199C13.5803 1.8899 14.9203 2.3299 15.9503 3.2699C16.9703 4.1899 17.5503 5.5099 17.5503 6.8799V8.1599C17.5503 8.5499 17.2403 8.8599 16.8603 8.8599Z"
            fill="currentColor"
          />
          <path
            d="M20.6297 8.96008C19.7897 8.03008 18.4097 7.58008 16.3897 7.58008H8.94967C6.92967 7.58008 5.54967 8.03008 4.70967 8.96008C3.73967 10.0401 3.76967 11.4801 3.87967 12.4801L4.57967 18.0501C4.78967 20.0001 5.57967 22.0001 9.87967 22.0001H15.4597C19.7597 22.0001 20.5497 20.0001 20.7597 18.0601L21.4597 12.4701C21.5697 11.4801 21.5997 10.0401 20.6297 8.96008ZM12.6697 18.5801C10.5797 18.5801 8.87967 16.8801 8.87967 14.7901C8.87967 12.7001 10.5797 11.0001 12.6697 11.0001C14.7597 11.0001 16.4597 12.7001 16.4597 14.7901C16.4597 16.8801 14.7597 18.5801 12.6697 18.5801Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.4599 14.79C16.4599 16.88 14.7599 18.58 12.6699 18.58C10.5799 18.58 8.87988 16.88 8.87988 14.79C8.87988 12.7 10.5799 11 12.6699 11C14.7599 11 16.4599 12.7 16.4599 14.79Z"
            fill="currentColor"
          />
          <path
            d="M11.6698 16.5801C11.4198 16.5801 11.1698 16.4501 11.0298 16.2201C10.8198 15.8701 10.9298 15.4001 11.2898 15.1901L12.1798 14.6601V13.5801C12.1798 13.1701 12.5198 12.8301 12.9298 12.8301C13.3398 12.8301 13.6698 13.1601 13.6698 13.5801V15.0801C13.6698 15.3401 13.5298 15.5901 13.3098 15.7201L12.0598 16.4701C11.9398 16.5401 11.7998 16.5801 11.6698 16.5801Z"
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
            d="M20.6297 8.9599C19.9597 8.2199 18.9497 7.7899 17.5497 7.6399V6.8799C17.5497 5.5099 16.9697 4.1899 15.9497 3.2699C14.9197 2.3299 13.5797 1.8899 12.1897 2.0199C9.79967 2.2499 7.78967 4.5599 7.78967 7.0599V7.6399C6.38967 7.7899 5.37967 8.2199 4.70967 8.9599C3.73967 10.0399 3.76967 11.4799 3.87967 12.4799L4.57967 18.0499C4.78967 19.9999 5.57967 21.9999 9.87967 21.9999H15.4597C19.7597 21.9999 20.5497 19.9999 20.7597 18.0599L21.4597 12.4699C21.5697 11.4799 21.5997 10.0399 20.6297 8.9599ZM12.3297 3.4099C13.3297 3.3199 14.2797 3.6299 15.0197 4.2999C15.7497 4.9599 16.1597 5.8999 16.1597 6.8799V7.5799H9.17967V7.0599C9.17967 5.2799 10.6497 3.5699 12.3297 3.4099ZM12.6697 18.5799C10.5797 18.5799 8.87967 16.8799 8.87967 14.7899C8.87967 12.6999 10.5797 10.9999 12.6697 10.9999C14.7597 10.9999 16.4597 12.6999 16.4597 14.7899C16.4597 16.8799 14.7597 18.5799 12.6697 18.5799Z"
            fill="currentColor"
          />
          <path
            d="M11.6698 16.5801C11.4198 16.5801 11.1698 16.4501 11.0298 16.2201C10.8198 15.8701 10.9298 15.4001 11.2898 15.1901L12.1798 14.6601V13.5801C12.1798 13.1701 12.5198 12.8301 12.9298 12.8301C13.3398 12.8301 13.6698 13.1601 13.6698 13.5801V15.0801C13.6698 15.3401 13.5298 15.5901 13.3098 15.7201L12.0598 16.4701C11.9398 16.5401 11.7998 16.5801 11.6698 16.5801Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagTimer as IconComponent).keywords = [
  "bag",
  "timer",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb",
];

export default IconBagTimer as IconComponent;
