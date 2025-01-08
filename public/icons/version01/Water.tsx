import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWater: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.78643C20.4123 8.43458 19.5955 7.57018 18.9199 6.60883C18.4965 6.00639 17.5655 6.04301 17.1055 6.62125C16.0541 7.94317 14.4844 9.00049 12 9.00049C9.49345 9.00049 7.91806 7.6552 6.86651 6.38926C6.42721 5.8604 5.58617 5.86746 5.20168 6.43281C4.50078 7.46337 3.68402 8.41323 2 8.78643" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 18.7864C20.4123 18.4346 19.5955 17.5702 18.9199 16.6088C18.4965 16.0064 17.5655 16.043 17.1055 16.6212C16.0541 17.9432 14.4844 19.0005 12 19.0005C9.49345 19.0005 7.91806 17.6552 6.86651 16.3893C6.42721 15.8604 5.58617 15.8675 5.20168 16.4328C4.50078 17.4634 3.68402 18.4132 2 18.7864" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 13.7864C20.4123 13.4346 19.5955 12.5702 18.9199 11.6088C18.4965 11.0064 17.5655 11.043 17.1055 11.6212C16.0541 12.9432 14.4844 14.0005 12 14.0005C9.49345 14.0005 7.91806 12.6552 6.86651 11.3893C6.42721 10.8604 5.58617 10.8675 5.20168 11.4328C4.50078 12.4634 3.68402 13.4132 2 13.7864" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.58143 6.0111C5.2722 4.99543 6.71504 5.03332 7.44335 5.91011C8.42532 7.09228 9.80968 8.25056 11.9999 8.25056C14.2277 8.25056 15.5908 7.32068 16.5185 6.15444C17.2399 5.24747 18.7773 5.10176 19.5335 6.17766C20.1519 7.05764 20.8279 7.75856 22.1622 8.05426C22.5666 8.14388 22.8218 8.54436 22.7322 8.94877C22.6425 9.35317 22.242 9.60835 21.8376 9.51873C19.9966 9.11075 19.039 8.08286 18.3062 7.04013C18.2576 6.97097 18.1707 6.9199 18.0397 6.92224C17.9037 6.92466 17.7729 6.98695 17.6924 7.08819C16.5171 8.56579 14.741 9.75056 11.9999 9.75056C9.17705 9.75056 7.41063 8.21826 6.2895 6.86856C6.22425 6.79001 6.12726 6.74863 6.0286 6.75062C5.93325 6.75255 5.86388 6.79272 5.82176 6.85466C5.07558 7.9518 4.11832 9.08523 2.16219 9.51873C1.75778 9.60835 1.3573 9.35317 1.26768 8.94877C1.17806 8.54436 1.43324 8.14388 1.83765 8.05426C3.24956 7.74137 3.92582 6.97509 4.58143 6.0111ZM4.58143 16.0111C5.2722 14.9954 6.71504 15.0333 7.44335 15.9101C8.42532 17.0923 9.80968 18.2506 11.9999 18.2506C14.2277 18.2506 15.5908 17.3207 16.5185 16.1544C17.2399 15.2475 18.7773 15.1018 19.5335 16.1777C20.1519 17.0576 20.8279 17.7586 22.1622 18.0543C22.5666 18.1439 22.8218 18.5444 22.7322 18.9488C22.6425 19.3532 22.242 19.6083 21.8376 19.5187C19.9966 19.1107 19.039 18.0829 18.3062 17.0401C18.2576 16.971 18.1707 16.9199 18.0397 16.9222C17.9037 16.9247 17.7729 16.987 17.6924 17.0882C16.5171 18.5658 14.741 19.7506 11.9999 19.7506C9.17705 19.7506 7.41063 18.2183 6.2895 16.8686C6.22425 16.79 6.12726 16.7486 6.0286 16.7506C5.93325 16.7525 5.86388 16.7927 5.82176 16.8547C5.07558 17.9518 4.11832 19.0852 2.16219 19.5187C1.75778 19.6083 1.3573 19.3532 1.26768 18.9488C1.17806 18.5444 1.43324 18.1439 1.83765 18.0543C3.24956 17.7414 3.92582 16.9751 4.58143 16.0111Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4.58167 11.0109C5.27244 9.99518 6.71529 10.0331 7.44359 10.9099C8.42557 12.092 9.80993 13.2503 12.0002 13.2503C14.2279 13.2503 15.5911 12.3204 16.5187 11.1542C17.2401 10.2472 18.7776 10.1015 19.5337 11.1774C20.1521 12.0574 20.8281 12.7583 22.1624 13.054C22.5668 13.1436 22.822 13.5441 22.7324 13.9485C22.6428 14.3529 22.2423 14.6081 21.8379 14.5185C19.9969 14.1105 19.0392 13.0826 18.3064 12.0399C18.2578 11.9707 18.171 11.9197 18.04 11.922C17.904 11.9244 17.7732 11.9867 17.6927 12.0879C16.5174 13.5656 14.7413 14.7503 12.0002 14.7503C9.1773 14.7503 7.41088 13.218 6.28974 11.8683C6.2245 11.7898 6.1275 11.7484 6.02885 11.7504C5.93349 11.7523 5.86412 11.7925 5.822 11.8544C5.07583 12.9516 4.11857 14.085 2.16243 14.5185C1.75803 14.6081 1.35754 14.3529 1.26793 13.9485C1.17831 13.5441 1.43349 13.1436 1.83789 13.054C3.2498 12.7411 3.92606 11.9748 4.58167 11.0109Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.58143 6.0111C5.2722 4.99543 6.71504 5.03332 7.44335 5.91011C8.42532 7.09228 9.80968 8.25056 11.9999 8.25056C14.2277 8.25056 15.5908 7.32068 16.5185 6.15444C17.2399 5.24747 18.7773 5.10176 19.5335 6.17766C20.1519 7.05764 20.8279 7.75856 22.1622 8.05426C22.5666 8.14388 22.8218 8.54436 22.7322 8.94877C22.6425 9.35317 22.242 9.60835 21.8376 9.51873C19.9966 9.11075 19.039 8.08286 18.3062 7.04013C18.2576 6.97097 18.1707 6.9199 18.0397 6.92224C17.9037 6.92466 17.7729 6.98695 17.6924 7.08819C16.5171 8.56579 14.741 9.75056 11.9999 9.75056C9.17705 9.75056 7.41063 8.21826 6.2895 6.86856L6.86642 6.38933L6.2895 6.86856C6.22425 6.79001 6.12726 6.74863 6.0286 6.75062C5.93325 6.75255 5.86388 6.79272 5.82176 6.85466C5.07558 7.9518 4.11832 9.08523 2.16219 9.51873C1.75778 9.60835 1.3573 9.35317 1.26768 8.94877C1.17806 8.54436 1.43324 8.14388 1.83765 8.05426C3.24956 7.74137 3.92582 6.97509 4.58143 6.0111ZM4.58143 11.0111C5.2722 9.99543 6.71504 10.0333 7.44335 10.9101C8.42532 12.0923 9.80968 13.2506 11.9999 13.2506C14.2277 13.2506 15.5908 12.3207 16.5185 11.1544C17.2399 10.2475 18.7773 10.1018 19.5335 11.1777C20.1519 12.0576 20.8279 12.7586 22.1622 13.0543C22.5666 13.1439 22.8218 13.5444 22.7322 13.9488C22.6425 14.3532 22.242 14.6083 21.8376 14.5187C19.9966 14.1107 19.039 13.0829 18.3062 12.0401C18.2576 11.971 18.1707 11.9199 18.0397 11.9222C17.9037 11.9247 17.7729 11.987 17.6924 12.0882C16.5171 13.5658 14.741 14.7506 11.9999 14.7506C9.17705 14.7506 7.41063 13.2183 6.2895 11.8686C6.22425 11.79 6.12726 11.7486 6.0286 11.7506C5.93325 11.7526 5.86388 11.7927 5.82176 11.8547C5.07558 12.9518 4.11832 14.0852 2.16219 14.5187C1.75778 14.6083 1.3573 14.3532 1.26768 13.9488C1.17806 13.5444 1.43324 13.1439 1.83765 13.0543C3.24956 12.7414 3.92582 11.9751 4.58143 11.0111ZM4.58143 16.0111C5.2722 14.9954 6.71504 15.0333 7.44335 15.9101C8.42532 17.0923 9.80968 18.2506 11.9999 18.2506C14.2277 18.2506 15.5908 17.3207 16.5185 16.1544C17.2399 15.2475 18.7773 15.1018 19.5335 16.1777C20.1519 17.0576 20.8279 17.7586 22.1622 18.0543C22.5666 18.1439 22.8218 18.5444 22.7322 18.9488C22.6425 19.3532 22.242 19.6083 21.8376 19.5187C19.9966 19.1107 19.039 18.0829 18.3062 17.0401C18.2576 16.971 18.1707 16.9199 18.0397 16.9222C17.9037 16.9247 17.7729 16.987 17.6924 17.0882C16.5171 18.5658 14.741 19.7506 11.9999 19.7506C9.17705 19.7506 7.41063 18.2183 6.2895 16.8686C6.22425 16.79 6.12726 16.7486 6.0286 16.7506C5.93325 16.7525 5.86388 16.7927 5.82176 16.8547C5.07558 17.9518 4.11832 19.0852 2.16219 19.5187C1.75778 19.6083 1.3573 19.3532 1.26768 18.9488C1.17806 18.5444 1.43324 18.1439 1.83765 18.0543C3.24956 17.7414 3.92582 16.9751 4.58143 16.0111Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWater as IconComponentType).keywords = [
  "water",
  "body of water",
  "irrigate",
  "water supply",
  "sweat",
  "weewee",
  "sudor",
  "perspiration",
  "diaphoresis",
  "hidrosis"
];

export default IconWater as IconComponentType;