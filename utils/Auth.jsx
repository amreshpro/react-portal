"use client"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

export default function Auth({children}) {
  // auth state => true or false
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
console.log(isAuthenticated)
// router
const router = useRouter()
const gotToLoginPage =()=>router.push("/login")

 return 
  <div>
    {isAuthenticated? children : <button className="bg-red-50" onClick={gotToLoginPage}>Login</button>}
  </div>

}
