Vue.component("button-component", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<button v-on:click="count++">Counting qiymati{{count}}</button>',
});

Vue.component("blog-post" ,{
    props: ['title'],
    template:'<h2>{{title}}</h2>'
})

new Vue({
  el: "#app",
  data() {
    return {
      title: "Hello world",
    };
  },
});
