import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "../store/authSlice"
import { Link, redirect } from "react-router-dom"

export default function Login() {
  const dispatch = useDispatch()
  const guestLoginHandler =()=>{
    dispatch(setIsAuthenticated({
      state:true,
   user:{
    name:"John Wick",
    post:"Senior Killer",
    img:"https://i.ibb.co/z4z4z4z/image.png",
    department:"Brutal Life"
   }
    }))
    return redirect("/dashboard")
  }
  return (
<div className="w-screen h-screen flex   justify-center  gap-4 ">
<div className="login-box flex flex-col justify-center  gap-4">
<input type="text" name="name" id="" className="border-2 border-orange-500 rounded-lg px-2 py-1 outline-none w-[236px]" placeholder="username" />
<input type="email" name="email" id="email" className="border-2 border-orange-500 rounded-lg px-2 py-1 outline-none w-[236px]" placeholder="email" />
<button type="submit" className="  text-center bg-orange-500 text-white font-bold px-2 py-2 rounded-lg">Login</button>
<Link to="/dashboard"  onClick={()=>guestLoginHandler()}  className="  text-center bg-orange-500 text-white font-bold px-2 py-2 rounded-lg">Login as Guest</Link>

</div>
</div>
  )
}
