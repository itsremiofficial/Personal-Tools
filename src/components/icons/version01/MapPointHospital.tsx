import { FC } from 'react';

const IconMapPointHospital: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 10.1435C4 5.64612 7.58172 2.00024 12 2.00024C16.4183 2.00024 20 5.64612 20 10.1435C20 14.6057 17.4467 19.8127 13.4629 21.6747C12.5343 22.1088 11.4657 22.1088 10.5371 21.6747C6.55332 19.8127 4 14.6057 4 10.1435Z" stroke="currentColor" strokeWidth={width} /><circle cx="12" cy="10.0002" r="4" stroke="currentColor" strokeWidth={width} /><path d="M10.5 10.0002H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 11.5002L12 8.50024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM12 14.0002C14.2091 14.0002 16 12.2094 16 10.0002C16 7.79111 14.2091 6.00024 12 6.00024C9.79086 6.00024 8 7.79111 8 10.0002C8 12.2094 9.79086 14.0002 12 14.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 14.0002C14.2091 14.0002 16 12.2094 16 10.0002C16 7.79111 14.2091 6.00024 12 6.00024C9.79086 6.00024 8 7.79111 8 10.0002C8 12.2094 9.79086 14.0002 12 14.0002ZM12.75 8.50024C12.75 8.08603 12.4142 7.75024 12 7.75024C11.5858 7.75024 11.25 8.08603 11.25 8.50024V9.25024H10.5C10.0858 9.25024 9.75 9.58603 9.75 10.0002C9.75 10.4145 10.0858 10.7502 10.5 10.7502H11.25V11.5002C11.25 11.9145 11.5858 12.2502 12 12.2502C12.4142 12.2502 12.75 11.9145 12.75 11.5002V10.7502H13.5C13.9142 10.7502 14.25 10.4145 14.25 10.0002C14.25 9.58603 13.9142 9.25024 13.5 9.25024H12.75V8.50024Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7.75024C12.4142 7.75024 12.75 8.08603 12.75 8.50024V9.25024H13.5C13.9142 9.25024 14.25 9.58603 14.25 10.0002C14.25 10.4145 13.9142 10.7502 13.5 10.7502H12.75V11.5002C12.75 11.9145 12.4142 12.2502 12 12.2502C11.5858 12.2502 11.25 11.9145 11.25 11.5002V10.7502H10.5C10.0858 10.7502 9.75 10.4145 9.75 10.0002C9.75 9.58603 10.0858 9.25024 10.5 9.25024H11.25V8.50024C11.25 8.08603 11.5858 7.75024 12 7.75024Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM12 14.0002C14.2091 14.0002 16 12.2094 16 10.0002C16 7.79111 14.2091 6.00024 12 6.00024C9.79086 6.00024 8 7.79111 8 10.0002C8 12.2094 9.79086 14.0002 12 14.0002ZM12.75 8.50024C12.75 8.08603 12.4142 7.75024 12 7.75024C11.5858 7.75024 11.25 8.08603 11.25 8.50024V9.25024H10.5C10.0858 9.25024 9.75 9.58603 9.75 10.0002C9.75 10.4145 10.0858 10.7502 10.5 10.7502H11.25V11.5002C11.25 11.9145 11.5858 12.2502 12 12.2502C12.4142 12.2502 12.75 11.9145 12.75 11.5002V10.7502H13.5C13.9142 10.7502 14.25 10.4145 14.25 10.0002C14.25 9.58603 13.9142 9.25024 13.5 9.25024H12.75V8.50024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointHospital as IconComponent).keywords = [
  "map",
  "point",
  "hospital",
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
  "infirmary",
  "clinical",
  "clinic",
  "hospitalization",
  "inpatient",
  "doctor",
  "hospitalized",
  "physician",
  "medical"
];

export default IconMapPointHospital as IconComponent;