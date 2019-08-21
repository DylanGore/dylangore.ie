<template>
    <div id="projects">
        <h1>Projects</h1>
        <p>
            A showcase of some of my own personal projects as well as some of
            the work I have done for clients as a freelance web developer.
        </p>
        <div id="projectList">
            <article v-for="project in projects">
                <img :src="project.thumbnailURL" :alt="project.name" />
                <div class="content">
                    <h3>{{project.name}} {{project.type}}</h3>
                    <p>{{project.summary}}</p>
                    <router-link to class="btn-project">View</router-link>
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
        projects: db.collection('projects')
    }
};
</script>
