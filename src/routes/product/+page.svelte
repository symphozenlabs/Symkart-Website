<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  const items = [
    [
      '01',
      'Storefronts',
      'Choose from five professional themes. Make the first impression yours.',
    ],
    [
      '02',
      'Operations',
      'Products, categories, orders, customers — one clear dashboard.',
    ],
    [
      '03',
      'Momentum',
      'Analytics, SEO-friendly descriptions, and content support to keep moving.',
    ],
    [
      '04',
      'Connections',
      'Payment gateways, custom domains, and WhatsApp product management.',
    ],
  ];
</script>

<Header />
<main>
  <PageHero
    eyebrow="THE SYMKART PLATFORM"
    title="Everything your"
    accent="store needs."
    description="A calm, capable toolkit for launching and operating your online business — from first product to everyday growth."
  />
  <section class="capability-grid">
    {#each items as [number, title, description]}<article>
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="cap-line"></div>
      </article>{/each}
  </section>
  <section class="whatsapp-band">
    <div class="wa-mark">⌁</div>
    <div>
      <h2>Manage products<br />where conversations <em>happen.</em></h2>
      <p>
        Add and update products through WhatsApp when that is the fastest way to
        get things done.
      </p>
    </div>
  </section>
  <CtaBand />
</main>
<Footer />
