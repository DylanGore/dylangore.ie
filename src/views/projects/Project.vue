<template>
    <div id="project" class="project">
        <router-link to="/projects" class="top-arrow">
            <span class="iconify" data-icon="fa:arrow-left"></span> Back to projects list
        </router-link>
        <img :src="project.thumbnailURL" :alt="project.name" />
        <div id="content">
            <h1>{{ project.name }}</h1>
            <p class="projDesc">{{ project.description }}</p>
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
            <span class="projMessage" v-if="project.message">{{ project.message }}</span>
        </div>
        <!-- <div id="tags" v-for="tag in tags">
            <span class="iconify" :data-icon="tag.icon">{{ tag.name }}</span>
        </div>-->
        <!-- <router-link to="/dashboard" class="editButton" v-if="getUser">
            <span class="iconify" data-icon="mdi:pencil"></span> Edit project
        </router-link>-->
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
    },
    computed: {
        getUser() {
            return this.$store.getters.user;
        }
    }
};
</script>

<style scoped>
.project {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 1em;
}

.project .btn-project {
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

.editButton {
    grid-column: 1 / -1;
    justify-self: right;
    align-self: center;
    margin: 0;
    padding: 2em;
    text-decoration: none;
    color: #000;
}

.editButton:hover {
    color: #888888;
}

.project img {
    padding: 0;
    margin: 0;
    align-self: center;
    justify-self: center;
    width: 80%;
}

.project #content {
    margin: 0;
    padding: 0;
    justify-self: center;
    align-self: center;
}

.project #tags {
    grid-column: 1 / -1;
    align-self: center;
    justify-self: center;
    margin: 0;
    padding: 1em;
}

.projMessage {
    font-style: italic;
    font-weight: 300;
    white-space: pre-line;
}

.projDesc {
    white-space: pre-line;
}

@media screen and (max-width: 790px) {
    .project {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        padding-top: 1em;
        grid-gap: 0;
    }

    .project .top-arrow {
        margin: 0 0 1em;
        padding: 0;
        justify-self: left;
        align-self: center;
    }

    .project .editButton {
        margin: 0 0 1em;
        padding: 0;
        justify-self: right;
        align-self: center;
    }

    .project img {
        width: 100%;
    }

    .project h1 {
        margin: 0;
        margin-top: 0.5em;
    }
}
</style>
