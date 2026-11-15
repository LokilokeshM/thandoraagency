const services = [
  { no: "01", title: "Brand strategy", text: "Positioning, identity systems and a sharper story your audience remembers.", tags: ["Research", "Identity", "Guidelines"] },
  { no: "02", title: "Digital experiences", text: "High-performing websites and digital journeys designed to turn attention into action.", tags: ["Web design", "Development", "UX"] },
  { no: "03", title: "Growth marketing", text: "Campaigns that connect creative thinking with measurable business outcomes.", tags: ["Paid media", "Content", "SEO"] },
];

const work = [
  { category: "Brand identity · 2025", title: "A new language for modern living", name: "ATELIER / 01", cls: "work-one" },
  { category: "Digital experience · 2025", title: "Making every interaction count", name: "FORME / 02", cls: "work-two" },
  { category: "Campaign · 2024", title: "A little louder. A lot more human.", name: "GOODDAY / 03", cls: "work-three" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="logo" href="#top" aria-label="Thandora Agency home"><span className="logo-mark">t.</span><span>thandora<span className="logo-light">agency</span></span></a>
        <div className="nav-links"><a href="#services">What we do</a><a href="#work">Selected work</a><a href="#about">About</a></div>
        <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> INDEPENDENT CREATIVE & GROWTH AGENCY</div>
          <h1>Make your brand<br/> <em>impossible</em> to ignore.</h1>
          <p className="hero-lede">We turn ambitious ideas into brands, digital experiences and marketing that move people — and businesses — forward.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Start a conversation <span>↗</span></a><a className="text-link" href="#work">Explore our work <span>↓</span></a></div>
          <div className="hero-note"><span className="note-line"/> GOOD THINKING. BOLD MAKING. REAL MOMENTUM.</div>
        </div>
        <div className="hero-art" aria-label="Abstract creative composition">
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
          <div className="art-disc"><span>THINK<br/>BIGGER<span className="disc-star">✳</span></span></div>
          <div className="art-card card-top"><span>IDEAS</span><b>↗</b></div>
          <div className="art-card card-bottom"><b>MAKE<br/>IT MATTER.</b><span>THANDORA®</span></div>
          <div className="art-stamp">CREATIVE<br/>BY NATURE<br/><strong>✳</strong></div>
          <div className="art-index">FIG. 001 — THE START OF SOMETHING</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>CHENNAI · WORKING EVERYWHERE</span><span>EST. FOR WHAT’S NEXT</span></div>
      </section>

      <section className="ticker" aria-label="Agency capabilities"><div>STRATEGY <i>✳</i> DESIGN <i>✳</i> DIGITAL <i>✳</i> GROWTH <i>✳</i> STRATEGY <i>✳</i> DESIGN <i>✳</i> DIGITAL <i>✳</i> GROWTH <i>✳</i></div></section>

      <section className="intro section shell" id="about">
        <div className="section-kicker">01 / THE BIG PICTURE</div>
        <div className="intro-content"><h2>Good brands don’t<br/>just <em>show up.</em><br/>They stand for something.</h2><div className="intro-side"><p>Thandora is a marketing and creative agency for businesses ready to take their next step. We bring clarity to your story, craft to your presence and purpose to every move.</p><a className="under-link" href="#contact">Let’s build what’s next <span>↗</span></a></div></div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-head"><div><div className="section-kicker">02 / HOW WE HELP</div><h2>One good idea.<br/><em>Everywhere it matters.</em></h2></div><p>From the first spark to the final click, we connect the dots between what makes you different and what makes people care.</p></div>
        <div className="service-list">{services.map(s => <article className="service-row" key={s.no}><span className="service-no">{s.no}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="work section" id="work">
        <div className="shell"><div className="section-head work-head"><div><div className="section-kicker">03 / A LITTLE PROOF</div><h2>Made to <em>make a mark.</em></h2></div><p>A few snapshots of the kind of thinking, making and momentum we love. Concept projects shown as creative direction explorations.</p></div>
          <div className="work-grid">{work.map((w, i) => <article className="work-card" key={w.name}><div className={`work-visual ${w.cls}`}><span className="work-name">{w.name}</span><span className="work-graphic">{i === 0 ? "A" : i === 1 ? "F" : "G"}</span><span className="work-number">0{i+1}</span></div><div className="work-meta"><span>{w.category}</span><span>↗</span></div><h3>{w.title}</h3></article>)}</div>
        </div>
      </section>

      <section className="manifesto section shell">
        <div className="section-kicker">04 / OUR POINT OF VIEW</div><div className="manifesto-copy"><span className="manifesto-star">✳</span><h2>Less noise.<br/><em>More meaning.</em><br/>Always moving.</h2><p>We believe the best marketing doesn’t interrupt. It connects. It earns attention, builds trust and gives people a reason to choose you.</p></div>
      </section>

      <section className="contact section" id="contact"><div className="shell contact-inner"><div className="section-kicker">05 / YOUR MOVE</div><h2>Have a good one<br/> brewing? <em>Let’s talk.</em></h2><p>Tell us where you want to go. We’ll help you figure out how to get there.</p><a className="button button-light" href="mailto:hello@thandoraagency.com?subject=Let's%20work%20together">hello@thandoraagency.com <span>↗</span></a><div className="contact-foot"><span>THANDORA AGENCY © 2025</span><span>CHENNAI, INDIA · AVAILABLE WORLDWIDE</span><a href="#top">BACK TO TOP ↑</a></div></div></section>
      <footer className="footer shell"><a className="logo" href="#top"><span className="logo-mark">t.</span><span>thandora<span className="logo-light">agency</span></span></a><span>Independent by nature. Ambitious by design.</span><span>BUILT FOR WHAT’S NEXT.</span></footer>
    </main>
  );
}
