import { FC } from "react";

const IconParagraphSpacing: FC<IconProps> = ({
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
            d="M4 21.0005H20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 3.00049H20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.50049L15 8.50049M12 5.50049L9 8.50049M12 5.50049V18.5005M12 18.5005L15 15.5005M12 18.5005L9 15.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M3.25 3.00049C3.25 2.58627 3.58579 2.25049 4 2.25049H20C20.4142 2.25049 20.75 2.58627 20.75 3.00049C20.75 3.4147 20.4142 3.75049 20 3.75049H4C3.58579 3.75049 3.25 3.4147 3.25 3.00049Z"
              fill="currentColor"
            />
            <path
              d="M3.25 21.0005C3.25 20.5863 3.58579 20.2505 4 20.2505H20C20.4142 20.2505 20.75 20.5863 20.75 21.0005C20.75 21.4147 20.4142 21.7505 20 21.7505H4C3.58579 21.7505 3.25 21.4147 3.25 21.0005Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M12.5303 4.97016C12.2374 4.67726 11.7626 4.67726 11.4697 4.97016L8.46967 7.97016C8.17678 8.26305 8.17678 8.73793 8.46967 9.03082C8.76256 9.32371 9.23744 9.32371 9.53033 9.03082L11.25 7.31115V16.6898L9.53033 14.9702C9.23744 14.6773 8.76256 14.6773 8.46967 14.9702C8.17678 15.2631 8.17678 15.7379 8.46967 16.0308L11.4697 19.0308C11.7626 19.3237 12.2374 19.3237 12.5303 19.0308L15.5303 16.0308C15.8232 15.7379 15.8232 15.2631 15.5303 14.9702C15.2374 14.6773 14.7626 14.6773 14.4697 14.9702L12.75 16.6898V7.31115L14.4697 9.03082C14.7626 9.32371 15.2374 9.32371 15.5303 9.03082C15.8232 8.73793 15.8232 8.26305 15.5303 7.97016L12.5303 4.97016Z"
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
            d="M3.25 3.00049C3.25 2.58627 3.58579 2.25049 4 2.25049H20C20.4142 2.25049 20.75 2.58627 20.75 3.00049C20.75 3.4147 20.4142 3.75049 20 3.75049H4C3.58579 3.75049 3.25 3.4147 3.25 3.00049Z"
            fill="currentColor"
          />
          <path
            d="M3.25 21.0005C3.25 20.5863 3.58579 20.2505 4 20.2505H20C20.4142 20.2505 20.75 20.5863 20.75 21.0005C20.75 21.4147 20.4142 21.7505 20 21.7505H4C3.58579 21.7505 3.25 21.4147 3.25 21.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.5303 4.97016C12.2374 4.67726 11.7626 4.67726 11.4697 4.97016L8.46967 7.97016C8.17678 8.26305 8.17678 8.73793 8.46967 9.03082C8.76256 9.32371 9.23744 9.32371 9.53033 9.03082L11.25 7.31115V16.6898L9.53033 14.9702C9.23744 14.6773 8.76256 14.6773 8.46967 14.9702C8.17678 15.2631 8.17678 15.7379 8.46967 16.0308L11.4697 19.0308C11.7626 19.3237 12.2374 19.3237 12.5303 19.0308L15.5303 16.0308C15.8232 15.7379 15.8232 15.2631 15.5303 14.9702C15.2374 14.6773 14.7626 14.6773 14.4697 14.9702L12.75 16.6898V7.31115L14.4697 9.03082C14.7626 9.32371 15.2374 9.32371 15.5303 9.03082C15.8232 8.73793 15.8232 8.26305 15.5303 7.97016L12.5303 4.97016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconParagraphSpacing as IconComponent).keywords = [
  "paragraph",
  "spacing",
  "text",
  "comma",
  "article",
  "subparagraph",
  "figure",
  "number",
  "recital",
  "subsection",
  "clause",
  "spatial arrangement",
  "separator",
  "partition",
  "interval",
  "layout",
  "separation",
  "separate",
  "distance",
  "disengagement",
];

export default IconParagraphSpacing as IconComponent;
