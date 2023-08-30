import PlaceholderCard from "@/components/PlaceholderCard"
import Link from "next/link"

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to our Website</h1>
     <div> <Link href='/register' className='bg-red-100 p-2 rounded-md shadow-lg m-10  border-2'>
        Register
      </Link>
      <Link href='/login' className='bg-blue-100 p-2 border-2 rounded-md shadow-lg m-10'>
        Login
      </Link></div>
      <div className='grid  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
       
      </div>
    </div>
  )
}

export default Home
