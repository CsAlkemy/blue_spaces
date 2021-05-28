/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import React from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  ArrowCircleRightIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  MenuIcon,
  TerminalIcon,
  XIcon,
} from "@heroicons/react/outline"
import {
  ChartPieIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid"
import { Link } from "gatsby"

const solutions = [
  {
    name: "Web Development",
    description:
      "Get a better understanding of where your traffic is coming from.",
    to: "/",
    icon: TerminalIcon,
  },
  {
    name: "App Development",
    description: "Speak directly to your customers in a more meaningful way.",
    to: "/",
    icon: CursorClickIcon,
  },
  {
    name: "Search Engine Optimization",
    description: "Your customers' data will be safe and secure.",
    to: "/",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Digital Marketing",
    description: "Connect with third-party tools that you're already using.",
    to: "/portfolio",
    icon: ChartPieIcon,
  },
  {
    name: "Animation",
    description:
      "Build strategic funnels that will drive your customers to convert",
    to: "/contact",
    icon: CubeTransparentIcon,
  },
]
const callsToAction = [
  { name: "Our Works", href: "", icon: ArrowCircleRightIcon },
  { name: "Pricing", href: "", icon: CurrencyDollarIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <>
      <Popover className="relative bg-white shadow-lg">
        {({ open }) => (
          <div className="max-h-full md:max-w-4/5 mx-auto">
            <div>
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 px-5 md:px-0">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_32f1896c14d53226e64c634416723e55/benevity-goodness-platform.png"
                      alt=""
                    />
                  </Link>
                  <Link
                    to="/"
                    className="text-3xl font-light mt-1 text-gray-600 lg:inline hidden ml-2"
                  >
                    <span className="text-blue-500">B</span>lue
                    <span className="text-blue-500">S</span>paces
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-600",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Services</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-600"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-96 px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {solutions.map(item => (
                                  <Link
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex m-auto justify-around sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map(item => (
                                  <div key={item.name} className="flow-root">
                                    <Link
                                      to={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium  bg-indigo-600 hover:bg-indigo-800 text-white"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Link
                    to="/portfolio"
                    className="text-base font-medium text-gray-600 hover:text-gray-900"
                  >
                    Our Works
                  </Link>
                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-600 hover:text-gray-900"
                  >
                    About us
                  </Link>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href="/"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_32f1896c14d53226e64c634416723e55/benevity-goodness-platform.png"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        href="/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Home
                      </Link>

                      <Link
                        href="/portfolio"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Our Works
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        href="/pricing"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Pricing
                      </Link>

                      <Link
                        href="/contact"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Contacts
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Get a Quote
                      </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-600">
                        Existing customer?{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </>
  )
}
