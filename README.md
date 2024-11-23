# DOCX/DOC to PDF

Webapp to convert only DOCX/DOC file to pdf form


## Demo

https://youtu.be/2j2gZYQgoII

## Docker Images

https://hub.docker.com/u/samarthpaliwal



## Installation

Just Clone it into your local system and install the desired dependency using node (or can use docker images)

I tried deploying it on versel made its build and then hosting on versel but encountered a white screen error which had a fixture of changing the homepage link in package.json file which didnt worked for me So to run the webapp using npm commands are given below


```bash
  cd backend
  npm start
```
    
## Tech Stack

Frontend ->
  React.js
  HTML/CSS
  Axios (for API requests)

Backend ->
  Node.js
  Express.js
 Multer (for file uploads)
  LibreOffice (for DOCX to PDF conversion)

## Prerequisites


Node.js installed on your system.

LibreOffice installed (ensure it’s in your system PATH).
