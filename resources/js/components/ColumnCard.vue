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
        
        <card-item v-for="c in cards"
        :card="c" :columnId="column.id"
        @delete-card="onDeleteCard"
        @update-card="onCardUpdate" />
        
        <add-card :columnId="column.id"
        @card-create="onCardCreate" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ColumnCard",
    props: {
        column: {type: Object, required: true},
    },
    components: {
        AddCard: () => import('./AddCard.vue'),
        CardItem: () => import('./CardItem.vue'),
    },
    data() {
        return {
            title: '',
            editColumn: false,
            addCard: false,
            cards: [],
        }
    },
    mounted() {
        this.title = this.column.title;
        this.cards = this.column.cards;
    },
    watch: {
        column: {
            handler(col, oc) {
                this.title = col.title;
                this.cards = col.cards;
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

        onCardCreate(data) {
            this.cards.push(data);
        },

        onDeleteCard(data) {
            const cIndex = this.cards.findIndex(c => c.id === data.id);
            this.cards.splice(cIndex, 1);
        },

        onCardUpdate(data) {
            const cIndex = this.cards.findIndex(c => c.id === data.id);
            this.cards[cIndex].title = data.title;
            this.cards[cIndex].description = data.description;
        }
    }
}
</script>