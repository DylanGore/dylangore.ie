<template>
    <div id="contact">
        <h1>Contact</h1>
        <h2>Social Media</h2>
        <ul id="contactLinks">
            <li v-for="(link, index) in links" :key="index">
                <!-- prettier-ignore -->
                <a :href="link.url" :class="link.class" :target="link.target" :title="link.title">
                    <span class="iconify" :data-icon="link.icon"></span>
                    {{ link.title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            links: [
                {
                    title: 'Twitter',
                    class: 'twitter-icon',
                    icon: 'mdi:twitter',
                    target: '_blank',
                    url: 'https://twitter.com/DylanGore'
                },
                {
                    title: 'GitHub',
                    class: 'github-icon',
                    icon: 'mdi:github-circle',
                    target: '_blank',
                    url: 'https://github.com/DylanGore'
                },
                {
                    title: 'Dev.to',
                    class: 'devto-icon',
                    icon: 'mdi:dev-to',
                    target: '_blank',
                    url: 'https://dev.to/DylanGore'
                },
                {
                    title: 'LinkedIn',
                    class: 'linkedin-icon',
                    icon: 'mdi:linkedin',
                    target: '_blank',
                    url: 'https://www.linkedin.com/in/dylangore/'
                },
                {
                    title: 'Email',
                    class: 'email-icon',
                    icon: 'mdi:email',
                    target: '_self',
                    url: 'mailto:hello@dylangore.ie'
                }
            ]
        };
    }
};
</script>

<style scoped>
#contactLinks {
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1em;
    list-style-type: none;
    padding-bottom: 2.5em;
    font-size: 1.3em;
}

#contact a {
    text-decoration: none;
    color: #242424;
}
</style>
