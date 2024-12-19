import Header from "./Header.js";

const Login = () => {
    return (
        <div >
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="logo" />
            
            </div>
            <form className="relative p-12 bg-black ">
                <input type="text" placeholder="Email Address" className="p-2 m-2" />
                <input type="text" placeholder="Password" className="p-2 m-2" />
                <button className="p-4 m-4">Sign In</button>      
            </form>
            
        </div>
    )
}

export default Login; 