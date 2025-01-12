import { FC } from 'react';

const IconCard2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0005C2 8.22925 2 6.34363 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C22 6.34363 22 8.22925 22 12.0005C22 15.7717 22 17.6573 20.8284 18.8289C19.6569 20.0005 17.7712 20.0005 14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10 16.5005H6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 13.5005H6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 10.0005L22 10.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M14 15.0005C14 14.0577 14 13.5863 14.2929 13.2934C14.5858 13.0005 15.0572 13.0005 16 13.0005C16.9428 13.0005 17.4142 13.0005 17.7071 13.2934C18 13.5863 18 14.0577 18 15.0005C18 15.9433 18 16.4147 17.7071 16.7076C17.4142 17.0005 16.9428 17.0005 16 17.0005C15.0572 17.0005 14.5858 17.0005 14.2929 16.7076C14 16.4147 14 15.9433 14 15.0005Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10 20.0005H14C17.7712 20.0005 19.6569 20.0005 20.8284 18.8289C22 17.6573 22 15.7717 22 12.0005C22 11.5586 21.9984 10.3925 21.9965 10.0005H2.00024C1.99836 10.3925 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17158 18.8289C4.34315 20.0005 6.22877 20.0005 10 20.0005Z" fill="currentColor" /><path d="M5.25 13.5005C5.25 13.0863 5.58579 12.7505 6 12.7505H8C8.41421 12.7505 8.75 13.0863 8.75 13.5005C8.75 13.9147 8.41421 14.2505 8 14.2505H6C5.58579 14.2505 5.25 13.9147 5.25 13.5005Z" fill="currentColor" /><path d="M5.25 16.5005C5.25 16.0863 5.58579 15.7505 6 15.7505H10C10.4142 15.7505 10.75 16.0863 10.75 16.5005C10.75 16.9147 10.4142 17.2505 10 17.2505H6C5.58579 17.2505 5.25 16.9147 5.25 16.5005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.1972 12.2938C16.8744 12.2504 16.4776 12.2504 16.0447 12.2505H15.9553C15.5224 12.2504 15.1256 12.2504 14.8028 12.2938C14.4473 12.3416 14.0716 12.454 13.7626 12.7631C13.4535 13.0721 13.3411 13.4478 13.2933 13.8033C13.2499 14.1261 13.2499 14.5229 13.25 14.9558L13.25 15.0005L13.25 15.0452C13.2499 15.4781 13.2499 15.8749 13.2933 16.1977C13.3411 16.5532 13.4535 16.9289 13.7626 17.2379C14.0716 17.547 14.4473 17.6594 14.8028 17.7072C15.1256 17.7506 15.5224 17.7505 15.9553 17.7505L16 17.7505L16.0447 17.7505C16.4776 17.7505 16.8744 17.7506 17.1972 17.7072C17.5527 17.6594 17.9284 17.547 18.2374 17.2379C18.5465 16.9289 18.6589 16.5532 18.7067 16.1977C18.7501 15.8749 18.7501 15.4781 18.75 15.0452V14.9558C18.7501 14.5229 18.7501 14.1261 18.7067 13.8033C18.6589 13.4478 18.5465 13.0721 18.2374 12.7631C17.9284 12.454 17.5527 12.3416 17.1972 12.2938ZM14.8257 13.8224L14.8233 13.8237L14.8219 13.8262C14.8209 13.8281 14.8192 13.8314 14.8172 13.8365C14.8082 13.8582 14.7929 13.9066 14.7799 14.0032C14.7516 14.2139 14.75 14.5079 14.75 15.0005C14.75 15.4931 14.7516 15.7871 14.7799 15.9978C14.7929 16.0944 14.8082 16.1428 14.8172 16.1645C14.8184 16.1676 14.8195 16.17 14.8204 16.1719C14.821 16.1731 14.8215 16.1741 14.8219 16.1748L14.8232 16.1773L14.8257 16.1786C14.8276 16.1796 14.8309 16.1813 14.836 16.1833C14.8577 16.1923 14.9061 16.2076 15.0027 16.2206C15.2134 16.2489 15.5074 16.2505 16 16.2505C16.4926 16.2505 16.7866 16.2489 16.9973 16.2206C17.0939 16.2076 17.1423 16.1923 17.164 16.1833C17.1691 16.1813 17.1724 16.1796 17.1743 16.1786L17.1768 16.1773L17.1781 16.1748C17.1791 16.1729 17.1808 16.1696 17.1828 16.1645C17.1918 16.1428 17.2071 16.0944 17.2201 15.9978C17.2484 15.7871 17.25 15.4931 17.25 15.0005C17.25 14.5079 17.2484 14.2139 17.2201 14.0032C17.2071 13.9066 17.1918 13.8582 17.1828 13.8365C17.1808 13.8314 17.1791 13.8281 17.1781 13.8262L17.1768 13.8237L17.1743 13.8224C17.1724 13.8213 17.1691 13.8197 17.164 13.8177C17.1423 13.8087 17.0939 13.7934 16.9973 13.7804C16.7866 13.7521 16.4926 13.7505 16 13.7505C15.5074 13.7505 15.2134 13.7521 15.0027 13.7804C14.9061 13.7934 14.8577 13.8087 14.836 13.8177C14.8309 13.8197 14.8276 13.8213 14.8257 13.8224Z" fill="currentColor" /><path d="M9.99484 4.00049H14.0052C17.7861 4.00049 19.6766 4.00049 20.8512 5.11627C21.6969 5.91964 21.9337 7.07556 22 9.00049V10.0005H2V9.00049C2.0663 7.07556 2.3031 5.91964 3.14881 5.11627C4.3234 4.00049 6.21388 4.00049 9.99484 4.00049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2.32803 6.0156 2.09185 7.22931 2.02572 9.25049H21.9743C21.9082 7.22931 21.672 6.0156 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005C2 11.5586 2 11.1425 2.00189 10.7505H21.9981C22 11.1425 22 11.5586 22 12.0005C22 15.7717 22 17.6573 20.8284 18.8289C19.6569 20.0005 17.7712 20.0005 14 20.0005ZM16.0447 12.2505C16.4776 12.2504 16.8744 12.2504 17.1972 12.2938C17.5527 12.3416 17.9284 12.454 18.2374 12.7631C18.5465 13.0721 18.6589 13.4478 18.7067 13.8033C18.7501 14.1261 18.7501 14.5229 18.75 14.9557V15.0452C18.7501 15.4781 18.7501 15.8749 18.7067 16.1977C18.6589 16.5532 18.5465 16.9289 18.2374 17.2379C17.9284 17.5469 17.5527 17.6594 17.1972 17.7072C16.8744 17.7506 16.4776 17.7505 16.0447 17.7505L16 17.7505L15.9553 17.7505C15.5224 17.7505 15.1256 17.7506 14.8028 17.7072C14.4473 17.6594 14.0716 17.5469 13.7626 17.2379C13.4535 16.9289 13.3411 16.5532 13.2933 16.1977C13.2499 15.8749 13.2499 15.4781 13.25 15.0452L13.25 15.0005L13.25 14.9557C13.2499 14.5229 13.2499 14.1261 13.2933 13.8033C13.3411 13.4478 13.4535 13.0721 13.7626 12.7631C14.0716 12.454 14.4473 12.3416 14.8028 12.2938C15.1256 12.2504 15.5224 12.2504 15.9553 12.2505H16.0447ZM5.25 13.5005C5.25 13.0863 5.58579 12.7505 6 12.7505H8C8.41421 12.7505 8.75 13.0863 8.75 13.5005C8.75 13.9147 8.41421 14.2505 8 14.2505H6C5.58579 14.2505 5.25 13.9147 5.25 13.5005ZM5.25 16.5005C5.25 16.0863 5.58579 15.7505 6 15.7505H10C10.4142 15.7505 10.75 16.0863 10.75 16.5005C10.75 16.9147 10.4142 17.2505 10 17.2505H6C5.58579 17.2505 5.25 16.9147 5.25 16.5005Z" fill="currentColor" /><path d="M14.8233 13.8237L14.8257 13.8223C14.8276 13.8213 14.8309 13.8197 14.836 13.8176C14.8577 13.8087 14.9061 13.7934 15.0027 13.7804C15.2134 13.7521 15.5074 13.7505 16 13.7505C16.4926 13.7505 16.7866 13.7521 16.9973 13.7804C17.0939 13.7934 17.1423 13.8087 17.164 13.8176C17.1691 13.8197 17.1724 13.8213 17.1743 13.8223L17.1768 13.8237L17.1781 13.8262C17.1791 13.8281 17.1808 13.8314 17.1828 13.8365C17.1918 13.8582 17.2071 13.9066 17.2201 14.0032C17.2484 14.2139 17.25 14.5079 17.25 15.0005C17.25 15.4931 17.2484 15.7871 17.2201 15.9978C17.2071 16.0944 17.1918 16.1427 17.1828 16.1645C17.1808 16.1696 17.1791 16.1729 17.1781 16.1748L17.1768 16.1773L17.1743 16.1786C17.1724 16.1796 17.1691 16.1813 17.164 16.1833C17.1423 16.1923 17.0939 16.2076 16.9973 16.2206C16.7866 16.2489 16.4926 16.2505 16 16.2505C15.5074 16.2505 15.2134 16.2489 15.0027 16.2206C14.9061 16.2076 14.8577 16.1923 14.836 16.1833C14.8309 16.1813 14.8276 16.1796 14.8257 16.1786L14.8232 16.1773L14.8219 16.1748C14.8209 16.1729 14.8192 16.1696 14.8172 16.1645C14.8082 16.1427 14.7929 16.0944 14.7799 15.9978C14.7516 15.7871 14.75 15.4931 14.75 15.0005C14.75 14.5079 14.7516 14.2139 14.7799 14.0032C14.7929 13.9066 14.8082 13.8582 14.8172 13.8365C14.8192 13.8314 14.8209 13.8281 14.8219 13.8262L14.8233 13.8237Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCard2 as IconComponent).keywords = [
  "card",
  "2",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconCard2 as IconComponent;