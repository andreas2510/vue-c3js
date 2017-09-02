import VueC3Base from './../mixins/VueC3Base.vue'
import VueC3PieDonutGaugeBase from './../mixins/VueC3PieDonutGaugeBase'
export default {
  mixins: [VueC3Base, VueC3PieDonutGaugeBase],
  name: "c3-donut-chart",
  props: {
    donutWidth: {
        type: Number
    },
    donutTitle: {
        type: String
    },
  },
  data: function data() {
    return {
      chartType: 'donut'
    }
  }
}
