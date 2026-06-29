export type Lang = "de" | "en";

export const tours = [
  {
    id: "sithujaya-green",
    name: "Sithujaya Green",
    location: { de: "Sri Lanka · Mirissa", en: "Sri Lanka · Mirissa" },
    provider: "panoee" as const,
    embed: "https://tour.panoee.net/iframe/sithujaya-green-mirissa",
    image: "/images/preview-sithujaya-green.png",
  },
  {
    id: "natraj-guest-house",
    name: "Natraj Guest House",
    location: { de: "Sri Lanka · Trincomalee", en: "Sri Lanka · Trincomalee" },
    provider: "panoee" as const,
    embed: "https://tour.panoee.net/iframe/natraj-guest-house",
    image: "/images/preview-natraj-guest-house.png",
  },
  {
    id: "new-ocean-vibes",
    name: "New Ocean Vibes",
    location: { de: "Sri Lanka · Ahangama", en: "Sri Lanka · Ahangama" },
    provider: "panoee" as const,
    embed: "https://tour.panoee.net/iframe/6a0e539d121c5cb81f4cc80c",
    image: "/images/preview-new-ocean-vibes.png",
  },
];

export const t = {
  nav: {
    work: { de: "Touren", en: "Work" },
    services: { de: "Leistungen", en: "Services" },
    process: { de: "Ablauf", en: "Process" },
    contact: { de: "Kontakt", en: "Contact" },
    cta: { de: "Projekt starten", en: "Get started" },
  },
  hero: {
    eyebrow: { de: "Websites + 360°-Touren", en: "Websites + 360° Tours" },
    titleTop: { de: "Dein Raum verdient", en: "Your property deserves" },
    titleAccent: { de: "mehr als Fotos.", en: "more than photos." },
    sub: {
      de: "Immersive Websites mit integrierten 360°-Touren. Wir gestalten deine Seite und fangen deinen Raum ein – damit Menschen eintreten, bevor sie je da waren.",
      en: "Immersive websites with built-in 360° tours. We design your site and capture your space, so people can step inside before they ever visit.",
    },
    ctaPrimary: { de: "Projekt starten", en: "Get started" },
    ctaSecondary: { de: "Touren ansehen", en: "See examples" },
    scroll: { de: "Scrollen", en: "Scroll" },
  },
  stats: [
    { value: "360°", label: { de: "Vollständige Begehung", en: "Full walkthrough" } },
    { value: "90+", label: { de: "Google-Performance", en: "Google performance" } },
    { value: "5★", label: { de: "Immersives Erlebnis", en: "Immersive experience" } },
  ],
  pillars: {
    tag: { de: "Was wir machen", en: "What we do" },
    heading: { de: "Zwei Disziplinen. Ein nahtloses Erlebnis.", en: "Two disciplines. One seamless experience." },
    tours: {
      title: { de: "360°-Virtuelle Touren", en: "360° Virtual Tours" },
      desc: {
        de: "Eine komplette Begehung deines Raums. Besucher erkunden frei, fassen Vertrauen und entscheiden mit Sicherheit.",
        en: "A complete walkthrough of your space. Visitors explore freely, build trust, and decide with confidence.",
      },
      points: {
        de: ["Vollständige 360°-Tour", "Einbettung auf der Website", "Funktioniert auf jedem Gerät", "VR-fähig"],
        en: ["Full 360° tour", "Website embed", "Works on every device", "VR-ready"],
      },
    },
    websites: {
      title: { de: "Maßgeschneiderte Websites", en: "Custom Websites" },
      desc: {
        de: "Eine schnelle, professionelle Website rund um deinen Raum – mit deiner 360°-Tour direkt integriert.",
        en: "A fast, professional website built around your space — with your 360° tour built right in.",
      },
      points: {
        de: ["Individuelles Design", "Für Mobil optimiert", "Buchungs-Integration", "Hosting & Domain inklusive", "SEO für 90+ Google-Wertung"],
        en: ["Custom design", "Mobile-optimized", "Booking integration", "Hosting & domain handled", "SEO for a 90+ Google rating"],
      },
    },
  },
  tour: {
    tag: { de: "Live ausprobieren", en: "Try it live" },
    heading: { de: "Tritt ein. Zieh, um dich umzusehen.", en: "Step inside. Drag to look around." },
    sub: {
      de: "Genau dieses Erlebnis betten wir in die Website deines Unternehmens ein.",
      en: "This is the exact experience we embed into your business's website.",
    },
    load: { de: "Tour laden", en: "Load tour" },
    loadHint: { de: "Klicken zum Starten der 360°-Tour", en: "Click to start the 360° tour" },
  },
  showcase: {
    tag: { de: "Ausgewählte Arbeiten", en: "Featured work" },
    heading: { de: "Räume, die wir zum Leben erweckt haben", en: "Spaces we've brought to life" },
    sub: {
      de: "Eine Auswahl an Premium-Touren für unsere Hotel- und Gästehaus-Partner.",
      en: "A selection of premium tours created for our hotel and guest house partners.",
    },
    open: { de: "Tour öffnen", en: "Open tour" },
  },
  process: {
    tag: { de: "So läuft es ab", en: "How it works" },
    heading: { de: "Für dich erledigt – von A bis Z.", en: "Done for you, end to end." },
    steps: [
      {
        title: { de: "Wir filmen", en: "We shoot" },
        desc: { de: "Wir besuchen dein Unternehmen und fangen es in 360° ein.", en: "We visit your business and capture it in 360°." },
      },
      {
        title: { de: "Wir bauen", en: "We build" },
        desc: { de: "Eine professionelle Website mit integrierter 360°-Tour.", en: "A professional website with your 360° tour built in." },
      },
      {
        title: { de: "Hosting & Domain", en: "Hosting & domain" },
        desc: { de: "Wir richten alles ein und registrieren eine Domain in deinem Namen.", en: "We set everything up and register a domain in your name." },
      },
      {
        title: { de: "Online gehen", en: "Go live" },
        desc: { de: "Ein polierter Auftritt, der Vertrauen schafft und Kunden gewinnt.", en: "A polished presence that builds trust and wins customers." },
      },
    ],
  },
  cta: {
    tag: { de: "Lass uns zusammenarbeiten", en: "Let's work together" },
    heading: { de: "Bereit, deinen Auftritt zu verwandeln?", en: "Ready to transform your presence?" },
    sub: {
      de: "Schreib uns noch heute – und wir gestalten ein unvergessliches virtuelles Erlebnis.",
      en: "Reach out today and let's craft an unforgettable virtual experience.",
    },
    whatsapp: { de: "Auf WhatsApp schreiben", en: "Chat on WhatsApp" },
    email: { de: "E-Mail senden", en: "Send an email" },
    form: {
      name: { de: "Name", en: "Full name" },
      namePh: { de: "Max Mustermann", en: "John Doe" },
      email: { de: "E-Mail-Adresse", en: "Email address" },
      emailPh: { de: "max@beispiel.de", en: "john@example.com" },
      business: { de: "Unternehmen (optional)", en: "Business name (optional)" },
      businessPh: { de: "Das Grand Hotel", en: "The Grand Hotel" },
      message: { de: "Erzähl uns von deinem Raum", en: "Tell us about your place" },
      messagePh: {
        de: "Ich habe ein Boutique-Hotel mit 30 Zimmern und hätte gerne eine 360°-Tour...",
        en: "I have a 30-room boutique hotel and would love a 360 tour...",
      },
      submit: { de: "Anfrage senden", en: "Send request" },
    },
  },
  footer: {
    tagline: { de: "Gehobene virtuelle Touren für Unternehmen.", en: "Elevated virtual tours for businesses." },
    rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
  },
};

