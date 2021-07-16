Work done:
•	XXE
o	There are dependencies present in the nodejs modules which parse XML and escape any malicious code present in it.
o	libxmljs does the work of showing vulnerability
o	Secure code for XXE
o	Secure code for Register model, use of parameters in query

•	Sensitive data exposure
o	Created; displays the error from database

Solutions - correct/secure implementations

•	SQL - changes only in the model part, use of query with parameters
o	secure_searchmodel	
o	secure_registermodel

•	XXE - use of other libraries like xml2js, will escape the xml statements sent to the        backend.

•	Broken authentication - limit the number of login attempts by recording dates in an array

•	**Access Control - we can encrypt the cookie and only decrypt or change its value in backend, this way the attacker would not be able to change its value to access the admin account 

•	Sensitive information disclosure - the error information that was passed to the front end previously is changed to a very general message to not give the user any hints about backend or database


•	Command execution - we can check the input for presence of some special characters that could lead to different command execution 

•	File upload - we can write codes for checking of file name in the backend before upload function (index.js)




There are two sections in the project. The first section contains the different types of vulnerabilities, along with how to prevent them, and the second section contains a simple shopping website, on which the user could practise finding web application vulnerabilities.

Technique -
	I have used Node.js for the whole backend part, along with MySQL for the database. The whole thing is setup in Linux environment though it can be setup in Windows also. 
	For the market site, simple home page is made which has login, register options. Separate tables are made in the database for the market site. On registering, user details are stored in a table.
	The login page, uses the same database for validating the user and allows access to the dashboard, the main page for site funcionality.



	--------------EXPLOITS----------------

•	XSS(Reflected): A name is asked to enter into the input field, and the information regarding the name will be displayed back. Along with name, if the user also enters some script like <script>alert(10)</script>, then when displaying the information back, the script is also put inside the front-end tag, which then executes the malicious code.

•	XSS(Stored): User is asked to enter comment in the input field, and the comment is stored back in the table associated with the user id. The comments associated with the users is displayed on the website. If the comment contains a script that sends out sensitive information from the server to the front-end, it will give out the information every time is site is loaded. We can again put any simple javascript code into the comment and it will show everytime on reloading the page.


•	XSS(DOM): User is asked to enter data into the input field, and the data is operated upon in the browser itself, that is frontend and the data is displayed accordingly. No request response data is transferred. If we see that the entered data is reflected back into the page, we can analyze the source code and enter a script accordingly to execute any specific action using javascript.

•	SQL injection: The user is asked to enter the name, and if the name is found in database, the user information will be displayed. The name input is attached to the select query in the backend. If the user enters something like 
			abcd' or '1'='1'# 
		Then the whole query will look like 
			select * from <table name> where name='abcd' or '1'='1'#';
	So # indicates comment, meaning after the symbol, everything is represented as comment. In this query, the where clause condition is always true, so all the data from table is fetched.

•	Broken authentication: The user has to login without knowing the login username and password. Brute force method can be applied by using some of the very basic words as password and username list. Burp suite is the best option for doing this kind of thing. We then analyze the response for various requests sent. The one with different response length is our answer.

•	Broken access control: On sending the login request, we can check the headers and body sent in the request, using burp suite. In the request, there is a cookie named 'isadmin' whose value is set to 'false'. A user can easily modify its value to 'true', and now instead of getting redirected to a user's account, the user can get redirected to the admin account.


•	Sensitive data exposure: User is asked to enter the user id, and get the information based 	on that. If in place of user id, that is an integer, user enters name, that is a string, the error message occured in the backend, gets shown in frontend, which exposes information about the database and query structure to the user.

•	XXE: User has to enter the phone no, which gets operated on backend. This data is sent to the backend as XML data, which is then parsed. If the user enters some malicious XML code to open and get any file with the data, that gets parsed too. Eventually user can get the contents of passwd file, and the contents get displayed on frontend.
		<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]> 
		The code may be something like this.
•	File upload: User is to upload an image file, but due to no check user can input malicious file of reverse shell and execute it on the server.

•	Command execution: User is to input an IP address and get the ping response for it. It works by executing ping command on that IP address in the server shell. If the user enters some command appended with the IP address, then that is also executed and the result is shown in the frontend.




--------------SECURE CODE------------------


•	XSS(Reflected): Input sanitiztion is needed

•	XSS(Stored): Input sanitiztion is needed

•	XSS(DOM): Input sanitiztion is needed

•	SQL injection: Input sanitiztion is needed. We can use stored procedure for executing query, that will not allow malformed data to enter the query


•	File upload: The extension of the file that is going to be uploaded, should be checked and also the type of file should be checked, by maybe converting to hex code

•	Broken authentication: Proper passwords should be used. General passwords should be rejected while registering the user. Also, to prevent brute force attack, there should be code in place that prevents multiple login attempt in same session

•	Broken access control: The cookie value should be encrypted while sending it, so that the user cannot manipulate the cookie value to get access to any other account. Also the redirection of a page should not be solely dependent on the cookie value

•	XXE(XML external entity): The node module that is used for parsing the XML data sent in the request body is responsible for it. Either we can manually check the data according to pattern and for presence of any different word
o	libxmljs will parse the data as it is, show the vulnerability, while the other modules like xml-stream, xmldoc will prevent this vulnerability

•	Sensitive data exposure: Proper checks should be present in the controller files for all the vulnerabilities, that in case of any error, that doesn't get directly displayed on frontend, rather a very generic crafted message should be sent in response

•	Command execution: input check should be present in the frontend and backend, so that no append character is present in the input. IP address must only be present, so data should be validated against a pattern that only contains periods and numbers

