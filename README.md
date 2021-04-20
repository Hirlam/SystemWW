# HARMONIE Virtual System Working Week

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


##  Agenda 

- CY43:
  - Testing for tagging 43h2.2
     - New simplified procedure these test [slide]- __Jeanette, Bent, Daniel__
     - MetCoOp has some verification test ICERAD. Create a link in [validation for tagging](https://hirlam.org/trac/wiki/Harmonie_43h2/Validation_for_tagging_43h2.2) - __Ole__
  - Review issues and Pending tasks
     - Restrict ECCODES version to 2.18.0 to avoid some GRIB encoding problems although we can not encode spectral components. For this 2.21.0 is required. Ryad writes about GRIB output:
     >If you wish to produce GRIB2 files and not FA files directly out of Fullpos for backend post-processing, then you must be aware or the keys LEXTERN, CMODEL, NIDCEN and NFPGRIB, and then these mods and library are important. This is what we do in Meteo-France for operations since cycle 43t2.
For historical or coupling files it will become important for large resolutions or dimensions that GRIB1 can't support (but I don't know the limits). In Météo-France we shall use this GRIB2 encoding in LAM historical and coupling FA files in cycle 46t1 to be ready for the future, though it is not yet necessary for our operational resolutions. - __Ulf__
     - ECMWF HPC and MARS retrievals are very slow
     - Fix the issue 'harmonie AN runs that would use/dev/shm to create ODB related files and directories' ([link] 
  - Workflow in GitHub (pull requests, user forks, ...)  
     - Prototype for github action to submit experiments from github - __Roel__
     > Done. [example](https://github.com/roelstappers/Harmonie/runs/2384218969?check_suite_focus=true#step:2:7) of experiment started from github.
  - Documentation
- CY46:
  - Status
    - Testbed is broken. Test on default setup is ongoing. __Ulf__
    - Fix the message sending from testbed and a establish a contingency testbed with less computational demands to use in case of slow performance on CCA
    - Tag beta version when the testbed give us the right signal that everything is ok - __Daniel__
    - Canari: Upper air fields are corrupted. Work around with the MF implementation. Olda confirmed they use only surface fields - __Trygve & Patrick__
  - Fixing and closing Cycle 46 tickets open on hirlam.org
    - __Toon__
  - Pysurfex validation
    - Invite Trigve to check the status
  - CMake (see [ticket](https://hirlam.org/trac/ticket/188) ) and OOPS 
    - Adapt CMake to be able to build OOPS binaries - __Yurii & Roel__
  - Sub-hourly cycling and scripting design
    - Extend the current implemented solution waiting for a more common ACCORD plans
    - Possible naming convection problems for final users should be taken into account - __Eoin__
    - Mandtg works with minutes - __Ole__
    - [Draft implementation plan](https://docs.google.com/presentation/d/1xi2Y7gkFSD9EgqquXDqDprwC4LGhZx9bEDuQXhhX2MM/edit#slide=id.gce02854fd2_0_20)
    - Backward compatibility ?? - __Bert__
  - Compilation in TEMS- __Daniel & Eoin__
    - Create and submit.tems to avoid placement problems reutilizing the ecgb-cca one.
    - [#2](https://github.com/Hirlam/SystemWW/issues/2)
    - Slack channel #ww2021-tems-installation
- CY48:
  - Status of Pending Branches:
    - Bator: Minor fixes still needed - __Eoin__
    - LOCND2: Test compilation of the branch, as it is,  inside MF and test with Davai. Plan for updating this branch for the new phisycs devs - __Bert, Niko, Alexandre__
    - SPP: Should be introduced in CY48T2 in the 'old way' to reduce the differences between codes. A further outdate will be needed in CY49 pre-phasing or CY49T1 continous integration. In CY49 the ECMWF SPP version will be available. __Ulf__
    - Hybrid: Start again the branch compilation - __Eoin, Daniel__ 
  - Compilation in CCA and TEMS - __Daniel Toon__
- CLIMATE:
  - Pre generated climate fields for selected domains:
    - Use testbed or %VAR% to pass ECFLOW variables to scripting  
  - Out of bounds PGD [issue](https://github.com/Hirlam/Harmonie/issues/1)
  - Problems in domains with a lot of sea and few inland points - __Colm Damiel Katya Patrick__
    - Example from cyclones- __Daniel__ 
- ACCORD Convergence actions: 
  - Questionaire
  - GIT solution
  - Bundle
  - Workflow, docs, training.  
- Revisit status of system priorities for 2021
- AOB

##  Priorities 2021 

   1. Davaii and mitrailllette for Harmonie if is possible outside MF 
   2. Bundling tool 
   3. Common work space (gitlab, docs ...)
   4. Cross families working weeks
   5. Subhourly cycling based in perl or rewrite in python (resources ???)- '''Implementation in cy46'''

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
<details><summary>Ideas for github actions (click to expand) </summary><p>

Use `workflow_dispatch` events

See the [Example](https://github.com/roelstappers/Harmonie/actions/workflows/run_at_ecmwf.yml) in my fork and click the `run workflow` button which lets you enter `DTG` `DTEND`

The [action](https://github.com/roelstappers/Harmonie/blob/develop/.github/workflows/run_at_ecmwf.yml) will clone the selected branch and run Harmonie.
The [job](https://github.com/roelstappers/Harmonie/runs/2375694919?check_suite_focus=true) of course fails on my laptop with

```
/home/roel/actions-runner/_work/Harmonie/Harmonie/config-sh/Harmonie: The following start-up files are missing:
./Env_submit, ./Env_system, config-sh/hm_rev
````

A Harmonie user would fork Harmonie, create a branch with changes for his experiment and trigger the `run_at_ecmwf` action to run the experiment at ECMWF.

Note the [self hosted runners](https://github.com/Hirlam/Harmonie/settings/actions/add-new-runner) require GLIBC 2.14 so at ECMWF we have to wait until after the move to bologna. Perhaps someone with access TEMS can give it a try.

Need similar actions to run the testbed at ecmwf (with some option to run only selected configurations), run davaii at MF, run obsmon,epygram, harp


Also see e.g. [this](https://github.com/JuliaLang/julia/pull/40453#issuecomment-819200844) where on a pull request that is expected to impact the performance in Julia they simply write in the comment section 


 ```@nanosoldier runbenchmarks(ALL, vs=":master")```
 
 Which runs the full benchmark (several hours) and get a link to report back as a reply

</p></details>


### Monday  

9:30 - 10:30  Videomeeting on: Introduction to the Virtual System WW
- Status of different cycles and outcomes for HMG meeting
- SWW tasks organization

10:30 - 11:00 Coffee Break

11:00 - 12:30  Work
 
12:30 - 13:30 Launch break

13:30 - 15:30  Work
 
15:30 - 16:30 Progress report 
 
### Tuesday - Friday 

9:00 - 10:00 Previous day wrap-up video-meeting

10:00 - 10:30 Coffee Break

10:30 - 12:00 Work

12:00 - 12:30 Progress report

12:30 - 13:30 Launch break

13:30 - ... Work

## Meeting notes and tasks progress 

To discuss: An alternative to adding the progress below would be to create an issue for each task (in this SystemWW repo not the Harmonie repo) and keep track of the progress there in the comments (and close the issue when the task is finished)

### CY43



### CY46

### CY48
