import { useGetHeaderItemsQuery } from "../../store/serve/serve.api.ts";
import { Img } from "react-image";
import { FaUser } from "react-icons/fa";
import { HeaderItem } from "../HeaderItem";
import { IHeaderItems } from "../../models/Header.model.ts";
import styles from './Header.module.css'

export const Header = () => {
  const { data, isError, isLoading } = useGetHeaderItemsQuery(null)
  console.log(isError, data)

  const mokeMenu: IHeaderItems[] = [
    { name: 'Home', url: '/', id: 'ho,eo' },
    { name: 'News', url: '/news', id: 'cjdnskcj' },
    { name: 'Recipes', url: '/recipes', id: 'knkvnf' },
    { name: 'About project', url: '/about', id: 'kfvdklkk' }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <p>logo</p>
          <Img src={'../../assets/logo.jpg'}/>
        </div>

        <div className={styles.menu}>
          {(isError || isLoading) ?
            mokeMenu.map(({ name, url, id }) => (
            <HeaderItem name={name} url={url} key={id}/>
          )) : (
            data?.map(item => (
              <HeaderItem name={item.name} url={item.url} key={item.id}/>
            ))
          )}
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
