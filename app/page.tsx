"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Clock3,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

const menu = {
  Antipasti: [
    [
      "Burrata Pugliese",
      "fennel pollen, blood orange, toasted pistachio",
      "$18",
    ],
    [
      "Polpo alla Brace",
      "charred octopus, ceci, salsa verde, smoked paprika",
      "$21",
    ],
    ["Arancini di Riso", "saffron rice, fontina, tomato sugo", "$15"],
    ["Fritto Misto", "calamari, shrimp, zucchini, lemon aioli", "$19"],
  ],
  Primi: [
    ["Tagliolini al Limone", "meyer lemon, parmigiano, cracked pepper", "$24"],
    ["Cavatelli al Ragù", "slow-braised beef and pork, pecorino", "$26"],
    ["Risotto ai Funghi", "wild mushrooms, thyme, taleggio", "$25"],
    ["Gnocchi di Zucca", "roasted squash, brown butter, sage, hazelnut", "$23"],
  ],
  Secondi: [
    [
      "Branzino alla Griglia",
      "grilled sea bass, artichoke, olive, preserved lemon",
      "$34",
    ],
    ["Pollo al Mattone", "crispy half chicken, salsa rossa, chicory", "$29"],
    [
      "Costoletta di Maiale",
      "heritage pork, apple mostarda, braised cabbage",
      "$32",
    ],
    [
      "Melanzana Arrosto",
      "roasted eggplant, tomato, basil, smoked ricotta",
      "$25",
    ],
  ],
  Dolce: [
    ["Tiramisù della Casa", "mascarpone, espresso, cocoa, ladyfingers", "$12"],
    [
      "Budino al Cioccolato",
      "dark chocolate custard, olive oil, sea salt",
      "$11",
    ],
    ["Panna Cotta", "vanilla bean, macerated strawberries", "$10"],
    ["Affogato", "fior di latte gelato, warm espresso", "$9"],
  ],
};

