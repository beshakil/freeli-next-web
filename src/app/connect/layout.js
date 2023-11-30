import LeftSideBar from "@/Components/ConnectPage/LeftSideBar";

const layout = ({ children }) => {
  return (
    <div className="main_container">
      <LeftSideBar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default layout;