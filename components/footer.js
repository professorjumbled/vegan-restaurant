import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.about}>
                <h2>FVR - Fictional Vegan Restaurant</h2>
                <p>
                    This is a website created by{" "}
                    <a href="https://davidlozano.me">David Lozano</a>. It's a
                    fictional restaurant built on NextJS and hosted on Netlify.
                </p>
                <p>
                    To contact David, you may{" "}
                    <a href="mailto:pauldavidlozano@gmail.com">email him</a> or{" "}
                    <a href="https://twitter.com/pdlozano">
                        contact him on Twitter
                    </a>
                    .
                </p>
                <p>
                    All images are taken from Unsplash. Credits to{" "}
                    <a href="https://unsplash.com/@nirzar">@nirzar</a>,{" "}
                    <a href="https://unsplash.com/@demidearest">@demidearest</a>
                    ,{" "}
                    <a href="https://unsplash.com/@edwardhowellphotography">
                        @edwardhowellphotography
                    </a>
                    ,{" "}
                    <a href="https://unsplash.com/@marianamontesdeoca">
                        @marianamontesdeoca
                    </a>
                    ,{" "}
                    <a href="https://unsplash.com/@laviperchik">@laviperchik</a>
                    ,{" "}
                    <a href="https://unsplash.com/@jannisbrandt">
                        @jannisbrandt
                    </a>
                    , <a href="https://unsplash.com/@yoavaziz">@yoavaziz</a>,{" "}
                    <a href="https://unsplash.com/@brookelark">@brookelark</a>,{" "}
                    <a href="https://unsplash.com/@ellaolsson">@ellaolsson</a>,
                    and{" "}
                    <a href="https://unsplash.com/@jessyoucan">@jessyoucan</a>.
                </p>
                <p>Map is from OpenStreetMap.</p>
            </div>

            <div className={styles.location}>
                <address>
                    <p>
                        <strong>Contact Number</strong>: 0118 999 881 999 119
                        7253
                    </p>
                    <p>
                        <strong>Location</strong>: 221B Baker Street, London, UK
                    </p>
                </address>

                <iframe
                    width="1000"
                    height="1000"
                    className={styles.iframe}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="A map showing the location of the restaurant"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.17140388488769534%2C51.5146802004776%2C-0.1422214508056641%2C51.52976705673023&amp;layer=mapnik&amp;marker=51.52222425338158%2C-0.1568126678466797"
                ></iframe>
                <a href="https://www.openstreetmap.org/?mlat=51.5222&amp;mlon=-0.1568#map=15/51.5222/-0.1568">
                    View Larger Map
                </a>
            </div>
        </footer>
    );
}

export default Footer;
