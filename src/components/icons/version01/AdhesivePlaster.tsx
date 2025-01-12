import { FC } from 'react';

const IconAdhesivePlaster: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.2132 9.07131C1.5956 7.45371 1.5956 4.83105 3.2132 3.21345C4.83081 1.59584 7.45346 1.59584 9.07107 3.21345L20.7868 14.9292C22.4044 16.5468 22.4044 19.1694 20.7868 20.787C19.1692 22.4046 16.5465 22.4046 14.9289 20.787L3.2132 9.07131Z" stroke="currentColor" strokeWidth={width} /><g opacity={duotone ? "0.5" : "1"}><path d="M12 17.8581L9.07107 20.787C7.45346 22.4046 4.83081 22.4046 3.2132 20.787C1.5956 19.1694 1.5956 16.5468 3.2132 14.9292L6.14214 12.0002L12 17.8581Z" stroke="currentColor" strokeWidth={width} /><path d="M12 6.14238L14.9289 3.21345C16.5465 1.59584 19.1692 1.59584 20.7868 3.21345C22.4044 4.83105 22.4044 7.45371 20.7868 9.07131L17.8579 12.0002L12 6.14238Z" stroke="currentColor" strokeWidth={width} /></g><path d="M15.8414 12.8717C16.1489 13.1792 16.1489 13.6778 15.8414 13.9854C15.5338 14.2929 15.0352 14.2929 14.7276 13.9854C14.4201 13.6778 14.4201 13.1792 14.7276 12.8717C15.0352 12.5641 15.5338 12.5641 15.8414 12.8717Z" fill="currentColor" /><path d="M12.1289 9.15919C11.8214 8.85164 11.3227 8.85164 11.0152 9.15919C10.7076 9.46674 10.7076 9.96538 11.0152 10.2729C11.3227 10.5805 11.8214 10.5805 12.1289 10.2729C12.4365 9.96538 12.4365 9.46674 12.1289 9.15919Z" fill="currentColor" /><path d="M13.9852 14.7279C14.2927 15.0354 14.2927 15.5341 13.9852 15.8416C13.6776 16.1492 13.179 16.1492 12.8714 15.8416C12.5639 15.5341 12.5639 15.0354 12.8714 14.7279C13.179 14.4203 13.6776 14.4203 13.9852 14.7279Z" fill="currentColor" /><path d="M10.2727 11.0154C9.96514 10.7079 9.4665 10.7079 9.15895 11.0154C8.8514 11.323 8.8514 11.8216 9.15895 12.1292C9.4665 12.4367 9.96514 12.4367 10.2727 12.1292C10.5802 11.8216 10.5802 11.323 10.2727 11.0154Z" fill="currentColor" /><path d="M16.7696 15.6561C17.0771 15.9636 17.0771 16.4623 16.7696 16.7698C16.462 17.0774 15.9634 17.0774 15.6558 16.7698C15.3483 16.4623 15.3483 15.9636 15.6558 15.6561C15.9634 15.3485 16.462 15.3485 16.7696 15.6561Z" fill="currentColor" /><path d="M9.34465 8.23115C9.0371 7.9236 8.53846 7.9236 8.23091 8.23115C7.92336 8.5387 7.92336 9.03734 8.23091 9.34489C8.53846 9.65244 9.0371 9.65244 9.34465 9.34489C9.6522 9.03734 9.6522 8.5387 9.34465 8.23115Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13.057 11.9436C13.3646 12.2511 13.3646 12.7497 13.057 13.0573C12.7495 13.3648 12.2509 13.3648 11.9433 13.0573C11.6358 12.7497 11.6358 12.2511 11.9433 11.9436C12.2509 11.636 12.7495 11.636 13.057 11.9436Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.2132 3.21345C1.5956 4.83105 1.5956 7.45371 3.2132 9.07131L14.9289 20.787C16.5465 22.4046 19.1692 22.4046 20.7868 20.787C22.4044 19.1694 22.4044 16.5468 20.7868 14.9292L9.07107 3.21345C7.45346 1.59584 4.83081 1.59584 3.2132 3.21345ZM9.34458 8.23108C9.03703 7.92353 8.53839 7.92353 8.23084 8.23108C7.92329 8.53863 7.92329 9.03727 8.23084 9.34482C8.53839 9.65237 9.03703 9.65237 9.34458 9.34482C9.65213 9.03727 9.65213 8.53863 9.34458 8.23108ZM12.1289 9.1592C11.8214 8.85165 11.3227 8.85165 11.0152 9.1592C10.7076 9.46675 10.7076 9.96539 11.0152 10.2729C11.3227 10.5805 11.8214 10.5805 12.1289 10.2729C12.4365 9.96539 12.4365 9.46675 12.1289 9.1592ZM15.8414 12.8717C16.1489 13.1792 16.1489 13.6779 15.8414 13.9854C15.5338 14.293 15.0352 14.293 14.7277 13.9854C14.4201 13.6779 14.4201 13.1792 14.7277 12.8717C15.0352 12.5641 15.5338 12.5641 15.8414 12.8717ZM16.7695 16.7698C17.0771 16.4622 17.0771 15.9636 16.7695 15.656C16.462 15.3485 15.9633 15.3485 15.6558 15.656C15.3482 15.9636 15.3482 16.4622 15.6558 16.7698C15.9633 17.0773 16.462 17.0773 16.7695 16.7698ZM13.057 13.0573C13.3646 12.7497 13.3646 12.2511 13.057 11.9435C12.7495 11.636 12.2509 11.636 11.9433 11.9435C11.6358 12.2511 11.6358 12.7497 11.9433 13.0573C12.2509 13.3648 12.7495 13.3648 13.057 13.0573ZM13.9852 14.7279C14.2927 15.0354 14.2927 15.5341 13.9852 15.8416C13.6776 16.1492 13.179 16.1492 12.8714 15.8416C12.5639 15.5341 12.5639 15.0354 12.8714 14.7279C13.179 14.4203 13.6776 14.4203 13.9852 14.7279ZM9.15895 11.0154C9.4665 10.7079 9.96514 10.7079 10.2727 11.0154C10.5802 11.323 10.5802 11.8216 10.2727 12.1292C9.96514 12.4367 9.4665 12.4367 9.15895 12.1292C8.8514 11.8216 8.8514 11.323 9.15895 11.0154Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M20.7868 9.07131C22.4044 7.45371 22.4044 4.83105 20.7868 3.21345C19.1692 1.59584 16.5465 1.59584 14.9289 3.21345L12 6.14238L17.8579 12.0002L20.7868 9.07131Z" fill="currentColor" /><path d="M12 17.8581L6.14214 12.0002L3.2132 14.9292C1.5956 16.5468 1.5956 19.1694 3.2132 20.787C4.83081 22.4046 7.45346 22.4046 9.07107 20.787L12 17.8581Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.2132 3.21345C1.5956 4.83105 1.5956 7.45371 3.2132 9.07131L14.9289 20.787C16.5465 22.4046 19.1692 22.4046 20.7868 20.787C22.4044 19.1694 22.4044 16.5468 20.7868 14.9292L9.07107 3.21345C7.45346 1.59584 4.83081 1.59584 3.2132 3.21345ZM9.34458 8.23108C9.03703 7.92353 8.53839 7.92353 8.23084 8.23108C7.92329 8.53863 7.92329 9.03727 8.23084 9.34482C8.53839 9.65237 9.03703 9.65237 9.34458 9.34482C9.65213 9.03727 9.65213 8.53863 9.34458 8.23108ZM12.1289 9.1592C11.8214 8.85165 11.3227 8.85165 11.0152 9.1592C10.7076 9.46675 10.7076 9.96539 11.0152 10.2729C11.3227 10.5805 11.8214 10.5805 12.1289 10.2729C12.4365 9.96539 12.4365 9.46675 12.1289 9.1592ZM15.8414 12.8717C16.1489 13.1792 16.1489 13.6779 15.8414 13.9854C15.5338 14.293 15.0352 14.293 14.7277 13.9854C14.4201 13.6779 14.4201 13.1792 14.7277 12.8717C15.0352 12.5641 15.5338 12.5641 15.8414 12.8717ZM16.7695 16.7698C17.0771 16.4622 17.0771 15.9636 16.7695 15.656C16.462 15.3485 15.9633 15.3485 15.6558 15.656C15.3482 15.9636 15.3482 16.4622 15.6558 16.7698C15.9633 17.0773 16.462 17.0773 16.7695 16.7698ZM13.057 13.0573C13.3646 12.7497 13.3646 12.2511 13.057 11.9435C12.7495 11.636 12.2509 11.636 11.9433 11.9435C11.6358 12.2511 11.6358 12.7497 11.9433 13.0573C12.2509 13.3648 12.7495 13.3648 13.057 13.0573ZM13.9852 14.7279C14.2927 15.0354 14.2927 15.5341 13.9852 15.8416C13.6776 16.1492 13.179 16.1492 12.8714 15.8416C12.5639 15.5341 12.5639 15.0354 12.8714 14.7279C13.179 14.4203 13.6776 14.4203 13.9852 14.7279ZM9.15895 11.0154C9.4665 10.7079 9.96514 10.7079 10.2727 11.0154C10.5802 11.323 10.5802 11.8216 10.2727 12.1292C9.96514 12.4367 9.4665 12.4367 9.15895 12.1292C8.8514 11.8216 8.8514 11.323 9.15895 11.0154Z" fill="currentColor" /><path d="M5.08148 13.0609L3.2132 14.9292C1.5956 16.5468 1.5956 19.1694 3.2132 20.787C4.83081 22.4046 7.45346 22.4046 9.07107 20.787L10.9393 18.9188L5.08148 13.0609Z" fill="currentColor" /><path d="M18.9185 10.9396L20.7868 9.07131C22.4044 7.45371 22.4044 4.83105 20.7868 3.21345C19.1692 1.59584 16.5465 1.59584 14.9289 3.21345L13.0607 5.08172L18.9185 10.9396Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAdhesivePlaster as IconComponent).keywords = [
  "adhesive",
  "plaster",
  "agglutinative",
  "gluey",
  "glutinous",
  "viscid",
  "viscous",
  "pasty",
  "agglutinate",
  "gooey",
  "sticky",
  "plaster of paris",
  "daub",
  "sticking plaster",
  "poultice",
  "cataplasm",
  "adhesive plaster",
  "plaster over",
  "stick on",
  "gypsum"
];

export default IconAdhesivePlaster as IconComponent;