import Navbar from "../../components/Navbar";


export default function TeamPage() {
    return (
        <>
        <main className="mx-auto max-w-screen-xl">
            <Navbar />
            <div className="text-white w-full grid grid-cols-12 gap-0 items-center justify-end">
                <div className="col-span-5">
                </div>
                <div className="col-span-7 mt-36 text-4xl leading-[54px] font-FKlight font-light">
                We’re a multidisciplinary team with a shared passion for taking on societal challenges in education, food systems, urban design, logistics, data, policy, finance, healthcare, governance and organisational culture.
                </div>
            </div>
        </main>
        </>
    )
}