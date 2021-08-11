import '../assets/css/home.css';

function Navbar() {
  return (
    <nav Style='background-color: rgba(255, 255, 255, 0);' className='bg-opacity-100 fixed select-none lg:flex lg:items-stretch w-full'>
      <div className='flex flex-no-shrink items-stretch h-12'>
        <a href='#' className='flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100'>
          SeniKurni
        </a>
      </div>
      <div className='lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow'>
        <div className='lg:flex lg:items-stretch lg:justify-end ml-auto'>
          <a href='#' className='flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100'>
            Portofolio
          </a>
          <a href='#' className='flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100'>
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
