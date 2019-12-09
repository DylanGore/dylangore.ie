<template>
    <div id="addProject">
        <h2>Add Project</h2>
        <form id="addProjectForm" @submit.prevent="addProject" method="post">
            <div class="formError" v-if="message">
                <p>{{ message }}</p>
            </div>
            <div class="inputGroup">
                <label for="name">Project Name:</label>
                <!-- prettier-ignore prettyhtml-ignore -->
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="name"
                    :disabled="selectedFile"
                    required
                />
            </div>
            <div class="inputGroup">
                <label for="name">Project Type:</label>
                <!-- prettier-ignore -->
                <input type="text" name="type" id="type" v-model="type" />
            </div>
            <div class="inputGroup">
                <label for="thumbnail">Thumbnail:</label>
                <!-- prettier-ignore prettyhtml-ignore -->
                <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    @change="onFileSelected"
                    :disabled="!name"
                    required
                />
            </div>
            <div class="inputGroup">
                <label for="summary">Summary:</label>
                <!-- prettier-ignore prettyhtml-ignore -->
                <textarea
                    name="summary"
                    id="summary"
                    v-model="summary"
                    rows="2"
                    required
                />
            </div>
            <div class="inputGroup">
                <label for="description">Description:</label>
                <!-- prettier-ignore prettyhtml-ignore -->
                <textarea
                    name="description"
                    id="description"
                    v-model="description"
                    rows="3"
                    required
                />
            </div>
            <div class="inputGroup">
                <label for="sourceURL">Source URL:</label>
                <!-- prettier-ignore -->
                <input type="url" name="sourceURL" id="sourceURL" v-model="sourceURL" />
            </div>
            <div class="inputGroup">
                <label for="docsURL">Documentation URL:</label>
                <!-- prettier-ignore -->
                <input type="url" name="docsURL" id="docsURL" v-model="docsURL" />
            </div>
            <div class="inputGroup">
                <label for="projectURL">Project URL:</label>
                <!-- prettier-ignore -->
                <input type="url" name="projectURL" id="projectURL" v-model="projectURL" />
            </div>
            <div class="inputGroup">
                <label for="message">Message:</label>
                <!-- prettier-ignore prettyhtml-ignore -->
                <textarea
                    name="message"
                    id="message"
                    v-model="projMessage"
                    rows="2"
                />
            </div>
            <div class="inputGroup">
                <label for="hidden">Hide Project: </label>
                <input type="checkbox" id="hidden" v-model="hidden" />
            </div>
            <input type="submit" value="Add Project" />
        </form>
    </div>
</template>

<script>
import slugify from 'slugify';
import { db, storage, Timestamp } from '@/firebase/init';

export default {
    name: 'addProject',
    data() {
        return {
            message: null,
            selectedFile: null,
            filePath: null,
            thumbnailURL: null,
            slug: null,
            name: null,
            type: null,
            summary: null,
            description: null,
            sourceURL: null,
            docsURL: null,
            projectURL: null,
            projMessage: null,
            hidden: false
        };
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.slug = slugify(this.name, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@'#]/g,
                lower: true
            });
        },
        addProject() {
            var dbRef = db.collection('projects').doc(this.slug);
            var fileExt = this.selectedFile.name.split('.').pop();
            this.filePath = 'project_thumbnails/' + this.slug + '.' + fileExt;

            // Get storage reference
            var ref = storage.ref(this.filePath);

            dbRef.get().then(doc => {
                if (!doc.exists) {
                    // Upload image
                    // prettier-ignore
                    ref.put(this.selectedFile).then(() => {
                        this.message = 'Upload complete!';
                        ref.getDownloadURL().then(url => {
                            this.thumbnailURL = url;
                            // Add project info to DB
                            dbRef.set({
                                id: this.slug,
                                name: this.name,
                                type: this.type,
                                thumbnailURL: this.thumbnailURL,
                                thumbExt: fileExt,
                                summary: this.summary,
                                description: this.description,
                                sourceURL: this.sourceURL,
                                docsURL: this.docsURL,
                                projectURL: this.projectURL,
                                message: this.projMessage,
                                created: Timestamp.now(),
                                hidden: this.hidden
                            });

                            // Reset form data
                            this.slug = null,
                            this.name = null;
                            this.type = null;
                            this.thumbnailURL = null;
                            this.summary = null;
                            this.description = null;
                            this.sourceURL = null;
                            this.docsURL = null;
                            this.projectURL = null;
                            this.projMessage = null;
                            this.hidden = false;
                            // Reset file selection
                            this.selectedFile = null;
                            document.getElementById("thumbnail").value = "";
                        }); 
                    }).catch(err => {
                        this.message = err.message;
                    });
                } else {
                    this.message = 'A project with this name already exists!';
                }
            });
        }
    }
};
</script>

<style scoped>
/* Import form styles */
@import '../../assets/css/form.css';

#uploadContainer {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    grid-gap: 1em;
    align-items: center;
    width: 100%;
}

#fileMessage {
    height: 22px;
}

#uploadProgress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
}
</style>
