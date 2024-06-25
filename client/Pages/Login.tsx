import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="bg-ddarkGrey">
        <div className="flex p-16">
          {/* Logo section */}
          <div className="flex h-[60rem] w-2/5 flex-col items-center justify-center rounded-l-lg bg-teal-700">
            <div className="mb-4">
              <img
                src="/images/BR-light.png"
                alt="BR-Light Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-20 text-center text-white">
              <p>DID YOU KNOW</p>
            </div>
            <div className="p-8 text-center font-mono text-3xl text-white">
              <p>
                Over 14 million junior developers worldwide (including in
                parallel universes) use BRDG for advancing their careers.
              </p>
            </div>
            <div>
              <img src="/images/loginImage2.png"></img>
            </div>
          </div>

          {/* Button section */}
          <div className="flex h-[60rem] w-3/5 items-center justify-center rounded-r-lg bg-dextraLightGrey">
            <div className="h-20 w-1/2 rounded-md bg-teal-700 px-4 py-2 pt-6 text-center text-xl font-semibold text-white hover:bg-primary">
              <Link to="/home">GET STARTED</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
