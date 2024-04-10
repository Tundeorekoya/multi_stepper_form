import { StepperContext } from "./context/stepperContext"
import { useContext } from "react"
const Account = () => {
  const { userInfo, setUserInfo } = useContext(StepperContext)
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }
  return (
    <div className="flex flex-col">
      <div className="w-full flex-1 mx-2">
        <div className="font-bold h-6 my-2 uppercase text-grey-500 text-xs leading-8">UserName</div>
        <input type="text" onChange={handleChange} value={userInfo["username"] || "" } name="username" placeholder="Username" className="p-1 px-2 border rounded-md w-full  outline-none text-gray-800"/>
      </div>
      <div className="w-full flex-1 mx-2">
        <div className="font-bold h-6 my-2 uppercase text-grey-500 text-xs leading-8">Password</div>
        <input type="Password" onChange={handleChange} value={userInfo["Password"] || ""} name="Password" placeholder="Password" className="p-1 px-2 border rounded-md w-full  outline-none text-gray-800" />
      </div>


    </div>
  )
}

export default Account