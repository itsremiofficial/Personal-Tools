import { FC } from "react";

const IconSSDRound: FC<IconProps> = ({
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
            d="M21.5534 15.4813L19 5.11765C18.5 3.52941 17.6046 3 16.5 3H7.5C6.39543 3 5.5 3.52941 5 5.11765L2.44664 15.4813M21.5534 15.4813C20.9538 14.3515 19.8111 13.5882 18.5 13.5882H5.5C4.18893 13.5882 3.04623 14.3515 2.44664 15.4813M21.5534 15.4813C21.8378 16.0172 22 16.6356 22 17.2941C22 19.3408 20.433 21 18.5 21H5.5C3.567 21 2 19.3408 2 17.2941C2 16.6356 2.16221 16.0172 2.44664 15.4813"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 17V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.5 17V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 17V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.5 17V18"
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
            d="M5.5 13.5882H18.5C19.8111 13.5882 20.9538 14.3515 21.5534 15.4813L19 5.11765C18.5 3.52941 17.6046 3 16.5 3H7.5C6.39543 3 5.5 3.52941 5 5.11765L2.44664 15.4813C3.04623 14.3515 4.18893 13.5882 5.5 13.5882Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 13.5879H5.5C4.18893 13.5879 3.04623 14.3512 2.44664 15.4809C2.16221 16.0169 2 16.6353 2 17.2938C2 19.3405 3.567 20.9997 5.5 20.9997H18.5C20.433 20.9997 22 19.3405 22 17.2938C22 16.6353 21.8378 16.0169 21.5534 15.4809C20.9538 14.3512 19.8111 13.5879 18.5 13.5879ZM18 16.25C18.4142 16.25 18.75 16.5858 18.75 17V18C18.75 18.4142 18.4142 18.75 18 18.75C17.5858 18.75 17.25 18.4142 17.25 18V17C17.25 16.5858 17.5858 16.25 18 16.25ZM16.25 17C16.25 16.5858 15.9142 16.25 15.5 16.25C15.0858 16.25 14.75 16.5858 14.75 17V18C14.75 18.4142 15.0858 18.75 15.5 18.75C15.9142 18.75 16.25 18.4142 16.25 18V17ZM13 16.25C13.4142 16.25 13.75 16.5858 13.75 17V18C13.75 18.4142 13.4142 18.75 13 18.75C12.5858 18.75 12.25 18.4142 12.25 18V17C12.25 16.5858 12.5858 16.25 13 16.25ZM11.25 17C11.25 16.5858 10.9142 16.25 10.5 16.25C10.0858 16.25 9.75 16.5858 9.75 17V18C9.75 18.4142 10.0858 18.75 10.5 18.75C10.9142 18.75 11.25 18.4142 11.25 18V17Z"
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
            d="M18.8421 13.3763C19.9675 13.3763 20.9827 13.8287 21.7332 14.5574L19.3684 5.17819C18.8421 3.54455 17.8995 3 16.7368 3H7.26316C6.10045 3 5.15789 3.54455 4.63158 5.17819L2.26675 14.5574C3.01734 13.8287 4.03248 13.3763 5.15789 13.3763H18.8421Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.15789 14.4049C3.991 14.4049 2.95755 15.0684 2.40873 16.0789C2.14918 16.5568 2 17.1102 2 17.7025C2 19.5517 3.44178 21 5.15789 21H18.8421C20.5582 21 22 19.5517 22 17.7025C22 17.1102 21.8508 16.5568 21.5913 16.0789C21.0425 15.0684 20.009 14.4049 18.8421 14.4049H5.15789ZM11.2105 17.4003C11.2105 16.9742 10.8571 16.6288 10.4211 16.6288C9.98504 16.6288 9.63158 16.9742 9.63158 17.4003V18.4289C9.63158 18.8549 9.98504 19.2003 10.4211 19.2003C10.8571 19.2003 11.2105 18.8549 11.2105 18.4289V17.4003ZM13.0526 16.6288C13.4886 16.6288 13.8421 16.9742 13.8421 17.4003V18.4289C13.8421 18.8549 13.4886 19.2003 13.0526 19.2003C12.6166 19.2003 12.2632 18.8549 12.2632 18.4289V17.4003C12.2632 16.9742 12.6166 16.6288 13.0526 16.6288ZM16.4737 17.4003C16.4737 16.9742 16.1202 16.6288 15.6842 16.6288C15.2482 16.6288 14.8947 16.9742 14.8947 17.4003V18.4289C14.8947 18.8549 15.2482 19.2003 15.6842 19.2003C16.1202 19.2003 16.4737 18.8549 16.4737 18.4289V17.4003ZM19.1053 17.4003C19.1053 16.9742 18.7518 16.6288 18.3158 16.6288C17.8798 16.6288 17.5263 16.9742 17.5263 17.4003V18.4289C17.5263 18.8549 17.8798 19.2003 18.3158 19.2003C18.7518 19.2003 19.1053 18.8549 19.1053 18.4289V17.4003Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSSDRound as IconComponent).keywords = [
  "round",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
];

export default IconSSDRound as IconComponent;
