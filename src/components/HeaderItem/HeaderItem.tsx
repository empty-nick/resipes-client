import styles from './HeaderItem.module.css'
import { Link, useNavigate } from "react-router-dom";

type THeaderItemProps = {
  name: string;
  url: string;
}

export const HeaderItem = ({ name, url }: THeaderItemProps) => {
  const navigator = useNavigate()

  const handleClick = () => {
    console.log('fcdvn')
    navigator(url)
  }
  return (
    <div className={styles.content} onClick={handleClick}>
      <Link to={url} className={styles.link}>{name}</Link>
      {/*{name} and url is {url}*/}
    </div>
  )
}
