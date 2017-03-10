<template>
	<div class="container">

		id: {{ $route.params.id }} mojcomponent
		<p>{{a}}</p>
		<p>{{dalszy}}</p>
		<dalszyComponent @poprzedni="przy"></dalszyComponent>

	</div>
</template>

<script>
	
export default {

	data() {
		return {
			zmienna2: 'HELLo',
			wal: 'walwalawl',
			ile: 1,
			name: 'Mateusz',
			sername: 'Gryc',
			zawartosc: '',
			w: 1,
			poe: '',
			a: 'aaaaaaaaaa',
			dalszy: 'z bliska'
		}
	},
	mounted() {
		
		console.log("asdasdsdas");	
		this.noweA();
		
	},

	methods: {
		zmiana() {
			this.ile *= 2;
		},
		consol(val) {
			console.log(val);
		},
		poenter($event) {
			this.poe = $event.target.value;
		},
		noweA() {
			this.a = 'bbbbbbbbbb';
		},
		przy($parametr) {
			console.log('dziala ' + $parametr);
			this.a = 'cccc';
		}

	},

	computed: {
		duzelitery() {
			return this.wal.toUpperCase();
		},
		fullname() {
			return this.name + ' ' + this.sername;
		}
	},


	filters: {
		lower(value){
			return value.toLowerCase();
		},
		upperCase(value){
			return value.toUpperCase();
		}
	},
	watch: {
		zawartosc: function() {
			this.w += 1;
		}
	}


}

</script>

<style>
	
</style>