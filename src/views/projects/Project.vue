<template>
    <div id="project" v-if="project">
        <router-link to="/projects" class="top-arrow">
            <span class="iconify" data-icon="fa:arrow-left"></span> Back to projects list
        </router-link>
        <img :src="project.thumbnailURL" :alt="project.name" />
        <div id="content">
            <h1>{{ project.name }}</h1>
            <p>{{ project.description }}</p>
            <!-- prettier-ignore -->
            <a :href="project.sourceURL" class="btn-project" v-if="project.sourceURL">
                <span class="iconify" data-icon="mdi:github-circle"></span>
                View Source
            </a>
            <a :href="project.docsURL" class="btn-project" v-if="project.docsURL">
                <span class="iconify" data-icon="mdi:document"></span>
                View Documentation
            </a>
            <a :href="project.projectURL" class="btn-project" v-if="project.projectURL">
                <span class="iconify" data-icon="mdi:earth"></span>
                View Project
            </a>
            <span v-if="project.showMessage">message</span>
        </div>
        <!-- <div id="tags"></div> -->
    </div>
</template>

<script>
import { db } from '@/firebase/init';

export default {
    name: 'project',
    data() {
        return {
            project: null
        };
    },
    created() {
        // prettier-ignore
        let ref = db.collection('projects').where('id', '==', this.$route.params.id);
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.project = doc.data();
            });

            // If project with the given ID doesn't exist, 404
            if (this.project == null) {
                this.$router.push('/404');
            }
        });
    }
};
</script>

<style scoped>
#project {
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    grid-auto-rows: min-content;
    grid-gap: 1em;
    height: 100%;
}

#project .btn-project {
    margin: 0.25em;
}

.top-arrow {
    grid-column: 1 / -1;
    justify-self: left;
    align-self: center;
    margin: 0;
    padding: 2em;
    text-decoration: none;
    color: #000;
}

.top-arrow:hover {
    color: #888888;
}

#project img {
    padding: 0;
    margin: 0;
    align-self: center;
    justify-self: center;
    width: 80%;
}

#project #content {
    margin: 0;
    padding: 0;
    justify-self: center;
    align-self: center;
}

#project #tags {
    grid-column: 1 / -1;
    align-self: center;
    justify-self: center;
    margin: 0;
    padding: 1em;
}

@media screen and (max-width: 767px) {
    #project {
        display: grid;
        grid-template-columns: 1fr;
        padding-top: 1em;
        grid-gap: 0;
    }

    #project .top-arrow {
        margin: 0 0 1em;
        padding: 0;
        justify-self: left;
        align-self: center;
    }

    #project img {
        width: 100%;
    }

    #project h1 {
        margin: 0;
        margin-top: 0.5em;
    }
}
</style>
