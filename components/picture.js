import styles from "./picture.module.css";

function Picture({ id, alt }) {
    const original = `https://source.unsplash.com/${id}/3200x1800`;
    const large = `https://source.unsplash.com/${id}/2490x1400`;
    const medium = `https://source.unsplash.com/${id}/1070x600`;
    const small = `https://source.unsplash.com/${id}/533x300`;

    return (
        <picture className={styles.picture}>
            <source srcSet={large} media="(min-width: 7500px)" />
            <source srcSet={medium} media="(min-width: 3200px)" />
            <source srcSet={small} media="(min-width: 300px)" />

            <img
                src={original}
                alt={alt}
                loading="lazy"
                width="1920"
                height="1080"
            />
        </picture>
    );
}

export default Picture;
