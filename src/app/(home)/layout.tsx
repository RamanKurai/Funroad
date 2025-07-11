import Navbar from "./Navbar";

interface props  {
   children : React.ReactNode;
}
const HomePagelayout = ({children} : props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
      {children}
    </div>
  )
}

export default HomePagelayout

