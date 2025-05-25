import Form from "next/form";

const Settings = ({data , setData , setActiveTab }:{
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
      Seettings  Page 
      <Form action={() => handleClick()}>
      

            <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> {data.interest[0]}  </div>
          <input  value={data.interest[0]}  type="checkbox" onChange={(e)=>handleChange( "interest",e.target.value)} />
        </div>
        <button>Next</button>
      </Form>
    </div>
  )
};
export default Settings;
