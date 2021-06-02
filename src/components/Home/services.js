import React from "react"
import {
  CursorClickIcon,
  DatabaseIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@heroicons/react/outline"
import { Link } from "gatsby"

const features = [
  {
    name: "Web Design and Development",
    description:
      "Elevate your business with a trusted website that your customers will love.Your website will load extremely fast and look great on all devices.",
    icon: GlobeAltIcon,
    to: "/webdev",
  },
  {
    name: "Mobile Application ",
    description:
      "BlueSpaces is the fast-growing Mobile application and Game development Company that is guided in delivering the products and views into mobile space with prime quality.",
    icon: CursorClickIcon,
    to: "/appdev",
  },
  {
    name: "Search Engine Optimization",
    description:
      "BlueSpaces provides full-service SEO packages with specialists and customer success representatives dedicated to helping you increase your ranking online.",
    icon: TrendingUpIcon,
    to: "/seoWork",
  },
  {
    name: "Data Analysis",
    description:
      "We also provide data analysis services for your business to take smarter decisions, using tools like Power BI, SSRS, tableau dashboard",
    icon: PresentationChartLineIcon,
    to: "/dataAnalysis",
  },
  {
    name: "Digital Marketing",
    description:
      "We offer all types of online marketing services including SEO, SEM, SMM, SMO, paid ads, email marketing, SMS marketing and push notification services. We are a dedicated team of people who always serve the brand supervisor’s clients. ",
    icon: UsersIcon,
    to: "/digital_m",
  },
  {
    name: "Domain And Hosting",
    description:
      "BlueSpaces also offers an All in One website maintenance solution that encompasses hosting, Content Updates, and Source Update of the current site. We help you concentrate on your business while leaving Content Updates and Regular Maintenance of your website to us.",
    icon: DatabaseIcon,
    to: "/domainHosting",
  },
]

export default function Services() {
  return (
    <div className="pb-10 max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-4xl md:text-5xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-4xl mb-5">
            Our Services
          </p>
          <p className="mb-20 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We as a big team provide IT enable support including Web and App
            development, IT Consultation, SEO, Digital Marketing, Data Analysis
            and many more.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div
                key={feature.name}
                className="relative transform duration-500 hover:-translate-y-2  hover:bg-white"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Link
                    to={feature.to}
                    className="ml-16 text-lg leading-6 font-medium text-gray-900"
                  >
                    {feature.name}
                  </Link>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify hidden md:block">
                  {feature.description}{" "}
                  <span>
                    <Link to={feature.to} className="text-indigo-500">
                      Learn More..
                    </Link>
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
