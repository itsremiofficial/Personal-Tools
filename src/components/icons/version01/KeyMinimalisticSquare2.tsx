import { FC } from "react";

const IconKeyMinimalisticSquare2: FC<IconProps> = ({
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
            d="M20.3142 3.68625L20.8446 3.15592L20.8446 3.15592L20.3142 3.68625ZM20.3142 11.8258L20.8446 12.3561H20.8446L20.3142 11.8258ZM12.1747 3.68625L12.705 4.21658L12.1747 3.68625ZM10.4547 10.0574L9.92432 9.52712L9.92432 9.52712L10.4547 10.0574ZM7.36124 13.1509L7.89157 13.6812L7.89157 13.6812L7.36124 13.1509ZM10.8496 16.6392L10.3193 16.1089H10.3193L10.8496 16.6392ZM11.8833 15.6056L12.4136 16.1359L11.8833 15.6056ZM13.9433 13.5456L13.4129 13.0153L13.9433 13.5456ZM7.00755 14.1592L6.26214 14.242H6.26214L7.00755 14.1592ZM7.20094 15.8996L6.45553 15.9825L6.45553 15.9825L7.20094 15.8996ZM8.10084 16.7995L8.01802 17.545H8.01802L8.10084 16.7995ZM9.84133 16.9929L9.92416 16.2475H9.92416L9.84133 16.9929ZM7.43673 16.3902L7.96707 15.8599L7.96706 15.8599L7.43673 16.3902ZM7.61025 16.5638L7.07991 17.0941L7.07992 17.0941L7.61025 16.5638ZM10.6703 9.19309L9.94383 9.37963L9.94383 9.37963L10.6703 9.19309ZM14.8074 13.3302L14.6209 14.0567H14.6209L14.8074 13.3302ZM10.9532 13.6307C10.6587 13.3395 10.1838 13.3421 9.89252 13.6366C9.60124 13.9311 9.60385 14.4059 9.89835 14.6972L10.9532 13.6307ZM19.7839 4.21658C21.7387 6.17137 21.7387 9.3407 19.7839 11.2955L20.8446 12.3561C23.3851 9.81557 23.3851 5.69649 20.8446 3.15592L19.7839 4.21658ZM20.8446 3.15592C18.304 0.615345 14.1849 0.615345 11.6443 3.15592L12.705 4.21658C14.6598 2.26179 17.8291 2.26179 19.7839 4.21658L20.8446 3.15592ZM9.92432 9.52712L6.83091 12.6205L7.89157 13.6812L10.985 10.5878L9.92432 9.52712ZM11.38 17.1696L12.4136 16.1359L11.353 15.0752L10.3193 16.1089L11.38 17.1696ZM12.4136 16.1359L14.4736 14.0759L13.4129 13.0153L11.353 15.0752L12.4136 16.1359ZM6.26214 14.242L6.45553 15.9825L7.94635 15.8168L7.75296 14.0763L6.26214 14.242ZM8.01802 17.545L9.75851 17.7383L9.92416 16.2475L8.18367 16.0541L8.01802 17.545ZM6.9064 16.9206L7.07991 17.0941L8.14058 16.0334L7.96707 15.8599L6.9064 16.9206ZM8.18367 16.0541C8.16737 16.0523 8.15217 16.045 8.14058 16.0334L7.07992 17.0941C7.33236 17.3465 7.6632 17.5055 8.01802 17.545L8.18367 16.0541ZM6.45553 15.9825C6.49495 16.3373 6.65396 16.6681 6.9064 16.9206L7.96706 15.8599C7.95547 15.8483 7.94816 15.8331 7.94635 15.8168L6.45553 15.9825ZM10.3193 16.1089C10.2155 16.2127 10.0701 16.2637 9.92416 16.2475L9.75851 17.7383C10.3573 17.8049 10.9539 17.5956 11.38 17.1696L10.3193 16.1089ZM6.83091 12.6205C6.40488 13.0466 6.1956 13.6432 6.26214 14.242L7.75296 14.0763C7.73675 13.9304 7.78775 13.785 7.89157 13.6812L6.83091 12.6205ZM11.3967 9.00654C10.9704 7.34651 11.4077 5.5139 12.705 4.21658L11.6443 3.15592C9.95676 4.8435 9.3911 7.22722 9.94383 9.37963L11.3967 9.00654ZM19.7839 11.2955C18.4866 12.5928 16.654 13.0301 14.9939 12.6038L14.6209 14.0567C16.7733 14.6094 19.157 14.0437 20.8446 12.3561L19.7839 11.2955ZM14.4736 14.0759C14.4807 14.0688 14.4935 14.0596 14.5182 14.0537C14.5444 14.0474 14.5805 14.0463 14.6209 14.0567L14.9939 12.6038C14.4675 12.4686 13.8509 12.5773 13.4129 13.0153L14.4736 14.0759ZM10.985 10.5878C11.4227 10.15 11.532 9.53334 11.3967 9.00654L9.94383 9.37963C9.95415 9.4198 9.95302 9.4559 9.94673 9.48223C9.94081 9.50706 9.93144 9.52 9.92432 9.52712L10.985 10.5878ZM12.4107 15.0723L10.9532 13.6307L9.89835 14.6972L11.3559 16.1388L12.4107 15.0723Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.5185 8.48208C15.1605 8.1241 15.1605 7.5437 15.5185 7.18572L14.4578 6.12506C13.5141 7.06883 13.5141 8.59898 14.4578 9.54274L15.5185 8.48208ZM16.8148 8.48208C16.4569 8.84006 15.8765 8.84006 15.5185 8.48208L14.4578 9.54274C15.4016 10.4865 16.9317 10.4865 17.8755 9.54274L16.8148 8.48208ZM16.8148 7.18572C17.1728 7.5437 17.1728 8.1241 16.8148 8.48208L17.8755 9.54274C18.8193 8.59898 18.8193 7.06883 17.8755 6.12506L16.8148 7.18572ZM17.8755 6.12506C16.9317 5.18129 15.4016 5.18129 14.4578 6.12506L15.5185 7.18572C15.8765 6.82774 16.4569 6.82774 16.8148 7.18572L17.8755 6.12506Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 14.9935C21.9361 17.7875 21.6692 19.4195 20.5542 20.5346C19.0882 22.0005 16.7288 22.0005 12.0101 22.0005C7.29127 22.0005 4.93188 22.0005 3.46594 20.5346C2 19.0686 2 16.7092 2 11.9904C2 7.27165 2 4.91226 3.46594 3.44632C4.58099 2.33127 6.21298 2.06437 9.00704 2.00049"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.9626 8.4128C21.8202 9.65988 21.2708 10.8693 20.3142 11.8258C18.8218 13.3183 16.7136 13.8197 14.8074 13.3302C14.5 13.2513 14.1677 13.3212 13.9433 13.5456L12.4136 15.0753L12.4107 15.0724L10.9532 13.6308C10.6587 13.3395 10.1838 13.3421 9.89254 13.6366C9.60127 13.9311 9.60388 14.406 9.89838 14.6973L11.3529 16.1359L10.8496 16.6392C10.5847 16.9042 10.2137 17.0343 9.84133 16.9929L8.10084 16.7995C7.91528 16.7789 7.74226 16.6958 7.61024 16.5637L7.43673 16.3902C7.30472 16.2582 7.22156 16.0852 7.20094 15.8996L7.00755 14.1591C6.96618 13.7868 7.09632 13.4158 7.36124 13.1509L10.4547 10.0574C10.6791 9.833 10.7492 9.50052 10.6703 9.19308C10.1808 7.28686 10.6822 5.17869 12.1747 3.68624C13.1312 2.72971 14.3407 2.18024 15.5878 2.03784C16.4945 2.07117 17.2684 2.13421 17.9361 2.25349C18.8063 2.52021 19.6258 2.99779 20.3142 3.68624C21.0027 4.37467 21.4802 5.19411 21.747 6.06431C21.8663 6.73202 21.9293 7.50602 21.9626 8.4128ZM14.9882 6.65538C15.639 6.00451 16.6943 6.00451 17.3452 6.65538C17.9961 7.30626 17.9961 8.36153 17.3452 9.01241C16.6943 9.66328 15.639 9.66328 14.9882 9.01241C14.3373 8.36153 14.3373 7.30626 14.9882 6.65538Z"
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
            d="M9.62048 18.9807C10.5967 19.0892 11.5693 18.748 12.2639 18.0534L14.9194 15.3979C17.3148 15.8114 19.874 15.0945 21.7285 13.24C21.8217 13.1468 21.912 13.0518 21.9995 12.9551C21.9928 17.0397 21.8976 19.1739 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0715 2 16.7145 2 12.0005C2 7.28643 2 4.92941 3.46447 3.46494C4.82655 2.10286 6.96075 2.00763 11.0454 2.00098C10.9487 2.08846 10.8537 2.1788 10.7605 2.27202C8.906 4.12649 8.18914 6.68569 8.60254 9.08113L5.94704 11.7366C5.2525 12.4312 4.91133 13.4038 5.0198 14.38L5.21319 16.1205C5.28396 16.7574 5.56939 17.3513 6.02253 17.8044L6.19604 17.9779C6.64919 18.4311 7.24309 18.7165 7.88 18.7873L9.62048 18.9807Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.9626 8.4128C21.8202 9.65987 21.2708 10.8693 20.3143 11.8258C18.8218 13.3183 16.7136 13.8197 14.8074 13.3302C14.5 13.2513 14.1677 13.3211 13.9433 13.5456L12.4136 15.0753L12.4107 15.0724L10.9532 13.6308C10.6587 13.3395 10.1838 13.3421 9.89256 13.6366C9.60128 13.9311 9.60389 14.406 9.89839 14.6973L11.3529 16.1359L10.8496 16.6392C10.5847 16.9042 10.2137 17.0343 9.84135 16.9929L8.10086 16.7995C7.9153 16.7789 7.74228 16.6958 7.61026 16.5637L7.43675 16.3902C7.30473 16.2582 7.22157 16.0852 7.20095 15.8996L7.00756 14.1591C6.96619 13.7868 7.09633 13.4158 7.36126 13.1508L10.4547 10.0574C10.6791 9.83299 10.7492 9.50051 10.6703 9.19307C10.1808 7.28686 10.6822 5.17869 12.1747 3.68624C13.1312 2.7297 14.3407 2.18024 15.5878 2.03784C16.4945 2.07116 17.2684 2.13421 17.9361 2.25349C18.8063 2.5202 19.6258 2.99778 20.3143 3.68624C21.0027 4.37467 21.4803 5.19411 21.747 6.0643C21.8663 6.73201 21.9293 7.50601 21.9626 8.4128ZM14.9882 6.65538C15.639 6.00451 16.6943 6.00451 17.3452 6.65538C17.9961 7.30625 17.9961 8.36153 17.3452 9.0124C16.6943 9.66328 15.639 9.66328 14.9882 9.0124C14.3373 8.36153 14.3373 7.30625 14.9882 6.65538Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyMinimalisticSquare2 as IconComponent).keywords = [
  "key",
  "minimalistic",
  "square",
  "2",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconKeyMinimalisticSquare2 as IconComponent;
