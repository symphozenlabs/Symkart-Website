<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import { faqs } from '$lib/site';
  let active = 0;
</script>

<Header />
<main>
  <PageHero
    eyebrow="QUESTIONS, ANSWERED"
    title="Clarity is"
    accent="kindness."
    description="The essentials, in plain language. If your question is not here, we would love to hear it."
  />
  <section class="faq-list">
    {#each faqs as [question, answer], index}<button
        class:active={active === index}
        class="faq-item"
        on:click={() => (active = active === index ? -1 : index)}
        ><span class="faq-q">{question}</span><span class="faq-toggle"
          >{active === index ? '−' : '+'}</span
        >{#if active === index}<span class="faq-a">{answer}</span>{/if}</button
      >{/each}
  </section>
  <CtaBand />
</main>
<Footer />
