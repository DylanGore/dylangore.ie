<template>
    <div id="cover" class="wrapper">
        <main id="cover-content">
            <img src="../assets/img/dylan.jpg" alt="Dylan Gore" />
            <h1>Dylan Gore</h1>
            <p>Wexford, Ireland</p>
            <ul id="skills">
                <li>
                    <span class="iconify" data-icon="mdi-language-html5"></span> HTML
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-language-css3"></span> CSS
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-language-javascript"></span> JavaScript
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-language-python"></span> Python
                </li>
                <li>
                    <span class="iconify" data-icon="fa-brands:java"></span> Java
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-nodejs"></span> NodeJS
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-vuejs"></span> VueJS
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-database"></span> NoSQL
                </li>
                <li>
                    <span class="iconify" data-icon="mdi-linux"></span> Linux
                </li>
            </ul>
            <router-link to="/projects">View Projects</router-link>
        </main>
        <footer id="cover-footer">
            <ul id="links">
                <li>
                    <a
                        href="https://github.com/DylanGore"
                        target="_blank"
                        id="github"
                        title="GitHub"
                    >
                        <span class="iconify icon-2x" data-icon="fa-github"></span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/DylanGore"
                        target="_blank"
                        id="twitter"
                        title="Twitter"
                    >
                        <span class="iconify icon-2x" data-icon="fa-twitter"></span>
                    </a>
                </li>
                <li>
                    <a href="https://dev.to/DylanGore" target="_blank" id="devto" title="dev.to">
                        <span class="iconify icon-2x" data-icon="mdi-dev-to"></span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/dylangore/"
                        target="_blank"
                        id="linkedin"
                        title="LinkedIn"
                    >
                        <span class="iconify icon-2x" data-icon="fa-linkedin"></span>
                    </a>
                </li>
                <li>
                    <a href="mailto:hello@dylangore.ie" id="email" title="E-mail">
                        <span class="iconify icon-2x" data-icon="mdi-email"></span>
                    </a>
                </li>
            </ul>
            <p id="copyright">&copy; Copyright 2019 Dylan Gore</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'home'
};
</script>

<style lang="css" scoped>
/* Main Content */
div#cover {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0;
    color: #fff;
    text-align: center;
    background: no-repeat center center url('../assets/img/header.jpg') #2e4b7a;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-position: center bottom;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
}

#cover-content {
    align-self: center;
    justify-self: center;
    padding: 2% 0 2%;
}

#cover-content > img {
    border-radius: 100%;
}

#cover-content > h1 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 300;
}

#cover-content > p {
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

#cover-content > a {
    text-decoration: none;
    color: #fff;
    padding: 1.2em;
    background: #2e4b7a;
    border-radius: 5px;
}

#cover-content > a:hover {
    background: #243a5e;
}

ul#skills {
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    list-style-type: none;
    padding-bottom: 2.5em;
}

ul#skills > li {
    padding: 4%;
    font-size: 1.2em;
    width: 100%;
    align-self: center;
    justify-self: center;
}

/* Footer */
#cover-footer {
    margin: 1.5em 0 0;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    justify-items: center;
}

ul#links {
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em;
    list-style-type: none;
    padding-bottom: 2.5em;
    width: 95%;
}

ul#links > li {
    width: 100%;
    padding: 0;
    margin: 0;
    align-self: center;
    justify-self: center;
}

#cover-footer a {
    text-decoration: none;
    color: #fff;
    padding: 1.2em;
    margin: 0;
}

#dev-badge {
    filter: invert(1);
}

a#github:hover {
    color: #333;
}

a#twitter:hover {
    color: #1da1f2;
}

a#devto:hover {
    color: #000;
}

a#linkedin:hover {
    color: #0077b5;
}

a#email:hover {
    color: #dd5143;
}

#cover-footer .fa-2x,
#cover-footer img {
    vertical-align: middle;
}

p#copyright {
    font-size: 0.8em;
}

/* Responsive */
@media screen and (max-width: 767px) {
    /* Up to Tablet Viewport */
    ul#skills {
        grid-template-columns: repeat(2, 1fr);
    }

    #cover-content > img {
        border-radius: 100%;
        width: 40%;
        height: 40%;
    }

    ul#links {
        margin: 0;
    }
}

@media screen and (min-width: 426px) {
    /* Larger than Mobile-L */
    ul#links {
        margin: 0 auto;
        max-width: 50%;
    }
}
</style>
