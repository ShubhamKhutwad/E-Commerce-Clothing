-----To Run Backend ------

1.Download the zip file from github or clone the Project 

2.Open the project in inteligi idea IDE 

3. Add Username of your postgress database(Default name Postgress)
 and add your postgress password which is set when installing the postgress SQL
 In application.properties

4.Click on M icon in the right top of Inteligi IDE , Click on dependancies 
make sure all dependancies are added as per pom.XML dependancies

5.Open the APIApplication.java file, right click and click on APIApplication.main()

6.Tomcat server started on port 8443 


-----To Run FrontEnd ------

1.Open the Frontend folder in visual studio code


2.Open the terminal (not a powershell)

3.Execute the command npm in ar npm install

4.Execute the command npm start if it does not work or throw and error then 
execute following commands

npm cache clean --force
npm rebuild
npm install

also execute 

set NODE_OPTIONS=--openssl-legacy-provider


5.Finaly re execute the npm start command.











