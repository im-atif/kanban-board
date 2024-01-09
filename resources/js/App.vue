<template>
    <div class="main">
        <header class="main__header">
            <h1>Kanban Boards</h1>
        </header>

        <div class="main__content">
            <ul class="main__content--cards">
                <li v-for="c in columns" class="main__content--cards-item">
                    <column-card :column="c" />
                </li>
                <li>
                    <column-add @new-column="onColumnAdded" />
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
            columns: [],
        }
    },
    computed: {},
    methods: {
        onColumnAdded(data) {
            this.columns.push(data);
        }
    }
}
</script>
