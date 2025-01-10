import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMusicLibrary: FC<IconProps> = ({
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
            d="M2.90565 13.793C2.48385 10.6294 2.27294 9.04765 3.16932 8.02383C4.0657 7 5.66147 7 8.85302 7H15.1468C18.3384 7 19.9341 7 20.8305 8.02383C21.7269 9.04765 21.516 10.6294 21.0942 13.793L20.6942 16.793C20.3634 19.2739 20.198 20.5143 19.3495 21.2572C18.5011 22 17.2497 22 14.7468 22H9.25302C6.75018 22 5.49877 22 4.6503 21.2572C3.80183 20.5143 3.63644 19.2739 3.30565 16.793L2.90565 13.793Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.562 7C19.7906 5.69523 18.7866 4.5 17.4619 4.5H6.53812C5.21347 4.5 4.20946 5.69523 4.43809 7M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12.5606 12.699L12.2076 13.3608L12.2076 13.3608L12.5606 12.699ZM13.4429 13.1696L13.7958 12.5079V12.5079L13.4429 13.1696ZM14.4394 11.3011L14.7924 10.6393L14.7924 10.6393L14.4394 11.3011ZM13.5571 10.8305L13.91 10.1688L13.91 10.1688L13.5571 10.8305ZM12.0018 11.6062L12.7505 11.6516V11.6516L12.0018 11.6062ZM13.4163 10.7575L13.1041 11.4394L13.1041 11.4394L13.4163 10.7575ZM14.9995 12.1683L15.7491 12.1445V12.1445L14.9995 12.1683ZM14.4984 11.3331L14.8722 10.6829L14.8722 10.6829L14.4984 11.3331ZM13.5837 13.2426L13.8959 12.5607L13.8959 12.5607L13.5837 13.2426ZM14.9982 12.394L14.2495 12.3486V12.3486L14.9982 12.394ZM12.5016 12.667L12.1278 13.3172L12.1278 13.3172L12.5016 12.667ZM12.0005 11.8319L11.2509 11.8557V11.8557L12.0005 11.8319ZM11.25 16.5001C11.25 16.9143 10.9142 17.2501 10.5 17.2501V18.7501C11.7426 18.7501 12.75 17.7427 12.75 16.5001H11.25ZM10.5 17.2501C10.0858 17.2501 9.75 16.9143 9.75 16.5001H8.25C8.25 17.7427 9.25736 18.7501 10.5 18.7501V17.2501ZM9.75 16.5001C9.75 16.0859 10.0858 15.7501 10.5 15.7501V14.2501C9.25736 14.2501 8.25 15.2574 8.25 16.5001H9.75ZM10.5 15.7501C10.9142 15.7501 11.25 16.0859 11.25 16.5001H12.75C12.75 15.2574 11.7426 14.2501 10.5 14.2501V15.7501ZM12.75 16.5001V12.0001H11.25V16.5001H12.75ZM12.2076 13.3608L13.09 13.8314L13.7958 12.5079L12.9135 12.0373L12.2076 13.3608ZM14.7924 10.6393L13.91 10.1688L13.2042 11.4923L14.0865 11.9629L14.7924 10.6393ZM12.75 11.7648C12.75 11.7206 12.75 11.6925 12.7502 11.6716C12.7504 11.65 12.7507 11.6471 12.7505 11.6516L11.2532 11.5607C11.2496 11.6199 11.25 11.6927 11.25 11.7648H12.75ZM13.91 10.1688C13.8464 10.1348 13.7824 10.1002 13.7285 10.0756L13.1041 11.4394C13.1 11.4376 13.1027 11.4386 13.1218 11.4486C13.1404 11.4583 13.1652 11.4715 13.2042 11.4923L13.91 10.1688ZM12.7505 11.6516C12.7611 11.4763 12.9444 11.3663 13.1041 11.4394L13.7285 10.0756C12.6108 9.56386 11.3277 10.3337 11.2532 11.5607L12.7505 11.6516ZM15.75 12.2354C15.75 12.2063 15.7501 12.1751 15.7491 12.1445L14.2499 12.1921C14.2498 12.1913 14.2499 12.1925 14.25 12.1995C14.25 12.2072 14.25 12.2174 14.25 12.2354H15.75ZM14.0865 11.9629C14.1023 11.9713 14.1113 11.9761 14.1181 11.9798C14.1243 11.9831 14.1253 11.9838 14.1246 11.9833L14.8722 10.6829C14.8456 10.6676 14.8181 10.6531 14.7924 10.6393L14.0865 11.9629ZM15.7491 12.1445C15.7298 11.5382 15.398 10.9852 14.8722 10.6829L14.1246 11.9833C14.1997 12.0265 14.2471 12.1055 14.2499 12.1921L15.7491 12.1445ZM13.09 13.8314C13.1536 13.8653 13.2176 13.8999 13.2715 13.9246L13.8959 12.5607C13.9 12.5626 13.8973 12.5615 13.8782 12.5515C13.8596 12.5419 13.8348 12.5287 13.7958 12.5079L13.09 13.8314ZM14.25 12.2354C14.25 12.2796 14.25 12.3076 14.2498 12.3286C14.2496 12.3501 14.2493 12.353 14.2495 12.3486L15.7468 12.4394C15.7504 12.3803 15.75 12.3075 15.75 12.2354H14.25ZM13.2715 13.9246C14.3892 14.4363 15.6723 13.6664 15.7468 12.4394L14.2495 12.3486C14.2389 12.5238 14.0556 12.6338 13.8959 12.5607L13.2715 13.9246ZM12.9135 12.0373C12.8977 12.0288 12.8887 12.024 12.8819 12.0203C12.8757 12.017 12.8746 12.0164 12.8754 12.0168L12.1278 13.3172C12.1544 13.3325 12.1819 13.3471 12.2076 13.3608L12.9135 12.0373ZM11.25 11.7648C11.25 11.7939 11.2499 11.8251 11.2509 11.8557L12.7501 11.808C12.7502 11.8089 12.7501 11.8076 12.75 11.8007C12.75 11.7929 12.75 11.7827 12.75 11.7648H11.25ZM12.8754 12.0168C12.8003 11.9736 12.7529 11.8946 12.7501 11.808L11.2509 11.8557C11.2702 12.4619 11.602 13.0149 12.1278 13.3172L12.8754 12.0168Z"
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
          <g opacity={duotone ? "0.7" : "1"}>
            <path
              d="M6.87957 4.72314C5.62801 4.72314 4.60177 5.56289 4.2593 6.67692C4.25216 6.70014 4.24531 6.72349 4.23877 6.74694C4.5971 6.62637 4.97003 6.5476 5.34755 6.49383C6.31989 6.35532 7.54869 6.3554 8.97612 6.35548L9.08272 6.35549L15.179 6.35548C16.6064 6.3554 17.8352 6.35532 18.8076 6.49383C19.1851 6.5476 19.558 6.62637 19.9164 6.74694C19.9098 6.72349 19.903 6.70014 19.8958 6.67692C19.5534 5.56289 18.5271 4.72314 17.2756 4.72314H6.87957Z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.85899 2.00001H15.1411C15.3503 1.99995 15.5107 1.99991 15.651 2.01515C16.648 2.12351 17.4641 2.78957 17.8101 3.68676H6.18994C6.53601 2.78957 7.35208 2.12351 8.34912 2.01515C8.48935 1.99991 8.64976 1.99995 8.85899 2.00001Z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9948 7.54199H9.00515C5.96782 7.54199 4.44915 7.54199 3.59609 8.52881C2.74302 9.51563 2.94373 11.0402 3.34516 14.0894L3.72583 16.981C4.04063 19.3722 4.19803 20.5678 5.0055 21.2838C5.81297 21.9998 7.00392 21.9998 9.38581 21.9998H14.6142C16.9961 21.9998 18.187 21.9998 18.9945 21.2838C19.802 20.5678 19.9594 19.3722 20.2742 16.981L20.6548 14.0894C21.0563 11.0402 21.257 9.51563 20.4039 8.52881C19.5509 7.54199 18.0322 7.54199 14.9948 7.54199ZM14.5885 10.1651C13.3569 9.63888 11.9428 10.4305 11.8607 11.6925C11.8571 11.7476 11.8571 11.8163 11.8571 11.8993L11.8571 11.9262C11.8571 11.9559 11.8571 11.9823 11.8578 12.0077L11.8574 15.5219C11.4791 15.3177 11.0399 15.2008 10.5714 15.2008C9.15135 15.2008 8 16.275 8 17.6004C8 18.9257 9.15135 20 10.5714 20C11.9915 20 13.1428 18.9257 13.1429 17.6004L13.1433 13.6814L14.0713 14.1433C14.1498 14.1824 14.2148 14.2147 14.2686 14.2377C15.5003 14.7639 16.9144 13.9723 16.9965 12.7103C17 12.6552 17 12.5864 17 12.5034L17 12.4766C17 12.4427 17 12.413 16.999 12.3842C16.9778 11.7607 16.6121 11.1919 16.0326 10.8811C16.0057 10.8667 15.9777 10.8527 15.9456 10.8368L14.7858 10.2595C14.7074 10.2205 14.6423 10.188 14.5885 10.1651Z"
            fill="currentColor"
          />
          <path
            d="M13.144 11.7652C13.1713 11.3448 13.6426 11.0807 14.0533 11.2562L15.3918 11.9215C15.585 12.0251 15.7068 12.2146 15.7139 12.4224C15.7141 12.4296 15.7142 12.4388 15.7142 12.4838C15.7142 12.5972 15.7139 12.6246 15.713 12.6377C15.6857 13.0582 15.2144 13.3222 14.8037 13.1468C14.7908 13.1413 14.7648 13.1287 14.6576 13.0753L13.5231 12.5107C13.4806 12.4895 13.472 12.4851 13.4652 12.4815C13.272 12.3779 13.1502 12.1883 13.1431 11.9806C13.1429 11.9733 13.1428 11.9642 13.1428 11.9192C13.1428 11.8058 13.1431 11.7784 13.144 11.7652Z"
            fill="currentColor"
          />
          <path
            d="M10.5714 16.4008C11.2815 16.4008 11.857 16.9379 11.8571 17.6004C11.8571 18.2629 11.2815 18.8002 10.5714 18.8002C9.8612 18.8002 9.28564 18.263 9.28564 17.6005C9.28564 16.938 9.8612 16.4008 10.5714 16.4008Z"
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
            d="M8.8589 2.00001H15.141C15.3502 1.99995 15.5106 1.99991 15.6509 2.01515C16.6479 2.12351 17.464 2.78957 17.81 3.68676H6.18985C6.53591 2.78957 7.35199 2.12351 8.34903 2.01515C8.48926 1.99991 8.64967 1.99995 8.8589 2.00001Z"
            fill="currentColor"
          />
          <path
            d="M6.87946 4.72309C5.6279 4.72309 4.60167 5.56284 4.25919 6.67687C4.25205 6.70009 4.24521 6.72343 4.23866 6.74689C4.597 6.62632 4.96993 6.54755 5.34745 6.49378C6.31978 6.35527 7.54859 6.35534 8.97602 6.35543L9.08261 6.35543L15.1789 6.35543C16.6063 6.35534 17.8351 6.35527 18.8075 6.49378C19.185 6.54755 19.5579 6.62632 19.9163 6.74689C19.9097 6.72343 19.9029 6.70009 19.8957 6.67687C19.5533 5.56284 18.527 4.72309 17.2755 4.72309H6.87946Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.00515 7.54199H14.9948C18.0322 7.54199 19.5509 7.54199 20.4039 8.52881C21.257 9.51563 21.0563 11.0402 20.6548 14.0894L20.2742 16.981C19.9594 19.3722 19.802 20.5678 18.9945 21.2838C18.187 21.9998 16.9961 21.9998 14.6142 21.9998H9.38583C7.00393 21.9998 5.81298 21.9998 5.0055 21.2838C4.19803 20.5678 4.04063 19.3722 3.72583 16.981L3.34516 14.0894C2.94373 11.0402 2.74302 9.51563 3.59609 8.52881C4.44915 7.54199 5.96782 7.54199 9.00515 7.54199ZM11.8607 11.6925C11.9428 10.4305 13.3569 9.63888 14.5885 10.1651C14.6423 10.1881 14.7073 10.2204 14.7858 10.2595L14.8045 10.2688L15.9456 10.8367C15.9777 10.8527 16.0057 10.8667 16.0326 10.8811C16.6121 11.1919 16.9778 11.7607 16.999 12.3841C17 12.413 17 12.4427 17 12.4766V12.4837L17 12.5034C17 12.5864 17 12.6552 16.9965 12.7103C16.9144 13.9723 15.5003 14.7639 14.2686 14.2377C14.2148 14.2147 14.1498 14.1824 14.0713 14.1433L14.0527 14.134L13.1433 13.6814L13.1429 17.6004C13.1428 18.9257 11.9915 20 10.5714 20C9.15135 20 8 18.9257 8 17.6004C8 16.275 9.15135 15.2008 10.5714 15.2008C11.0399 15.2008 11.4791 15.3177 11.8574 15.5219L11.8578 12.0077C11.8571 11.9823 11.8571 11.9559 11.8571 11.9262L11.8571 11.9191L11.8571 11.8994C11.8571 11.8164 11.8571 11.7476 11.8607 11.6925Z"
            fill="currentColor"
          />
          <path
            d="M10.5714 16.4007C11.2816 16.4007 11.8571 16.9378 11.8571 17.6003C11.8571 18.2628 11.2816 18.8001 10.5714 18.8001C9.86127 18.8001 9.28571 18.2629 9.28571 17.6004C9.28571 16.9379 9.86127 16.4007 10.5714 16.4007Z"
            fill="currentColor"
          />
          <path
            d="M14.0533 11.2561C13.6426 11.0807 13.1714 11.3447 13.144 11.7651C13.1432 11.7783 13.1429 11.8057 13.1429 11.9191C13.1429 11.9641 13.1429 11.9733 13.1432 11.9805C13.1503 12.1883 13.2721 12.3778 13.4653 12.4814C13.472 12.4851 13.4807 12.4894 13.5232 12.5106L14.6576 13.0752C14.7649 13.1286 14.7909 13.1412 14.8038 13.1467C15.2145 13.3221 15.6858 13.0581 15.7131 12.6377C15.714 12.6245 15.7143 12.5971 15.7143 12.4837C15.7143 12.4387 15.7142 12.4296 15.714 12.4223C15.7069 12.2145 15.585 12.025 15.3919 11.9214L14.0533 11.2561Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicLibrary as IconComponentType).keywords = [
  "music",
  "library",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "depository library",
  "program library",
  "librarianship",
  "librarian",
  "bookstore",
  "catalogue",
  "bookselling",
  "bookshop",
  "bibliotheca",
];

export default IconMusicLibrary as IconComponentType;
