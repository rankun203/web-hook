# web-hook
Server is now waiting for Command!

## 3 steps to make a callback on your server!

- Clone this project:

  ```
  git clone git@github.com:rankun203/web-hook.git
  cd web-hook
  ```
  
- Edit commands.js

  ```
  subl ./commands.js
  ```
  
- Run the Server!
  
  ```
  ./command-server.js
  ```

Now navigate to http://localhost:1394/c/helloWorld 
to let your server execute a `echo "Hello World"` command :)

## FYI

If you don't know what's the data the caller will really post,
please tell the caller call to `http://localhost:1394/o`,

Then you got the body in the console.