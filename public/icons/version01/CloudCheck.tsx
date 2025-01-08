import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M10 19.8L11.1429 21L14 18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M6.50001 18L6.50001 17.9105C6.49991 17.0449 6.49981 16.2512 6.58661 15.6056C6.6822 14.8946 6.90709 14.1432 7.52514 13.5251C8.14319 12.9071 8.89464 12.6822 9.6056 12.5866C10.2512 12.4998 11.0449 12.4999 11.9105 12.5H12.0895C12.9551 12.4999 13.7488 12.4998 14.3944 12.5866C15.1054 12.6822 15.8568 12.9071 16.4749 13.5251C17.0929 14.1432 17.3178 14.8946 17.4134 15.6056C17.4989 16.2417 17.5001 17.0215 17.5 17.8722C20.0726 17.3221 22 15.0599 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18L6.50001 18Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18C8 16.1144 8 15.1716 8.58579 14.5858C9.17157 14 10.1144 14 12 14C13.8856 14 14.8284 14 15.4142 14.5858C16 15.1716 16 16.1144 16 18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22ZM14.2492 17.1381C14.5095 16.8777 14.5095 16.4556 14.2492 16.1953C13.9888 15.9349 13.5667 15.9349 13.3064 16.1953L11.1111 18.3905L10.6936 17.973C10.4333 17.7127 10.0112 17.7127 9.75082 17.973C9.49047 18.2334 9.49047 18.6555 9.75082 18.9158L10.6397 19.8047C10.9001 20.0651 11.3222 20.0651 11.5825 19.8047L14.2492 17.1381Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18C8 16.1144 8 15.1716 8.58579 14.5858C9.17157 14 10.1144 14 12 14C13.8856 14 14.8284 14 15.4142 14.5858C16 15.1716 16 16.1144 16 18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22ZM14.2492 17.1381C14.5095 16.8777 14.5095 16.4556 14.2492 16.1953C13.9888 15.9349 13.5667 15.9349 13.3064 16.1953L11.1111 18.3905L10.6936 17.973C10.4333 17.7127 10.0112 17.7127 9.75082 17.973C9.49047 18.2334 9.49047 18.6555 9.75082 18.9158L10.6397 19.8047C10.9001 20.0651 11.3222 20.0651 11.5825 19.8047L14.2492 17.1381Z" fill="currentColor" /><path d="M6.50001 18L6.50001 17.9105C6.49991 17.0449 6.49981 16.2512 6.58661 15.6056C6.6822 14.8946 6.90709 14.1432 7.52514 13.5251C8.14319 12.9071 8.89464 12.6822 9.6056 12.5866C10.2512 12.4998 11.0449 12.4999 11.9105 12.5H12.0895C12.9551 12.4999 13.7488 12.4998 14.3944 12.5866C15.1054 12.6822 15.8568 12.9071 16.4749 13.5251C17.0929 14.1432 17.3178 14.8946 17.4134 15.6056C17.4989 16.2417 17.5001 17.0215 17.5 17.8722C20.0726 17.3221 22 15.0599 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18L6.50001 18Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudCheck as IconComponentType).keywords = [
  "cloud",
  "check",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconCloudCheck as IconComponentType;