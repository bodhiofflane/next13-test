import cn from 'classnames';

import {ParagraphProps} from './Paragraph.porps';

import styles from './Paragraph.module.css';

const Paragraph = ({size = 'medium', children, className, ...props}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
      })}
      {...props}
    >
      {children}
    </p>
  );

  /* switch (size) {
    case 'large':
      return <p className={styles.large}>{children}</p>;
    case 'medium':
      return <p className={styles.medium}>{children}</p>;
    case 'small':
      return <p className={styles.small}>{children}</p>;
    default:
      return <></>
  } */
};

export default Paragraph;
