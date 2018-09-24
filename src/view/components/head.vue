<template>
	<div class="header">
		<div class="header-container">
			<p>Administrador</p>
			<button>Salir</button>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'Head',
	}
</script>
<style>
	.header {
		background-color: #0A0A18;
		height: 50px;
	}
	.header-container {
		float: right;
		margin-top: 16px;
		margin-right: 20px;
	}
	.header-container p, .header-container button{
		display: inline-block;
		color: #eaeaea;
		background-color: transparent;
		border: 0;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
	}
</style>
