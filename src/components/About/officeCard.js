import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline"
import React from "react"
import BdMap from "../../images/bangladesh.png"
import CaMap from "../../images/canada.png"

const officeCard = () => {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
      <h1 className="text-center text-4xl md:text-5xl text-gray-700 py-10 font-semibold">
        Office Locations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-7 my-10">
        <div className="bg-gray-800 text-white  p-5 py-5 shadow-md">
          <img src={BdMap} alt="bd map" className="h-20 mx-auto"></img>
          <h1 className="text-center text-2xl font-normal mt-2">Bangladesh</h1>
          <div className="p-2 my-5">
            <div className="flex flex-row">
              <PhoneIcon className="h-5" />
              <a className="ml-3" href="tel:01886007480">
                +8801886007480
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a className="ml-3" href="mailto:info@bluespaces.xyz">
                info@bluespaces.xyz
              </a>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5" />
              <p className="ml-3">
                k9/13, Joydebpur
                <br /> Gazipur-1700 Dhaka- Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className=" text-gray-800 bg-white p-4 py-5 shadow-xl">
          <img src={CaMap} alt="bd map" className="h-20 mx-auto"></img>
          <h1 className="text-center text-2xl font-normal mt-2">Canada</h1>
          <div className="p-2 my-5">
            <div className="flex flex-row">
              <PhoneIcon className="h-5" />
              <a className="ml-3" href="tel:+12507972080">
                +12507972080
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a className="ml-3" href="mailto:info@bluespaces.xyz">
                info@bluespaces.xyz
              </a>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5" />
              <p className="ml-3">
                Merkley square,
                <br />
                Scarborough, ontario, Canada.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-5 py-5 shadow-md">
          <img src={BdMap} alt="bd map" className="h-20 mx-auto"></img>
          <h1 className="text-center text-2xl font-normal mt-2">Bangladesh</h1>
          <div className="p-2 my-5">
            <div className="flex flex-row">
              <PhoneIcon className="h-5" />
              <a className="ml-3" href="tel:+8801551810867">
                +8801551810867
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a className="ml-3" href="mailto:info@bluespaces.xyz">
                info@bluespaces.xyz
              </a>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5" />
              <p className="ml-3">
                West chayabithi
                <br /> Gazipur-1700 Dhaka- Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default officeCard
