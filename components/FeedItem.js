import { memo } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const TYPE_LABELS = {
  project: 'Project',
  media: 'Media',
  update: 'Update',
};

/**
 * A feed card, sized for the two-column grid on /feed.
 *
 * Type is a label here rather than a filter, because 89% of the archive is a
 * single type. Units are the useful axis, so all of them are listed — the
 * previous row layout showed only `labs[0]` and silently dropped the rest.
 */
function FeedItem({ item }) {
  const units = item.units ?? [];

  return (
    <article className="group flex h-full w-full min-w-0 flex-col border-t border-t-[#353535] pt-[20px]">
      <div className="relative mb-[20px] aspect-3/2 w-full overflow-hidden">
        <Image
          src={urlForImage(item.image)}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-80"
          fill
          sizes="(max-width: 810px) 92vw, (max-width: 1600px) 46vw, 640px"
          placeholder={item.lqip ? 'blur' : 'empty'}
          blurDataURL={item.lqip}
        />
      </div>

      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="flex items-baseline gap-[10px]">
          <span className="nav-xl text-label uppercase">
            {TYPE_LABELS[item.type] ?? item.type}
          </span>
          <span aria-hidden="true" className="nav-xl text-label">
            ·
          </span>
          <span className="nav-xl text-label">
            {new Date(item.date).toLocaleDateString('en-GB', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          {item.type === 'media' && (
            <span className="ml-auto nav-xl text-label" aria-hidden="true">
              ↗
            </span>
          )}
        </div>

        <h2 className="font-SaansRegular text-4xl leading-[28px] wrap-break-word text-white transition-opacity duration-200 group-hover:opacity-80 md:text-5xl md:leading-[36px]">
          {item.title}
        </h2>

        <h3 className="feed-sub text-grey-3">{item.subtitle}</h3>

        {units.length > 0 && (
          <p className="mt-auto pt-[10px] nav-xl text-grey-3">
            <span className="sr-only">Units: </span>
            {units.map((unit) => unit.title).join(', ')}
          </p>
        )}
      </div>
    </article>
  );
}

export default memo(FeedItem);
