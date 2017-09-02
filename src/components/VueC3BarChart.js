import VueC3Base from './../mixins/VueC3Base.vue'
import VueC3AreaBarBase from './../mixins/VueC3AreaBarBase'
export default {
  mixins: [VueC3Base, VueC3AreaBarBase],
  name: "c3-bar-chart",
  props: {
    barWidth: {
      type: Number
    },
    barWidthRatio: {
      type: Number
    }
  },
  data: function data() {
    return {
      chartType: 'bar'
    }
  }
}
