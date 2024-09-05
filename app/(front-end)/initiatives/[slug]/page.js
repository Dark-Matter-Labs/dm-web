import { sanityFetch } from "@/sanity/lib/client";


const INITIATIVE_SLUG_QUERY= `
*[_type == "initiative" && slug.current == $slug][0] {
  ...,
}
`



export default async function InitiativePage({params}) {
    const initiative = await sanityFetch({
        query: INITIATIVE_SLUG_QUERY,
        tags: ["initiative"],
        qParams: { slug: params.slug }, 
      });
      {console.log(initiative, 'in page')}
  return (
    <div className="text-white h-96">
        {initiative?.title}
    </div>
  );
}
