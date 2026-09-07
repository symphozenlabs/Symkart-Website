<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Header />
<main>
  <PageHero
    eyebrow="THE PEOPLE BEHIND THE PRODUCT"
    title="Built for the"
    accent="long game."
    description="SYMKART is a product from Symphozen Labs, a technology company building focused tools for the next generation of businesses."
  />
  <section class="about-story">
    <div class="about-number">01</div>
    <div>
      <h2>Good software should<br />make room for <em>good work.</em></h2>
      <p>
        Small businesses don't need more noise. They need technology that
        respects their time, gives them control, and helps them show up
        confidently online.
      </p>
      <p>
        That is why we are building SYMKART: a simpler, more considered way to
        own your commerce presence.
      </p>
      <a class="button button-dark" href="https://symphozen.com/products"
        >Meet Symphozen Labs <span>↗</span></a
      >
    </div>
    <div class="about-visual"><span>SYMPHOZEN<br />LABS</span><i>✳</i></div>
  </section>
  <CtaBand />
</main>
<Footer />
