<style></style>

<template>
    <div>
        <div><slot></slot></div>
        <div v-bind:id="bindTo"></div>
    </div>
</template>

<script>
    import VueC3Base from './../mixins/VueC3Base'
    import VueC3PieDonutGaugeBase from './../mixins/VueC3PieDonutGaugeBase'

    export default {

        mixins: [VueC3Base, VueC3PieDonutGaugeBase],

        name: "c3-donut-chart",

        props: {},

        data: function data() {
            return {
                chartType: 'donut'
            }
        }
    }
</script>
