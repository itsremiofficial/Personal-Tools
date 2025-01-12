import { FC } from 'react';

const IconFireMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.0004C16.4183 21.0004 20 17.6443 20 13.5044C20 9.76293 17.9654 6.83848 16.562 5.44473C16.3017 5.18621 15.8683 5.30043 15.7212 5.63325C14.9742 7.32326 13.4178 9.75644 11.4286 9.75644C10.1975 9.92123 8.31688 8.86881 9.83483 3.64905C9.97151 3.17905 9.46972 2.8015 9.08645 3.11576C6.9046 4.90472 4 8.5118 4 13.5044C4 17.6443 7.58172 21.0004 12 21.0004Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 21.0004C16.4183 21.0004 20 17.6443 20 13.5044C20 9.76293 17.9654 6.83848 16.562 5.44473C16.3017 5.18621 15.8683 5.30043 15.7212 5.63325C14.9742 7.32326 13.4178 9.75644 11.4286 9.75644C10.1975 9.92123 8.31688 8.86881 9.83483 3.64905C9.97151 3.17905 9.46972 2.8015 9.08645 3.11576C6.9046 4.90472 4 8.5118 4 13.5044C4 17.6443 7.58172 21.0004 12 21.0004Z" fill="currentColor" /><path d="M4.4766 16.059C6.08562 13.6142 8.85435 12.0004 12 12.0004C15.1457 12.0004 17.9144 13.6142 19.5234 16.059C19.8318 15.2618 20 14.4015 20 13.5044C20 9.76293 17.9654 6.83848 16.562 5.44473C16.3017 5.18621 15.8683 5.30043 15.7212 5.63325C14.9742 7.32326 13.4178 9.75644 11.4286 9.75644C10.1975 9.92123 8.31688 8.86881 9.83483 3.64905C9.97151 3.17905 9.46972 2.8015 9.08645 3.11576C6.9046 4.90472 4 8.5118 4 13.5044C4 14.4015 4.16818 15.2618 4.4766 16.059Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.0004C16.4183 21.0004 20 17.6443 20 13.5044C20 9.76293 17.9654 6.83848 16.562 5.44473C16.3017 5.18621 15.8683 5.30043 15.7212 5.63325C14.9742 7.32326 13.4178 9.75644 11.4286 9.75644C10.1975 9.92123 8.31688 8.86881 9.83483 3.64905C9.97151 3.17905 9.46972 2.8015 9.08645 3.11576C6.9046 4.90472 4 8.5118 4 13.5044C4 17.6443 7.58172 21.0004 12 21.0004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFireMinimalistic as IconComponent).keywords = [
  "fire",
  "minimalistic",
  "fuel",
  "flame",
  "blast",
  "flaming",
  "burn down",
  "burn",
  "kindle",
  "enkindle",
  "sack",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconFireMinimalistic as IconComponent;