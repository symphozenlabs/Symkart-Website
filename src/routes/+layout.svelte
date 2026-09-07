<script lang="ts">
  import '../styles.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head
  ><meta name="theme-color" content="#3B1D4A" /><meta
    name="description"
    content="SYMKART helps small businesses own, launch, and grow an online store."
  /><title>SYMKART — Own your store</title></svelte:head
>
<slot />
