# 202104 Virtual

 - Date: 19 - 23 April  2021
 - [Google link](https://meet.google.com/xwx-hhrq-uuy)
 - [Notes](https://hirlam.org/trac/wiki/Meetings/System/Video_Meetings/2021) from previous meeting  
 - Markdown format [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  

## Participants

Name              | Institute  | ARR - DEP        |  Home       
---               | ---        | ---              | ---         
Roel Stappers     | MET Norway | Monday - Friday  | Grubbenvorst
Daniel Santos     | DMI        | Monday - Friday  | Becerril     
Ulf Andrae        | SMHI       | Monday - Friday  | Norrköping   
Toon Moene        | KNMI       | Monday - Friday  | Maartensdijk 
Eoin Whelan       | METIE      | Monday - Friday  | Trim         
Bert van Ulft     | KNMI       | Monday - Friday  | Utrecht 
Ole Vignes        | MET Norway | Monday - Friday  | Oslo


##  Agenda, Meeting notes and tasks progress 

To discuss: An alternative to adding the progress below would be to create an issue for each task (in this SystemWW repo not the Harmonie repo) and keep track of the progress there in the comments (and close the issue when the task is finished)


###  Priorities 2021 

   1. Davaii and mitrailllette for Harmonie if is possible outside MF __PENDING__
   2. Bundling tool - __PENDING__
   3. Common work space (gitlab, docs ...) __ON GOING__
   4. Cross families working weeks- __ON GOING__ ???
   5. Subhourly cycling based in perl or rewrite in python (resources ???)- '''Implementation in cy46''' __ON GOING__


### CY43
  - Testing for tagging 43h2.2
     - New simplified procedure these test [slide]- __Jeanette, Bent, Daniel__
     - MetCoOp has some verification test ICERAD. Create a link in [validation for tagging](https://hirlam.org/trac/wiki/Harmonie_43h2/Validation_for_tagging_43h2.2) - __Ole__
  - Review issues and Pending tasks
     - Restrict ECCODES version to 2.18.0 to avoid some GRIB encoding problems although we can not encode spectral components. For this 2.21.0 is required. Ryad writes about GRIB output:
     >If you wish to produce GRIB2 files and not FA files directly out of Fullpos for backend post-processing, then you must be aware or the keys LEXTERN, CMODEL, NIDCEN and NFPGRIB, and then these mods and library are important. This is what we do in Meteo-France for operations since cycle 43t2.
For historical or coupling files it will become important for large resolutions or dimensions that GRIB1 can't support (but I don't know the limits). In Météo-France we shall use this GRIB2 encoding in LAM historical and coupling FA files in cycle 46t1 to be ready for the future, though it is not yet necessary for our operational resolutions. - __Ulf__
     - ECMWF HPC and MARS retrievals are very slow
     - Fix the issue 'harmonie AN runs that would use/dev/shm to create ODB related files and directories'[issue](https://github.com/Hirlam/Harmonie/issues/17)__Closed__
  - Workflow in GitHub (pull requests, user forks, ...)  
     - Prototype for github action to submit experiments from github - __Roel__
     > Done. [example](https://github.com/roelstappers/Harmonie/blob/feature/githubactions/.github/workflows/run_at_ecmwf.yml). Works technically but needs discussion with ECMWF because of potential security issues. If we want to go for this workflow ask ECMWF to provide a github actions for access to TEMS with HID login? 
     - Prototype for github actions to extract information from log files - __Roel__ 
     > Done. [grepcost example](https://github.com/roelstappers/HarmonieExperiments/runs/2407700546?check_suite_focus=true#step:3:9). made by [github action](https://github.com/Hirlam/HarmonieExperiments/blob/main/.github/workflows/grepcost.yml)
     - Consider splitting configuration (in YAML/TOML/JSON) setting in a seperate repo and use JSON schema for validation and get [GUIs](https://hirlam.github.io/Harmonie.jl/) for free.
  - harmonie_43h2.2.target.1 branch created in dsantosm fork for new settings. Info about the settings [here](https://hirlam.org/trac/wiki/Harmonie_43h2/Potential_updates_for_tagging_43h2.2)     
    - surfex_namelists.pm: CSEA_FLUX => '"ECUME6" 
    - NLWLIQOPT to 3: Nielsen (SW), Nielsen (LW) - Some fix is still needed __Kristian__ will send a pullrequest
    - setting the CCN to 50 per cm3 src/arpifs/phys_dmn/suparar.F90:RFRMIN(26)=50E6
    - LICERAD=TRUE src/arpifs/phys_dmn/suparar.F90:LICERAD=.TRUE.
    - LTOTPREC => '.TRUE.', LMIXUV => '.FALSE.'
  - Documentation
  
### CY46
  - Status
    - Testbed is broken. Test on default setup is ongoing. __Ulf__
     - Default setup works ( technically ). Tested 2021040100-2021040118.
     - Testbed outcome so far. Works:AROME,AROME_PYSURFEX_OI,AROME_3DVAR, Failing:AROME_3DVAR_SEKF,AROME_BD_ARO
    - Fix the message sending from testbed and a establish a contingency testbed with less computational demands to use in case of slow performance on CCA
  - Tag beta version when the testbed give us the right signal that everything is ok - __Daniel__
  - Canari: Upper air fields are corrupted. Work around with the MF implementation. Olda confirmed they use only surface fields - __Trygve & Patrick__
  - Accelerate CY46 transition:
      - Reproducibility study with the same settings than 43h2.2 
      - 4DVar latest merges should be fixed 
  - Fixing and closing Cycle 46 tickets open on hirlam.org- __Toon__
  - Pysurfex status
    - Invite Trygve to check the status [Presentation](https://docs.google.com/presentation/d/1s1niM291Je-pnsoFDB7SqGpyWyQxQA-G-krp0eRu-_0)
       - Pysurfex lives in https://github.com/metno/pysurfex
       - Documentation in https://metno.github.io/pysurfex/
  - CMake (see [ticket](https://hirlam.org/trac/ticket/188) ) and OOPS 
    - Adapt CMake to be able to build OOPS binaries - [Done](https://github.com/roelstappers/Harmonie/tree/feature/CY46_cmakeoops) __Yurii & Roel__
  - Sub-hourly cycling and scripting design
    - Extend the current implemented solution waiting for a more common ACCORD plans
    - Possible naming convection problems for final users should be taken into account - __Eoin__
    - Mandtg works with minutes - __Ole__
    - [Draft implementation plan](https://docs.google.com/presentation/d/1xi2Y7gkFSD9EgqquXDqDprwC4LGhZx9bEDuQXhhX2MM/edit#slide=id.gce02854fd2_0_20)
    - Backward compatibility ?? - __Bert__
  - Compilation in TEMS- __Daniel & Eoin__
    - Create and submit.tems to avoid placement problems reutilizing the ecgb-cca one.
    - Issue[#2](https://github.com/Hirlam/SystemWW/issues/2)
    - Slack channel #ww2021-tems-installation

### CY48
  - Status of Pending Branches:
    - Bator: Minor fixes still needed - __Eoin__
    - LOCND2: Test compilation of the branch, as it is,  inside MF and test with Davai. Plan for updating this branch for the new phisycs devs - __Bert, Niko, Alexandre__
    - SPP: Should be introduced in CY48T2 in the 'old way' to reduce the differences between codes. A further outdate will be needed in CY49 pre-phasing or CY49T1 continous integration. In CY49 the ECMWF SPP version will be available. __Ulf__
    - Hybrid: Start again the branch compilation - __Eoin, Daniel__ 
  - Compilation in CCA and TEMS - __Daniel Toon__
### CLIMATE:
  - Pre generated climate fields for selected domains:
    - Use testbed or %VAR% to pass ECFLOW variables to scripting  
  - Out of bounds PGD [issue](https://github.com/Hirlam/Harmonie/issues/1)
  - Problems in domains with a lot of sea and few inland points - __Colm Daniel Katya Patrick__
    - Example from cyclones- __Daniel__ 
- ECMWF teleport connection and ecFlow_ui
   - Some instructions added to the wiki: [https://hirlam.org/trac/wiki/HarmonieSystemDocumentation/ECMWF_teleport](https://hirlam.org/trac/wiki/HarmonieSystemDocumentation/ECMWF_teleport)

### DAVAï __Alexadre__
   - First setup of the portable version at ECMWF cca in summer 2021
   - VORTEX works in TEMS so Davai can be portable therer also.
   - Davai Tranning should be arranged
   - Implementation of Harmonie-CMC and maybe makeup/gmake as building tool could be the first tasks for us 
   - Help on porting and testing offered to Alexandre __Niko__
### ACCORD Convergence actions: 
  - Questionaire
  - GIT solution
  - Bundle
  - Workflow, docs, training.  
  - 
### Hirlam.org
  - DMI movement planed mid 2022 but Storage change is planed end 2021
  - Ask about mailing list support at DMI mail services - __Daniel__  - __Done__
  - Ask about OS update urgency - __Daniel__  - __Done__
  
### Document dependencies of external software
  - https://hirlam.org/trac/wiki/HarmonieSystemDocumentation/Redhat7Install might be a useful starting point - definitely out of date
  - ECFBUNDL for that
  - Docker from Jacob could be usefull 
  - Problems with Intel compiler in cy46 should be documented.


##  General questions 

- How to control the namelist settings more effectively?
- Where and how to document model changes and spread the info ?
- Improve code modularity (for scripts) and use of package managers. Julia used as proof of concept- 
- Move to GitHub, gitlab the OpenSource software and how to treat the private areas for proprietary software
- pull request, feature codes, documentation and port to different code versions
- limits of free solutions (see [current usage](https://github.com/organizations/Hirlam/settings/billing))
- Clean up of [stale branches](https://github.com/Hirlam/Harmonie/branches/stale)
- Better to remove the gridpp and titanlib forks?  
- Add more [labels](https://github.com/Hirlam/Harmonie/issues/labels) (like `Data assimilation`, `IASI`) See [pull request](https://github.com/Hirlam/Harmonie/pulls?q=is%3Apr+is%3Aclosed) so in the future we get overviews of  commits/pull request relevant for specific Harmonie components.  
 - Ideas for github actions 
    -  Actions for testbed run (with options to only select subsets), davai, obsmon, harp, epygram 
    -  Actions to submit jobs to MF HPC 
    -  Actions that can run from the comment sections. See e.g. [this](https://github.com/JuliaLang/julia/pull/40453#issuecomment-819200844) where on a pull request that is expected to impact the performance in Julia they simply write in the comment section 
       ```@nanosoldier runbenchmarks(ALL, vs=":master")```
 
       Which runs the full benchmark (several hours) and get a link to report back as a reply



### Monday  

9:30 - 10:30  Videomeeting on: Introduction to the Virtual System WW
- Status of different cycles and outcomes for HMG meeting
- SWW tasks organization

10:30 - 11:00 Coffee Break

11:00 - 12:30  Work
 
12:30 - 13:30 Launch break

13:30 - 15:30  Work
 
15:30 - 16:30 Progress report 
 
### Tuesday 

9:30 - 10:30  HIRLAM GitHub workflow 
10:30 - 11:30 Previous day wrap-up video-meeting

10:00 - 10:30 Coffee Break

10:30 - 12:00 Work

12:30 - 13:30 Launch break

13:30 - ... Work

### Wednesday

10:00 - 11:30 Previous day wrap-up video-meeting

10:00 - 10:30 Coffee Break

10:30 - 12:00 Work

12:30 - 13:30 Launch break

13:30 - ... Work

### Thursday - Friday

9:30 - 11:30 Previous day wrap-up video-meeting

10:00 - 10:30 Coffee Break

10:30 - 12:00 Work

12:30 - 13:30 Launch break

13:30 - ... Work

