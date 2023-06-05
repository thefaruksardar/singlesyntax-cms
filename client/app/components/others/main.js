import Sidebar from "./sidebar";

const Main = ({ children }) => {
  return (
    <div className="flex h-screen bg-grey-lightest sm:flex-col md:flex-row font-light w-full z-10">
      <Sidebar />
      <div className="min-w-auto">{children}</div>
    </div>
  );
};
export default Main;
