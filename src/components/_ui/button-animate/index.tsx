'use client';



import { ReactNode } from 'react';
import styles from './resume-downloader-button.module.scss';
import { cx } from '@/utils';

interface ButtonAnimateProps {
  children: ReactNode;
  url: string;
  classname?: string;
}
export function ButtonAnimate({children, url="", classname=""} : ButtonAnimateProps) {

  return (
    <a
      target="_blank"
      href={url}
      download='Software-Engineer-Matheus-Fernandes-CV-2025.pdf'
      onClick={() => { }}
      className={cx(
        'relative block rounded px-4 min-w-36 h-12  flex items-center justify-center leading-10 duration-500',classname,
        styles['resume-downloader-button']
      )}
    >{children}</a>
  );
}
