const app = Vue.createApp({
  data: () => ({
    message: ''
  }),
	methods: {
		clickHandler: function($event, message) {
			this.message = new Date().toLocaleTimeString()
		}
	}
})
app.mount('#app')
