import VueC3CombinationElement from './../../mixins/VueC3CombinationElement'
export default {
  mixins: [VueC3CombinationElement],
  name: "c3-bar",
  data: function data() {
    return {
      type: 'bar'
    }
  }
}

