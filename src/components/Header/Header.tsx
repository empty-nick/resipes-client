import styles from './Header.module.css'
import { Menu } from "../Menu";

export const Header = () => {
  const mokeMenu = [
    {name: 'Home', url: '/', id: 'ho,eo'},
    {name: 'News', url: '/news', id: 'cjdnskcj'},
    {name: 'Recipes', url: '/recipes', id: 'knkvnf'}
  ]
  return (
    <div className={styles.content}>
      <div className={styles.menu}>
        {mokeMenu.map( ({name, url, id}) => <Menu name={name} url={url} key={id} />)}
      </div>
      <div className={styles.profile}>Profile</div>
    </div>
  )
}
