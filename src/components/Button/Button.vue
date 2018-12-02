<template>
    <button :class="type">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component({
        props: ['type'],
        name: 'Button'
    })
    export default class extends Vue {
    }
</script>

<style scoped>

</style>
