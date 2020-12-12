import Head from 'next/head'
import Airtable from 'airtable'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
          <div>
              <nav className="bg-indigo-600">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between h-16">
                          <div className="flex items-center">
                              <div className="flex-shrink-0">
                                  <img className="h-8 w-8"
                                       src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                                       alt="Workflow" />
                              </div>
                              <div className="hidden md:block">
                                  <div className="ml-10 flex items-baseline space-x-4">
                                      <a href="#"
                                         className="bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>

                                      {/*<a href="#"*/}
                                      {/*   className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Team</a>*/}

                                      {/*<a href="#"*/}
                                      {/*   className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Projects</a>*/}

                                      {/*<a href="#"*/}
                                      {/*   className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>*/}

                                      {/*<a href="#"*/}
                                      {/*   className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Reports</a>*/}
                                  </div>
                              </div>
                          </div>
                          <div className="hidden md:block">
                              <div className="ml-4 flex items-center md:ml-6">
                                  <button
                                      className="p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                      <span className="sr-only">View notifications</span>
                                      {/*// <!-- Heroicon name: bell -->*/}
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                      </svg>
                                  </button>

                                  {/*// <!-- Profile dropdown -->*/}
                                  <div className="ml-3 relative">
                                      <div>
                                          <button
                                              className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                                              id="user-menu" aria-haspopup="true">
                                              <span className="sr-only">Open user menu</span>
                                              <img className="h-8 w-8 rounded-full"
                                                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                   alt="" />
                                          </button>
                                      </div>
                                      {/*// <!--*/}
                                      {/*//   Profile dropdown panel, show/hide based on dropdown state.*/}
                                      {/*//*/}
                                      {/*//   Entering: "transition ease-out duration-100"*/}
                                      {/*//     From: "transform opacity-0 scale-95"*/}
                                      {/*//     To: "transform opacity-100 scale-100"*/}
                                      {/*//   Leaving: "transition ease-in duration-75"*/}
                                      {/*//     From: "transform opacity-100 scale-100"*/}
                                      {/*//     To: "transform opacity-0 scale-95"*/}
                                      {/*// -->*/}
                                      {/*<div*/}
                                      {/*    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"*/}
                                      {/*    role="menu" aria-orientation="vertical" aria-labelledby="user-menu">*/}
                                      {/*    <a href="#"*/}
                                      {/*       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                      {/*       role="menuitem">Your Profile</a>*/}

                                      {/*    <a href="#"*/}
                                      {/*       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                      {/*       role="menuitem">Your Profile</a>*/}

                                      {/*    <a href="#"*/}
                                      {/*       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"*/}
                                      {/*       role="menuitem">Your Profile</a>*/}
                                      {/*</div>*/}
                                  </div>
                              </div>
                          </div>
                          <div className="-mr-2 flex md:hidden">
                              {/*// <!-- Mobile menu button -->*/}
                              <button
                                  className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                  <span className="sr-only">Open main menu</span>
                                  {/*// <!--*/}
                                  {/*//   Heroicon name: menu*/}
                                  {/*//*/}
                                  {/*//   Menu open: "hidden", Menu closed: "block"*/}
                                  {/*// -->*/}
                                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"/>
                                  </svg>
                                  {/*// <!--*/}
                                  {/*//   Heroicon name: x*/}
                                  {/*//*/}
                                  {/*//   Menu open: "block", Menu closed: "hidden"*/}
                                  {/*// -->*/}
                                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"/>
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>

                  {/*// <!--*/}
                  {/*//   Mobile menu, toggle classes based on menu state.*/}
                  {/*//*/}
                  {/*//   Open: "block", closed: "hidden"*/}
                  {/*// -->*/}
                  <div className="hidden md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                          {/*// <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->*/}
                          <a href="#"
                             className="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

                          <a href="#"
                             className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Team</a>

                          <a href="#"
                             className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                          <a href="#"
                             className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

                          <a href="#"
                             className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Reports</a>
                      </div>
                      <div className="pt-4 pb-3 border-t border-indigo-700">
                          <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full"
                                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                       alt="" />
                              </div>
                              <div className="ml-3">
                                  <div className="text-base font-medium text-white">Tom Cook</div>
                                  <div className="text-sm font-medium text-indigo-300">tom@example.com</div>
                              </div>
                              <button
                                  className="ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                  <span className="sr-only">View notifications</span>
                                  {/*// <!-- Heroicon name: bell -->*/}
                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                  </svg>
                              </button>
                          </div>
                          {/*<div className="mt-3 px-2 space-y-1">*/}
                          {/*    <a href="#"*/}
                          {/*       className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Your*/}
                          {/*        Profile</a>*/}

                          {/*    <a href="#"*/}
                          {/*       className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Settings</a>*/}

                          {/*    <a href="#"*/}
                          {/*       className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Sign*/}
                          {/*        out</a>*/}
                          {/*</div>*/}
                      </div>
                  </div>
              </nav>

              <header className="bg-white shadow-sm">
                  <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                      <h1 className="text-lg leading-6 font-semibold text-gray-900">
                          Dashboard
                      </h1>
                  </div>
              </header>
              <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                      {/*// <!-- Replace with your content -->*/}
                      <div className="px-4 py-4 sm:px-0">
                          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                      </div>
                      {/*// <!-- /End replace -->*/}
                  </div>
              </main>
          </div>

      </main>


    </div>
  )
}