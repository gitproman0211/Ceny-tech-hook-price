<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title = "";
  let isActive = false;
  export function toggle() {
    isActive = !isActive;
    if (isActive == false) {
      dispatch("close");
    }
  }
</script>

<div class="modal {isActive?"is-active":""}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{title}</p>
      <button class="delete" on:click={toggle} aria-label="close"></button>
    </header>
    <section class="modal-card-body">
     <slot/>
    </section>
    <footer class="modal-card-foot">
     
      <button class="button" on:click={toggle}>Cancel</button>

       <slot name="actions"/>
    </footer>
  </div>
  </div>