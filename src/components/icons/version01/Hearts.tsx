import { FC } from "react";

const IconHearts: FC<IconProps> = ({
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
            d="M14.829 20.1696L15.2787 19.5694L15.2787 19.5694L14.829 20.1696ZM16.5 13.1587L15.973 13.6924C16.2651 13.9809 16.7349 13.9809 17.027 13.6924L16.5 13.1587ZM18.171 20.1696L17.7213 19.5694L17.7213 19.5694L18.171 20.1696ZM21.1474 12.9181L21.6899 12.4002V12.4002L21.1474 12.9181ZM14.4018 19.8542L13.9586 20.4592L14.4018 19.8542ZM11.75 15.0599C11.75 14.0908 12.3259 13.2726 13.1208 12.9272C13.8774 12.5985 14.9309 12.6632 15.973 13.6924L17.027 12.6251C15.5942 11.2101 13.8977 10.9542 12.523 11.5515C11.1866 12.1322 10.25 13.4866 10.25 15.0599H11.75ZM14.3792 20.7698C14.658 20.9787 14.9785 21.218 15.3082 21.4011C15.6385 21.5845 16.044 21.7504 16.5 21.7504V20.2504C16.406 20.2504 16.2615 20.2148 16.0365 20.0898C15.811 19.9645 15.5709 19.7883 15.2787 19.5694L14.3792 20.7698ZM18.6208 20.7698C19.3846 20.1974 20.4262 19.4969 21.2404 18.6254C22.0803 17.7264 22.75 16.5779 22.75 15.0599H21.25C21.25 16.0842 20.8143 16.8843 20.1443 17.6014C19.4486 18.346 18.5758 18.9291 17.7213 19.5694L18.6208 20.7698ZM17.7213 19.5694C17.4291 19.7883 17.189 19.9645 16.9635 20.0898C16.7385 20.2148 16.594 20.2504 16.5 20.2504V21.7504C16.956 21.7504 17.3615 21.5845 17.6918 21.4011C18.0215 21.218 18.342 20.9787 18.6208 20.7698L17.7213 19.5694ZM22.75 15.0599C22.75 14.026 22.3452 13.0867 21.6899 12.4002L20.6048 13.4359C21.0019 13.8519 21.25 14.4234 21.25 15.0599H22.75ZM21.6899 12.4002C21.0204 11.6988 20.0832 11.2556 19.0473 11.2504C18.0033 11.2451 16.9258 11.6842 15.973 12.6251L17.027 13.6924C17.7361 12.9921 18.4445 12.7474 19.0398 12.7504C19.6433 12.7534 20.1988 13.0105 20.6048 13.4359L21.6899 12.4002ZM15.2787 19.5694C15.1364 19.4628 14.9905 19.3557 14.845 19.2491L13.9586 20.4592C14.1043 20.5659 14.2442 20.6686 14.3792 20.7698L15.2787 19.5694ZM14.845 19.2491C13.2191 18.0582 11.75 16.9427 11.75 15.0599H10.25C10.25 17.8262 12.4773 19.3742 13.9586 20.4592L14.845 19.2491Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.96173 19.3388L9.43876 18.76H9.43876L8.96173 19.3388ZM12 5.31711L11.4482 5.82506C11.5902 5.97933 11.7903 6.06711 12 6.06711C12.2097 6.06711 12.4098 5.97933 12.5518 5.82506L12 5.31711ZM9.43876 18.76C6.38479 16.2428 2.75 13.773 2.75 9.11938H1.25C1.25 14.6351 5.65407 17.5844 8.4847 19.9175L9.43876 18.76ZM2.75 9.11938C2.75 6.83935 3.98228 4.94543 5.63598 4.15506C7.2323 3.39211 9.3864 3.58526 11.4482 5.82506L12.5518 4.80916C10.1138 2.16063 7.26786 1.71259 4.98914 2.80169C2.7678 3.86337 1.25 6.31475 1.25 9.11938H2.75ZM8.4847 19.9175C8.99677 20.3396 9.54665 20.7898 10.1042 21.1305C10.6606 21.4705 11.301 21.7504 12 21.7504V20.2504C11.699 20.2504 11.3394 20.1274 10.8862 19.8505C10.4342 19.5743 9.96496 19.1938 9.43876 18.76L8.4847 19.9175ZM22.75 9.11938C22.75 6.31475 21.2322 3.86337 19.0109 2.80169C16.7321 1.71259 13.8862 2.16063 11.4482 4.80916L12.5518 5.82506C14.6136 3.58526 16.7677 3.39211 18.364 4.15506C20.0177 4.94543 21.25 6.83935 21.25 9.11938H22.75ZM21.8239 13.2418C22.3995 12.0388 22.75 10.6783 22.75 9.11938H21.25C21.25 10.4428 20.9547 11.583 20.4708 12.5943L21.8239 13.2418ZM13.939 19.264C13.1119 19.9127 12.5056 20.2504 12 20.2504V21.7504C13.0828 21.7504 14.065 21.0715 14.8647 20.4443L13.939 19.264Z"
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
            d="M2 9.13746C2 14.0004 6.01943 16.5918 8.96173 18.9112C10 19.7297 11 20.5004 12 20.5004C13 20.5004 14 19.7297 15.0383 18.9112C17.9806 16.5918 22 14.0004 22 9.13746C22 4.27453 16.4998 0.82583 12 5.501C7.50016 0.82583 2 4.27453 2 9.13746Z"
            fill="currentColor"
          />
          <path
            d="M16.5 13.2874C14.0251 10.5717 11 12.575 11 15.3998C11 17.9587 12.814 19.4348 14.3584 20.6915L14.4018 20.7268C14.5474 20.8453 14.6903 20.9619 14.829 21.0773C15.4 21.5527 15.95 22.0004 16.5 22.0004C17.05 22.0004 17.6 21.5527 18.171 21.0773C19.7893 19.7299 22 18.2246 22 15.3998C22 14.4718 21.6735 13.6325 21.1474 13.02C20.0718 11.7681 18.1619 11.4639 16.5 13.2874Z"
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
            d="M16.5 13.2874C14.0251 10.5717 11 12.575 11 15.3998C11 17.9587 12.814 19.4348 14.3584 20.6915L14.4018 20.7268C14.5474 20.8453 14.6903 20.9619 14.829 21.0773C15.4 21.5527 15.95 22.0004 16.5 22.0004C17.05 22.0004 17.6 21.5527 18.171 21.0773C19.7893 19.7299 22 18.2246 22 15.3998C22 14.4718 21.6735 13.6325 21.1474 13.02C20.0718 11.7681 18.1619 11.4639 16.5 13.2874Z"
            fill="currentColor"
          />
          <path
            d="M8.10627 18.2472C5.29819 16.0837 2 13.5425 2 9.13746C2 4.27453 7.50016 0.82583 12 5.501C16.4998 0.82583 22 4.27453 22 9.13746C22 9.97104 21.8819 10.7379 21.6714 11.448C20.9524 10.8705 20.051 10.506 19.052 10.5004C18.162 10.4954 17.2936 10.7748 16.4988 11.3105C15.1099 10.3776 13.5429 10.2522 12.1698 10.9151C10.5345 11.7045 9.5 13.4709 9.5 15.3998C9.5 17.705 10.6485 19.322 11.8415 20.494C10.8942 20.4188 9.94514 19.6865 8.96173 18.9112C8.68471 18.6929 8.39814 18.4721 8.10627 18.2472Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHearts as IconComponent).keywords = [
  "hearts",
  "black maria",
  "courageous",
  "rote",
  "sympathy",
  "condolences",
  "central",
  "spirits",
  "core",
  "wills",
];

export default IconHearts as IconComponent;
