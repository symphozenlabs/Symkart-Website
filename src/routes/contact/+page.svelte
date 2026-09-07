<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  let mode = 'trial';
  let sent = false;
</script>

<Header />
<main>
  <PageHero
    eyebrow="LET’S BUILD SOMETHING REAL"
    title="Your store"
    accent="starts here."
    description="Start a 14-day free trial, or tell us what you need from an Enterprise plan. We will take it from there."
  />
  <section class="contact-layout">
    <div class="contact-aside">
      <div class="contact-toggle">
        <button
          class:selected={mode === 'trial'}
          on:click={() => (mode = 'trial')}>Start free trial</button
        ><button
          class:selected={mode === 'enterprise'}
          on:click={() => (mode = 'enterprise')}>Enterprise enquiry</button
        >
      </div>
      <h2>
        {mode === 'trial'
          ? 'A simpler store is a few good clicks away.'
          : 'Let’s make room for what’s next.'}
      </h2>
      <p>
        {mode === 'trial'
          ? 'No credit card required. Set up your store, choose a theme, and see how it feels.'
          : 'Tell us about your business and we will shape the right onboarding journey for you.'}
      </p>
      <div class="contact-detail">
        <span>EMAIL</span><b>hello@symphozen.com</b>
      </div>
      <div class="contact-detail">
        <span>COMPANY</span><b>Symphozen Labs</b>
      </div>
    </div>
    <form class="contact-form" on:submit|preventDefault={() => (sent = true)}>
      {#if sent}<div class="success">
          <span>✓</span>
          <h2>We have your note.</h2>
          <p>Thanks for reaching out. We will be in touch soon.</p>
          <button
            type="button"
            class="button button-dark"
            on:click={() => (sent = false)}>Send another <span>↗</span></button
          >
        </div>{:else}<div class="form-row">
          <label>First name<input required placeholder="Ananya" /></label><label
            >Last name<input required placeholder="Sharma" /></label
          >
        </div>
        <label
          >Work email<input
            required
            type="email"
            placeholder="you@yourbusiness.com"
          /></label
        ><label
          >Business name<input required placeholder="Your business" /></label
        ><button class="button button-dark wide" type="submit"
          >{mode === 'trial' ? 'Create my trial' : 'Send enquiry'}
          <span>↗</span></button
        >
        <p class="form-note">
          By continuing, you agree to be contacted about SYMKART.
        </p>{/if}
    </form>
  </section>
</main>
<Footer />
