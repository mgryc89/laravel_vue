<template>
	<div class="container">
		
		glowny asd
		
		<p>{{ zmienna }}</p>

		<button class="btn btn-primary" @click="wcisnij">Zmiana</button>

		<button class="btn btn-success" @click="fromPHP">get Form Controller</button>

	</div>
</template>


<script>
	export default {
		data() {
			return {
				baseURL : 'http://127.0.0.1:8000',
				zmienna : 'jakas zmienna z vue'
			}
		},

		methods: {
			wcisnij() {
				this.zmienna = 'zmienna z function'
			},
			fromPHP() {
				this.axios.get('/api/fromphp')
					.then( (response) => {
						console.log(response.data);
						this.zmienna = response.data[1];
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	}
</script>