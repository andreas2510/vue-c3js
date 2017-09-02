import VueC3Base from './../mixins/VueC3Base.vue'
export default {
  mixins: [VueC3Base],
  name: "c3-spline-chart",
  props: {},
  data: function data() {
    return {
      chartType: 'spline'
    }
  }
}
