<template>
    <div class="column">
        <div v-if="addColumn" class="column-head">
            <input type="text" v-model="title" placeholder="Enter column title..."
            @keyup.enter="save" @keyup.esc="close" />
        </div>
        <button v-if="addColumn" class="btn btn-primary btn-sm mr-5" @click="save">Save</button>
        <button v-if="addColumn" class="btn btn-icon" @click="close">
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
        save() {
            if (this.title) {
                axios.post(`columns`, {
                    title: this.title
                }).then(res => {
                    this.$emit('create', res.data.data);
                    this.title = '';
                    this.addColumn = false;
                });
            }
        },

        close() {
            this.title = '';
            this.addColumn = false;
        }
    }
}
</script>