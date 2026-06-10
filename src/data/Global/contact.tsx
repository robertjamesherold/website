import { Icon } from '@/assets/icons';

type ContactCardProps = {
    href: string,
    icon:   React.ReactNode,
    label: string,
    value: string,
    hint: string,
    index: number | string,
    target?: string | undefined,
    rel?: string | undefined,
    ariaLabel?: string | undefined
}

const contactData: ContactCardProps[] = [
  {
    href: 'mailto:robertjamesherold@icloud.com',
    icon: <Icon.Send width="20px" height="20px" /> ,
    label: 'E-Mail',
    value: 'robertjamesherold@icloud.com',
    hint: 'Ideal für Projektanfragen und Details.',
    index: 1
  },
  {
    href: 'tel:+4915161660444',
    icon: <Icon.Phone width="20px" height="20px" />,
    label: 'Telefon',
    value: '+49 151 61660444',
    hint: 'Für ein erstes Gespräch oder schnelle Rückfragen.',
    index: 2
  },
  {
    href: '/docs/lebenslauf.pdf',
    icon: <Icon.Download width="20px" height="20px" />,
    label: 'Lebenslauf',
    value: 'Lebenslauf öffnen',
    hint: 'PDF im Browser ansehen — direkt verfügbar.',
    index: 3
  }
];

export { contactData };