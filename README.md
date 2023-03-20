# 🚀 Welcome to SportsTower!

Project is WIP.

To run the project:

Make sure you have webpack globally installed: `npm i -g webpack webpack-cli`
Make sure you also have NVM installed: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash` or `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
Make sure you have nodemon installed: `npm i -g nodemon`

Install node modules: `npm i`


To ensure you're using the correct node version, first run `nvm use` on the project top level.

If you want to change your default to it, you can use: `nvm alias default 6.11.5`

Open a terminal and run `nodemon config.js`
Open another tab and run `webpack --watch`

Keep these two running, nodemon will restart the server on any code changes, and webpack will rebundle bundle.js on code changes. TODO: Find solution where both run at once


Go to localhost:3000