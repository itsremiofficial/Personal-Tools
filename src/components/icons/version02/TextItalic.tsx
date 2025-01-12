import { FC } from "react";

const IconTextItalic: FC<IconProps> = ({
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
            d="M10.292 3H19.542"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.79199 21H15.042"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.9219 3L10.4219 21"
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
            d="M22.6719 7.81V16.19C22.6719 19.83 20.5019 22 16.8619 22H8.48187C8.28188 22 8.08187 21.99 7.89187 21.98C6.66187 21.9 5.62188 21.55 4.80188 20.95C4.38188 20.66 4.01187 20.29 3.72187 19.87C3.03187 18.92 2.67188 17.68 2.67188 16.19V7.81C2.67188 4.37 4.61187 2.24 7.89187 2.03C8.08187 2.01 8.28188 2 8.48187 2H16.8619C18.3519 2 19.5919 2.36 20.5419 3.05C20.9619 3.34 21.3319 3.71 21.6219 4.13C22.3119 5.08 22.6719 6.32 22.6719 7.81Z"
            fill="currentColor"
          />
          <path
            d="M16.5415 6.01001H11.1615C10.7515 6.01001 10.4115 6.35001 10.4115 6.76001C10.4115 7.17001 10.7515 7.51001 11.1615 7.51001H13.0515L10.8115 16.48H8.81152C8.40152 16.48 8.06152 16.82 8.06152 17.23C8.06152 17.64 8.40152 17.98 8.81152 17.98H14.1915C14.6015 17.98 14.9415 17.64 14.9415 17.23C14.9415 16.82 14.6015 16.48 14.1915 16.48H12.3515L14.5915 7.51001H16.5415C16.9515 7.51001 17.2915 7.17001 17.2915 6.76001C17.2915 6.35001 16.9515 6.01001 16.5415 6.01001Z"
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
            d="M21.6219 4.13C21.3319 3.71 20.9619 3.34 20.5419 3.05C19.5919 2.36 18.3519 2 16.8619 2H8.48187C8.28188 2 8.08187 2.01 7.89187 2.03C4.61187 2.24 2.67188 4.37 2.67188 7.81V16.19C2.67188 17.68 3.03187 18.92 3.72187 19.87C4.01187 20.29 4.38188 20.66 4.80188 20.95C5.62188 21.55 6.66187 21.9 7.89187 21.98C8.08187 21.99 8.28188 22 8.48187 22H16.8619C20.5019 22 22.6719 19.83 22.6719 16.19V7.81C22.6719 6.32 22.3119 5.08 21.6219 4.13ZM16.5419 7.51H14.5919L12.3519 16.48H14.1919C14.6019 16.48 14.9419 16.82 14.9419 17.23C14.9419 17.64 14.6019 17.98 14.1919 17.98H8.80188C8.39188 17.98 8.05188 17.64 8.05188 17.23C8.05188 16.82 8.39188 16.48 8.80188 16.48H10.8019L13.0419 7.51H11.1519C10.7419 7.51 10.4019 7.17 10.4019 6.76C10.4019 6.35 10.7419 6.01 11.1519 6.01H16.5319C16.9419 6.01 17.2819 6.35 17.2819 6.76C17.2819 7.17 16.9519 7.51 16.5419 7.51Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextItalic as IconComponent).keywords = [
  "text",
  "italic",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "italic language",
  "emphasis",
  "slanted",
  "italicized",
  "italicised",
  "serif",
  "italicize",
  "monospaced",
  "boldface",
];

export default IconTextItalic as IconComponent;
