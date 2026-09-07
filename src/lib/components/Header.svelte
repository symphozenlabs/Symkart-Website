<script lang="ts">
  import { nav } from '$lib/site';
  let open = false;
  export let dark = false;
</script>

<header class:header-dark={dark} class="site-header">
  <a class="logo" href="/"
    ><span class="logo-mark">S</span><span>SYMKART</span></a
  >
  <nav class:nav-open={open} aria-label="Primary navigation">
    {#each nav as [label, href]}
      <a {href} on:click={() => (open = false)}>{label}</a>
    {/each}
  </nav>
  <div class="header-actions">
    <a class="text-link hide-mobile" href="/contact">Sign in</a><a
      class="button button-dark"
      href="/contact">Start free trial <span>↗</span></a
    >
  </div>
  <button
    class="menu-button"
    aria-label="Toggle menu"
    on:click={() => (open = !open)}>{open ? '×' : '☰'}</button
  >
</header>
