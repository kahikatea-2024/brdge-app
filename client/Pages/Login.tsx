export default function Login(){
    return (
        <>
          <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
              <img
                src="/images/LoginImage.png"
                alt="Placeholder Image"
                className="object-cover w-full h-full"
              />
            </div>
            
                <button
                  type="submit"
                  className="bg-primary m-16 h-20 hover:bg-teal-700 p-16 text-white font-semibold rounded-md text-xl py-2 px-4 w-1/2"
                >
                  GET STARTED
                </button>
              
              <div className="mt-6 text-blue-500 text-center">

              </div>
            </div>
          
        </>
      );
    }