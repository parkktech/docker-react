#!/bin/bash
if [ ! -d /app/$APPNAME ]; then
  cd /app
  create-react-app $APPNAME

  if [ "$MATERIAL_UI" = true ]; then
  	echo "Installing Material UI project base..."
	cd /app/$APPNAME
	yarn add react-tap-event-plugin
  	yarn add material-ui
	yarn add react-router
	yarn add react-router-dom
  	rm /app/$APPNAME/src/App.js
  	mv /assets/material-ui/* /app/$APPNAME/src
  fi
fi

if [ "$REDUX" = true ]; then
  echo 'Installing Redux...'
  yarn add redux react-redux
  yarn add redux-devtools --save-dev
fi


cd /app/$APPNAME
yarn

yarn run start
