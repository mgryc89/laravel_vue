<template>
	<div>
		<p class="asd">nastepny, {{pol}}, {{zmienna}}</p>
		<div v-for="c in cale">
			{{c.imie}}
		</div>
		<button @click="asdasd">asdasda</button>

		<input type="text" v-model="msg">
		<p >{{msg}}</p>
	</div>
</template>

<script>
export default {
	props: ['zmienna'],
	data() {
		return {
			msg: '',
			pol: 'białystok',
			cale: [
				{ imie: 'Mateusz', nazwisko: 'we' },
				{ imie: 'Mirek',nazwisko: 'asd' },
				{ imie: 'Władek',nazwisko: 'gf' }
			],
		}
	},

	methods: {
		asdasd() {
			console.log('asdasd');
		}
	},

	mounted() {
		console.log('aaaaa');
	}
}
</script>

<!-- scoped -->
<style>
.asd {
	color: blue;
}
.menu {
	padding-left: 35px;
	color: grey;
}
</style>