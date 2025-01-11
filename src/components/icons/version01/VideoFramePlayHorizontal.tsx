import { FC } from "react";

const IconVideoFramePlayHorizontal: FC<IconProps> = ({
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
            d="M12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.5 17L2.5 17M21.5 7L2.5 7M12 17V22M12 2V7M17 2.5V7M17 17V21.5M7 17L7 21.5M7 2.5V7"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z"
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
            d="M11.25 2C9.88386 2.00133 8.73121 2.01015 7.75004 2.0685V6.24976H11.25V2Z"
            fill="currentColor"
          />
          <path
            d="M6.25004 2.2214C5.02731 2.41566 4.14854 2.78019 3.46451 3.46423C2.78047 4.14826 2.41594 5.02703 2.22168 6.24976H6.25004V2.2214Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 6.24976C21.5841 5.02703 21.2196 4.14826 20.5356 3.46423C19.8515 2.78019 18.9728 2.41566 17.75 2.2214V6.24976H21.7784Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2C14.1162 2.00133 15.2689 2.01015 16.25 2.0685V6.24976H12.75V2Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 17.7498H17.75V21.7781C18.9728 21.5839 19.8515 21.2193 20.5356 20.5353C21.2196 19.8513 21.5841 18.9725 21.7784 17.7498Z"
            fill="currentColor"
          />
          <path
            d="M16.25 17.7498V21.931C15.2689 21.9894 14.1162 21.9982 12.75 21.9995V17.7498H16.25Z"
            fill="currentColor"
          />
          <path
            d="M11.25 21.9995V17.7498H7.75004L7.75004 21.931C8.73121 21.9894 9.88386 21.9982 11.25 21.9995Z"
            fill="currentColor"
          />
          <path
            d="M6.25004 17.7498L6.25004 21.7781C5.02731 21.5839 4.14854 21.2193 3.46451 20.5353C2.78047 19.8513 2.41594 18.9725 2.22168 17.7498H6.25004Z"
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
            d="M11.25 2C9.88382 2.00133 8.73117 2.01015 7.75 2.0685V6.24976H11.25V2Z"
            fill="currentColor"
          />
          <path
            d="M6.25 2.2214C5.02727 2.41566 4.1485 2.78019 3.46447 3.46423C2.78043 4.14826 2.4159 5.02703 2.22164 6.24976H6.25V2.2214Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11.9998C2 10.2993 2 8.90556 2.06874 7.74976L21.9313 7.74976C22 8.90556 22 10.2993 22 11.9998C22 13.7002 22 15.094 21.9313 16.2498L2.06874 16.2498C2 15.094 2 13.7002 2 11.9998ZM12.4112 10.4043C13.4704 11.1162 14 11.4722 14 12C14 12.5278 13.4704 12.8838 12.4112 13.5957C11.3375 14.3173 10.8006 14.6781 10.4003 14.4132C10 14.1483 10 13.4322 10 12C10 10.5678 10 9.85174 10.4003 9.58682C10.8006 9.3219 11.3375 9.68271 12.4112 10.4043Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 6.24976C21.5841 5.02703 21.2196 4.14826 20.5355 3.46423C19.8515 2.78019 18.9727 2.41566 17.75 2.2214V6.24976H21.7784Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2C14.1162 2.00133 15.2688 2.01015 16.25 2.0685V6.24976H12.75V2Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 17.7498H17.75V21.7781C18.9727 21.5839 19.8515 21.2193 20.5355 20.5353C21.2196 19.8513 21.5841 18.9725 21.7784 17.7498Z"
            fill="currentColor"
          />
          <path
            d="M16.25 17.7498V21.931C15.2688 21.9894 14.1162 21.9982 12.75 21.9995V17.7498H16.25Z"
            fill="currentColor"
          />
          <path
            d="M11.25 21.9995V17.7498H7.75L7.75 21.931C8.73117 21.9894 9.88382 21.9982 11.25 21.9995Z"
            fill="currentColor"
          />
          <path
            d="M6.25 17.7498L6.25 21.7781C5.02727 21.5839 4.1485 21.2193 3.46447 20.5353C2.78043 19.8513 2.4159 18.9725 2.22164 17.7498H6.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoFramePlayHorizontal as IconComponent).keywords = [
  "video",
  "frame",
  "play",
  "horizontal",
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
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape",
];

export default IconVideoFramePlayHorizontal as IconComponent;