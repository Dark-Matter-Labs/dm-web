import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

export default function FeedItem({ item }) {
  return (
    <div
      key={item.title}
      className="group flex h-full flex-col items-center justify-center gap-[40px] border-b border-b-[#353535] hover:cursor-crosshair sm:flex-row sm:items-start sm:justify-between"
    >
      <div className="feed-item-img flex items-center justify-center py-[20px] sm:py-[34px]">
        <Image
          src={urlForImage(item.image)}
          alt="feed item image"
          className="feed-item-img-inner group-hover:opacity-80"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={item?.metadata.lqip}
        />
      </div>
      <div className="feed-item-details flex flex-col items-start justify-between py-[20px]  sm:py-[34px]">
        <div className="flex flex-col items-start justify-between gap-[2px] md:justify-start">
          <h2 className="max-w-[400px] font-SaansRegular text-4xl leading-[28px] text-white group-hover:opacity-80 md:max-w-full md:text-5xl md:leading-[36px]">
            {item.title}
          </h2>
          <h3 className="p-body2 hidden text-grey-3 md:block">
            {item.subtitle}
          </h3>
        </div>
        <div className="flex items-start justify-start">
          <div className="flex w-[120px] flex-col items-start justify-center gap-[6px]">
            <p className="nav-xl uppercase text-[#595959]">Type</p>
            <p className="nav-xl capitalize text-grey-3">{item.type}</p>
          </div>
          <div className="flex w-[120px] flex-col items-start justify-center gap-[6px]">
            <p className="nav-xl uppercase text-[#595959]">Date</p>
            <p className="nav-xl capitalize text-grey-3">
              {new Date(item.date).toLocaleDateString('en-GB', {
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[6px]">
            <p className="nav-xl uppercase text-[#595959]">Units</p>
            <div className="flex flex-col gap-0.5 md:flex-row">
              {item.labs && (
                <p className="nav-xl capitalize text-grey-3">
                  {item.labs[0].title}
                  {(item.arcs || item.studios) && (
                    <span className="nav-xl text-grey-3">,</span>
                  )}
                </p>
              )}
              {item.arcs && (
                <p className="nav-xl capitalize text-grey-3">
                  {item.arcs[0].title}
                  {item.studios && (
                    <span className="nav-xl text-grey-3">,</span>
                  )}
                </p>
              )}
              {item.studios && (
                <p className="nav-xl capitalize text-grey-3">
                  {item.studios[0].title}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
