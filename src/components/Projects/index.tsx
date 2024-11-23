
const Projects = () => {
  return (
    <div className="h-screen pt-20" id="projects">
      <h3 className="text-4xl text-center">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-20">
      <div className="col-span-1 flex items-center justify-center mb-32">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center mb-32">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center mb-32">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects