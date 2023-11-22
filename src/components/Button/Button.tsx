import styles from './Button.module.css'

type TButtonTypes = 'error' | 'inactive' | 'active'

interface IButtonProps {
  message: string;
  onClick: () => void | Promise<void>;
  isActive?: boolean;
  btnType?: TButtonTypes
}

export const Button = ({ message, onClick, btnType = 'active', isActive = true }: IButtonProps) => {
  const handleButtonTypes = (buttonType: string): string => {
    switch (buttonType) {
      case 'error':
        return styles.error
      case 'inactive':
        return styles.inactive

      case 'active':
      default:
        return styles.active
    }
  }
  const handleClick = () => {
    if (btnType === 'active')
      onClick()
  }
  return (
    <button disabled={!isActive} onClick={handleClick} className={`${styles.btn} ${handleButtonTypes(btnType)}`}>
      {message}
    </button>
  )
}
