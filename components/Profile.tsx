import Form from "next/form";
import { redirect } from "next/navigation";


const Profile = ( {data , setData , setActiveTab , errors , setErrors , validateField }:{
  data:any,
  setData:any,
  setActiveTab:any ,
   errors :any, setErrors:any , validateField:any 
  
}) => {
  const {name , age , email}=data;

  const handleChange=( name:any ,value:any)=>{
   setData((prevState:any)=>({
    ...prevState , [name]:value
   }))
    const errorMessage = validateField(name, value);
  setErrors((prevErrors: any) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));

   

}


 
   const handleClick = () => {
  console.log("Button Clicked");
  setActiveTab(1);
};
  return (
    <div >
      Profile Page 
      <form className="items-center">
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Name </div>
          <div className="flex flex-col">
          <input  name="Name"  className="border-blue-300" placeholder="Enter your name" value={data.name} type="string"  onChange={(e)=>handleChange( "name",e.target.value)}/>
           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
           </div>
        </div>

        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Age </div>
           <div className="flex flex-col">

        
          <input name="Age" placeholder="Enter your age" value={data.age} type="number" onChange={(e)=>handleChange( "age",e.target.value)} />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
              </div>
        </div>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Email </div>
            <div className="flex flex-col">
          <input name="Email" placeholder="Enter your email "  type="email" value={data.email} onChange={(e)=>handleChange( "email",e.target.value)}/>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        </div>


          
         <button   className="bg-blue-500  disabled:bg-red-500 " disabled={errors.name || errors.email || errors.age } onClick={()=> handleClick()}>Next</button>
      </form>
    </div>
  );
};
export default Profile;
