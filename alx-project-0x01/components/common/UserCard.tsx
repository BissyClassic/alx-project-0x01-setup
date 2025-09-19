const UserCard: React.FC<UserProps> = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h2>Click me</h2>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button>
    </main>
  )
}

export default UserCard;
