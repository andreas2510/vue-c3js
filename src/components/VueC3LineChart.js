import VueC3Base from './../mixins/VueC3Base.vue'
export default {
  mixins: [VueC3Base],
  name: "c3-line-chart",
  props: {
    connectNull: {
      type: Boolean
    },
    lineStepType: {
      type: String // step, step-before and step-after can be used.
    }
  },
  data: function data() {
    return {
      chartType: 'line'
    }
  }
}
