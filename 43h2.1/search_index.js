var documenterSearchIndex = {"docs":
[{"location":"System/202305Dublin/#Dublin","page":"202305 Dublin","title":"202305 Dublin","text":"","category":"section"},{"location":"System/202305Dublin/","page":"202305 Dublin","title":"202305 Dublin","text":"Wiki page will be put here after the meeting","category":"page"},{"location":"System/202305Dublin/#Documenter-test","page":"202305 Dublin","title":"Documenter test","text":"","category":"section"},{"location":"System/202305Dublin/","page":"202305 Dublin","title":"202305 Dublin","text":"Interactive plot of SPG pattern (figure looks better using GLMakie) ","category":"page"},{"location":"System/202305Dublin/","page":"202305 Dublin","title":"202305 Dublin","text":"# only need to serve figures with documenter #hide\nusing JSServe, WGLMakie #hide\npage = Page(offline=true, exportable=true) #hide","category":"page"},{"location":"System/202305Dublin/","page":"202305 Dublin","title":"202305 Dublin","text":"using FileIO  #hide\nlogo = load(\"../assets/logo.png\") #hide \n","category":"page"},{"location":"System/202305Dublin/","page":"202305 Dublin","title":"202305 Dublin","text":"using GaussianRandomFields, WGLMakie \nset_theme!(theme_black(), resolution=(800, 600)) #hide\n\n# Domain \nx = 1:188\ny = 1:268\n\n# 2D Gaussian covariance function length scale 20,\ncov = CovarianceFunction(2, Gaussian(20, σ= 10.0)) \n\ngrf = GaussianRandomField(cov, CirculantEmbedding(), x, y)\n\n# Create random sample \ndata = sample(grf)\n\ns = surface(data,color=logo)\nzoom!(s.axis.scene,0.5) #hide\ns #hide","category":"page"},{"location":"System/spg/#Time-dependent-SPG","page":"Time dependent SPG","title":"Time dependent SPG","text":"","category":"section"},{"location":"System/spg/","page":"Time dependent SPG","title":"Time dependent SPG","text":"using GaussianRandomFields, WGLMakie \n\n# Domain \nx = 1:188\ny = 1:268\nt = 1:100\n\n# 3D Gaussian covariance function length scale 20,\ncov = CovarianceFunction(3, Gaussian(20, σ= 10.0)) \n\ngrf = GaussianRandomField(cov, CirculantEmbedding(), x, y, t)\n\n# Create random sample \ndata = sample(grf)\n\n# Make figure\nfig = Figure();  ax = Axis3(fig[1,1])\n\nto = Observable(1);  pd = @lift(data[:,:,$to])\n\nsurface!(ax,pd)\n\n# Animation \nrecord(fig,\"$dir/spg.mp4\",t,framerate=10) do ti \n   to[] = ti \n   ax.azimuth[] = ax.azimuth[]+0.01\nend ","category":"page"},{"location":"System/spg/","page":"Time dependent SPG","title":"Time dependent SPG","text":"(Image: )","category":"page"},{"location":"#Working-Week-notes","page":"Home","title":"Working Week notes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Enjoy!","category":"page"},{"location":"System/202104Virtual/#Virtual","page":"202104 Virtual","title":"202104 Virtual","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Date: 19 - 23 April  2021\nGoogle link\nNotes from previous meeting  \nMarkdown format Cheatsheet  ","category":"page"},{"location":"System/202104Virtual/#Participants","page":"202104 Virtual","title":"Participants","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Name Institute ARR - DEP Home\nRoel Stappers MET Norway Monday - Friday Grubbenvorst\nDaniel Santos DMI Monday - Friday Becerril\nUlf Andrae SMHI Monday - Friday Norrköping\nToon Moene KNMI Monday - Friday Maartensdijk\nEoin Whelan METIE Monday - Friday Trim\nBert van Ulft KNMI Monday - Friday Utrecht\nOle Vignes MET Norway Monday - Friday Oslo","category":"page"},{"location":"System/202104Virtual/#Agenda,-Meeting-notes-and-tasks-progress","page":"202104 Virtual","title":"Agenda, Meeting notes and tasks progress","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"To discuss: An alternative to adding the progress below would be to create an issue for each task (in this SystemWW repo not the Harmonie repo) and keep track of the progress there in the comments (and close the issue when the task is finished)","category":"page"},{"location":"System/202104Virtual/#Priorities-2021","page":"202104 Virtual","title":"Priorities 2021","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Davaii and mitrailllette for Harmonie if is possible outside MF PENDING\nBundling tool - PENDING\nCommon work space (gitlab, docs ...) ON GOING\nCross families working weeks- ON GOING ???\nSubhourly cycling based in perl or rewrite in python (resources ???)- '''Implementation in cy46''' ON GOING","category":"page"},{"location":"System/202104Virtual/#CY43","page":"202104 Virtual","title":"CY43","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Testing for tagging 43h2.2\nNew simplified procedure these test [slide]- Jeanette, Bent, Daniel\nMetCoOp has some verification test ICERAD. Create a link in validation for tagging - Ole\nReview issues and Pending tasks\nRestrict ECCODES version to 2.18.0 to avoid some GRIB encoding problems although we can not encode spectral components. For this 2.21.0 is required. Ryad writes about GRIB output:\nIf you wish to produce GRIB2 files and not FA files directly out of Fullpos for backend post-processing, then you must be aware or the keys LEXTERN, CMODEL, NIDCEN and NFPGRIB, and then these mods and library are important. This is what we do in Meteo-France for operations since cycle 43t2.","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"For historical or coupling files it will become important for large resolutions or dimensions that GRIB1 can't support (but I don't know the limits). In Météo-France we shall use this GRIB2 encoding in LAM historical and coupling FA files in cycle 46t1 to be ready for the future, though it is not yet necessary for our operational resolutions. - Ulf      - ECMWF HPC and MARS retrievals are very slow      - Fix the issue 'harmonie AN runs that would use/dev/shm to create ODB related files and directories'issueClosed","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Workflow in GitHub (pull requests, user forks, ...)  \nPrototype for github action to submit experiments from github - Roel\nDone. example. Works technically but needs discussion with ECMWF because of potential security issues. If we want to go for this workflow ask ECMWF to provide a github actions for access to TEMS with HID login? \nPrototype for github actions to extract information from log files - Roel \nDone. grepcost example. made by github action\nConsider splitting configuration (in YAML/TOML/JSON) setting in a seperate repo and use JSON schema for validation and get GUIs for free.\nharmonie43h2.2.target.1 branch created in dsantosm fork for new settings. Info about the settings [here](https://hirlam.org/trac/wiki/Harmonie43h2/Potentialupdatesfortagging43h2.2)     \nsurfexnamelists.pm: CSEAFLUX => '\"ECUME6\" \nNLWLIQOPT to 3: Nielsen (SW), Nielsen (LW) - Some fix is still needed Kristian will send a pullrequest\nsetting the CCN to 50 per cm3 src/arpifs/phys_dmn/suparar.F90:RFRMIN(26)=50E6\nLICERAD=TRUE src/arpifs/phys_dmn/suparar.F90:LICERAD=.TRUE.\nLTOTPREC => '.TRUE.', LMIXUV => '.FALSE.'\nDocumentation","category":"page"},{"location":"System/202104Virtual/#CY46","page":"202104 Virtual","title":"CY46","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Status\nTestbed is broken. Test on default setup is ongoing. Ulf\nDefault setup works ( technically ). Tested 2021040100-2021040118.\nTestbed outcome so far. Works:AROME,AROMEPYSURFEXOI,AROME3DVAR, Failing:AROME3DVARSEKF,AROMEBD_ARO\nFix the message sending from testbed and a establish a contingency testbed with less computational demands to use in case of slow performance on CCA\nTag beta version when the testbed give us the right signal that everything is ok - Daniel\nCanari: Upper air fields are corrupted. Work around with the MF implementation. Olda confirmed they use only surface fields - Trygve & Patrick\nAccelerate CY46 transition:\nReproducibility study with the same settings than 43h2.2 \n4DVar latest merges should be fixed \nFixing and closing Cycle 46 tickets open on hirlam.org- Toon\nPysurfex status\nInvite Trygve to check the status Presentation\nPysurfex lives in https://github.com/metno/pysurfex\nDocumentation in https://metno.github.io/pysurfex/\nCMake (see ticket ) and OOPS \nAdapt CMake to be able to build OOPS binaries - Done Yurii & Roel\nSub-hourly cycling and scripting design\nExtend the current implemented solution waiting for a more common ACCORD plans\nPossible naming convection problems for final users should be taken into account - Eoin\nMandtg works with minutes - Ole\nDraft implementation plan\nBackward compatibility ?? - Bert\nCompilation in TEMS- Daniel & Eoin\nCreate and submit.tems to avoid placement problems reutilizing the ecgb-cca one.\nIssue#2\nSlack channel #ww2021-tems-installation","category":"page"},{"location":"System/202104Virtual/#CY48","page":"202104 Virtual","title":"CY48","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Status of Pending Branches:\nBator: Minor fixes still needed - Eoin\nLOCND2: Test compilation of the branch, as it is,  inside MF and test with Davai. Plan for updating this branch for the new phisycs devs - Bert, Niko, Alexandre\nSPP: Should be introduced in CY48T2 in the 'old way' to reduce the differences between codes. A further outdate will be needed in CY49 pre-phasing or CY49T1 continous integration. In CY49 the ECMWF SPP version will be available. Ulf\nHybrid: Start again the branch compilation - Eoin, Daniel \nCompilation in CCA and TEMS - Daniel Toon","category":"page"},{"location":"System/202104Virtual/#CLIMATE:","page":"202104 Virtual","title":"CLIMATE:","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Pre generated climate fields for selected domains:\nUse testbed or %VAR% to pass ECFLOW variables to scripting  \nOut of bounds PGD issue\nProblems in domains with a lot of sea and few inland points - Colm Daniel Katya Patrick\nExample from cyclones- Daniel \nECMWF teleport connection and ecFlow_ui\nSome instructions added to the wiki: https://hirlam.org/trac/wiki/HarmonieSystemDocumentation/ECMWF_teleport","category":"page"},{"location":"System/202104Virtual/#DAVAï-**Alexadre**","page":"202104 Virtual","title":"DAVAï Alexadre","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"First setup of the portable version at ECMWF cca in summer 2021\nVORTEX works in TEMS so Davai can be portable therer also.\nDavai Tranning should be arranged\nImplementation of Harmonie-CMC and maybe makeup/gmake as building tool could be the first tasks for us \nHelp on porting and testing offered to Alexandre Niko","category":"page"},{"location":"System/202104Virtual/#ACCORD-Convergence-actions:","page":"202104 Virtual","title":"ACCORD Convergence actions:","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Questionaire\nGIT solution\nBundle\nWorkflow, docs, training.  \n","category":"page"},{"location":"System/202104Virtual/#Hirlam.org","page":"202104 Virtual","title":"Hirlam.org","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"DMI movement planed mid 2022 but Storage change is planed end 2021\nAsk about mailing list support at DMI mail services - Daniel  - Done\nAsk about OS update urgency - Daniel  - Done","category":"page"},{"location":"System/202104Virtual/#Document-dependencies-of-external-software","page":"202104 Virtual","title":"Document dependencies of external software","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"https://hirlam.org/trac/wiki/HarmonieSystemDocumentation/Redhat7Install might be a useful starting point - definitely out of date\nECFBUNDL for that\nDocker from Jacob could be usefull \nProblems with Intel compiler in cy46 should be documented.","category":"page"},{"location":"System/202104Virtual/#General-questions","page":"202104 Virtual","title":"General questions","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"How to control the namelist settings more effectively?\nWhere and how to document model changes and spread the info ?\nImprove code modularity (for scripts) and use of package managers. Julia used as proof of concept- \nMove to GitHub, gitlab the OpenSource software and how to treat the private areas for proprietary software\npull request, feature codes, documentation and port to different code versions\nlimits of free solutions (see current usage)\nClean up of stale branches\nBetter to remove the gridpp and titanlib forks?  \nAdd more labels (like Data assimilation, IASI) See pull request so in the future we get overviews of  commits/pull request relevant for specific Harmonie components.  \nIdeas for github actions \nActions for testbed run (with options to only select subsets), davai, obsmon, harp, epygram \nActions to submit jobs to MF HPC \nActions that can run from the comment sections. See e.g. this where on a pull request that is expected to impact the performance in Julia they simply write in the comment section   @nanosoldier runbenchmarks(ALL, vs=\":master\")","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"   Which runs the full benchmark (several hours) and get a link to report back as a reply","category":"page"},{"location":"System/202104Virtual/#Monday","page":"202104 Virtual","title":"Monday","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"9:30 - 10:30  Videomeeting on: Introduction to the Virtual System WW","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"Status of different cycles and outcomes for HMG meeting\nSWW tasks organization","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:30 - 11:00 Coffee Break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"11:00 - 12:30  Work","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"12:30 - 13:30 Launch break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"13:30 - 15:30  Work","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"15:30 - 16:30 Progress report ","category":"page"},{"location":"System/202104Virtual/#Tuesday","page":"202104 Virtual","title":"Tuesday","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"9:30 - 10:30  HIRLAM GitHub workflow  10:30 - 11:30 Previous day wrap-up video-meeting","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:00 - 10:30 Coffee Break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:30 - 12:00 Work","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"12:30 - 13:30 Launch break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"13:30 - ... Work","category":"page"},{"location":"System/202104Virtual/#Wednesday","page":"202104 Virtual","title":"Wednesday","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:00 - 11:30 Previous day wrap-up video-meeting","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:00 - 10:30 Coffee Break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:30 - 12:00 Work","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"12:30 - 13:30 Launch break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"13:30 - ... Work","category":"page"},{"location":"System/202104Virtual/#Thursday-Friday","page":"202104 Virtual","title":"Thursday - Friday","text":"","category":"section"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"9:30 - 11:30 Previous day wrap-up video-meeting","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:00 - 10:30 Coffee Break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"10:30 - 12:00 Work","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"12:30 - 13:30 Launch break","category":"page"},{"location":"System/202104Virtual/","page":"202104 Virtual","title":"202104 Virtual","text":"13:30 - ... Work","category":"page"}]
}
