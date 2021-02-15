<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://murunwa.ga">
			<img src="https://cloudcengy.imfast.io/logo1.png" alt="ceny tech logo" width="112" height="28">
		</a>

		<a on:click={onToggle} bind:this={navElem} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
		 data-target="navMenu">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navMenu" class="navbar-menu" bind:this={toggleElem}>
		<div class="navbar-end">
			<a on:click={onToggle} href="#" class="navbar-item is-active">Home</a>
			<a on:click={print} href="#" class="navbar-item">Blog</a>
			<a href="#" class="navbar-item">Forum</a>
			<a href="#" class="navbar-item">Shop</a>
			<a href="#" class="navbar-item">Examples</a>
		</div>
	</div>
</nav>

<script>
  import { onMount } from "svelte";
  let navElem, toggleElem;

  onMount(() => {
    // navElem.addEventListener("click", function() {
    //   navElem.classList.toggle("is-active");
    //   toggleElem.classList.toggle("is-active");
    // });
  });

  const onToggle = () => {
    navElem.classList.toggle("is-active");
    toggleElem.classList.toggle("is-active");
  };

  const print = () => {
    SejdaJsApi.htmlToPdf({
      filename: "out.pdf",
      /* leave blank for one long page */
      pageSize: "a4",
      publishableKey: "api_public_84360eb953f84ac78258d06020e39276",
      htmlCode: document.querySelector("#pdf").innerHTML,
      /* url: window.location.href */
      always: function() {
        // PDF download should have started
      }
    });
  };
</script>