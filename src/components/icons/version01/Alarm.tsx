import { FC } from 'react';

const IconAlarm: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="13.0005" r="9" stroke="currentColor" strokeWidth={width} /><path d="M12 9.00049V13.0005L14.5 15.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 4.50049L7.50002 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 4.50049L16.5 2.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0004C16.8362 22.0004 20.7567 18.1167 20.7567 13.3258C20.7567 8.5349 16.8362 4.65112 12 4.65112C7.16384 4.65112 3.24335 8.5349 3.24335 13.3258C3.24335 18.1167 7.16384 22.0004 12 22.0004Z" fill="currentColor" /><path d="M11.9997 8.74756C12.4028 8.74756 12.7295 9.07121 12.7295 9.47045V13.0264L14.9481 15.2243C15.2331 15.5066 15.2331 15.9643 14.9481 16.2466C14.6632 16.5289 14.2011 16.5289 13.9162 16.2466L11.4838 13.837C11.3469 13.7014 11.27 13.5176 11.27 13.3258V9.47045C11.27 9.07121 11.5967 8.74756 11.9997 8.74756Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.2405 2.34034C8.45409 2.6789 8.3502 3.12489 8.00844 3.33648L4.11657 5.74611C3.77481 5.9577 3.32461 5.85478 3.11102 5.51623C2.89742 5.17767 3.00131 4.73169 3.34307 4.52009L7.23494 2.11046C7.5767 1.89887 8.0269 2.00179 8.2405 2.34034Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.7595 2.34034C15.9731 2.00179 16.4233 1.89887 16.7651 2.11047L20.6569 4.52009C20.9987 4.73169 21.1026 5.17767 20.889 5.51623C20.6754 5.85478 20.2252 5.9577 19.8834 5.74611L15.9916 3.33648C15.6498 3.12488 15.5459 2.6789 15.7595 2.34034Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0005C16.8362 22.0005 20.7567 18.1167 20.7567 13.3258C20.7567 8.53495 16.8362 4.65117 12 4.65117C7.16383 4.65117 3.24334 8.53495 3.24334 13.3258C3.24334 18.1167 7.16383 22.0005 12 22.0005ZM12 8.74754C12.403 8.74754 12.7297 9.07119 12.7297 9.47043V13.0264L14.9484 15.2243C15.2334 15.5066 15.2334 15.9643 14.9484 16.2466C14.6634 16.5289 14.2014 16.5289 13.9164 16.2466L11.484 13.837C11.3472 13.7014 11.2703 13.5176 11.2703 13.3258V9.47043C11.2703 9.07119 11.597 8.74754 12 8.74754Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.2405 2.34034C8.45409 2.6789 8.3502 3.12489 8.00844 3.33648L4.11657 5.74611C3.77481 5.9577 3.32461 5.85478 3.11102 5.51623C2.89742 5.17767 3.00131 4.73169 3.34307 4.52009L7.23494 2.11046C7.5767 1.89887 8.0269 2.00179 8.2405 2.34034Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.7595 2.34034C15.9731 2.00179 16.4233 1.89887 16.7651 2.11047L20.6569 4.52009C20.9987 4.73169 21.1026 5.17768 20.889 5.51623C20.6754 5.85478 20.2252 5.9577 19.8834 5.74611L15.9916 3.33648C15.6498 3.12488 15.5459 2.6789 15.7595 2.34034Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarm as IconComponent).keywords = [
  "alarm",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal"
];

export default IconAlarm as IconComponent;