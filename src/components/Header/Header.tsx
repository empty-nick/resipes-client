import { Img } from "react-image";
import { FaUser } from "react-icons/fa";
import { HeaderItem } from "../HeaderItem";
import { headerItems, headerItemsForAuthUsers } from "../../models/Header.model.ts";
import styles from './Header.module.css'
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import { useEffect } from "react";

export const Header = () => {
  const { isUserLoggedIn } = useAppSelector(state => state.authSlice)
  const menu = [...headerItems]
  // TODO чтобы две дополнительные кнопки были только по условию
  useEffect(() => {
    if (isUserLoggedIn)
      menu.push(...headerItemsForAuthUsers)
  }, [isUserLoggedIn, menu]);
  console.log(menu)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <p>logo</p>
          <Img src={'../../assets/logo.jpg'}/>
        </div>

        <div className={styles.menu}>
          {menu.map( item => (
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
