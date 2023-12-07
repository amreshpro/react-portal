"use client"
import { redirect } from "next/navigation"
import { useSelector } from "react-redux"
import toast ,{Toaster} from "react-hot-toast"



export default function Auth({children}) {
  // auth state => true or false
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
console.log(isAuthenticated)

// toast
const notify=()=>  toast.error("please login first...")

if(isAuthenticated) return <>{children}</>
else return <div>
{notify()}
<Toaster/>
{/* {redirect("/login")} */}
</div>


}
