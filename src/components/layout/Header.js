import Link from 'next/link';
export default function Header(){
    return(
        <header className="flex items-center justify-between">
         
        
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
            SSIT CSE
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>Maps</Link>
          <Link href={''}>Help</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
            Register
          </Link>
           </nav>
        </header>      
    );
}