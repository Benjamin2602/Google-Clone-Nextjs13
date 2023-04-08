import Image from "next/image";
import HomeHeader from "./components/HomeHeader";


export default function Home() {
  return (
    <>


        <HomeHeader/>

        {/* body section */}
        <div className="flex flex-col items-center mt-24">
        {/* ability to optimize image in different size */}
        {/* so this makes the browser to fastly reload the image */}
          <Image 
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google Logo"
          
          ></Image>
        </div>
    </>
  )
}
