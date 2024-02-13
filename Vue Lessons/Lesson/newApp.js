new Vue({
  el: "#app",
  data() {
    return {
      name: "",
      checkedNames: [],
      selected: null,
      a: 0,
      b: 0,
      developers: [
        "Mehriddin",
        "Javohir",
        "Jahongir",
        "Asror",
        "Mexroj",
        "Ramziddin",
      ],
    };
  },
  methods: {
    filterdevelopers(start) {
      return this.developers.filter((n) => n.startsWith("start"));
    },
  },
  computed: {
    add() {
      return this.b + this.a;
    },
    filterdevelopers() {
      return this.developers.filter((n) => n.startsWith("M"));
    },
  },
});
