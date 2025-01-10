import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCupPaper: FC<IconProps> = ({
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
            d="M20.1728 5.86068L20.8843 5.62329L20.8843 5.62328L20.1728 5.86068ZM20.2087 5.96804L19.4972 6.20543L19.4972 6.20544L20.2087 5.96804ZM3.79133 5.96803L4.50277 6.20543L3.79133 5.96803ZM3.82715 5.86068L3.11572 5.62328H3.11572L3.82715 5.86068ZM6.99921 18.5796L6.25712 18.6882L6.99921 18.5796ZM17.0008 18.5796L17.7429 18.6882L17.0008 18.5796ZM3.48157 7.76207L4.16132 7.44514L4.16132 7.44513L3.48157 7.76207ZM3.70016 8.06545L4.21596 7.52098L4.21596 7.52098L3.70016 8.06545ZM20.5184 7.76207L21.1982 8.07902L21.1982 8.07901L20.5184 7.76207ZM20.2998 8.06545L19.784 7.52098L19.784 7.52098L20.2998 8.06545ZM18.2942 2.44444L18.687 1.80552L18.687 1.80552L18.2942 2.44444ZM18.65 2.70081L18.1683 3.27564V3.27564L18.65 2.70081ZM7.92073 21.5133L7.43032 22.0807L7.92073 21.5133ZM5.70579 2.44444L5.313 1.80552L5.313 1.80552L5.70579 2.44444ZM5.34998 2.70081L5.83172 3.27564L5.83172 3.27564L5.34998 2.70081ZM9.18521 2.75012H14.8148V1.25012H9.18521V2.75012ZM19.4614 6.09808L19.4972 6.20543L20.9201 5.73064L20.8843 5.62329L19.4614 6.09808ZM4.50277 6.20543L4.53859 6.09808L3.11572 5.62328L3.0799 5.73063L4.50277 6.20543ZM10.957 22.7501H13.043V21.2501H10.957V22.7501ZM18.5 7.58949H5.5V9.08949H18.5V7.58949ZM4.75791 8.44813L6.25712 18.6882L7.7413 18.4709L6.24209 8.23084L4.75791 8.44813ZM17.7429 18.6882L19.2421 8.44813L17.7579 8.23084L16.2587 18.4709L17.7429 18.6882ZM13.043 22.7501C13.8478 22.7501 14.5216 22.7515 15.062 22.6834C15.6233 22.6126 16.1336 22.4576 16.5697 22.0807L15.5889 20.9459C15.4616 21.0558 15.2782 21.1442 14.8743 21.1952C14.4495 21.2487 13.8868 21.2501 13.043 21.2501V22.7501ZM16.2587 18.4709C16.1365 19.3059 16.0536 19.8624 15.939 20.275C15.8301 20.6672 15.7161 20.8359 15.5889 20.9459L16.5697 22.0807C17.0057 21.7039 17.233 21.2213 17.3844 20.6762C17.5301 20.1515 17.6263 19.4846 17.7429 18.6882L16.2587 18.4709ZM3.0799 5.73063C2.92657 6.19013 2.78906 6.59822 2.71927 6.93616C2.64769 7.28276 2.61739 7.68343 2.80183 8.07901L4.16132 7.44513C4.17737 7.47958 4.14257 7.46086 4.18827 7.23954C4.23577 7.00957 4.33734 6.7012 4.50277 6.20543L3.0799 5.73063ZM5.5 7.58949C4.97736 7.58949 4.6527 7.58823 4.41952 7.56049C4.19511 7.53379 4.18837 7.49484 4.21596 7.52098L3.18436 8.60992C3.50122 8.91009 3.89088 9.00817 4.24231 9.04998C4.58497 9.09075 5.01559 9.08949 5.5 9.08949V7.58949ZM2.80183 8.07901C2.89482 8.27846 3.0246 8.45858 3.18436 8.60992L4.21596 7.52098C4.19314 7.49936 4.1746 7.47363 4.16132 7.44514L2.80183 8.07901ZM19.4972 6.20544C19.6627 6.7012 19.7642 7.00957 19.8117 7.23954C19.8574 7.46086 19.8226 7.47958 19.8387 7.44514L21.1982 8.07901C21.3826 7.68343 21.3523 7.28276 21.2807 6.93616C21.2109 6.59822 21.0734 6.19014 20.9201 5.73064L19.4972 6.20544ZM18.5 9.08949C18.9844 9.08949 19.415 9.09075 19.7577 9.04998C20.1091 9.00817 20.4988 8.91009 20.8156 8.60992L19.784 7.52098C19.8116 7.49484 19.8049 7.53379 19.5805 7.56049C19.3473 7.58823 19.0226 7.58949 18.5 7.58949V9.08949ZM19.8387 7.44513C19.8254 7.47363 19.8069 7.49936 19.784 7.52098L20.8156 8.60992C20.9754 8.45857 21.1052 8.27846 21.1982 8.07902L19.8387 7.44513ZM14.8148 2.75012C15.7488 2.75012 16.3938 2.75101 16.8973 2.80186C17.3849 2.85113 17.6719 2.94222 17.9014 3.08336L18.687 1.80552C18.1938 1.50234 17.66 1.37128 17.048 1.30946C16.4519 1.24924 15.7185 1.25012 14.8148 1.25012V2.75012ZM20.8843 5.62328C20.5982 4.76601 20.3669 4.0701 20.1211 3.52367C19.8688 2.96277 19.5755 2.49782 19.1318 2.12598L18.1683 3.27564C18.3748 3.44873 18.5521 3.69209 18.7532 4.13907C18.9608 4.60052 19.1658 5.21208 19.4614 6.09808L20.8843 5.62328ZM17.9014 3.08336C17.995 3.14086 18.0841 3.20512 18.1683 3.27564L19.1318 2.12598C18.9915 2.00845 18.8429 1.90135 18.687 1.80552L17.9014 3.08336ZM10.957 21.2501C10.1132 21.2501 9.55049 21.2487 9.12569 21.1952C8.72181 21.1442 8.53836 21.0558 8.41115 20.9459L7.43032 22.0807C7.86638 22.4576 8.37675 22.6126 8.93802 22.6834C9.47837 22.7515 10.1522 22.7501 10.957 22.7501V21.2501ZM6.25712 18.6882C6.37371 19.4846 6.46994 20.1515 6.61564 20.6762C6.76698 21.2214 6.99425 21.7039 7.43032 22.0807L8.41115 20.9459C8.28394 20.8359 8.16987 20.6672 8.06097 20.275C7.94643 19.8624 7.86354 19.3059 7.7413 18.4709L6.25712 18.6882ZM9.18521 1.25012C8.28146 1.25012 7.54813 1.24924 6.95198 1.30946C6.34004 1.37128 5.80617 1.50234 5.313 1.80552L6.09857 3.08336C6.32815 2.94222 6.6151 2.85113 7.10274 2.80186C7.60617 2.75101 8.25118 2.75012 9.18521 2.75012V1.25012ZM4.53859 6.09808C4.83424 5.21208 5.03925 4.60051 5.24684 4.13907C5.44793 3.69209 5.62517 3.44874 5.83172 3.27564L4.86824 2.12598C4.42454 2.49782 4.13123 2.96276 3.8789 3.52366C3.63307 4.0701 3.40179 4.766 3.11572 5.62328L4.53859 6.09808ZM5.313 1.80552C5.15713 1.90135 5.00848 2.00845 4.86824 2.12598L5.83172 3.27564C5.91586 3.20512 6.00505 3.14086 6.09857 3.08336L5.313 1.80552Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 12.0001H17.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 17.0001H17"
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
            d="M14.8149 2.00012H9.18527C7.34749 2.00012 6.42859 2.00012 5.70585 2.44444C5.58115 2.5211 5.46223 2.60679 5.35004 2.70081C4.69979 3.24575 4.40893 4.11739 3.82722 5.86068L3.79139 5.96803C3.47263 6.9233 3.31325 7.40093 3.48163 7.76207C3.53477 7.87604 3.60893 7.97897 3.70022 8.06545C3.98949 8.33949 4.49301 8.33949 5.50006 8.33949H18.5001C19.5071 8.33949 20.0106 8.33949 20.2999 8.06545C20.3912 7.97897 20.4653 7.87604 20.5185 7.76207C20.6869 7.40093 20.5275 6.9233 20.2087 5.96804L20.1729 5.86068L20.1729 5.86062C19.5912 4.11739 19.3003 3.24574 18.6501 2.70081C18.5379 2.60679 18.419 2.5211 18.2943 2.44444C17.5715 2.00012 16.6526 2.00012 14.8149 2.00012Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.958 22.0001H13.044C14.6926 22.0001 15.517 22.0001 16.0802 21.5133C16.6435 21.0265 16.7629 20.2108 17.0018 18.5796L18.501 8.33948H5.50098L7.00019 18.5796C7.23902 20.2108 7.35843 21.0265 7.92171 21.5133C8.48499 22.0001 9.30932 22.0001 10.958 22.0001Z"
            fill="currentColor"
          />
          <path
            d="M6.76895 17.0001H17.233L17.965 12.0001H6.03692L6.76895 17.0001Z"
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
            d="M9.18527 2.00012H14.8149C16.6526 2.00012 17.5715 2.00012 18.2943 2.44444C18.419 2.5211 18.5379 2.60679 18.6501 2.70081C19.3003 3.24574 19.5912 4.11739 20.1729 5.86062L20.2087 5.96804C20.5275 6.9233 20.6869 7.40093 20.5185 7.76207C20.4653 7.87604 20.3912 7.97897 20.2999 8.06545C20.0106 8.33949 19.5071 8.33949 18.5001 8.33949L18.0739 11.2501H5.92614L5.5 8.33949C4.49299 8.33949 3.98949 8.33948 3.70022 8.06545C3.60893 7.97897 3.53477 7.87604 3.48163 7.76207C3.31325 7.40093 3.47263 6.9233 3.79139 5.96803L3.82722 5.86068C4.40893 4.11739 4.69979 3.24575 5.35004 2.70081C5.46223 2.60679 5.58115 2.5211 5.70585 2.44444C6.42859 2.00012 7.34749 2.00012 9.18527 2.00012Z"
            fill="currentColor"
          />
          <path
            d="M17.3418 16.2501H6.65817L6.14575 12.7501H17.8543L17.3418 16.2501Z"
            fill="currentColor"
          />
          <path
            d="M13.043 22.0001H10.957C9.30835 22.0001 8.48401 22.0001 7.92073 21.5133C7.35745 21.0265 7.23804 20.2108 6.99921 18.5796L6.87778 17.7501H17.1222L17.0008 18.5796C16.762 20.2108 16.6425 21.0265 16.0793 21.5133C15.516 22.0001 14.6917 22.0001 13.043 22.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCupPaper as IconComponentType).keywords = [
  "cup",
  "paper",
  "loving cup",
  "cupful",
  "transfuse",
  "chalice",
  "goblet",
  "bottle",
  "jar",
  "pot",
  "bowl",
  "wallpaper",
  "composition",
  "newspaper",
  "report",
  "theme",
  "newspaper publisher",
  "ink",
  "wallet",
  "stationery",
];

export default IconCupPaper as IconComponentType;
