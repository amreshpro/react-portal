import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { setIsAuthenticated } from "../../store/authSlice";

export default function UserDetail() {
  const user = useSelector((state)=>state.auth.user)
  console.log(user)
  const dispatch=useDispatch()
  const logoutHandler = () => {
    dispatch(setIsAuthenticated({state: false}))
  };
  return (
    <div className="content-with-login flex items-center gap-3">

<Link to="/login" onClick={()=>logoutHandler()} className="text-orange-500">Logout</Link>
      <div className="user flex gap-1 items-center">
        <div className="img">
          <img
            src="/logo.avif"
            alt="user"
            className="h-10 rounded-full border-2 border-orange-500"
          />
        </div>
        <div className="user-data text-sm">
          <h1 className="font-bold text-lg">{user?.name}</h1>
          <p>{user?.post}</p>
          <p>{user?.department}</p>
        </div>
      </div>
    </div>
  );
}
