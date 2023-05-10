using Documenter


format = Documenter.HTML(prettyurls = get(ENV, "CI", nothing) == "true") 


systempages = joinpath.("System", readdir("$(@__DIR__)/src/System"))
juliapages = joinpath.("Julia", readdir("$(@__DIR__)/src/Julia"))

pages = [
    "Home" => "index.md",
    "System" => systempages,
    "Julia" => juliapages 
]


makedocs(
    sitename = "System WW",
    format = format,
    pages = pages
)

deploydocs( 
    repo = "github.com/Hirlam/SystemWW.git",
    push_preview=true
)

