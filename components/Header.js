import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        {/* Navbar */}

        <nav className="shadow">
          <div className="px-2 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <style dangerouslySetInnerHTML={{ __html: "" }} />
                  <a href="/" className="pr-3 py-2 rounded-md font-medium flex items-center text-lg" aria-current="page" >
                    <img src="/assets/img/logo.png" className="mr-3" alt style={{ width: 40 }} /> TMOTIE </a>
                </div>
                <div className="hidden md:flex sm:ml-6 flex items-center">
                  <div className="flex space-x-4">
                    <a href="/" className="hover:text-blue-600 py-2 rounded-md text-sm font-medium"> НҮҮР ХУУДАС </a>
                    <div className="flex justify-center">
                      <div>
                        <div className="dropdown relative">
                          <button className=" dropdown-toggle py-2.5 bg-white text-black font-medium text-sm leading-tight uppercase rounded flex items-center whitespace-nowrap"
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> АНГИЛАЛ 
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                            </svg>
                          </button>
                          <ul
                            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > ИОГ </a> </li>
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > БҮЖГИЙН ДАСГАЛ </a> </li>
                            <li> <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">АНГЛИ ХЭЛ</a> </li>
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > МЭДЭЭЛЛИЙН ТЕХНОЛОГИ </a> </li>
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > ХҮНИЙ ХӨГЖИЛ </a> </li>
                            <li> <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"> БИЗНЕС  </a> </li>
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > ДИЗАЙН </a> </li>
                            <li> <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#" > УРЛАГ </a> </li>
                            <li> <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"> ЛАЙФСТАЙЛ </a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <a href="/category" className="hover:text-blue-600 py-2 rounded-md text-sm font-medium hidden xl:block"> АНГИЛАЛ </a>
                    <a target="_blank" href="/teachers" className="hover:text-blue-600 py-2 rounded-md text-sm font-medium" > БАГШ НАР </a>                    
                    <a target="_blank" href="/faq" className="hover:text-blue-600 py-2 rounded-md text-sm font-medium"> ЗААВАР </a>
                    <a target="_blank" href="/contact" className="hover:text-blue-600 py-2 rounded-md text-sm font-medium" > ХОЛБОО БАРИХ </a>
                  </div>
                </div>
              </div>
              <div id="mdb-5-search-container" className="hidden lg:block">
                <form>
                  <style dangerouslySetInnerHTML={{__html: "\n #mdb-5-search-input:focus-within {\n outline: 2px solid hsl(280, 100%, 84%) !important;"}}/>
                  <input id="mdb-5-search-input" autoComplete="off" type="search" className="rounded-xl md:w-[350px] xl:w-[500px] border border-blue-300 p-2 mr-2 bg-gray-100" placeholder='Хайх үгээ бичнэ үү ...'/>
                  <span className="input-group-text border-0"> <i className="fas fa-search text-gray-400" id="mdb-5-search-icon"/> </span>
                </form>
                <div id="mdb-5-search-dropdown" className="rounded shadow-md hidden p-2"
                  style={{ position: "absolute", top: 50, overflowY: "hidden", zIndex: 999999, backgroundColor: "white"}}>
                  <ul id="mdb-5-search-list" className=" w-max pt-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                    style={{ overflowY: "scroll", maxHeight: 265, minWidth: 300, position: "relative"}}/>
                  <hr className="my-0" />
                  <p className="mb-0 mx-2 my-3 text-gray-500 text-sm">Хайлтын үр дүн: <strong id="mdb-5-search-count" /></p>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://github.com/mdbootstrap/Tailwind-Elements/" target="_blank" className="text-gray-400 hover:text-blue-600 pl-3 py-2 rounded-md text-sm font-medium">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* <nav className="navbar navbar-expand-lg shadow-xl py-2 bg-white relative flex items-center w-full justify-between">
    <div className="px-6 w-full flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
      </div>
      <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
          <li className="nav-item">
            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">НҮҮР ХУУДАС</a>
          </li>
          <li className="nav-item">
            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">ОНЦЛОГ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">ҮНИЙН САНАЛ</a>
          </li>
          <li className="nav-item mb-2 lg:mb-0">
            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">БИДНИЙ ТУХАЙ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
        {/* Navbar */}
        {/* Background image */}
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "100%",
            backgroundImage:
              'url("/assets/img/banner.png")',
            height: 600,
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            {/* <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* Background image */}
      </header>
    </div>
  );
};

export default Header;
