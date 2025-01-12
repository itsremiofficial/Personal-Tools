import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBookmarkCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 14.0461V11.5494C16 9.40506 16 8.33291 15.4142 7.66676C14.8284 7.00061 13.8856 7.00061 12 7.00061C10.1144 7.00061 9.17157 7.00061 8.58579 7.66676C8 8.33291 8 9.40506 8 11.5494V14.0461C8 15.5943 8 16.3685 8.32627 16.7068C8.48187 16.8681 8.67829 16.9694 8.88752 16.9964C9.32623 17.0529 9.83855 16.5431 10.8632 15.5235C11.3161 15.0729 11.5426 14.8475 11.8046 14.7881C11.9336 14.7589 12.0664 14.7589 12.1954 14.7881C12.4574 14.8475 12.6839 15.0729 13.1368 15.5235C14.1615 16.5431 14.6738 17.0529 15.1125 16.9964C15.3217 16.9694 15.5181 16.8681 15.6737 16.7068C16 16.3685 16 15.5943 16 14.0461Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M22 12.0006C22 17.5235 17.5228 22.0006 12 22.0006C6.47715 22.0006 2 17.5235 2 12.0006C2 6.47776 6.47715 2.00061 12 2.00061C17.5228 2.00061 22 6.47776 22 12.0006Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005Z" fill="currentColor" /><path d="M16 14.0459V11.5492C16 9.40494 16 8.33279 15.4142 7.66664C14.8284 7.00049 13.8856 7.00049 12 7.00049C10.1144 7.00049 9.17157 7.00049 8.58579 7.66664C8 8.33279 8 9.40494 8 11.5492V14.0459C8 15.5942 8 16.3684 8.32627 16.7066C8.48187 16.868 8.67829 16.9693 8.88752 16.9963C9.32623 17.0527 9.83855 16.543 10.8632 15.5234C11.3161 15.0727 11.5426 14.8474 11.8046 14.788C11.9336 14.7588 12.0664 14.7588 12.1954 14.788C12.4574 14.8474 12.6839 15.0727 13.1368 15.5234L13.1368 15.5234C14.1615 16.543 14.6738 17.0527 15.1125 16.9963C15.3217 16.9693 15.5181 16.868 15.6737 16.7066C16 16.3684 16 15.5942 16 14.0459Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005ZM16 14.0459V11.5492C16 9.40494 16 8.33279 15.4142 7.66664C14.8284 7.00049 13.8856 7.00049 12 7.00049C10.1144 7.00049 9.17157 7.00049 8.58579 7.66664C8 8.33279 8 9.40494 8 11.5492V14.0459C8 15.5942 8 16.3684 8.32627 16.7066C8.48187 16.868 8.67829 16.9693 8.88752 16.9963C9.32623 17.0527 9.83855 16.543 10.8632 15.5234C11.3161 15.0727 11.5426 14.8474 11.8046 14.788C11.9336 14.7588 12.0664 14.7588 12.1954 14.788C12.4574 14.8474 12.6839 15.0727 13.1368 15.5234C14.1615 16.543 14.6738 17.0527 15.1125 16.9963C15.3217 16.9693 15.5181 16.868 15.6737 16.7066C16 16.3684 16 15.5942 16 14.0459Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBookmarkCircle;