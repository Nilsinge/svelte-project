<script>
	export let name;
	export let fillerData;
	let name2 = "Natufian";
	let name3 = "Tokharian";
	let imgSource = "NatufianSpread.svg"; // bind with brackets
	let src = "Andronovo_culture.png"; // same name as attribute == can use shorthand!!!
</script>

<main>
	<h1>{name2}!</h1>
	<p>Visit Wikipedia to learn more about the
		<a href="https://en.wikipedia.org/wiki/Natufian_culture">Natufian civilization</a>.
	</p>
	<img class="info-image" alt="spread of natufian culture" src={imgSource}>
	<p>{fillerData}</p>

	<h1>{name3}!</h1>
	<p>Visit Wikipedia to learn more about the
		<a href="https://en.wikipedia.org/wiki/Natufian_culture">Tokharian civilization</a>.
	</p>
	<img class="info-image" alt="spread of tokhraian culture" {src}> <!-- Short hand !-->
	<p>{fillerData}</p>


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.info-image {
		border: solid 1px black;
		border-radius: 2px;
	}
</style>