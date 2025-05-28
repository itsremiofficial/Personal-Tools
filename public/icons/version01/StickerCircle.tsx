import { FC } from "react";

const IconStickerCircle: FC<IconProps> = ({
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
            d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12"
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
            d="M21.2424 13.7083L13.7083 21.2424C13.6419 21.3087 13.5725 21.3718 13.5004 21.431C13.448 21.4741 13.3943 21.5151 13.3392 21.554C12.9462 21.8314 12.4858 22 12 22C12 21.4484 12 20.9513 12.003 20.5C12.0153 18.6662 12.0776 17.5889 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.5889 12.0776 18.6662 12.0153 20.5 12.003C20.9513 12 21.4484 12 22 12C22 12.4858 21.8314 12.9462 21.554 13.3392C21.5151 13.3943 21.4741 13.448 21.431 13.5004C21.3718 13.5725 21.3087 13.6419 21.2424 13.7083Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 2C17.5228 2 22 6.47715 22 12C21.4484 12 20.9513 12 20.5 12.003C18.6662 12.0153 17.5889 12.0776 16.688 12.3928C14.6773 13.0964 13.0964 14.6773 12.3928 16.688C12.0776 17.5889 12.0153 18.6662 12.003 20.5C12 20.9513 12 21.4484 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z"
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
            d="M2 12C2 6.47715 6.47715 2 12 2C17.013 2 21.1645 5.68873 21.8882 10.5L21.686 10.4999C19.1965 10.4991 17.5598 10.4986 16.1926 10.977C13.751 11.8313 11.8313 13.751 10.977 16.1926C10.4986 17.5598 10.4991 19.1965 10.4999 21.686L10.5 21.8882C5.68873 21.1645 2 17.013 2 12Z"
            fill="currentColor"
          />
          <path
            d="M21.2424 13.7083L13.7083 21.2424C13.6419 21.3087 13.5725 21.3718 13.5004 21.431C13.448 21.4741 13.3943 21.5151 13.3392 21.554C12.9462 21.8314 12.4858 22 12 22C12 21.4484 12 20.9513 12.003 20.5C12.0153 18.6662 12.0776 17.5889 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.5889 12.0776 18.6662 12.0153 20.5 12.003C20.9513 12 21.4484 12 22 12C22 12.4858 21.8314 12.9462 21.554 13.3392C21.5151 13.3943 21.4741 13.448 21.431 13.5004C21.3718 13.5725 21.3087 13.6419 21.2424 13.7083Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStickerCircle as IconComponent).keywords = [
  "sticker",
  "circle",
  "label",
  "gummed label",
  "sticky",
  "bonding",
  "paster",
  "adhesive",
  "tab",
  "decal",
  "thumbnail",
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

export default IconStickerCircle as IconComponent;
