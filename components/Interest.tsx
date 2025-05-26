import Form from "next/form";

const Interest = ({data , setData , setActiveTab }:{
  data:any,
  setData:any,
  setActiveTab:any
 
}) => {
   const{interest}=data;
 

    const handleCheckbox=(index:any , val:any )=>{
      setData((prevState:any)=>{
      const currentInterests=prevState.interest||[]  ;
      console.log("Current Interest" , currentInterests);
      const updateInterests= currentInterests.includes(val) ? currentInterests.filter((v:any)=>v!==val):[...currentInterests ,val];
      console.log("Updated Interest" , updateInterests);

      return {
        ...prevState  , interest:updateInterests
      }
      })
   console.log("clicked")
   }
   const handleClick = () => {
  console.log("Button Clicked");
  console.log("data interest",data.interest);
  console.log(interest);
  setActiveTab(2);
};
   const handleBack = () => {

 
  setActiveTab(0);
};

  const allInterests = ["coding", "dancing", "gaming", "reading", "music"];
  return (
    <div>
       Interest  Page 
      <form >
      
    {allInterests.map((val:any, index:any)=>(
<div  key={index}className="flex flex-row  ">
          <div className="font-semibold pr-4 "> {val} </div>
          <input  value={val}  type="checkbox" checked={data.interest.includes(val)} onChange={(e)=>handleCheckbox(index, val)} />
        </div> 
    ))}
    <div className="flex items-center justify-between  flex-row">
               <button className="bg-blue-500  " onClick={()=> handleBack()}>Prev</button>
        <button   className="bg-blue-500" onClick={()=> handleClick()}>Next</button>
        </div>
      </form>
    </div>
  )
};
export default Interest;
