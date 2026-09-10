import { getUnits } from '@/sanity/lib/units';
import Homepage from '@/components/home/Homepage';

/**
 * The homepage is a server component so the Matrix units can be fetched at
 * build time. Everything interactive lives in `Homepage`, which is a client
 * component.
 */
export default async function Page() {
  const units = await getUnits();
  return <Homepage units={units} />;
}
