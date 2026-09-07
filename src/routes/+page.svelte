<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import BrowserMockup from '$lib/components/BrowserMockup.svelte';
  import { features } from '$lib/site';
</script>

<Header dark />
<main class="home">
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow mint">COMMERCE, WITHOUT THE COMPLEXITY</p>
      <h1>Own your store.<br /><em>Not a subscription.</em></h1>
      <p class="hero-sub">
        SYMKART gives growing businesses the simplest way to launch, run, and
        grow online.
      </p>
      <div class="button-row">
        <a class="button button-mint" href="/contact"
          >Start free trial <span>↗</span></a
        ><a class="button button-outline" href="/product"
          >See how it works <span>↓</span></a
        >
      </div>
      <div class="hero-meta">
        <span><b>14 days</b> to try it free</span><span
          ><b>5 themes</b> to make it yours</span
        >
      </div>
    </div>
    <div class="hero-visual">
      <BrowserMockup />
      <div class="hero-stamp">
        <span>Made for</span><strong>business<br />owners.</strong>
      </div>
    </div>
  </section>
  <section class="signal">
    <p>Everything you need to make online feel easy.</p>
    <div class="signal-line">
      <span>01 — YOUR STORE</span><span>02 — YOUR BUSINESS</span><span
        >03 — YOUR GROWTH</span
      >
    </div>
  </section>
  <section class="feature-intro">
    <p class="eyebrow">ONE PLATFORM. LESS FRICTION.</p>
    <h2>The busywork gets<br />out of your way.</h2>
    <p class="intro-copy">
      You know your business. SYMKART gives you the tools to run it beautifully,
      without learning a new language first.
    </p>
  </section>
  <section class="feature-list">
    {#each features as [number, title, text, type]}
      <article class={`feature-row feature-${type}`}>
        <span class="feature-num">{number}</span>
        <div class="feature-card">
          <div class="feature-art">
            <div class="art-store-body">
              <b
                >{type === 'store'
                  ? 'Good things\ntake time.'
                  : type === 'dashboard'
                    ? 'One calm\nplace.'
                    : 'connect\neverything'}</b
              >
            </div>
          </div>
          <div class="feature-card-content">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="/product">Explore SYMKART <span>↗</span></a>
          </div>
        </div>
      </article>
    {/each}
  </section>
  <section class="themes-strip">
    <div>
      <p class="eyebrow mint">FIVE WAYS TO LOOK THE PART</p>
      <h2>A store that feels<br /><em>like you.</em></h2>
      <a class="text-link light" href="/product"
        >Explore the themes <span>↗</span></a
      >
    </div>
    <div class="theme-tiles">
      <div class="theme-tile tile-fashion">
        <span>01</span><b>Modern<br />Minimal</b>
      </div>
      <div class="theme-tile tile-luxury">
        <span>02</span><b>Premium<br />Goods</b>
      </div>
      <div class="theme-tile tile-local">
        <span>03</span><b>Local<br />Commerce</b>
      </div>
    </div>
  </section>
  <CtaBand />
</main>
<Footer />
