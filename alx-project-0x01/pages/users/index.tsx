import Header from "@/components/layout/Header";
const Home: React.FC = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Usernames</h1>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button>
    </main>
    </>
  )
}

export default Home;

