<template>
    <div class="column-card">
        <div v-if="addCard" class="column-head">
            <input type="text" v-model="title" placeholder="Enter a title..."
            @keyup.enter="save" @keyup.esc="close" />
        </div>
        <button v-if="addCard" class="btn btn-primary btn-sm mr-5" @click="save">Save</button>
        <button v-if="addCard" class="btn btn-icon" @click="close">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        
        <button v-if="!addCard" class="btn btn-add" @click="addCard = true">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
            <span>Add a card</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "AddCard",
    props: {
        columnId: {type: Number, required: true},
    },
    data() {
        return {
            title: '',
            addCard: false,
        }
    },
    methods: {
        save() {
            if (this.title) {
                axios.post(`cards`, {
                    title: this.title,
                    column_id: this.columnId,
                }).then(res => {
                    this.$emit('create', res.data.data, this.columnId);
                    this.title = '';
                    this.addCard = false;
                });
            }
        },

        close() {
            this.title = '';
            this.addCard = false;
        }
    }
}
</script>