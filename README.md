# nginx-exercise

This exercise runs a Command Line Interface (CLI) that takes in a file of server access logs and converts them to a json file (access.json). It also allows the user to query that json file using two additional subcommands.

### To Get Started

- Make sure you have Node.js installed on your computer. If you do not have Node, check out https://nodejs.org/en/download/ to get started.

- Clone this repo locally on your computer and cd into this directory.

- Once in the repo's directory, run the following command in your terminal: chmod +x ./nginxcli

- Then, use the following commands to use the CLI:

    - To convert the access.log file to a json file: 
        **./nginxcli convert access.log access.json**
    - To query the most used userAgent for a given day: 
        **./nginxcli ua access.json 08/Nov/2002** (other dates can be used following the same format)
    - To query the most used requestMethod and requestPath for a given day: 
        **./nginxcli hits access.json 08/Nov/2020** (other dates can be used following the same format)
