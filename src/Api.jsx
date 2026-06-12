import { Link } from "react-router-dom"

function Api() {
  return (
    <div>
       
      <div className="bg-blue-500 w-full h-screen ">       
         

         <div>  <Link to={"/"}> Home </Link></div>


          <p className="text-6xl text-white"> Application WorkSpace </p>
      </div>
    </div>
  )
}

export default Api