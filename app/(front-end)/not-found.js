import DMButton from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-[8px] px-6 py-24 sm:py-32 lg:px-8">
        <p className="heading-4xl text-grey-1">404</p>
        <h1 className=" sm:heading-7xl text-3xl font-bold tracking-tight text-grey-3">
          Page not found
        </h1>
        <p className="p-xl-regular my-6 text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <DMButton internal href="/">
          Go back home
        </DMButton>
      </main>
    </>
  );
}
