import { sanityFetch } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

const INITIATIVES_QUEARY = `
*[_type == 'initiative'] {
 "image": image.asset->.url,
...
}
`


export default async function Initiatives() {
  const initiatives = await sanityFetch({query: INITIATIVES_QUEARY, tags: ['initiative']})
  console.log(initiatives)
  return (
    <div className='mt-[100px] flex flex-col'>
      <h1 className="text-white text-7xl font-SaansRegular mb-[30px]">Initiatives</h1>
      <p className="text-white text-xl font-SaansRegular max-w-[600px]"> 
      Our initiatives represent areas of work where we have been able to go deeper and build focused expertise over time. Underpinned by strong partnerships, these long-term explorations have allowed us to iterate our approach and lean into adjacent opportunities.
      </p>
      <ul className="mt-[100px] grid grid-cols-2">

        {initiatives.map((initiative, id) => (

          <li key={id} className='border-t-[0.5px] flex flex-col py-[34px] odd:pr-[34px] even:pl-[34px] odd:border-r-[0.5px] last:border-b-[0.5px] [&:nth-last-child(2)]:border-b-[0.5px] border-[#353535]'>
            <Link href={`/initiative/${initiative.slug.current}`}>
            <div className="relative h-[352px] mb-[30px]">
            <Image 
              src={urlForImage(initiative?.image)}
              alt={initiative.image.alt}
              fill
              className="w-full object-cover"
            />
            </div>
            <h2 className="text-white mb-[18px] font-SaansRegular text-5xl">
              {initiative.title}
            </h2>
            <p className="text-xl font-SaansRegular text-[#A8A8A8] pb-[20px]">
              {initiative.description}
            </p>
            </Link>
          </li>
        ))}
        
      </ul>
    </div>
  )
}
