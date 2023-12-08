import { Link } from "react-router-dom";
import UserDetail from "./mini/UserDetail";
import { useSelector } from "react-redux";




export default function Navbar() {

  const isUserAuthenticated = useSelector((state)=>state.auth.isAuthenticated);


  return (
    <div className="flex justify-between items-center py-2 px-4">
      <div className="logo rounded-full border-2 border-orange-500 ">
        <img src="/logo.avif" alt="logo" className="h-10 w-auto rounded-full" />
      </div>
      {/* content-without-login */}
      <nav className="nav">

 { isUserAuthenticated ? <UserDetail/> : <div className="content-without-login flex gap-2">

  <Link to="/login" className="bg-orange-500 text-white rounded-md px-3 py-1">Login</Link>
  <Link to="/help" className="text-orange-500 mt-1">Need Help?</Link>
</div>
}



      </nav>

    </div>
  )
}
