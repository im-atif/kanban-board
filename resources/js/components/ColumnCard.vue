<template>
    <div class="column">
        <div class="column-head">
            <input v-if="editColumn" type="text" v-model="title"
            placeholder="Enter column title..."
            @keyup.enter="updateColumn" @keyup.esc="cancelColumnUpdate" />
            <h4 class="column-head__title" v-if="!editColumn" @click="editColumn = true">{{ this.column.title }}</h4>

            <button class="btn btn-icon ml-5" @click="deleteColumn">
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
import axios from 'axios';

export default {
    name: "ColumnCard",
    props: {
        column: {type: Object, required: true},
    },
    data() {
        return {
            title: '',
            editColumn: false,
            addCard: false,
        }
    },
    mounted() {
        this.title = this.column.title;
    },
    watch: {
        column: {
            handler(col, oc) {
                this.title = col.title;
            },
            deep: true,
        }
    },
    methods: {
        updateColumn() {
            axios.put(`columns/${this.column.id}`, {
                title: this.title
            }).then(res => {
                this.$emit('update', this.column, res.data.data);
                this.editColumn = false;
            });
        },

        cancelColumnUpdate() {
            this.title = this.column.title;
            this.editColumn = false;
        },

        deleteColumn() {
            axios.delete(`columns/${this.column.id}`);
            this.$emit('delete', this.column);
        },
    }
}
</script>