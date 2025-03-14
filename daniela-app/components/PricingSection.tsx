

const tiers = [
  {
    name: 'Presencial',
    id: 'choose-one',
    href: '#',
    local: 'Leiria',
    description: "Consultório Ser Mais Pessoa - Psicoterapia.",
    // features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Presencial',
    id: 'choose-two',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeM44IA0jHcO8tckw_yct4gnVM5W85farYUPAp-K0yuqDAhRQ/viewform?usp=header',
    local: 'Lisboa',
    description: "Psinove - Inovamos a Psicologia.",
    // features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time2'],
    featured: false,
  },
  {
    name: 'Online',
    id: 'choose-three',
    href: '#',
    local: 'Online',
    description: 'Consultas por videochamada.',
    // features: [
    //   'Unlimited products',
    //   'Unlimited subscribers',
    //   'Advanced analytics',
    //   'Dedicated support representative',
    //   'Marketing automations',
    //   'Custom integrations',
    // ],
    featured: true,
  },
  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <main className="relative isolate  px-6 pt-16 pb-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance  sm:text-6xl">
          Escolhe o melhor caminho para ti
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty sm:text-xl/8">
        Escolhe o plano que mais adequado, para podermos começar a trabalhar juntos.
      </p>
      {/* Boxes */}
      <div className="mx-auto mt-16 sm:mt-20 max-w-lg lg:max-w-4xl grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-3xl'
                  : 'rounded-3xl',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 grid-flow-row',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.local}
              </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            {/* <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul> */}
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Começa hoje
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
