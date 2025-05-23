import Form from "next/form";
const handleClick = () => {
  console.log("Button Clicked");
};
const Profile = () => {
  return (
    <div>
      Profile Component
      <Form action={() => handleClick()}>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Name </div>
          <input name="Name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Age </div>
          <input name="Name" placeholder="Enter your age" />
        </div>
        <div className="flex flex-row  ">
          <div className="font-semibold pr-4 "> Email </div>
          <input name="Name" placeholder="Enter your email " />
        </div>
        <button>Next</button>
      </Form>
    </div>
  );
};
export default Profile;
