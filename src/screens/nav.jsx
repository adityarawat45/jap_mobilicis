function Nav() {
    return  <div>
     <nav className="bg-white p-4 fixed top-0 w-full z-10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      

        <div className="flex justify-start items-center">  
        <img src="src/images/user.jpg" className="h-10 w-10 mr-5"></img>
        <div className="flex space-x-4"> 
  <a href="#" className="text-black font-semibold ">Home</a> 
  <a href="/jobs" className="text-black font-semibold ml-3">Jobs</a> 
  <a href="#" className="text-black font-semibold ml-3">Culture</a> 
  <a href="#" className="text-black font-semibold ml-3">More</a> 
  </div>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg">
           <div className="flex">
            <img src="src/images/crown.png" className="h-5 w-5 mr-2"></img>
            <p>Premium Membership </p>
            </div> 
          </button>
        </div>
      </div>
    </nav>
  </div>
}
export default Nav