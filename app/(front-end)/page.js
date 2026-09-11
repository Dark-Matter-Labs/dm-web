import { getUnits } from '@/sanity/lib/units';
import Homepage from '@/components/home/Homepage';
import ScrollDepth from '@/components/ScrollDepth';

/**
 * The homepage is a server component so the Matrix units can be fetched at
 * build time. Everything interactive lives in `Homepage`, which is a client
 * component.
 */
export default async function Page() {
  const units = await getUnits();
  return (
    <>
      <Homepage units={units} />
      {/* Reports scroll depth to Simple Analytics. The homepage carries
          ~1,700 words before anything clickable and nothing currently
          measures whether visitors reach it. */}
      <ScrollDepth prefix="home" />
    </>
  );
}
