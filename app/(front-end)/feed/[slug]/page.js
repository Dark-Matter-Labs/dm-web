import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import BackButton from '@/components/BackButton';

const feed_project_query = `
*[_type == "feedItem" && slug.current == $slug][0] {
  ...,
  Team[]->{
  ...,
  "image": headshot.asset->.url
  },
  labs[]->{
  ...,
    "image": image.asset->.url
  },
}
`;

export default async function feed_itemPage({ params }) {
  const feed_item = await sanityFetch({
    query: feed_project_query,
    tags: ['feedItem'],
    qParams: { slug: params.slug },
  });

  return (
    <div className="flex items-start justify-between pb-[100px] pt-28">
      <div className="flex flex-col items-start justify-start">
        <BackButton text="back to feed" />
        <div className="flex w-[380px] flex-col items-start justify-center gap-[10px] border-y border-y-[#353535] py-[20px]">
          <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
            Links
          </p>
          {feed_item.website && (
            <div className="">
              <a target="_blank" href={feed_item.website}>
                <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                  Website ↗
                </p>
              </a>
            </div>
          )}

          {feed_item.publication && (
            <div className="">
              <a target="_blank" href={feed_item.publication}>
                <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                  Blog Series ↗
                </p>
              </a>
            </div>
          )}
        </div>
        <div className="flex w-[380px] flex-col items-start justify-center gap-[10px] border-b border-b-[#353535] py-[20px]">
          <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
            Team
          </p>
          {feed_item?.Team?.map((person) => (
            <div
              key={person.fullName}
              className="flex items-center justify-center gap-[10px]"
            >
              <div className="h-[22px] w-[22px]">
                <Image
                  src={urlForImage(person.image)}
                  alt={person.fullName}
                  width={22}
                  height={22}
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <p className=" font-SaansRegular text-xl text-[#EBEBEB]">
                {person.fullName}
              </p>
            </div>
          ))}
          <p className="pb-[12px] pt-4 font-SaansMed text-xl uppercase text-[#595959]">
            Units
          </p>
          {feed_item?.labs?.map((lab) => (
            <div
              key={lab.title}
              className="flex items-center justify-center gap-[10px]"
            >
              <div className="h-[22px] w-[22px]">
                <img
                  src={urlForImage(lab.image)}
                  alt={lab.title}
                  width={20}
                  height={20}
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <p className=" font-SaansRegular text-xl text-[#EBEBEB]">
                {lab.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px] py-[20px]">
          <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
            Partners
          </p>

          {feed_item?.partners?.map((partner) => (
            <div key={partner.Name} className="flex">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                  {partner.Name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[690px] flex-col items-start justify-center gap-[30px]">
        <Image
          src={urlForImage(feed_item.image)}
          alt="team member"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1 className="heading-5xl-Reg text-grey-1">{feed_item.title}</h1>
        <h2 className="heading-4xl text-grey-3">{feed_item.subtitle}</h2>
        <div className="border-y border-y-[#353535] pb-[100px] pt-[30px]">
          <p className="p-xl-regular text-[#EBEBEB]">{feed_item.description}</p>
        </div>
      </div>
    </div>
  );
}
