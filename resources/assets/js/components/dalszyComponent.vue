<template>
	<div>
		dalszy component
		<button v-on:click="klik">klik</button>
	</div>
</template>

<script>

export default {
	data() {
		return {

		}
	},

	methods: {
		klik(){
			console.log('kislk');
			this.$emit("poprzedni", "asd");
			console.log('kislk');
		}
	}

}
	
</script>