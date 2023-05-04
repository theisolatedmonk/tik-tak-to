import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   const initialValues = [{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""}]

   const [containerState, setContainerState] = useState(initialValues);

   return (
    <main className=' flex flex-col justify-center bg-green-400 h-screen w-full items-center gap-4'>

      <div className='grid grid-cols-3 justify-center w-96 bg-blue-400 h-96 items-center gap-2 p-4'>
      {initialValues.map(link =>
        <button className='h-20 w-full rounded-lg bg-black'> </button>
        )}
        </div>
        <div className='grid grid-cols-2 bg-black w-96  gap- justify-center'>
          <p className=' bg-gray-400 h-10 rounded-xl w-20 text-center '>1</p>
          <p className='w-20 bg-gray-400 h-10 rounded-3xl  text-center'>2</p>
        </div>

        <button className='w-40 h-10
bg-red-500 rounded-lg      '>Reset</button>


    </main>
  )
}
