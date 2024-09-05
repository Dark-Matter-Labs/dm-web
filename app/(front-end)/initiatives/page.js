import { sanityFetch } from "@/sanity/lib/client"

const INITIATIVES_QUEARY = `
*[_type == initiative] {
...}
`


export default async function Initiatives() {
  const initiatives = await sanityFetch({INITIATIVES_QUEARY, tags: ['initiative']})
  console.log(initiatives)
  return (
    <div>
      Hello
    </div>
  )
}
