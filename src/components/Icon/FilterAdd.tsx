import { FC } from 'react';
import { IconProps } from "../../types";

const IconFilterAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6309 14.75C21.6309 15.64 21.3809 16.48 20.9409 17.2C20.1209 18.58 18.6109 19.5 16.8809 19.5C15.1509 19.5 13.6409 18.57 12.8209 17.2C12.3809 16.49 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C19.5009 10 21.6309 12.13 21.6309 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6594 14.73H15.1094" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8789 13V16.55" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6905 4.02002V6.23999C20.6905 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2405 10 16.8805 10C14.2605 10 12.1305 12.13 12.1305 14.75C12.1305 15.64 12.3805 16.48 12.8205 17.2C13.1905 17.82 13.7005 18.35 14.3205 18.73V19.07C14.3205 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22055 8.46997C3.72055 7.95997 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22055 2 5.33055 2H18.6705C19.7805 2 20.6905 2.91002 20.6905 4.02002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.2496 9.15004C20.7596 8.37004 20.1996 7.67004 19.6196 7.04004L15.8496 10.81C15.9696 11.18 16.0396 11.58 16.0396 12C16.0396 14.24 14.2296 16.04 11.9996 16.04C11.5796 16.04 11.1796 15.97 10.8096 15.85L7.34961 19.31C8.80961 20.13 10.3896 20.56 11.9996 20.56C13.7796 20.56 15.5096 20.04 17.0896 19.07C18.6696 18.09 20.0896 16.66 21.2496 14.84C22.2496 13.28 22.2496 10.72 21.2496 9.15004Z" fill="currentColor" /><path d="M14.0206 9.97989L9.98062 14.0199C9.47062 13.4999 9.14062 12.7799 9.14062 11.9999C9.14062 10.4299 10.4206 9.13989 12.0006 9.13989C12.7806 9.13989 13.5006 9.46989 14.0206 9.97989Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.25 5.74993L14.86 9.13993C14.13 8.39993 13.12 7.95993 12 7.95993C9.76 7.95993 7.96 9.76993 7.96 11.9999C7.96 13.1199 8.41 14.1299 9.14 14.8599L5.76 18.2499H5.75C4.64 17.3499 3.62 16.1999 2.75 14.8399C1.75 13.2699 1.75 10.7199 2.75 9.14993C3.91 7.32993 5.33 5.89993 6.91 4.91993C8.49 3.95993 10.22 3.42993 12 3.42993C14.23 3.42993 16.39 4.24993 18.25 5.74993Z" fill="currentColor" /><path d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFilterAdd;