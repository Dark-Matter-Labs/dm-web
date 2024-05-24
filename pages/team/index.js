// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Navbar from "../../components/Navbar";
import { client } from "../../sanity/lib/client";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

const dmlienQuery = `
*[_type == 'dmlien'] | order(fullName asc) {
    "image": headshot.asset->.url,
    ...,
}
`

export default function TeamPage({dmliens}) {

    return (
        <>
        <main className="mx-auto max-w-screen-xl">
            <Navbar />
            <div className="text-white w-full grid grid-cols-12 gap-0 items-center justify-end">
                <div className="col-span-5">
                </div>
                <div className="col-span-7 mt-36 text-4xl leading-[54px] font-FKlight font-light">
                We’re a multidisciplinary team with a shared passion for taking on societal challenges in education, food systems, urban design, logistics, data, policy, finance, healthcare, governance and organisational culture.
                <div className="text-[27px] mt-12 font-FKlight text-[#6A6A6A]">
                    Meet the team <ArrowDownIcon className="h-6 w-6 inline"/>
                </div>
                </div>
               
            </div>
            <ul className="w-full grid grid-cols-12 gap-6 items-start justify-center mt-12 text-white pb-32">
                {dmliens.map((dmlien, id) => (
                    <li key={id} className="col-span-3">
                        <Image 
                            src={urlForImage(dmlien.image)}
                            alt ={dmlien.fullName}
                            width = {340}
                            height ={340}
                            className="mb-6"
                        />
                        <h2 className="font-FKlight font-normal text-[24px]">
                            {dmlien.fullName}
                        </h2>
                        <h3 className="text-[#A8A8A8] font-FKlight font-normal text-[24px]">
                           {dmlien.location}
                        </h3>
                        <p className="mt-6 font-FKlight font-normal text-[18px]">
                            {dmlien.bio}
                        </p>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
}


export async function getStaticProps() {
    const dmliens = await client.fetch(dmlienQuery)
    return {props: {dmliens}}
}