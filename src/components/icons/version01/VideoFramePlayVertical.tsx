import { FC } from "react";

const IconVideoFramePlayVertical: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.75 2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5H17.75ZM16.25 21.5C16.25 21.9142 16.5858 22.25 17 22.25C17.4142 22.25 17.75 21.9142 17.75 21.5H16.25ZM7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5H7.75ZM6.25 21.5C6.25 21.9142 6.58579 22.25 7 22.25C7.41421 22.25 7.75 21.9142 7.75 21.5H6.25ZM17 11.25C16.5858 11.25 16.25 11.5858 16.25 12C16.25 12.4142 16.5858 12.75 17 12.75V11.25ZM22 12.75C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25V12.75ZM2 11.25C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75V11.25ZM7 12.75C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25V12.75ZM2.5 6.25C2.08579 6.25 1.75 6.58579 1.75 7C1.75 7.41421 2.08579 7.75 2.5 7.75V6.25ZM7 7.75C7.41421 7.75 7.75 7.41421 7.75 7C7.75 6.58579 7.41421 6.25 7 6.25V7.75ZM17 6.25C16.5858 6.25 16.25 6.58579 16.25 7C16.25 7.41421 16.5858 7.75 17 7.75V6.25ZM21.5 7.75C21.9142 7.75 22.25 7.41421 22.25 7C22.25 6.58579 21.9142 6.25 21.5 6.25V7.75ZM17 16.25C16.5858 16.25 16.25 16.5858 16.25 17C16.25 17.4142 16.5858 17.75 17 17.75V16.25ZM21.5 17.75C21.9142 17.75 22.25 17.4142 22.25 17C22.25 16.5858 21.9142 16.25 21.5 16.25V17.75ZM2.5 16.25C2.08579 16.25 1.75 16.5858 1.75 17C1.75 17.4142 2.08579 17.75 2.5 17.75V16.25ZM7 17.75C7.41421 17.75 7.75 17.4142 7.75 17C7.75 16.5858 7.41421 16.25 7 16.25V17.75ZM16.25 2.5V21.5H17.75V2.5H16.25ZM6.25 2.5V21.5H7.75V2.5H6.25ZM17 12.75H22V11.25H17V12.75ZM2 12.75H7V11.25H2V12.75ZM2.5 7.75H7V6.25H2.5V7.75ZM17 7.75H21.5V6.25H17V7.75ZM17 17.75H21.5V16.25H17V17.75ZM2.5 17.75H7V16.25H2.5V17.75Z"
            fill="currentColor"
          />
          <path
            d="M12.4112 10.4043L12.8295 9.78187V9.78187L12.4112 10.4043ZM12.4112 13.5957L12.8295 14.2181L12.8295 14.2181L12.4112 13.5957ZM11.9928 11.0268C12.5436 11.397 12.8823 11.6272 13.0946 11.8228C13.1937 11.9141 13.232 11.9688 13.2457 11.9934C13.2514 12.0038 13.2517 12.0067 13.2508 12.0036C13.2499 12.0002 13.25 11.998 13.25 12H14.75C14.75 11.4337 14.445 11.0273 14.111 10.7196C13.7937 10.4273 13.338 10.1236 12.8295 9.78187L11.9928 11.0268ZM12.8295 14.2181C13.338 13.8764 13.7937 13.5727 14.111 13.2804C14.445 12.9727 14.75 12.5663 14.75 12H13.25C13.25 12.002 13.2499 11.9998 13.2508 11.9964C13.2517 11.9933 13.2514 11.9962 13.2457 12.0066C13.232 12.0312 13.1937 12.0859 13.0946 12.1772C12.8823 12.3728 12.5436 12.603 11.9928 12.9732L12.8295 14.2181ZM10.75 12C10.75 11.262 10.7515 10.7829 10.794 10.4509C10.8386 10.1022 10.9036 10.1531 10.8142 10.2123L9.98642 8.96138C9.49674 9.28543 9.36158 9.82686 9.3061 10.2605C9.24851 10.7108 9.25 11.3059 9.25 12H10.75ZM12.8295 9.78187C12.3159 9.43668 11.8541 9.12343 11.4681 8.94491C11.0758 8.76347 10.5194 8.60864 9.98642 8.96138L10.8142 10.2123C10.6815 10.3001 10.5938 10.1932 10.8384 10.3063C11.0893 10.4224 11.4327 10.6504 11.9928 11.0268L12.8295 9.78187ZM9.25 12C9.25 12.6941 9.24851 13.2892 9.3061 13.7395C9.36158 14.1731 9.49674 14.7146 9.98642 15.0386L10.8142 13.7877C10.9036 13.8469 10.8386 13.8978 10.794 13.5491C10.7515 13.2171 10.75 12.738 10.75 12H9.25ZM11.9928 12.9732C11.4327 13.3496 11.0893 13.5776 10.8384 13.6937C10.5938 13.8068 10.6815 13.6999 10.8142 13.7877L9.98642 15.0386C10.5194 15.3914 11.0758 15.2365 11.4681 15.0551C11.8541 14.8766 12.3159 14.5633 12.8295 14.2181L11.9928 12.9732Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
            fill="currentColor"
          />
          <path
            d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 6.25004L2.2214 6.25004C2.41566 5.02731 2.7802 4.14854 3.46423 3.46451C4.14826 2.78047 5.02703 2.41594 6.24976 2.22168V6.25004Z"
            fill="currentColor"
          />
          <path
            d="M21.7781 6.25004C21.5839 5.02731 21.2193 4.14854 20.5353 3.46451C19.8513 2.78047 18.9725 2.41594 17.7498 2.22168V6.25004H21.7781Z"
            fill="currentColor"
          />
          <path
            d="M21.9995 11.25C21.9982 9.88386 21.9894 8.73121 21.931 7.75004H17.7498V11.25H21.9995Z"
            fill="currentColor"
          />
          <path
            d="M20.5353 20.5356C19.8513 21.2196 18.9725 21.5841 17.7498 21.7784V17.75H21.7781C21.5839 18.9728 21.2193 19.8515 20.5353 20.5356Z"
            fill="currentColor"
          />
          <path
            d="M21.9995 12.75C21.9982 14.1162 21.9894 15.2689 21.931 16.25H17.7498V12.75H21.9995Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 17.75L6.24976 21.7784C5.02703 21.5841 4.14826 21.2196 3.46423 20.5356C2.78019 19.8515 2.41566 18.9728 2.2214 17.75H6.24976Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 16.25H2.0685C2.01015 15.2689 2.00133 14.1162 2 12.75H6.24976V16.25Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 11.25H2C2.00133 9.88386 2.01015 8.73121 2.0685 7.75004L6.24976 7.75004V11.25Z"
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
            d="M11.9998 2C13.7002 2 15.094 2 16.2498 2.06874L16.2498 21.9313C15.094 22 13.7002 22 11.9998 22C10.2993 22 8.90556 22 7.74976 21.9313L7.74977 2.06874C8.90556 2 10.2993 2 11.9998 2ZM12.4112 10.4043C13.4704 11.1162 14 11.4722 14 12C14 12.5278 13.4704 12.8838 12.4112 13.5957C11.3375 14.3173 10.8006 14.6781 10.4003 14.4132C10 14.1483 10 13.4322 10 12C10 10.5678 10 9.85174 10.4003 9.58682C10.8006 9.3219 11.3375 9.68271 12.4112 10.4043Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 6.25L2.2214 6.25C2.41566 5.02727 2.7802 4.1485 3.46423 3.46447C4.14826 2.78043 5.02703 2.4159 6.24976 2.22164V6.25Z"
            fill="currentColor"
          />
          <path
            d="M21.7781 6.25C21.5839 5.02727 21.2193 4.1485 20.5353 3.46447C19.8513 2.78043 18.9725 2.4159 17.7498 2.22164V6.25H21.7781Z"
            fill="currentColor"
          />
          <path
            d="M21.9995 11.25C21.9982 9.88382 21.9894 8.73117 21.931 7.75H17.7498V11.25H21.9995Z"
            fill="currentColor"
          />
          <path
            d="M20.5353 20.5355C19.8513 21.2196 18.9725 21.5841 17.7498 21.7784V17.75H21.7781C21.5839 18.9727 21.2193 19.8515 20.5353 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M21.9995 12.75C21.9982 14.1162 21.9894 15.2688 21.931 16.25H17.7498V12.75H21.9995Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 17.75L6.24976 21.7784C5.02703 21.5841 4.14826 21.2196 3.46423 20.5355C2.78019 19.8515 2.41566 18.9727 2.2214 17.75H6.24976Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 16.25H2.0685C2.01015 15.2688 2.00133 14.1162 2 12.75H6.24976V16.25Z"
            fill="currentColor"
          />
          <path
            d="M6.24976 11.25H2C2.00133 9.88382 2.01015 8.73117 2.0685 7.75L6.24976 7.75V11.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoFramePlayVertical as IconComponent).keywords = [
  "video",
  "frame",
  "play",
  "vertical",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
];

export default IconVideoFramePlayVertical as IconComponent;
