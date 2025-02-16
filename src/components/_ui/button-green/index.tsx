'use client';



import { ReactNode } from 'react';
import styles from './learn-more-button.module.scss';
import { cx } from '@/utils';

interface ButtonGreenProps {
    children: ReactNode;
    url:string
    classname?: string;

}

export function ButtonGreen({children, url = "",classname=""}: ButtonGreenProps) {
  return (
    <a
      href={url}
      onClick={() => {}}
      className={cx(
        'relative block rounded   flex items-center justify-center leading-10 duration-500',classname,
        styles['learn-more-button']
      )}
    >{children}</a>
  );
}
