// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Resources', href: '#' },
//   { name: 'Company', href: '#' },
// ]
const stats = [
  { label: 'Students learning in PIAIC', value: '500,000' },
  { label: 'Students learning in Governor Sindh Program', value: '500,000' },
  { label: 'New users annually', value: '46,000' },
]
const values = [
  {
    name: 'Innovation',
    description:
      'We value innovation and encourage our students to think outside the box, explore new ideas, and push the boundaries of what is possible in the field of Generative AI. Through a culture of innovation, we aim to foster creativity, curiosity, and a passion for learning, empowering individuals to make meaningful contributions to the industry.',
  },
  {
    name: 'Collaboration',
    description:
      'We believe that collaboration is essential to success in the field of Generative AI. Our program emphasizes teamwork, communication, and the exchange of ideas, creating a supportive and collaborative learning environment. By working together, we can leverage our collective strengths and expertise to achieve our shared goals.',
  },
  {
    name: 'Excellence',
    description:
      'We are committed to excellence in all aspects of our program, from our curriculum to our instructors to our facilities. We strive to provide the highest quality education and training, ensuring that our students are well-prepared to excel in the field of Generative AI',
  },
  {
    name: ' Diversity and Inclusion',
    description:
      'We value diversity and inclusion and believe that a diverse community of learners is essential to the success of our program. We are committed to creating a welcoming and inclusive environment that celebrates differences and fosters a sense of belonging for all students.',
  },
  {
    name: 'Ethics and Responsibility',
    description:
      'We recognize the importance of ethical considerations in the development and application of Generative AI technologies. Our program emphasizes the importance of responsible and ethical practices, ensuring that our students are well-equipped to navigate the complex ethical considerations that arise in the field of Generative AI.',
  },
  {
    name: 'Lifelong Learning',
    description:
      'We believe that learning is a lifelong journey and that our students should be equipped with the skills and knowledge necessary to continue learning and growing throughout their careers. Our program emphasizes the importance of ongoing learning and professional development, empowering individuals to stay up-to-date with the latest developments in the field of Generative AI.',
  },
]
const team = [
  {
    name: 'Zia Khan',
    role: 'CEO of Panacloud / COO PIAIC',
    imageUrl: '/images/ziakhan.webp',
  },
  {
    name: 'Daniyal Nagori',
    role: 'CEO of PIAIC / AWS Architect at Panacloud',
    imageUrl: '/images/daniyalNagoori.jpeg',
  },
  {
    name: 'Dr. Ghulam Shabbir',
    role: 'Coordinator PIAIC, KPK & Punjab',
    imageUrl: '/images/dr_shabbir.jpeg',
  },
  {
    name: 'Adil Altaf',
    role: 'Chief Innovation Officer of Panacloud',
    imageUrl: '/images/adilAltaf.jpeg',
  },
  {
    name: 'Zeeshan Hanif',
    role: 'Chief Technology Officer of Panacloud',
    imageUrl: '/images/zeeshan.jpeg',
  },

  {
    name: 'Wania Kazmi',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/wania_kazmi.jpeg',
  },
  {
    name: 'Usman Ashraf',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/usman_ashraf.jpeg',
  },
  {
    name: 'Saad Irfan',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/saad_irfan.jpg',
  },
  {
    name: 'Abu Hurairah',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/abuhurairah.webp',
  },
  {
    name: 'Khubaib Khan',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/ziakhan.webp',
  },
  {
    name: 'Sajid Khan',
    role: 'Trainer PIAIC, Freelance',
    imageUrl: '/images/sajid_khan.jpeg',
  },

  // More people...
]



