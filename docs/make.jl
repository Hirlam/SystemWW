using Documenter, Glob 


pages = 


format = Documenter.HTML(prettyurls = get(ENV, "CI", nothing) == "true" ) 

makedocs(
    sitename = "System WW",
    format = format,
    pages = [
        "Home" => "index.md",
        "System" => joinpath.("System",  readdir("docs/src/System"))
    ]
)

deploydocs( 
    repo = "github.com/Hirlam/SystemWW.git",
    push_preview=true
)

