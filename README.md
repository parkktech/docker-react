## Dockerised React App

This docker image provides a development environment with [Create React App](https://github.com/facebookincubator/create-react-app). Optionally Redux can also be utilised for larger projects

### Using Docker-compose
There is a docke-compose.yml included in this directory.  This is porbably the quickest and easiest way to get up and running.
* Copy to your local
* Update your local path
* Update the Variables according to your needs. 
* Run docker-compose up 

### Configuration

* Control the name of the app directory with the `APPNAME` environment variable
* The default app name is `myapp`
* Generated app is stored in `/app/$APPNAME` inside the container
* The app runs on port 3000
* Application source code can be exposed by mounting the `/app` volume
* Redux can be optionally installed by setting the `REDUX` environment variable to `true`, Redux **is not included by default**
* Project Bases - Optional project bases can be included for quick setup. Each project base includes React Router and a few adjusted templates (Index + 404):
	* Material UI - Set `MATERIAL_UI` to `true`
	* More TBA soon!
### Example 
$(pwd) = Your Local directory you wish for the app to be mapped to. 
#### React
* `docker run -ti -p 3000:3000 -e APPNAME=react-app -v $(pwd):/app jadog/docker-react`
#### React + Redux
* `docker run -ti -p 3000:3000 -e APPNAME=react-app -e REDUX=true -v $(pwd):/app jadog/docker-react`
#### React + Material UI
* `docker run -ti -p 3000:3000 -e APPNAME=react-app -e MATERIAL_UI=true -v $(pwd):/app jadog/docker-react`
