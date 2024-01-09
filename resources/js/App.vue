<template>
    <div class="main">
        <header class="main__header">
            <h1>Kanban Boards</h1>
        </header>

        <div class="main__content">
            <ul v-if="!loading" class="main__content--cards">
                <li v-for="c in columns" class="main__content--cards-item">
                    <column-card :column="c" @delete="onColumnDeleted" @update="onUpdateColumn" />
                </li>
                <li>
                    <column-add @create="onCreateColumn" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainApp",
    components: {
        ColumnAdd: () => import('./components/ColumnAdd'),
        ColumnCard: () => import('./components/ColumnCard'),
    },
    data() {
        return {
            loading: true,
            columns: [],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.get(`list-columns`).then(res => {
                this.columns = res.data.data;
                this.loading = false;
            });
        },
        
        onCreateColumn(data) {
            this.columns.push(data);
        },

        onUpdateColumn(column, data) {
            const columnIndex = this.columns.findIndex(c => c.id === column.id);
            this.columns[columnIndex].title = data.title;
        },

        onColumnDeleted(data) {
            const columnIndex = this.columns.findIndex(c => c.id === data.id);
            this.columns.splice(columnIndex, 1);
        }
    }
}
</script>
