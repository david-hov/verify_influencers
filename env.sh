#!/bin/sh
echo "window.env = {" > ./env-config.js
echo "'VITE_OPEN_AI':'$VITE_OPEN_AI'," >> ./env-config.js
echo "'VITE_OPEN_AI_MODEL':'$VITE_OPEN_AI_MODEL'" >> ./env-config.js
echo "}" >> ./env-config.js
