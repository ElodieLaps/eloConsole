import styles from '../../../styles/Button.module.scss';

export type ButtonProps = {
   className?: string;
   label: string;
   style?: "primary" | "secondary" | "thirdary"
   onClick?: () => void;
}

const Button = ({
   className,
   label,
   onClick
}: ButtonProps) => {
   return (
      <button
         className={className ? className : styles.primary}
         onClick={onClick}
      >
         {label}
      </button>
   )
}

export default Button;