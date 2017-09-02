import VueC3Base from './../mixins/VueC3Base.vue'
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
