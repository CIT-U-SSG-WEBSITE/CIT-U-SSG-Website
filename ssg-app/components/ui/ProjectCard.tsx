import React from "react"

type Coordinator = {
  name: string
  imageUrl?: string
}

type Props = {
  imageUrl: string
  title: string
  description: string
  coordinators: Coordinator[]
  isMobile: boolean
}

function ProjectCard({ imageUrl, title, description, coordinators, isMobile }: Props) {
  const creator = coordinators[0] || { name: "", imageUrl: undefined }
  const additionalCoordinators = coordinators.slice(1)

  return (
    <div
      className={`w-full rounded-lg bg-white shadow-md overflow-hidden flex ${
        isMobile ? "p-2 flex-col" : "p-4"
      }`}
    >
      <div
        className={`flex-shrink-0 ${
          isMobile ? "w-full h-24" : "w-40 h-40"
        } bg-cover bg-center rounded-l-lg`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={`flex-1 p-${isMobile ? 1 : 2}`}>
        <h3 className={`font-bold ${isMobile ? "text-base" : "text-2xl"} text-dark-neutral`}>{title}</h3>
        <p className={`text-${isMobile ? "xs" : "sm"} text-dark-neutral/70 mt-1`}>{description}</p>
        {coordinators.length > 0 && (
          <div className="mt-2 flex items-center gap-1">
            {creator.imageUrl && (
              <div className="flex items-center gap-1">
                <img
                  src={creator.imageUrl}
                  alt={creator.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className={`text-${isMobile ? "xs" : "sm"} text-dark-neutral`}>{creator.name}</span>
              </div>
            )}
            {additionalCoordinators.length > 0 && (
              <div className="flex items-center gap-1">
                <span className={`text-${isMobile ? "xs" : "sm"} text-dark-neutral/70`}>|</span>
                {additionalCoordinators.slice(0, 3).map((coord, index) =>
                  coord.imageUrl && (
                    <img
                      key={index}
                      src={coord.imageUrl}
                      alt={coord.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  )
                )}
                <span className={`text-${isMobile ? "xs" : "sm"} text-dark-neutral/70`}>
                  {additionalCoordinators.length} coordinators
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard