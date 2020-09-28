import styles from "./header.module.css";

function Header() {
    const [isOpen, setOpen] = React.useState(false);
    const currentTime = new Date();

    React.useEffect(() => {
        if (5 <= currentTime.getHours() <= 11 && currentTime.getDay() !== 0) {
            setOpen(true);
        }
    });

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                🌿Hi! Come and feast in an all-vegan breakfast restaurant
            </h1>
            {isOpen ? (
                <p>
                    We're currently <strong>open</strong>
                </p>
            ) : (
                <p>
                    We're currently <strong>closed</strong>
                </p>
            )}
            <p>Open 5:00 - 11:00 on all days except Sundays</p>
        </header>
    );
}

export default Header;
