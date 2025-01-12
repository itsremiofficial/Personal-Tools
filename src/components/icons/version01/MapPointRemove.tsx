import { FC } from 'react';

const IconMapPointRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 10.1435C4 5.64612 7.58172 2.00024 12 2.00024C16.4183 2.00024 20 5.64612 20 10.1435C20 14.6057 17.4467 19.8127 13.4629 21.6747C12.5343 22.1088 11.4657 22.1088 10.5371 21.6747C6.55332 19.8127 4 14.6057 4 10.1435Z" stroke="currentColor" strokeWidth={width} /><path d="M9 10.0002H15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747Z" fill="currentColor" /><path d="M9 9.25024C8.58579 9.25024 8.25 9.58603 8.25 10.0002C8.25 10.4145 8.58579 10.7502 9 10.7502H15C15.4142 10.7502 15.75 10.4145 15.75 10.0002C15.75 9.58603 15.4142 9.25024 15 9.25024H9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM8.25 10.0002C8.25 9.58603 8.58579 9.25024 9 9.25024H15C15.4142 9.25024 15.75 9.58603 15.75 10.0002C15.75 10.4145 15.4142 10.7502 15 10.7502H9C8.58579 10.7502 8.25 10.4145 8.25 10.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointRemove as IconComponent).keywords = [
  "map",
  "point",
  "remove",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconMapPointRemove as IconComponent;