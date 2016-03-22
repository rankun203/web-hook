# web-hook
Server is now waiting for Command!

## 3 steps to make a callback on your server!

- Clone this project:

  ```
  git clone git@github.com:rankun203/web-hook.git
  cd web-hook && npm install
  ```
  
- Prepare and edit secretCommands.js

  ```
  cp secretCommands.js.example secretCommands.js
  vi ./secretCommands.js
  ```
  
- Run the Server!
  
  ```
  ./command-server.js
  ```

Now navigate to http://localhost:1394/c/helloWorld 
to let your server execute a `echo "Hello World"` command :)

### Command Example

```
{
  id: 'updateSAWeb',
  desc: 'Update Simple Accounting Frontend Website',
  test: 'refs/heads/dev',
  command: 'cd ~/website && git pull'
}
```

### Example

**Commander:**

I just want to update my website automatically when I push dev branch to github.

- Edit commands.js
- Add a configuration as shown in `Command Example`, 
  let's add a command identified by `updateByDev`
  
  ```
  {
    id: 'updateByDev',
    desc: 'Update My Beautiful Website',
    test: 'refs/heads/dev',
    command: 'cd ~/website && git pull'
  }
  ```

- Run command-server.js
- Goto Github, add a hook, point to `http://server.com:1394/c/updateByDev`
- Push to your `dev` branch in that github repo
- See the Changes!

**Speaker**

Point to `http://server.com:1394/o` instead.

Example output: 

```
[2016-03-23 00:12:05.429] [DEBUG] command-server - /o?value=world  
[2016-03-23 00:12:05.430] [DEBUG] command-server - { msg: 'hello' }
```

## FYI

#### Caller post body

If you don't know what's the data the caller will really post,
please tell the caller call to `http://localhost:1394/o`,

Then you got the body in the console.

> If you mean by Github, take a look at `github-output.txt`

#### Test pattern

The `test` pattern to test the request body,
is used in commands.js will be initialized to a RegExp object by

```
var testReg = new RegExp(command.test);
```

So be careful with the syntax, basically you need one more `\` in your regex test pattern.

`\d` -> `\\d`

Enjoy your developing time :)
