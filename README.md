# Top Earner Transactions
This project executes the task of getting a list of transactions, finding the top earner transactions from last year, and sending the response with a provided ID and the transactions list.

To execute this project, first verify if you have a node js environment installed. Go to the /api-transactions folder and run:
```
npm install
```
After the dependencies are installed run
```
node app.js
```
This will run the server. This was created since CORS policies protected the API provided and did not allow calls directly from the client on the browser. 
This server only redirects the APIs for the provided ones.

After the server is running go to the /top-earner-transactions folder and run
```
npm install
```
to install the dependencies. After that run
```
npm run dev
```
to start the application in a local environment. 
Once the server is running, access the browser on `http://localhost:3001/`

**After opening the page, the data will be fetched automatically, presenting the top earner name and the list of alpha transactions.**
![image](https://github.com/user-attachments/assets/cac71262-cd33-41e3-9d4f-77ec4e9ae47a)

**Click on the button to submit the information, it will ask you to confirm**
![image](https://github.com/user-attachments/assets/d72750a1-eb36-473c-b86d-5c44330fee29)

**After confirming it will present a success message**
![image](https://github.com/user-attachments/assets/f3ce6f5a-b60c-4f08-a6cc-dd973b1f9cb2)

**If any error happens the error message will be presented**
![image](https://github.com/user-attachments/assets/653f9999-cdd9-421e-a75b-806f5489efe4)


Reload the page to fetch the API again with a different ID


