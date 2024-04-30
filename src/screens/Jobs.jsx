import React, { useState } from 'react';


const jobs = [
    "Software Engineer, Kyoto",
    "Data Scientist, Tokyo",
    "Product Manager, Osaka",
    "Marketing Specialist, Nagoya",
    "Graphic Designer, Fukuoka",
    "Financial Analyst, Kobe",
    "Human Resources Manager, Sapporo",
    "Sales Representative, Yokohama",
    "Customer Support Specialist, Sendai",
    "Operations Manager, Nagasaki",
    "Web Developer, Nara",
    "UX Designer, Kanazawa",
    "Software Developer, Kumamoto",
    "Digital Marketing Manager, Okinawa",
    "Content Writer, Kagoshima",
    "IT Manager, Shizuoka",
    "Business Analyst, Niigata",
    "Quality Assurance Engineer, Nagano",
    "Project Manager, Matsuyama",
    "Network Engineer, Tokyo",
    "Systems Administrator, Osaka",
    "Database Administrator, Hiroshima",
    "UI Developer, Nagoya",
    "Technical Writer, Fukuoka",
    "DevOps Engineer, Kobe",
    "Data Analyst, Sapporo",
    "Network Administrator, Yokohama",
    "Full Stack Developer, Sendai",
    "Frontend Developer, Nagasaki",
    "Backend Developer, Nara",
    "Mobile App Developer, Kanazawa",
    "Software Tester, Kumamoto",
    "UX Researcher, Okinawa",
    "Cloud Engineer, Kagoshima",
    "IT Support Specialist, Shizuoka",
    "System Analyst, Niigata",
    "Cybersecurity Analyst, Nagano",
    "Game Developer, Matsuyama"
  ];

  function Jobs() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredJobs = jobs.filter(job =>
      job.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className='bg-white h-screen flex flex-col  items-center'>
        <div className="bg-gray-200  w-full justify-center flex items-center">
          <div className='text-6xl text-red-500 font-bold  pl-14 pr-24'>
            Search <br></br>for Jobs 
          </div>
          <input
            type="text"
            placeholder="Software Engineer..."
            className="my-20 p-3 w-6/12 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {searchQuery && (
          <div className="justify-center items-center bg-white w-6/12 mt-10 rounded-md border border-gray-300 shadow-lg overflow-y-auto max-h-60">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div key={index} className="p-2 flex justify-between items-center">
                  <span>{job}</span>
                  <button className='bg-orange-500 text-white text-sm px-4 py-2 rounded-md'>Apply</button>
                </div>
              ))
            ) : (
              <div className="p-2">No jobs found</div>
            )}
          </div>
        )}
      </div>
    );
  }
  
export default Jobs;