import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import "./Jitu.css"


function Jitu() {
const navi = useNavigate()
const [form, setForm] = useState({
  userName :"",
  password :""
})
function submit(e) {
  setForm({...form, [e.target.name]: e.target.value})
}

async function browserOff(e) {
  e.preventDefault()
    if(form.password.length <= 5){
    alert("password maximum 6 numreic")
    return;
  }
  const response = await fetch("https://python-1-wvnf.onrender.com/login", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
  })
  const data = await response.json()
  navi("/login",{
    state:form
  })
  console.log(data)

} 


  return (
    <>

    
     <div className="w-full h-screen bg-gray-600 mt-0 p-[50px]">
    
    <div className="container  flex  ]">

      <div className="FormBG ">
           <div className="flex justify-between items-center w-[400px]   ">
              <div className="flex p-2">
                   <div className="w-[20px] h-[20px] bg-blue-400 rounded-xl "></div>
                  <div className="text-white ">   AnywhereApp.</div> 
             </div>
               <div >  <Link  to={"/register"} className="text-gray-500 no-underline space-x-4" > New user? </Link>  </div>
               <div className="text-gray-500 " > Join </div>
            </div>
            {/* navbar end */}
            <div className="ml-[40px]">
                  <h4 className="text-gray-300 mt-[120px]  "> START FOR FREE </h4> 
                  <p className="text-3xl text-white font-bold m-0">
                        Create New Account
                  </p>
                  </div>

            <div> 
              <p className="text-gray-400 ml-[40px] mt-[10px]"> Already A Member?<span className="text-blue-500" > <Link to={"/login"}> Log In </Link>  </span> </p>
              
             </div>      
            <form onSubmit={browserOff}>
               <input className="border border-white focus:border-blue-500 outline-none hover:scale-95 trasition duration 300 text-blue-500 rounded-xl ml-[40px] mt-[20px] w-[250px] h-[35px] p-2 " type="text"   value={form.userName} required placeholder="New Userid" name="userName" onChange={submit}/> <br/>
               <input  className="border border-white focus:border-blue-500 outline-none hover:scale-95 trasition duration 300 text-blue-500 rounded-xl ml-[40px] mt-[20px] w-[250px] h-[35px] p-2" type="Password" value={form.password} required placeholder="New Password" name="password" onChange={submit}/><br/>
               <button className="w-[150px] h-[30px] bg-blue-400 rounded-xl mt-[15px] ml-[70px] hover:scale-95 transition duration 300 ">Create account</button>
            </form>
        </div> 
        {/* one left part */}

        {/* right part */}
          <div className="ml-[20px]">

            <img className="h-screen" src="/lines.png"/>




          </div>
        


         </div>
      </div>
    </>
  )
}

export default Jitu