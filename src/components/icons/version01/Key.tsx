import { FC } from "react";

const IconKey: FC<IconProps> = ({
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
            d="M15.6807 14.5874C19.1708 14.5874 22 11.7697 22 8.29392C22 4.81816 19.1708 2.00049 15.6807 2.00049C12.1907 2.00049 9.3615 4.81816 9.3615 8.29392C9.3615 9.90387 10.0963 11.0747 10.0963 11.0747L2.45441 18.6854C2.1115 19.0269 1.63143 19.9148 2.45441 20.7344L3.33616 21.6126C3.67905 21.9053 4.54119 22.3151 5.2466 21.6126L6.27531 20.5881C7.30403 21.6126 8.4797 21.0272 8.92058 20.4417C9.65538 19.4172 8.77362 18.3927 8.77362 18.3927L9.06754 18.1C10.4783 19.505 11.7128 18.6854 12.1537 18.1C12.8885 17.0755 12.1537 16.0509 12.1537 16.0509C11.8598 15.4655 11.272 15.4655 12.0067 14.7338L12.8885 13.8556C13.5939 14.441 15.0439 14.5874 15.6807 14.5874Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.8851 8.29402C17.8851 9.50649 16.8982 10.4894 15.6807 10.4894C14.4633 10.4894 13.4763 9.50649 13.4763 8.29402C13.4763 7.08154 14.4633 6.09863 15.6807 6.09863C16.8982 6.09863 17.8851 7.08154 17.8851 8.29402Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 8.29392C22 11.7697 19.1708 14.5874 15.6807 14.5874C15.0439 14.5874 13.5939 14.441 12.8885 13.8556L12.0067 14.7338C11.4883 15.2501 11.6283 15.4021 11.8589 15.6525C11.9551 15.757 12.0672 15.8786 12.1537 16.0509C12.1537 16.0509 12.8885 17.0755 12.1537 18.1C11.7128 18.6854 10.4783 19.505 9.06754 18.1L8.77362 18.3927C8.77362 18.3927 9.65538 19.4172 8.92058 20.4417C8.4797 21.0272 7.30403 21.6126 6.27531 20.5881L5.2466 21.6126C4.54119 22.3151 3.67905 21.9053 3.33616 21.6126L2.45441 20.7344C1.63143 19.9148 2.1115 19.0269 2.45441 18.6854L10.0963 11.0747C10.0963 11.0747 9.3615 9.90387 9.3615 8.29392C9.3615 4.81816 12.1907 2.00049 15.6807 2.00049C19.1708 2.00049 22 4.81816 22 8.29392Z"
            fill="currentColor"
          />
          <path
            d="M17.8853 8.29402C17.8853 9.50649 16.8984 10.4894 15.681 10.4894C14.4635 10.4894 13.4766 9.50649 13.4766 8.29402C13.4766 7.08154 14.4635 6.09863 15.681 6.09863C16.8984 6.09863 17.8853 7.08154 17.8853 8.29402Z"
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
            d="M22 8.29392C22 11.7697 19.1708 14.5874 15.6807 14.5874C15.0439 14.5874 13.5939 14.441 12.8885 13.8556L12.0067 14.7338C11.4883 15.2501 11.6283 15.4021 11.8589 15.6525C11.9551 15.757 12.0672 15.8786 12.1537 16.0509C12.1537 16.0509 12.8885 17.0755 12.1537 18.1C11.7128 18.6854 10.4783 19.505 9.06754 18.1L8.77362 18.3927C8.77362 18.3927 9.65538 19.4172 8.92058 20.4417C8.4797 21.0272 7.30403 21.6126 6.27531 20.5881L5.2466 21.6126C4.54119 22.3151 3.67905 21.9053 3.33616 21.6126L2.45441 20.7344C1.63143 19.9148 2.1115 19.0269 2.45441 18.6854L10.0963 11.0747C10.0963 11.0747 9.3615 9.90387 9.3615 8.29392C9.3615 4.81816 12.1907 2.00049 15.6807 2.00049C19.1708 2.00049 22 4.81816 22 8.29392ZM15.681 10.4894C16.8984 10.4894 17.8853 9.50649 17.8853 8.29402C17.8853 7.08154 16.8984 6.09863 15.681 6.09863C14.4635 6.09863 13.4766 7.08154 13.4766 8.29402C13.4766 9.50649 14.4635 10.4894 15.681 10.4894Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKey as IconComponent).keywords = [
  "key",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
];

export default IconKey as IconComponent;