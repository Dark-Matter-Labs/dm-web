import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

export default function FeedItem({ item }) {
  return (
    <div
      key={item.title}
      className="flex h-full w-[1200px] items-start justify-between border-b border-b-[#353535]"
    >
      <div className="flex w-[470px] items-center justify-center py-[34px]">
        <Image
          src={urlForImage(item.image)}
          alt="feed item image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '266px' }}
        />
      </div>
      <div className="flex h-[330px] w-[690px] flex-col items-start justify-between py-[34px]">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <h2 className="font-SaansRegular text-5xl leading-[36px] text-white">
            {item.title}
          </h2>
          <h3 className="p-body2 text-grey-3">{item.subtitle}</h3>
        </div>
        <div className="flex items-end justify-start">
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
            <div className="flex gap-0.5">
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
