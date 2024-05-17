import Navbar from "../../components/Navbar";
import { client } from "../../sanity/lib/client";

const dmlienQuery = `
*[_type == 'dmlien'] {
    ...,
}
`

export default function TeamPage({dmliens}) {
    console.log(dmliens)
    return (
        <>
        <main className="mx-auto max-w-screen-xl">
            <Navbar />
            <div className="text-white w-full grid grid-cols-12 gap-0 items-center justify-end">
                <div className="col-span-5">
                </div>
                <div className="col-span-7 mt-36 text-4xl leading-[54px] font-FKlight font-light">
                We’re a multidisciplinary team with a shared passion for taking on societal challenges in education, food systems, urban design, logistics, data, policy, finance, healthcare, governance and organisational culture.
                <div className="text-lg mt-12 font-FKlight">
                    meet the team 
                </div>
                </div>
               
            </div>
            <ul className="w-full grid grid-cols-12 gap-x-6 items-center justify-center mt-12 text-white">
                {dmliens.map((dmlien, id) => (
                    <li key={id} className="col-span-3">
                        {dmlien.fullName}
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