import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants/siteMeta'

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between items-center mt-16 mb-16 md:mb-12">
      <h1 className="md:pr-8 text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        {SITE_TITLE}
      </h1>
      <h4 className="md:pl-8 mt-5 text-lg text-center md:text-left">{SITE_DESCRIPTION}</h4>
    </section>
  )
}
