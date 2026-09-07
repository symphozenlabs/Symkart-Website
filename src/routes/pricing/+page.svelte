<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Header />
<main>
  <PageHero
    eyebrow="PLANS THAT GROW WITH YOU"
    title="Start small."
    accent="Think big."
    description="Try SYMKART free for 14 days. When you are ready, choose the plan that fits the way you work."
  />
  <section class="pricing-grid">
    <article class="price-card">
      <div class="price-top">
        <span class="price-label">FOR SMALL BUSINESSES</span>
        <h2>Smart</h2>
        <p>Everything you need to get your first store online.</p>
        <div class="price">₹ 999 <small>/ month</small></div>
        <a class="button button-dark wide" href="/contact"
          >Start free trial <span>↗</span></a
        >
      </div>
      <div class="price-features">
        <b>Includes</b><span>Up to 50 products</span><span
          >Up to 10 categories</span
        ><span>5 media assets per product</span><span>14-day free trial</span>
      </div>
    </article>
    <article class="price-card enterprise">
      <div class="price-top">
        <span class="price-label">FOR GROWING OPERATIONS</span>
        <h2>Enterprise</h2>
        <p>More room, more scale, and a plan built around your business.</p>
        <div class="price custom">Let’s talk</div>
        <a class="button button-mint wide" href="/contact"
          >Request pricing <span>↗</span></a
        >
      </div>
      <div class="price-features">
        <b>Includes</b><span>Unlimited products</span><span
          >Unlimited categories</span
        ><span>Advanced scalability</span>
      </div>
    </article>
  </section>
  <CtaBand />
</main>
<Footer />
