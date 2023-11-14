import styles from './Header.module.css'
import { HeaderItem } from "../HeaderItem";
import { Img } from "react-image";
import { IHeaderItems } from "../../models/Header.model.ts";

export const Header = () => {
  const mokeMenu: IHeaderItems[] = [
    {name: 'Home', url: '/', id: 'ho,eo'},
    {name: 'News', url: '/news', id: 'cjdnskcj'},
    {name: 'Recipes', url: '/recipes', id: 'knkvnf'},
    {name: 'About project', url: '/about', id: 'knkvnf'}
  ]
  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <Img src={''} />
      </div>

      <div className={styles.menu}>
        {mokeMenu.map( ({name, url, id}) => <HeaderItem name={name} url={url} key={id} />)}
      </div>

      <div className={styles.profile}>Profile</div>
    </div>
  )
}
