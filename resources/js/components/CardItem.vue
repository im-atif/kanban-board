<template>
    <div class="card" @click="showModal">
        <h5>{{ card.title }}</h5>
        
        <modal class="card__modal" :name="card.id.toString()">

            <div class="card__modal--title">
                <h4 v-if="!editCard">{{ card.title }}</h4>
                <input v-if="editCard" class="mr-5" type="text" v-model="cardTitle">

                <button v-if="!editCard" class="btn btn-icon ml-auto" @click="editCard = true">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
                <button v-if="!editCard" class="btn btn-icon ml-5" @click="deleteCard">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
                <button v-if="editCard" class="btn btn-sm mr-0" @click="updateCard">Update</button>
                <button v-if="editCard" class="btn btn-icon ml-5" @click="cancelEdit">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
            </div>
    
            <p v-if="!editCard">{{ card.description ?? 'N/A' }}</p>
            <textarea v-if="editCard" v-model="cardDesc" placeholder="Type your description here..." rows="6"></textarea>
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
        this.cardTitle = this.card.title;
        this.cardDesc = this.card.description;
    },
    data() {
        return {
            cardTitle: null,
            cardDesc: null,
            editCard: false,
        }
    },
    watch: {
        card: {
            handler(col, oc) {
                this.cardTitle = col.title;
                this.cardDesc = col.description;
            },
            deep: true,
        }
    },
    methods: {
        showModal() {
            this.$modal.show(this.card.id.toString());
        },

        cancelEdit() {
            this.cardTitle = this.card.title;
            this.cardDesc = this.card.description;
            this.editCard = false;
        },

        deleteCard() {
            axios.delete(`cards/${this.card.id}`);
            this.$emit('delete-card', this.card);
            this.$modal.hide(this.card.id.toString());
        },

        updateCard() {
            axios.put(`cards/${this.card.id}`, {
                title: this.cardTitle,
                description: this.cardDesc,
            }).then(res => {
                this.editCard = false;
                this.$emit('update-card', res.data.data);
                this.$modal.hide(this.card.id.toString());
            });
        }
    }
}
</script>