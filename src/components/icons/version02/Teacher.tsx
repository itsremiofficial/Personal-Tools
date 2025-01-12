import { FC } from "react";

const IconTeacher: FC<IconProps> = ({
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
            d="M10.7199 2.53004L4.69994 6.46004C2.76994 7.72004 2.76994 10.54 4.69994 11.8L10.7199 15.73C11.7999 16.44 13.5799 16.44 14.6599 15.73L20.6499 11.8C22.5699 10.54 22.5699 7.73004 20.6499 6.47004L14.6599 2.54004C13.5799 1.82004 11.7999 1.82004 10.7199 2.53004Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.30004 13.0801L6.29004 17.7701C6.29004 19.0401 7.27004 20.4001 8.47004 20.8001L11.66 21.8601C12.21 22.0401 13.12 22.0401 13.68 21.8601L16.87 20.8001C18.07 20.4001 19.05 19.0401 19.05 17.7701V13.1301"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.0698 15V9"
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
            d="M19.05 12.8401V17.7701C19.05 19.0401 18.06 20.4001 16.87 20.8001L13.68 21.8601C13.12 22.0501 12.21 22.0501 11.66 21.8601L8.47004 20.8001C7.27004 20.4001 6.29004 19.0401 6.29004 17.7701L6.30004 12.8401L10.72 15.7201C11.8 16.4301 13.58 16.4301 14.66 15.7201L19.05 12.8401Z"
            fill="currentColor"
          />
          <path
            d="M20.6499 6.46006L14.6599 2.53006C13.5799 1.82006 11.7999 1.82006 10.7199 2.53006L4.69994 6.46006C2.76994 7.71006 2.76994 10.5401 4.69994 11.8001L6.29994 12.8401L10.7199 15.7201C11.7999 16.4301 13.5799 16.4301 14.6599 15.7201L19.0499 12.8401L20.4199 11.9401V15.0001C20.4199 15.4101 20.7599 15.7501 21.1699 15.7501C21.5799 15.7501 21.9199 15.4101 21.9199 15.0001V10.0801C22.3199 8.79006 21.9099 7.29006 20.6499 6.46006Z"
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
            d="M17.5 15.6399C18.17 15.1999 19.05 15.6799 19.05 16.4799V17.7699C19.05 19.0399 18.06 20.3999 16.87 20.7999L13.68 21.8599C13.12 22.0499 12.21 22.0499 11.66 21.8599L8.47004 20.7999C7.27004 20.3999 6.29004 19.0399 6.29004 17.7699V16.4699C6.29004 15.6799 7.17004 15.1999 7.83004 15.6299L9.89004 16.9699C10.68 17.4999 11.68 17.7599 12.68 17.7599C13.68 17.7599 14.68 17.4999 15.47 16.9699L17.5 15.6399Z"
            fill="currentColor"
          />
          <path
            d="M20.6499 6.46006L14.6599 2.53006C13.5799 1.82006 11.7999 1.82006 10.7199 2.53006L4.69994 6.46006C2.76994 7.71006 2.76994 10.5401 4.69994 11.8001L6.29994 12.8401L10.7199 15.7201C11.7999 16.4301 13.5799 16.4301 14.6599 15.7201L19.0499 12.8401L20.4199 11.9401V15.0001C20.4199 15.4101 20.7599 15.7501 21.1699 15.7501C21.5799 15.7501 21.9199 15.4101 21.9199 15.0001V10.0801C22.3199 8.79006 21.9099 7.29006 20.6499 6.46006Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTeacher as IconComponent).keywords = [
  "teacher",
  "instructor",
  "schoolmaster",
  "schoolteacher",
  "educator",
  "pedagogue",
  "professor",
  "professorial",
  "faculty",
  "lecturer",
];

export default IconTeacher as IconComponent;
