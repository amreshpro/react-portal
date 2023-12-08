export default function Login() {
  return (
<div className="w-screen h-screen flex flex-col  justify-center  gap-4 ">
  <input type="text" name="name" id="" className="border-2 border-orange-500 rounded-lg px-2 py-1 outline-none w-[236px]" placeholder="username" />
  <input type="email" name="email" id="email" className="border-2 border-orange-500 rounded-lg px-2 py-1 outline-none w-[236px]" placeholder="email" />
<button type="submit" className=" w-fit bg-orange-500 text-white font-bold px-2 py-2 rounded-lg">Login</button>
</div>
  )
}
