import { useState } from "react"
import UserTable from "./mini/UserTable"

export default function User() {
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false)
  return (
    <div className="user-card shadow-lg bg-gray-100 hover:bg-orange-500 hover:text-white w-72 px-2 py-2">
         <div className="flex flex-col gap-3  px-2 py-2">
    <div className="user flex gap-3 items-center">
    <div className="img">
      <img src="/logo.avif" alt="user" className="h-10 rounded-full border-2 border-orange-500" />
    </div>
    <div className="user-data text-sm">
      <h1 className="font-bold text-lg">Nitin Chaturvedi</h1>
      <p>Analyst | Data Science</p>
      <p>IND11405</p>

    </div>
    </div>
      {/* show more content */}
   { !isShowMoreOpen &&  <button onClick={()=>setIsShowMoreOpen(true)} className=" font-bold text-md ">Show More for Access</button>
}
{
  isShowMoreOpen && <div className="show-more-card w-full ">
<UserTable/>
  <button onClick={()=>setIsShowMoreOpen(false)} className="mt-1 w-full text-center font-bold text-md text-gray-900 ">Show less</button>
</div>
}
    </div>
    </div>
  )
}
