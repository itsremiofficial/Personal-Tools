import { FC } from "react";

const IconPen: FC<IconProps> = ({
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
            d="M15.2869 3.15202L14.3601 4.0789L5.83882 12.6001L5.83881 12.6002C5.26166 13.1773 4.97308 13.4659 4.7249 13.7841C4.43213 14.1594 4.18114 14.5656 3.97634 14.9953C3.80273 15.3595 3.67368 15.7467 3.41556 16.5211L2.32181 19.8023L2.05445 20.6044C1.92743 20.9855 2.0266 21.4056 2.31063 21.6896C2.59466 21.9736 3.01478 22.0728 3.39584 21.9458L4.19792 21.6784L7.47918 20.5847L7.47919 20.5847C8.25353 20.3266 8.6407 20.1975 9.00498 20.0239C9.43469 19.8191 9.84082 19.5681 10.2162 19.2753C10.5344 19.0272 10.8229 18.7386 11.4001 18.1615L11.4001 18.1614L19.9213 9.64018L20.8482 8.7133C22.3839 7.1776 22.3839 4.68773 20.8482 3.15202C19.3125 1.61632 16.8226 1.61632 15.2869 3.15202Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.36 4.07886C14.36 4.07886 14.4759 6.04848 16.2138 7.78638C17.9517 9.52427 19.9213 9.64013 19.9213 9.64013M4.19789 21.6784L2.32178 19.8023"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M20.8482 8.7133C22.3839 7.1776 22.3839 4.68773 20.8482 3.15202C19.3125 1.61632 16.8226 1.61632 15.2869 3.15202L14.3999 4.03906C14.412 4.07574 14.4246 4.11293 14.4377 4.1506C14.7628 5.08774 15.3763 6.31625 16.5303 7.47026C17.6843 8.62428 18.9128 9.23773 19.85 9.56286C19.8875 9.57587 19.9245 9.58841 19.961 9.60051L20.8482 8.7133Z"
            fill="currentColor"
          />
          <path
            d="M14.4386 4.00087L14.4004 4.03906C14.4125 4.07574 14.4251 4.11293 14.4382 4.1506C14.7633 5.08774 15.3768 6.31625 16.5308 7.47027C17.6848 8.62428 18.9133 9.23773 19.8505 9.56286C19.8876 9.57576 19.9243 9.5882 19.9606 9.6002L11.4001 18.1606C10.823 18.7378 10.5343 19.0264 10.2162 19.2746C9.84082 19.5673 9.43469 19.8183 9.00498 20.0231C8.6407 20.1967 8.25351 20.3258 7.47918 20.5839L3.39584 21.945C3.01478 22.072 2.59466 21.9729 2.31063 21.6888C2.0266 21.4048 1.92743 20.9847 2.05445 20.6036L3.41556 16.5203C3.67368 15.7459 3.80273 15.3588 3.97634 14.9945C4.18114 14.5648 4.43213 14.1587 4.7249 13.7833C4.97307 13.4651 5.26165 13.1765 5.83874 12.5994L14.4386 4.00087Z"
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
            d="M11.4001 18.1614L11.4001 18.1614L18.796 10.7656C17.7894 10.3466 16.5972 9.65845 15.4697 8.53092C14.342 7.40322 13.6537 6.21082 13.2348 5.20414L5.83882 12.6001L5.83879 12.6002C5.26166 13.1773 4.97307 13.4659 4.7249 13.7841C4.43213 14.1594 4.18114 14.5656 3.97634 14.9953C3.80273 15.3595 3.67368 15.7467 3.41556 16.5211L2.05445 20.6044C1.92743 20.9855 2.0266 21.4056 2.31063 21.6896C2.59466 21.9736 3.01478 22.0728 3.39584 21.9458L7.47918 20.5847C8.25351 20.3266 8.6407 20.1975 9.00498 20.0239C9.43469 19.8191 9.84082 19.5681 10.2162 19.2753C10.5343 19.0272 10.823 18.7386 11.4001 18.1614Z"
            fill="currentColor"
          />
          <path
            d="M20.8482 8.7133C22.3839 7.1776 22.3839 4.68773 20.8482 3.15202C19.3125 1.61632 16.8226 1.61632 15.2869 3.15202L14.3999 4.03906C14.4121 4.07574 14.4246 4.11293 14.4377 4.1506C14.7628 5.08774 15.3763 6.31625 16.5303 7.47026C17.6843 8.62428 18.9128 9.23773 19.85 9.56286C19.8875 9.57587 19.9245 9.58841 19.961 9.60051L20.8482 8.7133Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPen as IconComponent).keywords = [
  "pen",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
];

export default IconPen as IconComponent;
