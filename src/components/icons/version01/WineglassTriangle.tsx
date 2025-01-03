import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWineglassTriangle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2439 21.0001H7.7561M4.70095 3.00012H19.2991C20.7999 3.00012 21.5624 4.79421 20.5162 5.86394L12.7149 13.8406C12.3227 14.2416 11.6773 14.2416 11.2851 13.8406L3.48381 5.86394C2.43759 4.79421 3.20008 3.00012 4.70095 3.00012Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 14.5714V21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7.47314 9.75012H16.5268" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M19.2991 3.00012H4.70095C3.20008 3.00012 2.43759 4.79421 3.48381 5.86394L11.2851 13.8406C11.6773 14.2416 12.3227 14.2416 12.7149 13.8406L20.5162 5.86394C21.5624 4.79421 20.7999 3.00012 19.2991 3.00012Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.00604 21.0001C7.00604 20.5859 7.34183 20.2501 7.75604 20.2501H16.2438C16.6581 20.2501 16.9938 20.5859 16.9938 21.0001C16.9938 21.4143 16.6581 21.7501 16.2438 21.7501H7.75604C7.34183 21.7501 7.00604 21.4143 7.00604 21.0001Z" fill="currentColor" /><path d="M11.2851 13.8406C11.6773 14.2416 12.3227 14.2416 12.7149 13.8406L16.4709 10.0001H7.52905L11.2851 13.8406Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M11.2853 13.8407C11.6776 14.2417 12.3229 14.2417 12.7152 13.8407L12.75 13.805V20.2501H11.25V13.8046L11.2853 13.8407Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2991 3.00012H4.70095C3.20008 3.00012 2.43759 4.79421 3.48381 5.86394L6.23508 9.00012H17.7649L20.5162 5.86394C21.5624 4.79421 20.7999 3.00012 19.2991 3.00012Z" fill="currentColor" /><path d="M16.449 10.5001H7.55099L11.2498 14.7163V20.25H7.75586C7.34165 20.25 7.00586 20.5858 7.00586 21C7.00586 21.4142 7.34165 21.75 7.75586 21.75H16.2437C16.6579 21.75 16.9937 21.4142 16.9937 21C16.9937 20.5858 16.6579 20.25 16.2437 20.25H12.7498V14.7169L16.449 10.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWineglassTriangle as IconComponentType).keywords = [
  "wineglass",
  "triangle",
  "wineglasses",
  "goblet",
  "stemware",
  "decanter",
  "wineglassful",
  "glass",
  "carafe",
  "goblets",
  "vase",
  "trigon",
  "trilateral",
  "triangular",
  "direction",
  "tripartite",
  "trio",
  "triptych",
  "delta",
  "wye"
];

export default IconWineglassTriangle as IconComponentType;