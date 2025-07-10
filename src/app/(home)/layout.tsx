import Navbar from "./navbar";

interface props  {
   children : React.ReactNode;
}
const Homelayout = ({children} : props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
      {children}
    </div>
  )
}

export default Homelayout
