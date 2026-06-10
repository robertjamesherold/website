export type MenuType = 'projects' | 'contact' | 'all';


export type ContactCardProps = {
    href: string,
    icon: React.ReactNode,
    label: string,
    value: string,
    hint: string,
    index: number | string,
    target?: string | undefined,
    rel?: string | undefined,
    ariaLabel?: string | undefined
}
