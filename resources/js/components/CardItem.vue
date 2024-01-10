<template>
    <div class="card" @click="$modal.show(card.id.toString())">
        <h5>{{ card.title }}</h5>
        
        <modal class="card__modal" :name="card.id.toString()">
            <div class="card__modal--title">
                <h4 v-if="!editCard">{{ card.title }}</h4>
                <input v-if="editCard" class="mr-5" type="text" v-model="title"
                @keyup.enter="update" @keyup.esc="close" />

                <button v-if="!editCard" class="btn btn-icon ml-auto" @click="editCard = true">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
                <button v-if="!editCard" class="btn btn-icon ml-5" @click="deleteCard">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
                <button v-if="!editCard" class="btn btn-icon ml-5" @click="$modal.hide(card.id.toString())">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
                <button v-if="editCard" class="btn btn-sm mr-0" @click="update">Update</button>
                <button v-if="editCard" class="btn btn-icon ml-5" @click="close">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
            </div>
    
            <p v-if="!editCard">{{ card.description ?? 'Not available!' }}</p>
            <textarea v-if="editCard" v-model="description" placeholder="Type your description here..." rows="6"></textarea>
        </modal>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "CardItem",
    props: {
        columnId: {type: Number, required: true},
        card: {type: Object, required: true},
    },
    mounted() {
        this.title = this.card.title;
        this.description = this.card.description;
    },
    data() {
        return {
            title: null,
            description: null,
            editCard: false,
        }
    },
    watch: {
        card: {
            handler(card, oc) {
                this.title = card.title;
                this.description = card.description;
            },
            deep: true,
        }
    },
    methods: {
        close() {
            this.title = this.card.title;
            this.description = this.card.description;
            this.editCard = false;
        },

        deleteCard() {
            axios.delete(`cards/${this.card.id}`);
            this.$modal.hide(this.card.id.toString());
            this.$emit('delete', this.card, this.columnId);
        },

        update() {
            axios.put(`cards/${this.card.id}`, {
                title: this.title,
                description: this.description,
            }).then(res => {
                this.editCard = false;
                this.$modal.hide(this.card.id.toString());
                this.$emit('update', res.data.data, this.columnId);
            });
        }
    }
}
</script>