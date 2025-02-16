import { cx } from "@/utils";
import { socialIcons } from "./icons";
import styles from './icone-social.module.scss';

export default function SocialIcons() {
  return (
    <div className="flex flex-row text-2xl text-white opacity-80 gap-4 mt-16">
      {socialIcons.map((social) => (
        <a
          key={social.id}
          href={social.url}
          className={`social-icon ${social.hoverColor}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cx('border border-white rounded-sm p-2 hover:-translate-y-2  transition-all ease duration-700',styles['social-icon'])}>{social.icon}</div>
        </a>
      ))}
    </div>
  );
}
