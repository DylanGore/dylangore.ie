<template>
    <div id="projects">
        <h1>Projects</h1>
        <p>
            A showcase of some of my own personal projects as well as some of
            the work I have done for clients as a freelance web developer.
        </p>
        <div id="projectList">
            <article v-for="(project, index) in projects" :key="index">
                <div v-if="project.hidden != true">
                    <img :src="project.thumbnailURL" :alt="project.name" />
                    <div class="content">
                        <h3>{{ project.name }} {{ project.type }}</h3>
                        <p class="projSumm">{{ project.summary }}</p>
                        <!-- prettier-ignore -->
                        <router-link :to="'/projects/' + project.id" class="btn-project">View</router-link>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/init';

export default {
    name: 'projects',
    data() {
        return {
            projects: []
        };
    },
    firestore: {
        // prettier-ignore
        projects: db.collection('projects').where('hidden', '==', false).orderBy('created', 'desc')
    }
};
</script>

<style scoped>
div#projectList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
}

div#projectList article {
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.25);
    animation: fadein 1s;
}

div#projectList article div.content {
    padding: 0 0.5em 0.5em 0.5em;
    margin: 0;
    height: 100%;
    padding-bottom: 1em;
}

div#projectList article h3 {
    letter-spacing: 0.1em;
    margin: 0;
}

div#projectList article p {
    font-weight: 300;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

div#projectList article img {
    width: 100%;
    margin: 0;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.projSumm {
    white-space: pre-line;
}

@media screen and (max-width: 790px) {
    /* Up to Tablet Viewport */
    main#page-main {
        padding: 0 1em;
    }

    div#projectList {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1em;
        margin-bottom: 1em;
    }
}
</style>
