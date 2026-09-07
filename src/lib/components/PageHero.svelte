<script lang="ts">
  export let eyebrow: string;
  export let title: string;
  export let accent = '';
  export let description = '';
</script>

<section class="page-hero">
  <p class="eyebrow mint">{eyebrow}</p>
  <h1>{title}<br /><em>{accent}</em></h1>
  {#if description}<p>{description}</p>{/if}
</section>
