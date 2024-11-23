
# DOCX/DOC to PDF

Webapp to convert only DOCX/DOC files to pdf form


## Demo
Made little changes in UI after submission


https://github.com/user-attachments/assets/75ba11a7-b335-4700-92c6-c8587444d00f



## Docker Images

https://hub.docker.com/u/samarthpaliwal



## Installation

Just Clone it into your local system and install the desired dependency using node (or can use docker images)

I tried deploying it on versel made its build and then hosting on versel but encountered a white screen error which had a fixture of changing the homepage link in package.json file which didnt worked for me, So to run the webapp using npm commands are given below

NPM method
```bash
git clone https://github.com/Samarth-3/Rapidfort_Task_Samarth.git
cd Rapidfort_Task_Samarth
npm install
npm start
```
Docker Method

```bash
git clone https://github.com/Samarth-3/Rapidfort_Task_Samarth.git
cd Rapidfort_Task_Samarth
docker --version
docker compose --version (older version of docker uses docker-compose)
docker compose up --build
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


Node.js and Docker installed on your system.




