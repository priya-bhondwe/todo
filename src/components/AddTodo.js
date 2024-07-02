import React, { useContext } from "react";
import TopNav from "../Utils/TopNav";
import FormInputs from "../Utils/FormInputs";
import DataContext from "../context/DataContext";

const AddTodo = () => {
  // Extracting the required data and functions from the DataContext using useContext hook
  const { data, setData, setAddNotification, setAddNotificationTitle } =
    useContext(DataContext);

  return (
    <div className="w-full relative min-h-screen bg-purple-600">
      {/* Container for the content with maximum width and padding */}
      <div className="max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          {/* Top navigation component with a title prop */}
          <TopNav title={"Add New Todo"} />
          {/* FormInputs component to handle the form inputs, passing necessary props */}
          <FormInputs
            data={data}
            setData={setData}
            setAddNotification={setAddNotification}
            setAddNotificationTitle={setAddNotificationTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
