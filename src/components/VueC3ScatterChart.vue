<style></style>

<template>
    <div>
        <div><slot></slot></div>
        <div v-bind:id="bindTo"></div>
    </div>
</template>

<script>
    import VueC3Base from './../mixins/VueC3Base'

    export default {

        mixins: [VueC3Base],

        name: "c3-scatter-chart",

        props: {},

        data: function data() {
            return {
                chartType: 'scatter'
            }
        }
    }
</script>
