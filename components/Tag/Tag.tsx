import cn from 'classnames';

import {TagProps} from './Tag.props';

import styles from './Tag.module.css';

const Tag = ({
  size = 'medium',
  children,
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
