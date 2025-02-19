const app = Vue.createApp({
  data: () => ({
    counter: 0
  }),
	methods: {
		clickHandler: function(event) {
			this.counter++
		}
	}
})
app.mount('#app')
