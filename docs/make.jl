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
    devbranch = "main",
    devurl = "dev", 
    versions = [   # Name in version selector => git tag/branch
        "cy46h1.2" => "46h1.2",
        "43h2.1" => "43h2.1", 
        "40h1" => "cy40h1"
    ],
    push_preview=true
)

