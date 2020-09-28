import styles from "./menu.module.css";
import Picture from "./picture";

function Recipe({ name, id }) {
    const alt = `Picture of ${name}`;

    return (
        <li className={styles.recipe}>
            <h3>{name}</h3>
            <Picture id={id} alt={alt} />
        </li>
    );
}

function Menu() {
    return (
        <div className={styles.body}>
            <h2 className={styles.title}>Menu</h2>
            <p>
                All made from the finest ingredients prepared by the best chefs
                in the world.
            </p>

            <ul className={styles.recipeList}>
                <Recipe name="Breakfast bowl #1" id="OgmaA8CkwHA" />
                <Recipe name="Breakfast bowl #2" id="lrPdTS2UP60" />
                <Recipe name="Breakfast bowl #3" id="m0YBwXQRdkg" />
                <Recipe name="Hot cakes" id="6-6sVwz1N2U" />
                <Recipe name="Bread toast" id="2IxTgsgFi-s" />
                <Recipe name="Full salad" id="AiHJiRCwB3w" />
                <Recipe name="Superbowl" id="mmsQUgMLqUo" />
                <Recipe name="Cookies" id="YwKgwIiV_F8" />
                <Recipe name="Iced latte" id="L-sm1B4L1Ns" />
            </ul>
        </div>
    );
}

export default Menu;
