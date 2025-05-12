# JEAA WEBSITE

This repository is for the development, handling and further maintenance of the JEAA website.
The code is written in html, css and javascript.

## Structure
* 'images' folder: all the images needed for the website go here 
    (I also subdivided the folder into subfolders to make it clearer eand easier to find the images. Please do the same!)
* 'reusableComponents' folder: all componenets that will be used more than once in the website go here (e.g. header, footer, jeaa motto box...)
* script.js: js file needed for the language switching throughout the whole website and also the dynamic loading of reusable components
* 'style' folder: all .css files go here
* lang.json: here we put the texts of the website in the three languages (IT, DE, EN)
* index.html: this is the home page of the website
All other .html files handle the different pages that can be visualized in the website

## Team cooperation
The workflow will be handled via Git. Confident that everyone is familiar and still remembers how to use it, but if that is not the case,
here is a helpful link with the most used git commands that may come in handy: https://education.github.com/git-cheat-sheet-education.pdf 

When committing your work, please always insert a commit message so that we have a work backlog for future record!

Whether you are working on VScode or IntelliJ or other IDEs, it will be possible to add, commit and push your work from you branch to the main 
either via IDEs extensions or via terminal. Choose whatever you like and whatever you are more confortable with.

In the next section you will find the basic workflow on how to push your work via terminal.

## Git commands to push your work
When you change some files and you would like to make them visible to everyone, follow these commands to insert via terminal:

* ``` git branch ```: command to see the current branch you are in (always make sure to be in you own branch)
* ``` git status ```: command to check which files have been modified
* ``` git add \< nameOfFile \> ```: command to add a specific file to the staging and committing process
* ``` git add . ```: command to commit all modified files
* ``` git commit -m "\< yourMessageGoesHere \>" ```: command to commit and leave a commit message
* ``` git push origin \< yourBranchName \> ```: command to push your work in your branch
* ``` git checkout main ```: command to switch to the _main_ branch
* ``` git pull origin \< yourBranchName \> ```: command to take the changes just pushed in your branch
* ``` git push origin main ```: command to finally push and record your changes in the _main_ branch

When you are done with the pushing process, go back to you branch!

## Project instantiation
The repository of the website can initialized by following these simple steps:
1. Copy the repository url (you can find it by clicking on the top right green botton of the repository)
2. Clone the repository in your IDE either 
    - via terminal by running the command: ``` git clone \< url repo \> ```
    - via IDE built-in command: 'open project from version control'

## To keep in mind
* Before starting working on the project, please create your own branch in order not to modify directly the main branch
* Always give clear and understandable names to files, variables and html classes or ids.
* Always comment the code so that other members can understand your work easily 




