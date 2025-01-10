import { FC } from "react";

const IconMouseCircle: FC<IconProps> = ({
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
            d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.5 10H15.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 10V6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.0128 2.03267L9.86335 1.29771L9.86335 1.29771L10.0128 2.03267ZM16.6941 2.16836C16.3221 1.98615 15.8728 2.13999 15.6906 2.51197C15.5084 2.88395 15.6622 3.33322 16.0342 3.51543L16.6941 2.16836ZM9.86335 1.29771C4.94577 2.29747 1.25 6.67467 1.25 11.9168H2.75C2.75 7.39347 5.93808 3.62641 10.1622 2.76764L9.86335 1.29771ZM1.25 11.9168C1.25 17.8939 6.05709 22.75 12 22.75V21.25C6.89721 21.25 2.75 17.0772 2.75 11.9168H1.25ZM12 22.75C17.9429 22.75 22.75 17.8939 22.75 11.9168H21.25C21.25 17.0772 17.1028 21.25 12 21.25V22.75ZM11.25 3.85022V8.89182H12.75V3.85022H11.25ZM22.75 11.9168C22.75 7.63103 20.2798 3.9248 16.6941 2.16836L16.0342 3.51543C19.1208 5.02741 21.25 8.22027 21.25 11.9168H22.75ZM10.1622 2.76764C10.6697 2.66445 11.25 3.09097 11.25 3.85022H12.75C12.75 2.38195 11.5214 0.960629 9.86335 1.29771L10.1622 2.76764Z"
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
            d="M2.53488 11.9161C2.53488 17.1834 6.77256 21.4534 12 21.4534C17.2274 21.4534 21.4651 17.1834 21.4651 11.9161C21.4651 8.14213 19.2898 4.87867 16.1303 3.33204C15.749 3.14542 15.5901 2.68271 15.7753 2.29856C15.9605 1.91442 16.4197 1.75429 16.801 1.94091C20.4689 3.73641 23 7.52765 23 11.9161C23 18.0375 18.0751 23 12 23C5.92487 23 1 18.0375 1 11.9161C1 6.54784 4.78661 2.07251 9.81487 1.05095C11.5037 0.707845 12.7674 2.15503 12.7674 3.66754V5.80249C14.6612 6.16648 16.0933 7.85287 16.0933 9.87826V13.9999C16.0933 16.2911 14.2608 18.1484 12.0002 18.1484C9.73974 18.1484 7.90723 16.2911 7.90723 13.9999V9.87826C7.90723 7.85305 9.339 6.16678 11.2326 5.80259V3.66754C11.2326 2.90228 10.6454 2.45995 10.1182 2.56704C5.79222 3.44593 2.53488 7.29856 2.53488 11.9161Z"
            fill="currentColor"
          />
          <path
            d="M7.90723 13.9537C7.90723 16.2449 9.73974 18.1023 12.0002 18.1023C14.2608 18.1023 16.0933 16.2449 16.0933 13.9537V10.5831H7.90723V13.9537Z"
            fill="currentColor"
          />
          <path
            d="M12.7677 9.33822H16.0214C15.7094 7.67081 14.4128 6.04579 12.7677 5.72949V9.33822Z"
            fill="currentColor"
          />
          <path
            d="M11.2328 9.33822V5.72949C9.58771 6.04579 8.29112 7.67081 7.97906 9.33822H11.2328Z"
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
            d="M12 21.4534C6.77256 21.4534 2.53488 17.1834 2.53488 11.9161C2.53488 7.29856 5.79222 3.44593 10.1182 2.56704C10.6454 2.45995 11.2326 2.90228 11.2326 3.66754V5.72967H12.7674V3.66754C12.7674 2.15503 11.5037 0.707845 9.81487 1.05095C4.78661 2.07251 1 6.54784 1 11.9161C1 18.0375 5.92487 23 12 23C18.0751 23 23 18.0375 23 11.9161C23 7.52765 20.4689 3.73641 16.801 1.94091C16.4197 1.75429 15.9605 1.91442 15.7753 2.29856C15.5901 2.68271 15.749 3.14542 16.1303 3.33204C19.2898 4.87867 21.4651 8.14213 21.4651 11.9161C21.4651 17.1834 17.2274 21.4534 12 21.4534Z"
            fill="currentColor"
          />
          <path
            d="M7.90698 13.9539C7.90698 16.2451 9.73949 18.1024 12 18.1024C14.2605 18.1024 16.093 16.2451 16.093 13.9539V10.5832H7.90698V13.9539Z"
            fill="currentColor"
          />
          <path
            d="M12.7674 9.33839H16.0212C15.7091 7.67099 14.4125 6.04596 12.7674 5.72967V9.33839Z"
            fill="currentColor"
          />
          <path
            d="M11.2326 9.33839V5.72967C9.58746 6.04596 8.29087 7.67099 7.97881 9.33839H11.2326Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMouseCircle as IconComponent).keywords = [
  "mouse",
  "circle",
  "creep",
  "pussyfoot",
  "sneak",
  "steal",
  "murine",
  "rodent",
  "rat",
  "weasel",
  "frog",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconMouseCircle as IconComponent;
