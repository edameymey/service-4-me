import MainNavbar from '@/components/MainNavbar';

const HomePage = () => {
  return (
    <main className="min-h-screen w-full bg-[#f2f4f7] text-[#161c24]">
      <div className="flex min-h-screen w-full flex-col">
        <MainNavbar />
        <section className="bg-[#f2f4f7] px-4 py-5 sm:px-8 sm:py-7">
          <div>
            <h1>Welcome to the Home Page</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
