import { Link } from "react-router-dom";
import Nav from "./nav";

function Landing() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url('src/images/cityscape.jpg')`}}>
      <Nav />
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h5 className="text-6xl font-bold tracking-wide pt-20">Opportunities to</h5>
          <h5 className="text-6xl font-bold tracking-wide">work in</h5>
          <h5 className="text-8xl font-bold pb-10 tracking-widest">J<span className="text-red-600">A<span className="text-white">P</span>A</span>N</h5>
          <p className="mt-4 text-lg px-60">In Japan, there are abundant and diverse opportunities available for individuals seeking employment. Renowned for its technological advancements, strong work ethic, and vibrant culture, Japan offers a wide range of career paths across various industries. From multinational corporations to innovative startups, the country provides opportunities for professionals in fields such as technology, engineering, finance, healthcare, education, and more. Additionally, Japan's emphasis on research and development fosters an environment conducive to innovation and entrepreneurship, attracting individuals with a passion for groundbreaking ideas. With its unique blend of tradition and modernity, coupled with a high standard of living and rich cultural experiences, Japan stands as an enticing destination for those looking to embark on a rewarding and fulfilling career journey.</p>
          <div className="bg-gray-200 text-black font-semibold pb-10">
            <p className="p-12 px-10">Looking for exciting career opportunities in Japan? Look no further! With a diverse range of industries and a vibrant economy, Japan offers a plethora of job prospects for both local talent and international professionals.</p>
            <Link to={'/jobs'}>
              <button className="bg-orange-600 rounded-md text-white font-semibold px-12 py-2 ">Search Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
