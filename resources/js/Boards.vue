<template>
    <div class="main">
        <header class="main__header">
            <h1>Kanban Boards</h1>
        </header>

        <div class="main__content">
            <ul class="main__content--columns">
                <li class="column" v-for="col in columns" :key="col.id">
                    <column-edit :column="col" @update="onUpdateColumn" @delete="onDeleteColumn" />
                    <draggable class="column__draggable" :list="col.cards" group="cards" @change="onChange($event, col.id)">
                        <card-item v-for="card in col.cards" :key="card.id"
                        :card="card" :columnId="col.id"
                        @update="onCardUpdate" @delete="onCardDelete"/>
                    </draggable>
                    <card-add :columnId="col.id" @create="onCardCreate" />
                </li>
                <li><column-add @create="onCreateColumn" /></li>
            </ul>
        </div>
    </div>
</template> 

<script>
import axios from 'axios';

export default {
    name: "MainApp",
    components: {
        Draggable: () => import('vuedraggable'),
        ColumnAdd: () => import('./components/ColumnAdd'),
        ColumnEdit: () => import('./components/ColumnEdit'),
        CardAdd: () => import('./components/CardAdd'),
        CardItem: () => import('./components/CardItem'),
    },
    data() {
        return {
            loading: true,
            columns: []
        }
    },
    mounted() { this.getData() },
    methods: {
        getData() {
            axios.get(`list-columns`).then(res => {
                this.columns = res.data.data;
                
                // this.columns.forEach(col => {
                //     col.cards.forEach(card => {
                //         console.log(card.order);
                //     });
                //     console.log('----');
                // });
                this.loading = false;
            });
        },

        async onChange(evt, columnId) {
            let res = null;
            // console.log(evt, columnId);
            if (evt.added) {
                res = await axios.put(`cards/${evt.added.element.id}/order`, {
                    column_id: columnId,
                    index: evt.added.newIndex
                });
            } else if (evt.moved) {
                res = await axios.put(`cards/${evt.moved.element.id}/order`, {
                    column_id: columnId,
                    index: evt.moved.newIndex
                });
            } else if (evt.removed) {
                res = await axios.put(`columns/${columnId}/reordered`, {
                    index: evt.removed.oldIndex
                });
            }
        },

        onCreateColumn(data) {
            this.columns.push(data);
        },

        onUpdateColumn(column, data) {
            const colIndex = this.columns.findIndex(c => c.id === column.id);
            this.columns[colIndex].title = data.title;
        },

        onDeleteColumn(column) {
            const colIndex = this.columns.findIndex(c => c.id === column.id);
            this.columns.splice(colIndex, 1);
        },

        onCardCreate(card, columnId) {
            console.log(card);
            const colIndex = this.columns.findIndex(c => c.id === columnId);
            this.columns[colIndex].cards.push(card);
        },
        
        onCardUpdate(card, columnId) {
            const colIndex = this.columns.findIndex(c => c.id === columnId);
            const cardIndex = this.columns[colIndex].cards.findIndex(c => c.id === card.id);
            this.columns[colIndex].cards[cardIndex].title = card.title;
            this.columns[colIndex].cards[cardIndex].description = card.description;
        },
        
        onCardDelete(card, columnId) {
            const colIndex = this.columns.findIndex(c => c.id === columnId);
            const cardIndex = this.columns[colIndex].cards.findIndex(c => c.id === card.id);
            this.columns[colIndex].cards.splice(cardIndex, 1);
        },
    }
}
</script>
