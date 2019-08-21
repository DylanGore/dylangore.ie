<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        <div id="dashboard-cards">
            <AddProject />
            <ListProjects />
        </div>
    </div>
</template>

<script>
import AddProject from '@/components/projects/AddProject';
import ListProjects from '@/components/projects/ListProjects';

export default {
    name: 'projects',
    components: {
        AddProject,
        ListProjects
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
#dashboard-cards {
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 1fr 1fr;
}

#dashboard-cards > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 0 1em;
}

@media screen and (max-width: 790px) {
    #dashboard-cards {
        grid-template-columns: 1fr;
        margin-bottom: 1em;
    }
}
</style>
