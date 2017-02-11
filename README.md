# Node.js Microservices with Seneca and Docker

More detailed explanation can be found in this blog post: [http://fullstackdeveloper.info/node-js-microservices-with-seneca-and-docker/](http://fullstackdeveloper.info/node-js-microservices-with-seneca-and-docker/)

### Project structure

Project includes two Seneca services and one Express web server. 
They are all running inside their own Docker containers.
Requests to web server communicates with other two microservices.

### To test it
After cloning the project and running Docker Engine, just run the command below:
 ```
$ docker-compose up
 ```

When containers start to run, you can send requests to web server:
 ```
$ curl "http://localhost:3000/?name=Alex&number1=7&number2=8"
 ```
Web server will respond with greeting and sum of numbers:
 ```
Hello Alex, sum of numbers is 15
 ```
 
