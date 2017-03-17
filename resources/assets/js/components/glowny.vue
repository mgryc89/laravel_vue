<template>
	<div class="container">

		
		<p class="asd">{{ zmienna }}</p>
		<p>{{ duzelitery }}</p>

		<div class="pierwszy">
			<div class="drugi">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi ratione molestias quidem officiis non doloribus quae magni voluptatem mollitia reprehenderit porro, illum facere dolores, ad ipsam inventore dolore distinctio!</p>

			</div>
			<div class="trzeci">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus dicta est cupiditate animi iusto repellendus, vel velit eveniet optio voluptates laboriosam, earum illo! Numquam laboriosam, itaque reprehenderit aperiam soluta.
			</div>
		</div>
		<div v-for="item in items">
			{{ item.name | czyMati}} - {{ item.wiek }} <br>
		</div >

		<button class="btn btn-default" @click="wcisnij">Zmiana</button>

		<button class="btn btn-default" @click="fromPHP">get Form Controller</button>

		<button class="btn btn-default" @click="fromPHPpost">post api Form Controller</button>

		<button class="btn btn-default" @click="fromWebPost">post web Form Controller</button>
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