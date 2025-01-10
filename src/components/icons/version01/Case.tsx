import { FC } from "react";

const IconCase: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M3 12.0006C3 15.7718 3 19.6575 4.31802 20.829C5.63604 22.0006 7.75736 22.0006 12 22.0006C16.2426 22.0006 18.364 22.0006 19.682 20.829C21 19.6575 21 15.7718 21 12.0006"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.6603 14.2025L20.6676 12.4003C21.2631 12.2217 21.5609 12.1324 21.7498 11.9183C21.7866 11.8766 21.8199 11.8319 21.8492 11.7846C22 11.5421 22 11.2313 22 10.6095C22 8.15938 22 6.93431 21.327 6.1072C21.1977 5.94824 21.0524 5.80294 20.8934 5.67359C20.0663 5.00061 18.8412 5.00061 16.3911 5.00061H7.60893C5.15877 5.00061 3.9337 5.00061 3.10659 5.67359C2.94763 5.80294 2.80233 5.94824 2.67298 6.1072C2 6.93431 2 8.15938 2 10.6095C2 11.2313 2 11.5421 2.15078 11.7846C2.18015 11.8319 2.21341 11.8766 2.25021 11.9183C2.43915 12.1324 2.7369 12.2217 3.3324 12.4003L9.33968 14.2025"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.5 5.00061C7.32344 4.97974 8.15925 4.45552 8.43944 3.68093C8.44806 3.6571 8.4569 3.6306 8.47457 3.57759L8.50023 3.50061C8.54241 3.37405 8.56351 3.31075 8.58608 3.25461C8.87427 2.53773 9.54961 2.05098 10.3208 2.00427C10.3812 2.00061 10.4479 2.00061 10.5814 2.00061H13.4191C13.5525 2.00061 13.6192 2.00061 13.6796 2.00427C14.4508 2.05098 15.1262 2.53773 15.4144 3.25461C15.4369 3.31075 15.458 3.37404 15.5002 3.50061L15.5259 3.57759C15.5435 3.63029 15.5524 3.65717 15.561 3.68093C15.8412 4.45552 16.6766 4.97974 17.5 5.00061"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14 12.5006H10C9.72386 12.5006 9.5 12.7245 9.5 13.0006V15.1621C9.5 15.3665 9.62448 15.5504 9.8143 15.6263L10.5144 15.9064C11.4681 16.2878 12.5319 16.2878 13.4856 15.9064L14.1857 15.6263C14.3755 15.5504 14.5 15.3665 14.5 15.1621V13.0006C14.5 12.7245 14.2761 12.5006 14 12.5006Z"
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
            d="M10.5608 2.25049C10.4473 2.25047 10.359 2.25046 10.2754 2.25552C9.21496 2.31974 8.28637 2.98904 7.89011 3.97474C7.85817 4.05418 7.82978 4.13912 7.79183 4.25299C7.70848 4.47733 7.51722 4.73247 7.24937 4.93634C7.21955 4.95904 7.18962 4.98048 7.15967 5.00066L9.10166 5.00049C9.13053 4.94093 9.15714 4.88036 9.18129 4.81891L9.18284 4.81541L9.18701 4.80551L9.19188 4.79338L9.19646 4.78142L9.2001 4.77147L9.20188 4.76646L9.20612 4.75422L9.20995 4.74292L9.21204 4.73666L9.21477 4.72832L9.21701 4.72128L9.2188 4.71551C9.25763 4.59921 9.27031 4.56295 9.28185 4.53424C9.46197 4.08619 9.88406 3.78197 10.3661 3.75278C10.3983 3.75082 10.4379 3.75049 10.5813 3.75049H13.419C13.5624 3.75049 13.6019 3.75082 13.6342 3.75278C14.1162 3.78197 14.5383 4.08619 14.7184 4.53424C14.7298 4.56253 14.7418 4.59746 14.7812 4.71547L14.783 4.7212L14.7852 4.72827L14.788 4.73662L14.7901 4.74288L14.7939 4.75415L14.7981 4.76637L14.7999 4.77138L14.8035 4.7813L14.8081 4.7932L14.8129 4.8052L14.817 4.81498L14.8186 4.8186C14.8428 4.88016 14.8694 4.94083 14.8984 5.00049L16.8402 5.00066C16.8103 4.98049 16.7804 4.95906 16.7506 4.93638C16.4828 4.73254 16.2916 4.47741 16.2082 4.25303L16.2052 4.24396C16.1693 4.13629 16.1414 4.05243 16.1101 3.97474C15.7139 2.98904 14.7853 2.31974 13.7248 2.25552C13.6413 2.25046 13.5529 2.25047 13.4394 2.25049H10.5608Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1923 5.00049H6.80765C5.12027 5.00049 4.27658 5.00049 3.63268 5.3302C3.07242 5.61708 2.61659 6.07291 2.32971 6.63316C2 7.27707 2 8.12076 2 9.80814C2 10.2371 2 10.4516 2.07336 10.6324C2.13743 10.7903 2.24079 10.9292 2.37363 11.036C2.52574 11.1582 2.73118 11.2198 3.14206 11.3431L8.5 12.9505V14.1632C8.5 14.9288 8.95939 15.6346 9.68682 15.9301L10.2469 16.1577C11.3719 16.6148 12.6281 16.6148 13.7531 16.1577L14.3132 15.9301C15.0406 15.6346 15.5 14.9288 15.5 14.1632V12.9505L20.8579 11.3431C21.2688 11.2198 21.4743 11.1582 21.6264 11.036C21.7592 10.9292 21.8626 10.7903 21.9266 10.6324C22 10.4516 22 10.2371 22 9.80814C22 8.12076 22 7.27707 21.6703 6.63316C21.3834 6.07291 20.9276 5.61708 20.3673 5.3302C19.7234 5.00049 18.8797 5.00049 17.1923 5.00049ZM13.6 12.0005H10.4C10.1791 12.0005 10 12.1824 10 12.4068V14.1632C10 14.3293 10.0996 14.4787 10.2514 14.5404L10.8116 14.768C11.5745 15.078 12.4255 15.078 13.1885 14.768L13.7486 14.5404C13.9004 14.4787 14 14.3293 14 14.1632V12.4068C14 12.1824 13.8209 12.0005 13.6 12.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3 11.3003C3.04446 11.3138 3.09172 11.3279 3.14206 11.3431L8.5 12.9504V14.1631C8.5 14.9287 8.95939 15.6345 9.68682 15.9301L10.2469 16.1576C11.3719 16.6147 12.6281 16.6147 13.7531 16.1576L14.3132 15.9301C15.0406 15.6345 15.5 14.9287 15.5 14.1631V12.9504L20.8579 11.3431C20.9083 11.328 20.9555 11.3138 21 11.3003V12.3004C20.9991 15.9757 20.9651 19.6884 19.682 20.8289C18.3639 22.0005 16.2426 22.0005 12 22.0005C7.75733 22.0005 5.63601 22.0005 4.318 20.8289C3.03489 19.6884 3.0009 15.9757 3 12.3004V11.3003Z"
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
            d="M10.2755 2.25552C10.359 2.25046 10.4474 2.25047 10.5609 2.25049H13.4395C13.553 2.25047 13.6413 2.25046 13.7249 2.25552C14.7853 2.31974 15.7139 2.98904 16.1102 3.97474C16.1414 4.05243 16.1694 4.13629 16.2052 4.24396L16.2083 4.25303C16.2916 4.47741 16.4829 4.73254 16.7506 4.93638C16.7804 4.95906 16.8104 4.98049 16.8403 5.00066C18.9942 5.00317 20.1185 5.04294 20.8934 5.67347C21.0524 5.80282 21.1977 5.94811 21.327 6.10708C22 6.93419 22 8.15926 22 10.6094C22 11.2311 22 11.542 21.8492 11.7845C21.8199 11.8317 21.7866 11.8764 21.7498 11.9181C21.5609 12.1322 21.2631 12.2216 20.6676 12.4002L16 13.8005V13.0005C16 11.8959 15.1046 11.0005 14 11.0005H10C8.89543 11.0005 8 11.8959 8 13.0005V13.8005L3.3324 12.4002C2.7369 12.2216 2.43915 12.1322 2.25021 11.9181C2.21341 11.8764 2.18015 11.8317 2.15078 11.7845C2 11.542 2 11.2311 2 10.6094C2 8.15926 2 6.93419 2.67298 6.10708C2.80233 5.94811 2.94763 5.80282 3.10659 5.67347C3.88153 5.04294 5.00582 5.00317 7.15973 5.00066C7.18968 4.98048 7.21961 4.95904 7.24943 4.93634C7.51728 4.73247 7.70854 4.47733 7.79189 4.25299C7.82984 4.13912 7.85823 4.05418 7.89017 3.97474C8.28643 2.98904 9.21502 2.31974 10.2755 2.25552ZM14.8187 4.8186C14.8429 4.88016 14.8695 4.94083 14.8984 5.00049H9.10172C9.13059 4.94093 9.1572 4.88036 9.18135 4.81891L9.1829 4.81541L9.18707 4.80551L9.19194 4.79338L9.19652 4.78142L9.20016 4.77147L9.20194 4.76646L9.20618 4.75422L9.21001 4.74292L9.2121 4.73666L9.21483 4.72832L9.21707 4.72128L9.21886 4.71551C9.25769 4.59921 9.27037 4.56295 9.28191 4.53424C9.46203 4.08619 9.88412 3.78197 10.3661 3.75278C10.3984 3.75082 10.4379 3.75049 10.5813 3.75049H13.419C13.5624 3.75049 13.602 3.75082 13.6342 3.75278C14.1162 3.78197 14.5383 4.08619 14.7185 4.53424C14.7298 4.56253 14.7419 4.59746 14.7813 4.71547L14.783 4.7212L14.7853 4.72827L14.788 4.73662L14.7901 4.74288L14.7939 4.75415L14.7982 4.76637L14.7999 4.77138L14.8036 4.7813L14.8081 4.7932L14.813 4.8052L14.8171 4.81498L14.8187 4.8186ZM14 12.5005H10C9.72386 12.5005 9.5 12.7243 9.5 13.0005V15.162C9.5 15.3664 9.62448 15.5503 9.8143 15.6262L10.5144 15.9063C11.4681 16.2877 12.5319 16.2877 13.4856 15.9063L14.1857 15.6262C14.3755 15.5503 14.5 15.3664 14.5 15.162V13.0005C14.5 12.7243 14.2761 12.5005 14 12.5005ZM8.01076 15.3696L3.00586 13.8682C3.03595 16.9827 3.21789 19.851 4.31792 20.8288C5.63593 22.0003 7.75726 22.0003 11.9999 22.0003C16.2425 22.0003 18.3639 22.0003 19.6819 20.8288C20.7819 19.851 20.9638 16.9827 20.9939 13.8682L15.9892 15.3696C15.913 16.1023 15.4372 16.7412 14.7428 17.0189L14.0426 17.299C12.7314 17.8235 11.2686 17.8235 9.95735 17.299L9.25722 17.0189C8.5628 16.7412 8.08702 16.1023 8.01076 15.3696Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCase as IconComponent).keywords = [
  "case",
  "event",
  "cause",
  "subject",
  "example",
  "eccentric",
  "showcase",
  "type",
  "instance",
  "character",
];

export default IconCase as IconComponent;
