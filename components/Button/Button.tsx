import cn from 'classnames';

import { ButtonProps } from './Button.props';

import styles from './Button.module.css';

const Button = ({appearance, children, className, ...props}: ButtonProps) => {
  return (
    <button
      
      // Мы будем использовать класс button и если appearence = primary то в классы добавится еще класс primary
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
 
export default Button;