export const contact = {
  email: "contact@stepin360.net",
  phoneDisplay: "+49 176 73533365",
  whatsapp: "https://wa.me/4917673533365",
  formAction: "https://formsubmit.co/contact@stepin360.net",
};

// Standalone landing page for the Natraj Guest House — shows only the 360° tour
// and the booking links. Replace the placeholder URLs below with the real
// listing links once they are available.
export const natrajPage = {
  // The tour shown on this page (matches the `natraj-guest-house` entry in `tours`).
  tourId: "natraj-guest-house",
  // Booking destinations. Set `url` to "" to hide a button.
  bookings: [
    {
      id: "booking",
      label: { de: "Auf Booking.com buchen", en: "Book on Booking.com" },
      // TODO: replace with the real Natraj Guest House listing URL
      url: "https://www.booking.com/",
    },
    {
      id: "airbnb",
      label: { de: "Auf Airbnb buchen", en: "Book on Airbnb" },
      // TODO: replace with the real Natraj Guest House listing URL
      url: "https://www.airbnb.com/",
    },
    {
      id: "whatsapp",
      label: { de: "Direkt per WhatsApp buchen", en: "Book directly on WhatsApp" },
      url: `${contact.whatsapp}?text=${encodeURIComponent(
        "Hi! I'd like to book a stay at Natraj Guest House."
      )}`,
    },
    {
      id: "email",
      label: { de: "Per E-Mail anfragen", en: "Enquire by email" },
      url: `mailto:${contact.email}?subject=${encodeURIComponent("Natraj Guest House — Booking enquiry")}`,
    },
  ],
  ui: {
    eyebrow: { de: "360°-Tour & Buchung", en: "360° Tour & Booking" },
    sub: {
      de: "Sieh dich in 360° um – und buche deinen Aufenthalt direkt über einen der Links unten.",
      en: "Look around in 360° — then book your stay directly through one of the links below.",
    },
    bookingHeading: { de: "Jetzt buchen", en: "Book now" },
    backToSite: { de: "Mehr von StepIn360", en: "More from StepIn360" },
  },
};
