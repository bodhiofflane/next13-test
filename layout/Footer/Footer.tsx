import cn from 'classnames';
import {times} from 'data-fns'

import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

const Footer = ({className, ...props}: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Все права защищены. 2020 - 2023</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#">Политика конф.</a>
    </footer>
  );
}
 
export default Footer;