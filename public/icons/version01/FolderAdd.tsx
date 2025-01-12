import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFolderAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10 14.0001H12M12 14.0001H14M12 14.0001V16.0001M12 14.0001V12.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M2 6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.657 2 17.7714 2 14.0001V6.94987Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 13.7501V11.548C22 8.91566 22 7.59947 21.2305 6.74395C21.1598 6.66526 21.0849 6.59037 21.0062 6.51959C20.1506 5.75012 18.8345 5.75012 16.2021 5.75012H15.8284C14.6747 5.75012 14.0979 5.75012 13.5604 5.5969C13.2651 5.51273 12.9804 5.39483 12.7121 5.24555C12.2237 4.97379 11.8158 4.5659 11 3.75012L10.4497 3.19987C10.1763 2.92645 10.0396 2.78974 9.89594 2.67064C9.27652 2.15716 8.51665 1.84241 7.71557 1.7675C7.52976 1.75012 7.33642 1.75012 6.94975 1.75012C6.06722 1.75012 5.62595 1.75012 5.25839 1.81947C3.64031 2.12476 2.37464 3.39043 2.06935 5.00851C2 5.37607 2 5.81734 2 6.69987V13.7501C2 17.5214 2 19.407 3.17157 20.5785C4.34315 21.7501 6.22876 21.7501 10 21.7501H14C17.7712 21.7501 19.6569 21.7501 20.8284 20.5785C22 19.407 22 17.5214 22 13.7501Z" fill="currentColor" /><path d="M12 11.0001C12.4142 11.0001 12.75 11.3359 12.75 11.7501V13.0001H14C14.4142 13.0001 14.75 13.3359 14.75 13.7501C14.75 14.1643 14.4142 14.5001 14 14.5001H12.75V15.7501C12.75 16.1643 12.4142 16.5001 12 16.5001C11.5858 16.5001 11.25 16.1643 11.25 15.7501V14.5001H10C9.58579 14.5001 9.25 14.1643 9.25 13.7501C9.25 13.3359 9.58579 13.0001 10 13.0001H11.25V11.7501C11.25 11.3359 11.5858 11.0001 12 11.0001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.06935 5.00851C2 5.37607 2 5.81734 2 6.69987V13.7501C2 17.5214 2 19.407 3.17157 20.5785C4.34315 21.7501 6.22876 21.7501 10 21.7501H14C17.7712 21.7501 19.6569 21.7501 20.8284 20.5785C22 19.407 22 17.5214 22 13.7501V11.548C22 8.91566 22 7.59947 21.2305 6.74395C21.1598 6.66526 21.0849 6.59037 21.0062 6.51959C20.1506 5.75012 18.8345 5.75012 16.2021 5.75012H15.8284C14.6747 5.75012 14.0979 5.75012 13.5604 5.5969C13.2651 5.51273 12.9804 5.39483 12.7121 5.24555C12.2237 4.97379 11.8158 4.5659 11 3.75012L10.4497 3.19987C10.1763 2.92645 10.0396 2.78974 9.89594 2.67064C9.27652 2.15716 8.51665 1.84241 7.71557 1.7675C7.52976 1.75012 7.33642 1.75012 6.94975 1.75012C6.06722 1.75012 5.62595 1.75012 5.25839 1.81947C3.64031 2.12476 2.37464 3.39043 2.06935 5.00851ZM12 11.0001C12.4142 11.0001 12.75 11.3359 12.75 11.7501V13.0001H14C14.4142 13.0001 14.75 13.3359 14.75 13.7501C14.75 14.1643 14.4142 14.5001 14 14.5001H12.75V15.7501C12.75 16.1643 12.4142 16.5001 12 16.5001C11.5858 16.5001 11.25 16.1643 11.25 15.7501V14.5001H10C9.58579 14.5001 9.25 14.1643 9.25 13.7501C9.25 13.3359 9.58579 13.0001 10 13.0001H11.25V11.7501C11.25 11.3359 11.5858 11.0001 12 11.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderAdd;