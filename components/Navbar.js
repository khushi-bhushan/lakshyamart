import Link from 'next/link'
const Navbar = () => {
    return ( 
       <div>
       <div className="Nav">
       <div className="logo"><img src="/logo.png" height="50" width="60" /></div>
       <div className="head">Lakshyamart</div>
       <Link href="/"><a>Home</a></Link>
       <Link href="about"><a>Dashboard</a></Link></div></div>
     );
}
 
export default Navbar;