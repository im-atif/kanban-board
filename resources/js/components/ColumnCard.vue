<template>
    <div class="column">
        <div class="column-head">
            <input v-if="editColumn" type="text" v-model="title" placeholder="Enter column title..." />
            <h4 class="column-head__title" v-else @click="editColumn = true">{{ this.title }}</h4>

            <button class="btn btn-icon ml-5">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
        </div>
        
        <button v-if="!addCard" class="btn btn-add" @click="addCard = true">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
            <span>Add a card</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "ColumnAdd",
    props: {
        column: {type: String, required: true},
    },
    data() {
        return {
            title: '',
            editColumn: false,
            addCard: false,
        }
    },
    mounted() {
        this.title = this.column;
    },
    computed: {},
    methods: {
        updateColumn() {
            this.$emit('edit-column', this.title);
            this.editColumn = false;
        }
    }
}
</script>