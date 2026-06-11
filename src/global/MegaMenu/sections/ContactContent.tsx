import { Styles } from '@/styles';
import { ContactCard } from '../components/ContactCard';
import { Data } from '@/data';

const ContactContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
    <div
      style={Styles.stagger(0)}
      className="menu-item-stagger relative overflow-hidden flex flex-col justify-between min-h-[220px]"
    >
      <div
        className="absolute inset-0 -z-10"
  
      />
      <div>
    
        <div className="text-xl sm:text-2xl font-bold tracking-tight mt-3 leading-tight">
          Lass uns reden.
        </div>
        <p className="text-text-2 text-[13px] leading-relaxed mt-3">
          Projektanfragen, Fragen zu meiner Arbeit oder einfach ein Austausch — ich freue mich.
        </p>
      </div>
      <div className="mono text-[10px] tracking-[.22em] text-text-3 uppercase">
        Antwort meist innerhalb 24h
      </div>
    </div>
    
    { Data.Global.Contact.map((contact) => (
      <ContactCard
        key={contact.index}
        href={contact.href}
        icon={contact.icon}
        label={contact.label}
        value={contact.value}
        hint={contact.hint}
        index={contact.index}
      />
    ))}
  </div>
  );


export { ContactContent };