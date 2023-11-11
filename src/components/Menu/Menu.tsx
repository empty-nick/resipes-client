import styles from './Menu.module.css'
import { useNavigate } from "react-router-dom";

type TMenuProps = {
  name: string;
  url: string;
}

export const Menu = ({ name, url }: TMenuProps) => {
  const navigator = useNavigate()

  const handleClick = () => {
    console.log('fcdvn')
    navigator(url)
  }
  return (
    <div className={styles.content} onClick={handleClick}>
      {name} and url is {url}
    </div>
  )
}
