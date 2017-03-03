<template>
	<div class="container">
		mojcomponent
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
			a: 'aaaaaaaaaa'
		}
	},
	mounted() {
		
		console.log("asdasdsdas");	
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