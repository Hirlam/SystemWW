# HARMONIE Virtual System Working Week

 - Date: 19 - 23 April  2021
 - [Google link](https://meet.google.com/xwx-hhrq-uuy)
 - [Notes](https://hirlam.org/trac/wiki/Meetings/System/Video_Meetings/2022) from previous meeting  
 - Markdown format [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  

## Participants

Name              | Institute  | ARR - DEP        |  Home       
---               | ---        | ---              | ---         
Roel Stappers     | MET Norway | Monday - Friday  | Grubbenvorst :wq
Daniel Santos     | DMI        | Monday - Friday  | Becerril     
Ulf Andrae        | SMHI       | Monday - Friday  | Norrköping   
Toon Moene        | KNMI       | Monday - Friday  | Maartensdijk 
Eoin Whelan       | METIE      | Monday - Friday  | Trim         
Bert van Ulft     | KNMI       | Monday - Friday  | Utrecht      


##  Agenda 

- CY43:
  - Testing for tagging 43h2.2
  - Review issues and Pending tasks
  - Workflow in GitHub (pull requests, user forks, ...)
  - Documentation
- CY46:
  - Status
  - Pysurfex validation
  - CMake (see [ticket](https://hirlam.org/trac/ticket/188) ) and OOPS
  - Sub-hourly cycling and scripting design
- CY48:
  - Status
  - Pending branches
  - Compilation in CCA and TEMS
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

11:00 - 12:00  Work

12:00 - 12:30 Progreses report

12:30 - 13:30 Launch break

13:30 - ...  Work
 
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
