
import styles from "./menu.module.css";

const Menu =({click})=>{
    return(
   
   <div className={styles.mainu} onClick={click}>
            <ul onClick={(e) => e.stopPropagation()}>
                <li><a href="#">inicio</a></li>
                <li><a href="#">series</a></li>
                <li><a href="#">filmes</a></li>
                <li><a href="#">catalago</a></li>
            </ul>
        </div>
    )
}   
export default Menu