const gallery = [
  [
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85",
    "Dining room",
  ],
  [
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85",
    "Fresh pasta",
  ],
  [
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    "Seasonal dish",
  ],
  [
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    "Dinner service",
  ],
  [
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1000&q=85",
    "Kitchen prep",
  ],
  [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
    "The bar",
  ],
  ["/cocktail-new.png", "Cocktail service at the bar"],
  ["/spritz-new.png", "Citrus spritz"],
  ["/red-wine-new.png", "Italian red"],
  ["/drink-pour-new.png", "Cocktail presented at the bar"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["home", "Home"],
    ["menu", "Menu"],
    ["about", "Our story"],
    ["reservations", "Reservations"],
    ["contact", "Contact"],
  ];
  return (
    <header className="nav">
      <a href="#home" className="brand">
        Bella <i>Vista</i>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([id, label]) => (
          <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-phone" href="tel:+12125550184">
        <Phone size={15} /> (212) 555-0184
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image" />
      <div className="hero-copy">
        <p className="eyebrow">WEST VILLAGE · NEW YORK</p>
        <h1>
          Modern Italian,
          <br />
          <em>timeless flavor.</em>
        </h1>
        <p className="hero-text">
          A neighborhood table for long lunches, late dinners, and everything
          worth lingering over.
        </p>
        <a className="button button-light" href="#reservations">
          Reserve a table <ArrowRight size={17} />
        </a>
      </div>
      <div className="hero-stamp">
        EST.
        <br />
        <strong>2014</strong>
      </div>
    </section>
  );
}

function SectionIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-photo">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
          alt="Warmly lit Bella Vista dining room"
          width="1200"
          height="1500"
          loading="lazy"
        />
        <span>
          Our dining room
          <br />
          <i>on a good night</i>
        </span>
      </div>
      <div className="about-copy">
        <SectionIntro
          kicker="A little history"
          title="Come as you are. Stay for dessert."
        >
          <p>
            In 2014, chef Luca Moretti traded the hills of Emilia-Romagna for a
            tiny corner of the West Village. Bella Vista began with six tables,
            a hand-me-down pasta machine, and a simple idea: Italian food should
            feel like an invitation.
          </p>
          <p>
            Today, Luca and his team still make every pasta by hand, source from
            farmers they know by name, and leave room on the menu for whatever
            looks best at the market that morning.
          </p>
        </SectionIntro>
        <div className="signature">
          Luca Moretti <span>Chef & founder</span>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="menu-section section">
      <div className="menu-heading">
        <div className="menu-intro">
          <SectionIntro kicker="The menu" title="A table full of good ideas." />

          <p>
            Our menu follows the seasons, but the spirit stays the same:
            generous, unfussy, and made to be shared.
          </p>
        </div>

        <a className="text-link" href="#reservations">
          Book your table <ArrowRight size={15} />
        </a>
      </div>

      <div className="menu-grid">
        {Object.entries(menu).map(([category, items]) => (
          <div className="menu-category" key={category}>
            <h3>{category}</h3>

            {items.map(([name, desc, price]) => (
              <div className="menu-item" key={name}>
                <div>
                  <strong>{name}</strong>
                  <p>{desc}</p>
                </div>
                <span>{price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery section" aria-label="Gallery">
      {gallery.map(([src, alt], i) => (
        <figure key={src} className={i === 0 ? "gallery-feature" : ""}>
          <img src={src} alt={alt} width="1000" height="800" loading="lazy" />
        </figure>
      ))}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="quotes section">
      <p className="eyebrow">At the table</p>
      <div className="quote-grid">
        {[
          [
            "“The kind of place you hope stays a secret, even as you can’t stop telling everyone about it.”",
            "— Mara R.",
          ],
          [
            "“Every plate tasted like someone cared. The cavatelli alone is worth crossing town for.”",
            "— Daniel K.",
          ],
          [
            "“Warm, quietly beautiful, and completely unpretentious. Bella Vista is our new Friday ritual.”",
            "— Sophie L.",
          ],
        ].map(([quote, name]) => (
          <blockquote key={name}>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p>{quote}</p>
            <cite>{name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function ReservationForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            required
            placeholder="(212) 555-0184"
          />
        </label>
        <label>
          Party size
          <select name="partySize" required defaultValue="">
            <option value="" disabled>
              Select size
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Time
          <select name="time" required defaultValue="">
            <option value="" disabled>
              Select time
            </option>
            {[
              "5:30 PM",
              "6:00 PM",
              "6:30 PM",
              "7:00 PM",
              "7:30 PM",
              "8:00 PM",
              "8:30 PM",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Special requests{" "}
        <textarea
          name="requests"
          rows={3}
          placeholder="Allergies, celebrations, or anything else we should know?"
        />
      </label>
      <button className="button" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request a table"}{" "}
        <ArrowRight size={17} />
      </button>
      {status === "success" && (
        <p className="form-message success">
          Thank you — your request is on its way. We’ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="form-message error">
          Something went wrong. Please call us at (212) 555-0184.
        </p>
      )}
    </form>
  );
}

function Reservations() {
  return (
    <section id="reservations" className="reservations section">
      <div className="reservation-info">
        <SectionIntro
          kicker="Make a night of it"
          title="Your table is waiting."
        >
          <p>
            For parties of 8 or more, or if you’re planning something special,
            give us a call. We love a good occasion.
          </p>
        </SectionIntro>
        <div className="contact-details">
          <p>
            <CalendarDays size={18} /> Reservations recommended
          </p>
          <p>
            <Clock3 size={18} /> Tue–Sun, 5:30–10:30pm
          </p>
          <p>
            <Phone size={18} /> (212) 555-0184
          </p>
        </div>
      </div>
      <ReservationForm />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div>
        <p className="eyebrow">Find us</p>
        <h2>
          Meet us at
          <br />
          <em>the corner.</em>
        </h2>
        <address>
          218 Bleecker Street
          <br />
          New York, NY 10014
        </address>
        <a
          className="text-link"
          href="https://maps.google.com/?q=218+Bleecker+Street+New+York"
          target="_blank"
          rel="noreferrer"
        >
          Get directions <ArrowRight size={15} />
        </a>
      </div>
      <div className="hours">
        <h3>Hours</h3>
        <p>
          <span>Tuesday – Thursday</span>
          <b>5:30 – 10:00 pm</b>
        </p>
        <p>
          <span>Friday – Saturday</span>
          <b>5:30 – 11:00 pm</b>
        </p>
        <p>
          <span>Sunday</span>
          <b>5:00 – 9:30 pm</b>
        </p>
        <p>
          <span>Monday</span>
          <b>Closed</b>
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Reservations />
        <Contact />
      </main>
      <footer>
        <a href="#home" className="brand">
          Bella <i>Vista</i>
        </a>
        <p>Modern Italian, timeless flavor.</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Camera size={18} />
        </a>
        <small>© 2026 Bella Vista. Made with care in New York.</small>
      </footer>
    </>
  );
}
