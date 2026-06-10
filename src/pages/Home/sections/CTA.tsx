import { Component } from '@/components';
import { Icon } from '@/assets/icons';

const CTA = () => (
  <section id="contact" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 flex justify-center reveal">
    <div
      className="max-w-275  card-base  w-full text-center flex flex-col gap-6 items-center rounded-md border border-primary/30 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24"
      style={{
        background: 'var(--background-gradient)', // Use the CSS variable for the background gradient
      }}
    >
      <h2 className="m-0 text-3xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tighter2">
        Lust, ein konkretes Projekt<br />zu besprechen?
      </h2>
      <p className="m-0 text-base sm:text-lg text-text-2 max-w-175">
        Ich freue mich auf den Austausch – über UX-Konzepte, Mensch-KI-Kollaboration und alles dazwischen.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center w-full sm:w-auto">
        <Component.Button href="mailto:robertjamesherold@icloud.com" icon={<Icon.Send />} className="w-full sm:w-auto sm:min-w-67.5">
          Kontakt aufnehmen
        </Component.Button>
        <Component.Button variant="secondaryOutlined" href="tel:+4915161660444" icon={<Icon.Phone />} className="w-full sm:w-auto sm:min-w-67.5">
          Telefonisch kontaktieren
        </Component.Button>
      </div>
    </div>
  </section>
);

export { CTA}