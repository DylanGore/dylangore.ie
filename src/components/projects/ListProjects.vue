<template>
    <div id="listProjects">
        <h2>All Projects ({{projects.length}})</h2>
        <ul v-if="projects.length">
            <li class="projectItem" v-for="(project, index) in projects" :key="index">
                <p>{{project.name}}</p>
                <!-- prettier-ignore prettyhtml-ignore -->
                <router-link class="btnView" :to="'/projects/' + project.id" tag="button">
                    View
                    <span class="iconify" data-icon="mdi:folder-open"></span>
                </router-link>
                <button class="btnEdit">
                    Edit
                    <span class="iconify" data-icon="mdi:pencil"></span>
                </button>
                <button class="btnDelete" @click="deleteProject(project.id, project.thumbExt)">
                    Delete
                    <span class="iconify" data-icon="mdi:delete"></span>
                </button>
            </li>
        </ul>
        <div v-else>
            No projects
            <span class="iconify" data-icon="mdi:emoticon-sad-outline"></span>
        </div>
    </div>
</template>

<script>
import { db, storage } from '@/firebase/init';

export default {
    name: 'listProjects',
    data() {
        return {
            message: null,
            projects: []
        };
    },
    methods: {
        deleteProject(id, ext) {
            var filePath = 'project_thumbnails/' + id + '.' + ext;
            var storeRef = storage.ref().child(filePath);
            // Delete image, if successful, delete document from DB
            // prettier-ignore
            storeRef.delete().then(() => {
                // prettier-ignore
                db.collection('projects').doc(id).delete();
                alert('Deleted Project: ' + id);
            }).catch(err => {
                alert(err.message)
            })
        }
    },
    firestore: {
        projects: db.collection('projects').orderBy('created', 'desc')
    }
};
</script>

<style scoped>
#listProjects ul {
    margin: 0;
    padding: 0;
}

.projectItem button {
    padding: 0.2em;
    margin: 0.5em;
    border: none;
    cursor: pointer;
    color: #fff !important;
}

.btnView {
    background: #05747c;
}
.btnView:hover {
    background: #056168 !important;
}

.btnEdit {
    background: #2e4b7a;
}
.btnEdit:hover {
    background: #243a5e !important;
}

.btnDelete {
    background: #c62828;
}
.btnDelete:hover {
    background: #b71c1c !important;
}

.projectItem {
    padding-left: 1em;
    margin-bottom: 0.25em;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    justify-self: center;
    align-self: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 767px) {
    .projectItem {
        padding: 0.1em;
        text-align: center;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }

    .projectItem > button {
        padding: 1em;
    }
}
</style>
