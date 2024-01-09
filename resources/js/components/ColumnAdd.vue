<template>
    <div class="column">
        <div v-if="addColumn" class="column-head">
            <input type="text" v-model="title" placeholder="Enter column title..." />
        </div>
        <button v-if="addColumn" class="btn btn-primary btn-sm mr-5" @click="saveColumn">Save</button>
        <button v-if="addColumn" class="btn btn-icon" @click="addColumn = false">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <button v-if="!addColumn" class="btn btn-add" @click="addColumn = true">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
            <span>Add new column</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "ColumnAdd",
    data() {
        return {
            title: '',
            addColumn: false,
        }
    },
    computed: {},
    methods: {
        saveColumn() {
            axios.post(`columns`, {
                title: this.title
            }).then(res => {
                this.$emit('create', res.data.data);
                this.title = '';
                this.addColumn = false;
            });
        }
    }
}
</script>