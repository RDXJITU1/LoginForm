import { useState } from "react"
import { useLocation,useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Login.css"

function Login() {
const location = useLocation()
const navigate = useNavigate()
const [remember, setRemember] = useState(false);
const [form,setForm] = useState({
  Ori_user:"",
  Ori_pass:""
})

function submit(e) {
  setForm({...form,[e.target.name]:e.target.value})
}
function browseroff(e) {
e.preventDefault()

if(location.state.userName == form.Ori_user && location.state.password == form.Ori_pass) {
   navigate("/api")
}
else{
  alert("invalid user")
}


}



  return (
    <div> 
      <div className="loginBG w-full h-screen bg-cover bg-center">
      
       <div className="flex items-center justify-center text-white">
         <div className="w-[400px] h-[500px] border border-white mt-[100px] flex flex-col gap-5  items-center bg-pink-300/30 backdrop-blur-xl rounded-3xl">
          <div className="mt-[80px] text-3xl font-bold "> <h2>LogIn </h2>  </div>
             <form onSubmit={browseroff}>
                <input className="mt-[40px]  w-full bg-transparent border-b-2 border-white text-white placeholder-white  py-2  outline-none  "  type="text" placeholder="UserName" value={form.Ori_user} name="Ori_user" onChange={submit}/><br/>
                <input className="mt-[40px]  w-full bg-transparent border-b-2 border-white text-white placeholder-white  py-2  outline-none  " type="password" placeholder="Password" value={form.Ori_pass} name="Ori_pass" onChange={submit}/><br/>
                <input className="mt-[40px]"  type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                <label> Remember Me </label><br/>                 
                <button className="mt-[40px]  w-[200px] h-[40px]  text-xl font-bold border bg-white text-gray-800  rounded-2xl "> Log in </button>
             </form>
             <h2> Don't have any accoun?<span><Link to={"/"}>Register </Link> </span>  </h2>
        </div>
       </div> 
      </div> 
    </div>
  )
}

export default Login