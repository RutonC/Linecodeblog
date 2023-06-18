import React from 'react'

const Banner = () => {
  return (
    
      <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        
        <div>
          <h1 className='text-7xl'>LineCode Blog</h1>

          <h2 className='mt-5 md:mt-0'>
            Bem-vindo ao {" "}
             nosso Blog
            </h2>
        </div>

        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Descubra as últimas tendências e novidades da tecnologia com o nosso blog! | Tutoriais, dicas, análises e opiniões para manter você sempre atualizado.
        </p>
    
      </div>
  )
}

export default Banner