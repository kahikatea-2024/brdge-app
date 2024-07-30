import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="flex h-full flex-col bg-gray-300 sm:flex-row">
        <div className="flex w-full items-center justify-center bg-teal-700 pt-8 lg:w-[40%] lg:pt-0">
          {/* Logo section */}
          <div className="text-center">
            <img
              src="/images/BR-light.png"
              alt="BR-Light Logo"
              className="mx-auto pl-4 pr-4 pt-4 lg:pt-10" // Centering the image horizontally
            />
            <p className="pb-4 pt-6 text-white">DID YOU KNOW</p>
            <p className="md:xl sm:md font-mono text-white lg:text-3xl">
              Over 14 million junior developers worldwide (including in parallel
              universes) use BRDG for advancing their careers.
            </p>
            <div className="pb-10 pl-8 pr-4 pt-8  lg:pt-20">
              <img
                src="/images/loginImage2.png"
                width="400px"
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-gray-300 sm:h-full lg:w-[60%]">
          <div className="pb-[40%] pt-[20%] md:pt-[40%] lg:pt-[40%]">
            <Link to="/home">
              <button className=" h-16 rounded-md bg-teal-700 pl-20 pr-20 font-semibold  text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
