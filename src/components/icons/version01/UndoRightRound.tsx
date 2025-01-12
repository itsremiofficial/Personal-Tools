import { FC } from 'react';

const IconUndoRightRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M17.5 9.50026H9.96155C8.04979 9.50026 6.5 11.05 6.5 12.9618C6.5 14.8736 8.04978 16.4233 9.96154 16.4233H14.5M17.5 9.50026L15.25 7.42334M17.5 9.50026L15.25 11.5772" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.6989 6.91463C14.9799 6.61027 15.4543 6.59129 15.7587 6.87224L18.0087 8.94916C18.1625 9.09114 18.25 9.29094 18.25 9.50027C18.25 9.70959 18.1625 9.90939 18.0087 10.0514L15.7587 12.1283C15.4543 12.4092 14.9799 12.3903 14.6989 12.0859C14.4179 11.7815 14.4369 11.307 14.7413 11.0261L15.5818 10.2503H9.96155C8.464 10.2503 7.25 11.4643 7.25 12.9618C7.25 14.4593 8.464 15.6733 9.96154 15.6733H14.5C14.9142 15.6733 15.25 16.0091 15.25 16.4233C15.25 16.8376 14.9142 17.1733 14.5 17.1733H9.96154C7.63557 17.1733 5.75 15.2878 5.75 12.9618C5.75 10.6358 7.63558 8.75027 9.96155 8.75027H15.5818L14.7413 7.97445C14.4369 7.69349 14.4179 7.219 14.6989 6.91463Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM15.7587 6.87273C15.4543 6.59177 14.9799 6.61075 14.6989 6.91512C14.4179 7.21948 14.4369 7.69398 14.7413 7.97493L15.5818 8.75075H9.96155C7.63558 8.75075 5.75 10.6363 5.75 12.9623C5.75 15.2883 7.63557 17.1738 9.96154 17.1738H14.5C14.9142 17.1738 15.25 16.838 15.25 16.4238C15.25 16.0096 14.9142 15.6738 14.5 15.6738H9.96154C8.464 15.6738 7.25 14.4598 7.25 12.9623C7.25 11.4647 8.464 10.2508 9.96155 10.2508H15.5818L14.7413 11.0266C14.4369 11.3075 14.4179 11.782 14.6989 12.0864C14.9799 12.3908 15.4543 12.4097 15.7587 12.1288L18.0087 10.0519C18.1625 9.90987 18.25 9.71007 18.25 9.50075C18.25 9.29143 18.1625 9.09163 18.0087 8.94965L15.7587 6.87273Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUndoRightRound as IconComponent).keywords = [
  "undo",
  "right",
  "round",
  "unmake",
  "dispose",
  "rescind",
  "disconnect",
  "vacate",
  "revoke",
  "rid",
  "annul",
  "repeal",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose"
];

export default IconUndoRightRound as IconComponent;