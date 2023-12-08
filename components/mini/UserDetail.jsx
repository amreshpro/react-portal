import { redirect } from "react-router-dom"

export default function UserDetail() {
  const logoutHandler = ()=>{
    console.log("logout-btn")
    redirect("/login")
  }
  return (
    <div className="content-with-login flex gap-3">
    <button onClick={()=>logoutHandler} className="text-orange-500 ">Logout</button>
    <div className="user flex gap-1 items-center">
    <div className="img">
      <img src="/logo.avif" alt="user" className="h-10 rounded-full border-2 border-orange-500" />
    </div>
    <div className="user-data text-sm">
      <h1 className="font-bold text-lg">Nitin Chaturvedi</h1>
      <p>Senior Director</p>
      <p>IT & Service</p>
    </div>
    </div>
    </div>
  )
}
