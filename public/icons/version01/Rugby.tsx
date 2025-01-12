import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconRugby: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4572 2.11025C10.5738 2.38766 7.50944 3.25234 5.38064 5.38113C3.25185 7.50993 2.38717 10.5742 2.10976 13.4577M13.4572 2.11025C15.1273 1.94958 16.7367 1.98591 18.0686 2.08774C20.1483 2.24676 21.7537 3.85217 21.9127 5.93193C22.0146 7.26376 22.0509 8.87318 21.8902 10.5433M13.4572 2.11025L21.8902 10.5433M21.8902 10.5433C21.6128 13.4267 20.7482 16.491 18.6194 18.6198C16.4906 20.7486 13.4262 21.6133 10.5428 21.8907M10.5428 21.8907C8.87269 22.0514 7.26327 22.0151 5.93144 21.9132C3.85169 21.7542 2.24627 20.1488 2.08725 18.069C1.98542 16.7372 1.94909 15.1278 2.10976 13.4577M10.5428 21.8907L2.10976 13.4577" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15.3098 8.69092L8.69043 15.3103M8.69043 12.4734L11.5273 15.3103M10.5817 10.5822L13.4185 13.419M12.4729 8.69092L15.3098 11.5278" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.4573 2.11035C10.5739 2.38776 7.50954 3.25244 5.38075 5.38123C3.25195 7.51003 2.38727 10.5744 2.10986 13.4578L10.5429 21.8908C13.4263 21.6134 16.4907 20.7487 18.6195 18.6199C20.7483 16.4912 21.6129 13.4268 21.8903 10.5434L13.4573 2.11035Z" fill="currentColor" /><path d="M18.0686 2.08774C16.7367 1.98591 15.1273 1.94958 13.4572 2.11025L21.8902 10.5433C22.0509 8.87318 22.0146 7.26376 21.9127 5.93193C21.7537 3.85217 20.1483 2.24676 18.0686 2.08774Z" fill="currentColor" /><path d="M5.93144 21.9132C7.26327 22.0151 8.87269 22.0514 10.5428 21.8907L2.10976 13.4577C1.94909 15.1278 1.98542 16.7372 2.08725 18.069C2.24627 20.1488 3.85169 21.7542 5.93144 21.9132Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.9426 8.16059C12.2355 7.86769 12.7104 7.86769 13.0032 8.16059L13.8914 9.04869L14.7795 8.16059C15.0724 7.86769 15.5472 7.86769 15.8401 8.16059C16.133 8.45348 16.133 8.92835 15.8401 9.22125L14.952 10.1094L15.8401 10.9975C16.133 11.2903 16.133 11.7652 15.8401 12.0581C15.5472 12.351 15.0724 12.351 14.7795 12.0581L13.8914 11.17L13.0608 12.0006L13.9489 12.8887C14.2418 13.1816 14.2418 13.6565 13.9489 13.9494C13.656 14.2423 13.1811 14.2423 12.8882 13.9494L12.0001 13.0613L11.1695 13.8918L12.0576 14.7799C12.3505 15.0728 12.3505 15.5477 12.0576 15.8406C11.7647 16.1335 11.2899 16.1335 10.997 15.8406L10.1089 14.9525L9.22076 15.8406C8.92787 16.1335 8.45299 16.1335 8.1601 15.8406C7.86721 15.5477 7.86721 15.0728 8.1601 14.7799L9.0482 13.8918L8.1601 13.0037C7.86721 12.7108 7.86721 12.236 8.1601 11.9431C8.45299 11.6502 8.92787 11.6502 9.22076 11.9431L10.1089 12.8312L10.9394 12.0006L10.0513 11.1125C9.75845 10.8196 9.75845 10.3447 10.0513 10.0518C10.3442 9.75894 10.8191 9.75894 11.112 10.0518L12.0001 10.9399L12.8307 10.1094L11.9426 9.22125C11.6497 8.92835 11.6497 8.45348 11.9426 8.16059Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9127 5.93193C21.7537 3.85217 20.1483 2.24676 18.0686 2.08774C17.0016 2.00616 15.7566 1.96662 14.4449 2.03672L21.9638 9.55564C22.0339 8.24394 21.9943 6.99886 21.9127 5.93193Z" fill="currentColor" /><path d="M2.08725 18.069C2.24627 20.1488 3.85169 21.7542 5.93144 21.9132C6.99862 21.9948 8.24403 22.0344 9.55607 21.9642L2.03628 14.4444C1.96611 15.7565 2.00566 17.0019 2.08725 18.069Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.22237 12.5092C2.59084 9.91691 3.48404 7.27773 5.38064 5.38113C7.27745 3.48432 9.917 2.59113 12.5095 2.22274L21.7777 11.4909C21.4094 14.0835 20.5162 16.723 18.6194 18.6198C16.7228 20.5164 14.0836 21.4097 11.4913 21.7781L2.22237 12.5092ZM11.9426 8.16059C12.2355 7.86769 12.7104 7.86769 13.0032 8.16059L13.8914 9.04869L14.7795 8.16059C15.0723 7.86769 15.5472 7.86769 15.8401 8.16059C16.133 8.45348 16.133 8.92835 15.8401 9.22125L14.952 10.1094L15.8401 10.9975C16.133 11.2903 16.133 11.7652 15.8401 12.0581C15.5472 12.351 15.0723 12.351 14.7795 12.0581L13.8914 11.17L13.0608 12.0006L13.9489 12.8887C14.2418 13.1816 14.2418 13.6565 13.9489 13.9494C13.656 14.2423 13.1811 14.2423 12.8882 13.9494L12.0001 13.0613L11.1695 13.8918L12.0576 14.7799C12.3505 15.0728 12.3505 15.5477 12.0576 15.8406C11.7647 16.1335 11.2899 16.1335 10.997 15.8406L10.1089 14.9525L9.22076 15.8406C8.92787 16.1335 8.45299 16.1335 8.1601 15.8406C7.86721 15.5477 7.86721 15.0728 8.1601 14.7799L9.0482 13.8918L8.1601 13.0037C7.86721 12.7108 7.86721 12.236 8.1601 11.9431C8.45299 11.6502 8.92787 11.6502 9.22076 11.9431L10.1089 12.8312L10.9394 12.0006L10.0513 11.1125C9.75845 10.8196 9.75845 10.3447 10.0513 10.0518C10.3442 9.75894 10.8191 9.75894 11.112 10.0518L12.0001 10.9399L12.8307 10.1094L11.9426 9.22125C11.6497 8.92836 11.6497 8.45348 11.9426 8.16059Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRugby;