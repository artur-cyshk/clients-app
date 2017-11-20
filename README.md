## ClientsApp

*This is a simple application where user can get, add and edit clients.*

To run this application you need to do the following:

1. Run __back-end__:

   - Install Docker, navigate to main folder and run this command in command line:

     $ docker build -t contacts backend && docker run —rm -p 5000:5000 contacts 

     *I added one line to the python file that adds CORS to server. That's why you should use my docker configuration.*

If the server successfully listens for requests, than:

2. Run the __front-end__:
   - __Development server.__
   
      Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
   - __Build.__
   
      Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

>Important Note:
__There is no endpoint for editing contacts on back-end, but according to the design it should be implemented. That's why editing is implemented locally on front-end, without sending request to API.__
