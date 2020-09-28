import Head from "next/head";
import styles from "./index.module.css";
import { Menu, Header, Footer } from "../components";

function Home() {
    return (
        <main>
            <Head>
                <title>Fictional Vegan Restaurant</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Yellowtail&family=Open+Sans&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content="A fictional vegan breakfast restaurant website built by David Lozano for his portfolio."
                />
                <meta name="robots" content="index, nofollow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charset="UTF-8" />

                <meta
                    property="og:title"
                    content="Fictional Vegan Restaurant"
                />
                <meta
                    property="og:description"
                    content="A fictional vegan breakfast restaurant website built by David Lozano for his portfolio."
                />
                <meta
                    property="og:image"
                    content="https://source.unsplash.com/HlNcigvUi4Q"
                />
                <meta
                    property="og:url"
                    content="https://vegan-restaurant.davidlozano.me"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:site_name"
                    content="Fictional Vegan Restaurant"
                />
                <meta
                    name="twitter:image:alt"
                    content="Vegan food and dishes"
                />
            </Head>

            <Header />

            <div className={`${styles.body} ${styles.deliver}`}>
                <h2>We Now Deliver!</h2>
                <p>
                    Stuck at home? We can deliver to your home anywhere in the
                    world!
                </p>
                <p>
                    Just give us a call at 0118 999 881 999 119 7253 and you can
                    start eating your breakfast within 30 minutes.
                </p>
            </div>

            <Menu />

            <Footer />
        </main>
    );
}

export default Home;
