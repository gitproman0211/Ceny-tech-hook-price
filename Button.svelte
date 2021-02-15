<script>
	import { countStore, setValue } from "./model";
</script>

<style>
	button {
	  background: #ff3e00;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	}
</style>

{ $countStore }
<button on:click={setValue}>
  Clicked 
</button>