export default function Example() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      {/* Header */}
      {/* <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header> */}

      <main className='isolate'>
        {/* Hero section */}
        <div className='relative isolate -z-10'>
          <svg
            className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            />
          </svg>
          <div
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
            aria-hidden='true'
          >
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1eb2a6] to-[#1eb2a6] opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    Preparing for the Revolutionary Era of Generative AI
                  </h1>
                  <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                    Our program focuses on providing comprehensive education and
                    hands-on training in GenAI application development, cloud
                    computing, and DevOps, ensuring that participants are
                    well-prepared to address the complex challenges and
                    opportunities presented by Generative AI. We empower
                    students to make meaningful contributions in their chosen
                    specializations, driving innovation and progress in this
                    rapidly evolving industry.
                  </p>
                </div>
                <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                  <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/ziakhan.webp'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl h-full bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/dr_shabbir.jpeg'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/usman_ashraf.jpeg'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/daniyalNagoori.jpeg'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/wania_kazmi.jpeg'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission section */}
        <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our mission
            </h2>
            <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
              <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
                <p className='text-xl leading-8 text-gray-600'>
                  The Certified Cloud Applied Generative AI Engineer (GenEng)
                  program is dedicated to preparing individuals for the
                  transformative era of Generative AI. Through a rigorous
                  curriculum and hands-on experience, we aim to equip students
                  with the knowledge and skills needed to excel in GenAI
                  application development, cloud computing, and DevOps,
                  fostering their success in a rapidly evolving technological
                  landscape.
                </p>
                <div className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
                  <p>
                    Our mission centers on cultivating expertise in TypeScript,
                    Python, and front-end development using Next.js, alongside a
                    deep understanding of GenAI-related technologies.
                    Emphasizing real-world application and practical skills, our
                    program ensures that students are well-prepared to address
                    complex challenges and opportunities in Generative AI,
                    fostering a strong foundation in cutting-edge technologies
                    for meaningful contributions in their chosen
                    specializations.
                  </p>
                  <p className='mt-10'>
                    Dedicated to offering diverse specializations, including
                    Web3, healthcare, finance, engineering, and more, our
                    program allows students to tailor their expertise to unique
                    interests and career goals. With a supportive and immersive
                    learning environment, we empower individuals to make a
                    lasting impact in the field of Generative AI, driving
                    innovation and progress in this rapidly evolving industry.
                  </p>
                </div>
              </div>
              <div className='lg:flex lg:flex-auto lg:justify-center'>
                <dl className='w-64 space-y-8 xl:w-80'>
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className='flex flex-col-reverse gap-y-4'
                    >
                      <dt className='text-base leading-7 text-gray-600'>
                        {stat.label}
                      </dt>
                      <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
          <Image
            width={1920}
            height={1080}
            src='/images/pec_meeting_image.jpg'
            alt=''
            className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
          />
        </div>

        {/* Values section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our values
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Our values include innovation, collaboration, excellence,
              diversity and inclusion, ethics and responsibility, and lifelong
              learning. We strive to create a supportive and inclusive learning
              environment that fosters creativity, excellence, and responsible
              practices in the field of Generative AI.
            </p>
          </div>
          <dl className='mx-auto  mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {values.map((value) => (
              <div
                className='hover:bg-[#1eb2a6] duration-300  group rounded-xl p-3'
                key={value.name}
              >
                <dt className='font-semibold text-gray-900 group-hover:text-white '>
                  {value.name}
                </dt>
                <dd className='mt-1 text-gray-600 group-hover:text-white '>
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        {/* <div className='relative isolate -z-10 mt-32 sm:mt-48'>
          <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
            <svg
              className='h-[40rem] w-[80rem] flex-none stroke-gray-200'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
                  width={200}
                  height={200}
                  x='50%'
                  y='50%'
                  patternUnits='userSpaceOnUse'
                  patternTransform='translate(-100 0)'
                >
                  <path d='M.5 200V.5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y='50%' className='overflow-visible fill-gray-50'>
                <path
                  d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
              />
            </svg>
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
              Trusted by the world’s most innovative teams
            </h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
              <Image
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
                alt='Transistor'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
                alt='Reform'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
                alt='Tuple'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
                alt='SavvyCal'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
                alt='Statamic'
                width={158}
                height={48}
              />
            </div>
          </div>
        </div> */}

        {/* Team section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our team
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus
              eos totam in dolorum. Nemo vel facere repellendus ut eos dolores
              similique.
            </p>
          </div>
          <ul
            role='list'
            className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  width={500}
                  height={500}
                  className='mx-auto h-24 w-24 rounded-full'
                  src={person.imageUrl}
                  alt=''
                />
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-sm leading-6 text-gray-600'>{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      
    </div>
  )
}
