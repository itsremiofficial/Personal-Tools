import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTextCrossSquare: FC<IconProps> = ({
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
            d="M15.25 9.22271C15.25 9.63692 15.5858 9.97271 16 9.97271C16.4142 9.97271 16.75 9.63692 16.75 9.22271H15.25ZM7.25 9.22271C7.25 9.63692 7.58579 9.97271 8 9.97271C8.41421 9.97271 8.75 9.63692 8.75 9.22271H7.25ZM11.25 9.50049C11.25 9.9147 11.5858 10.2505 12 10.2505C12.4142 10.2505 12.75 9.9147 12.75 9.50049H11.25ZM11.25 17.0005C11.25 17.4147 11.5858 17.7505 12 17.7505C12.4142 17.7505 12.75 17.4147 12.75 17.0005H11.25ZM12.75 14.5005C12.75 14.0863 12.4142 13.7505 12 13.7505C11.5858 13.7505 11.25 14.0863 11.25 14.5005H12.75ZM15.7071 7.32593L15.1496 7.82765L15.1496 7.82765L15.7071 7.32593ZM9.5 16.2505C9.08579 16.2505 8.75 16.5863 8.75 17.0005C8.75 17.4147 9.08579 17.7505 9.5 17.7505V16.2505ZM14.5 17.7505C14.9142 17.7505 15.25 17.4147 15.25 17.0005C15.25 16.5863 14.9142 16.2505 14.5 16.2505V17.7505ZM8 11.2505C7.58579 11.2505 7.25 11.5863 7.25 12.0005C7.25 12.4147 7.58579 12.7505 8 12.7505V11.2505ZM16 12.7505C16.4142 12.7505 16.75 12.4147 16.75 12.0005C16.75 11.5863 16.4142 11.2505 16 11.2505V12.7505ZM10 7.75049H12V6.25049H10V7.75049ZM12 7.75049H14V6.25049H12V7.75049ZM12.75 9.50049V7.00049H11.25V9.50049H12.75ZM12.75 17.0005V14.5005H11.25V17.0005H12.75ZM14 7.75049C14.4949 7.75049 14.7824 7.75245 14.9865 7.78294C15.0783 7.79666 15.121 7.81229 15.1376 7.81989C15.148 7.82464 15.1477 7.82552 15.1496 7.82765L16.2646 6.8242C15.96 6.48579 15.579 6.35481 15.2081 6.2994C14.8676 6.24853 14.4479 6.25049 14 6.25049V7.75049ZM16.75 9.22271C16.75 8.71806 16.7513 8.27158 16.708 7.91343C16.6629 7.54109 16.559 7.1513 16.2646 6.8242L15.1496 7.82765C15.1523 7.83064 15.1609 7.83988 15.1731 7.8727C15.1873 7.91097 15.2048 7.97774 15.2188 8.09361C15.2487 8.3406 15.25 8.6798 15.25 9.22271H16.75ZM10 6.25049C9.55208 6.25049 9.13244 6.24853 8.79192 6.2994C8.42102 6.35481 8.04 6.48579 7.73542 6.8242L8.85036 7.82765C8.85228 7.82552 8.85204 7.82464 8.86242 7.81989C8.87904 7.81229 8.92168 7.79666 9.01354 7.78294C9.21765 7.75245 9.50511 7.75049 10 7.75049V6.25049ZM8.75 9.22271C8.75 8.6798 8.75129 8.3406 8.78118 8.09361C8.7952 7.97774 8.81273 7.91097 8.8269 7.8727C8.83905 7.83988 8.84767 7.83064 8.85036 7.82765L7.73542 6.8242C7.44103 7.1513 7.3371 7.54109 7.29204 7.91343C7.24871 8.27158 7.25 8.71806 7.25 9.22271H8.75ZM9.5 17.7505H14.5V16.2505H9.5V17.7505ZM8 12.7505H16V11.2505H8V12.7505Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M9.95197 6.25049C9.52212 6.25043 9.12024 6.25036 8.79192 6.29941C8.42103 6.35481 8.04 6.4858 7.73543 6.82421C7.44103 7.15131 7.3371 7.5411 7.29205 7.91344C7.24993 8.26146 7.24997 8.69288 7.25 9.18004L7.25 9.22272C7.25 9.63693 7.58579 9.97272 8 9.97272C8.41422 9.97272 8.75 9.63693 8.75 9.22272C8.75 8.67981 8.7513 8.34061 8.78118 8.09362C8.79521 7.97775 8.81273 7.91098 8.8269 7.87271C8.83886 7.84042 8.8474 7.83096 8.85023 7.82781L8.85104 7.82687C8.85241 7.82523 8.85341 7.82402 8.86242 7.8199C8.87905 7.8123 8.92169 7.79667 9.01354 7.78295C9.21765 7.75246 9.50512 7.7505 10 7.7505H11.25V9.5005C11.25 9.91471 11.5858 10.2505 12 10.2505C12.4142 10.2505 12.75 9.91471 12.75 9.5005V7.7505H14C14.4949 7.7505 14.7824 7.75246 14.9865 7.78295C15.0783 7.79667 15.121 7.8123 15.1376 7.8199C15.1466 7.82402 15.1476 7.82523 15.149 7.82687L15.1496 7.82766C15.1525 7.8308 15.1612 7.84043 15.1731 7.87271C15.1873 7.91098 15.2048 7.97775 15.2188 8.09362C15.2487 8.34061 15.25 8.67981 15.25 9.22272C15.25 9.63693 15.5858 9.97272 16 9.97272C16.4142 9.97272 16.75 9.63693 16.75 9.22272L16.75 9.18003V9.18002C16.75 8.69287 16.7501 8.26145 16.708 7.91344C16.6629 7.5411 16.559 7.15131 16.2646 6.82421C15.96 6.4858 15.579 6.35481 15.2081 6.29941C14.8798 6.25036 14.4779 6.25043 14.048 6.25049H9.95197Z"
            fill="currentColor"
          />
          <path
            d="M8 11.2505C7.58579 11.2505 7.25 11.5863 7.25 12.0005C7.25 12.4147 7.58579 12.7505 8 12.7505H16C16.4142 12.7505 16.75 12.4147 16.75 12.0005C16.75 11.5863 16.4142 11.2505 16 11.2505H8Z"
            fill="currentColor"
          />
          <path
            d="M12.75 14.5005C12.75 14.0863 12.4142 13.7505 12 13.7505C11.5858 13.7505 11.25 14.0863 11.25 14.5005V16.2505H9.5C9.08579 16.2505 8.75 16.5863 8.75 17.0005C8.75 17.4147 9.08579 17.7505 9.5 17.7505H14.5C14.9142 17.7505 15.25 17.4147 15.25 17.0005C15.25 16.5863 14.9142 16.2505 14.5 16.2505H12.75V14.5005Z"
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
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM9.95197 6.25048C9.52211 6.25042 9.12024 6.25035 8.79192 6.2994C8.42102 6.3548 8.04 6.48579 7.73542 6.8242C7.44103 7.1513 7.3371 7.54109 7.29204 7.91343C7.24993 8.26145 7.24996 8.69287 7.25 9.18003L7.25 9.22271C7.25 9.63692 7.58579 9.97271 8 9.97271C8.41421 9.97271 8.75 9.63692 8.75 9.22271C8.75 8.6798 8.75129 8.3406 8.78118 8.09361C8.7952 7.97774 8.81273 7.91097 8.8269 7.8727C8.83885 7.84042 8.84739 7.83095 8.85023 7.8278L8.85104 7.82686C8.8524 7.82522 8.8534 7.82401 8.86242 7.81989C8.87904 7.81229 8.92168 7.79666 9.01354 7.78294C9.21765 7.75245 9.50511 7.75049 10 7.75049H11.25V9.50049C11.25 9.9147 11.5858 10.2505 12 10.2505C12.4142 10.2505 12.75 9.9147 12.75 9.50049V7.75049H14C14.4949 7.75049 14.7824 7.75245 14.9865 7.78294C15.0783 7.79666 15.121 7.81229 15.1376 7.81989C15.1466 7.82401 15.1476 7.82522 15.149 7.82686L15.1496 7.82765C15.1525 7.83079 15.1611 7.84042 15.1731 7.8727C15.1873 7.91097 15.2048 7.97774 15.2188 8.09361C15.2487 8.3406 15.25 8.6798 15.25 9.22271C15.25 9.63692 15.5858 9.97271 16 9.97271C16.4142 9.97271 16.75 9.63692 16.75 9.22271L16.75 9.18002C16.75 8.69287 16.7501 8.26145 16.708 7.91343C16.6629 7.54109 16.559 7.1513 16.2646 6.8242C15.96 6.48579 15.579 6.3548 15.2081 6.2994C14.8798 6.25035 14.4779 6.25042 14.048 6.25048H9.95197ZM8 11.2505C7.58579 11.2505 7.25 11.5863 7.25 12.0005C7.25 12.4147 7.58579 12.7505 8 12.7505H16C16.4142 12.7505 16.75 12.4147 16.75 12.0005C16.75 11.5863 16.4142 11.2505 16 11.2505H8ZM12.75 14.5005C12.75 14.0863 12.4142 13.7505 12 13.7505C11.5858 13.7505 11.25 14.0863 11.25 14.5005V16.2505H9.5C9.08579 16.2505 8.75 16.5863 8.75 17.0005C8.75 17.4147 9.08579 17.7505 9.5 17.7505H14.5C14.9142 17.7505 15.25 17.4147 15.25 17.0005C15.25 16.5863 14.9142 16.2505 14.5 16.2505H12.75V14.5005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextCrossSquare as IconComponentType).keywords = [
  "text",
  "cross",
  "square",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconTextCrossSquare as IconComponentType;
