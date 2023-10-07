import logo from "../assets/images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10">
        <img src={logo}
         alt="logo"
         className="w-44"/>
    </div>
  )
}

export default Header