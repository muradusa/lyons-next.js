/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "General Contracting",
    icon: CloudUploadIcon,
    description:
      "By working closely with the architect, engineers, and other consultants early in the design and/or construction phase, we are able to realize a majority of the construction savings.",
  },
  {
    name: "Design Build",
    icon: LockClosedIcon,
    description:
      "W.E. Lyons Construction has delivered design-build projects for over 80 years. Our extensive experience allows us to streamline the process, anticipate problems and enhance project performance.",
  },
  {
    name: "Preconstruction ",
    icon: RefreshIcon,
    description:
      "W.E. Lyons Construction’s approach to any successful project is the proper preparation and implementation of procedures.",
  },
  {
    name: "Sustainable Construction",
    icon: ShieldCheckIcon,
    description:
      "The LEED Green Building Rating System was developed and is administered by the U.S. Green Building Council (USGBC), a Washington D.C.-based, nonprofit coalition of building industry leaders.",
  },
  {
    name: "Value Engineering",
    icon: CogIcon,
    description:
      "While to other contractors value engineering means only cost cutting, to W.E. Lyons Construction it is a systematic method to improve the value of a project by examining and analyzing cost saving measures.",
  },
  {
    name: "Construction Management",
    icon: ServerIcon,
    description:
      "W.E. Lyons Construction’s approach to any successful project is the proper preparation and implementation of procedures.",
  },
];

export default function Features() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Services
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to build amazing projects
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          We guarantee the highest quality workmanship in the construction
          industry, established in 96 years of experience.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
