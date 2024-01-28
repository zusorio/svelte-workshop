<script>
	export let data;
</script>

<!--Hier soll eventuell die Fehlermeldung angezeigt werden-->

<form method="POST">
	<label>
		<span>Name</span>
		<input type="text" name="name" placeholder="John Doe" />
	</label>
	<label>
		<span>Age</span>
		<input type="number" name="age" placeholder="32" />
	</label>
	<button type="submit">Add</button>
</form>

<!--Zeige hier alle Nutzer an und verlinke zu der Nutzerseite-->
{data.users}
