import Form from "next/form";

const Settings = ({data , setData , setActiveTab }:{
  data:any,
  setData:any,
  setActiveTab:any
 
}) => {
 

  const handleChange=( value:any)=>{
    console.log("Value" , value);
    console.log("Handling change in settings")
    setData((prevState:any)=>({
      ...prevState , newsLetter:value
    }))
      console.log("Form  data ready to submit " ,data);

   

}
  const handleBack = () => {

 
  setActiveTab(0);
};


  return (
    <div className="">
   
      <form>
      <div className=" flex flex-col items-center justify-center">
<label >Subscribe to News Letter</label>
<select onChange={(e)=>handleChange(e.target.value)}
>
  <option value="yes"> Yes</option>
  <option value="no"> No </option>
</select>
   </div>
            <div className="flex items-center justify-between  flex-row ">
         <button className="bg-blue-500  " onClick={()=> handleBack()}>Prev</button>
        
            </div>
         
      </form>
    </div>
  )
};
export default Settings;
