'use client';



import styles from './resume-downloader-button.module.scss';
import { cx } from '@/utils';

export function ResumeDownloaderButton() {
  return (
    <a
      target="_blank"
      href='/pdf/curriculo.pdf'
      download='Software-Engineer-Matheus-Fernandes-CV-2025.pdf'
      onClick={() => {}}
      className={cx(
        'relative block rounded px-4 w-36 h-12  flex items-center justify-center leading-10 duration-500',
        styles['resume-downloader-button']
      )}
    >Download CV</a>
  );
}
