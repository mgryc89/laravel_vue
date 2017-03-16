<template>
	<div class="container">

		
		<p class="asd">{{ zmienna }}</p>
		<p>{{ duzelitery }}</p>

		<div v-for="item in items">
			{{ item.name | czyMati}} - {{ item.wiek }} <br>
		</div >

		<button class="btn btn-primary" @click="wcisnij">Zmiana</button>

		<button class="btn btn-success" @click="fromPHP">get Form Controller</button>

		<button class="btn btn-success" @click="fromPHPpost">post api Form Controller</button>

		<button class="btn btn-success" @click="fromWebPost">post web Form Controller</button>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				zmienna : 'jakas zmienna z vue',
				items : [
					{name: 'Mateusz', wiek: 27},
					{name: 'ASd', wiek: 543453},
					{name: 'Rdzc', wiek: 15}
				]
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
			},
			fromPHPpost() {
				this.axios.post('/api/frophppost')
					.then( (response) => {
						console.log(response.data);
					});
			},

			fromWebPost() {
				this.axios.post('/frophppost', {name:'Mateusz'})
					.then( (response) => {
						console.log( response.data );
						console.log( response );
					});
			}

		},

		mounted() {
			console.log('teraz');
		},

		computed: {
			duzelitery() {
				return this.zmienna.toUpperCase();
			}
		},

		filters: {
			duze(val) {
				return val.toUpperCase();
			},
			czyMati(val) {
				val = val.toLowerCase()
				if (val == "mateusz") {
					return 'tak to jest moje imie';
				}
				return 'nieee';
			}
		}


	}
</script>