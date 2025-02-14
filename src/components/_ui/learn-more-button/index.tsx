'use client';



import styles from './learn-more-button.module.scss';
import { cx } from '@/utils';

export function LearnMoreButton() {
  return (
    <a
      href='#skills'
      onClick={() => {}}
      className={cx(
        'relative block rounded px-4 w-36 h-12  flex items-center justify-center leading-10 duration-500',
        styles['learn-more-button']
      )}
    >Saber mais</a>
  );
}
