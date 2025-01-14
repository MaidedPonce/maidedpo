import { Animation } from '../components/Animation'

const Education = () => {
  return (
    <Animation
      attributes={{
        id: 'education',
        className:
          'bg-brand-purple flex-col h-[50vh] lg:justify-center lg:min-h-[90vh] flex justify-start items-center lg:items-end text-white px-24 space-y-12',
      }}
    >
      <h1 className='text-5xl lg:text-7xl font-medium'>Education</h1>
      <div className='flex items-start'>
        <div className='w-8 h-2 rounded-full mr-4 mt-2 lg:h-3 lg:w-3 outline-white outline outline-4 bg-brand-violet' />
        <div className='flex items-start flex-col'>
          <h1 className='font-semibold'>Rosario Castellanos</h1>
          <h2>
            Bachelor&apos;s degree in information and communication technologies
          </h2>
        </div>
      </div>
    </Animation>
  )
}

export { Education }
