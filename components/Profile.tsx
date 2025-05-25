import Form from "next/form";
import { redirect } from "next/navigation";


const Profile = ( {data , setData , setActiveTab }:{
  data:any,
  setData:any,
  setActiveTab:any
  
}) => {
  const {name , age , email}=data;

  const handleChange=( name:any ,value:any)=>{
   setData((prevState:any)=>({
    ...prevState , [name]:value
   }))

}
   const handleClick = () => {
  console.log("Button Clicked");
  setActiveTab(1);
};
  return (
    <div>
      Profile Page 
      <Form action={() => handleClick()}>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Name </div>
          <input name="Name" placeholder="Enter your name" value={data.name} type="string"  onChange={(e)=>handleChange( "name",e.target.value)}/>
        </div>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Age </div>
          <input name="Age" placeholder="Enter your age" value={data.age} type="number" onChange={(e)=>handleChange( "age",e.target.value)} />
        </div>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Email </div>
          <input name="Email" placeholder="Enter your email "  type="email" value={data.email} onChange={(e)=>handleChange( "email",e.target.value)}/>
        </div>

          
        <button>Next</button>
      </Form>
    </div>
  );
};
export default Profile;
