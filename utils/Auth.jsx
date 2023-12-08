
import { useSelector } from "react-redux"

import { redirect } from "react-router-dom"



export default function Auth({children}) {
  // auth state => true or false
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
console.log(isAuthenticated)



if(isAuthenticated) return <>{children}</>
else return redirect("/login")


}
