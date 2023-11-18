import { Img } from "react-image";
import { FaUser } from "react-icons/fa";
import { HeaderItem } from "../HeaderItem";
import { headerItems } from "../../models/Header.model.ts";
import styles from './Header.module.css'

export const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <p>logo</p>
          <Img src={'../../assets/logo.jpg'}/>
        </div>

        <div className={styles.menu}>
          {headerItems.map( item => (
            <HeaderItem name={item.name} url={item.url} key={item.id} />
          ))}
        </div>

        <div className={styles.profile}>
          <FaUser/>
          <span className={styles.usernameField}>
            Username
          </span>
        </div>
      </div>
    </div>
  )
}
