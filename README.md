# ClientsApp

This is simple application where user can get, add and edit clients.

To run this application:
Install Docker, navigate to main folder and run this in command line:
$ docker build -t contacts backend && docker run —rm -p 5000:5000 contacts 
I added one line to python file, which add CORS to server. That's why you need to use my docker configuration.

If the server successfully listens for requests:

2) There are three ways to start application:

1) Development server.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
2) Tests.
Run `ng test` to execute the unit tests.
3) Build.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Important Note
On backend there is no endpoint for editing contacts, but on the design it's described. That's why i have done edit locally, without saving.
