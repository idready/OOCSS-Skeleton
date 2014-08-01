
If this is the first time you hear about #GRUNT make sure you read an introduction here: http://gruntjs.com/

Here a short resume; Grunt is javascript task runner ( a NodeJs module ); NodeJs use npm to handle its module so before you try to install
#GRUNT you have to install NodeJS first.

Here is the official website: http://nodejs.org/
Grab the source there and make a manuel install (safer as much i know) : https://github.com/joyent/node/wiki/installation

Here is the NodeJs install procedure: (Excerpt from @joyent github wiki)

1. Reach the directory where the downloaded source of NodeJS is
2. tar -zxf node-v0.6.18.tar.gz #Download this from nodejs.org
3. cd cd node-v0.6.18 #to the extracted folder
4. ./configure && make && sudo make install
5. Cross fingers and wait
6. Type the command node -v to check your NodeJS version and make sure everything is fine.

NOTE: Depending on your OS you can through some trouble, if so check the link above (joyent's wiki link)

Now the NodeJs is installed you can start a project:

1. Type npm init in your project directory (where you want to start, no matter) and fill all the fields.
2. Your file should name package.js and contains all the project's description (editable for later).


Now you can install #GRUNT (tip: type npm -v to make sure you are good to go)

NOTE: add 'sudo' before you have a permission denied message. (Unix)

1. npm install -g grunt-cli (install grunt CLI)
2. npm install grunt --save-dev (install grunt for your project)
3. now you can install grunt tasks (a list above and more if they suit your project)

NOTE: make sure your #GRUNT version is supported for each task before you install them.

- Grunt Matchdep (globally add all existing module with a single line) sudo npm install matchdep
- Grunt Uglify (compress js files) : sudo npm install grunt-contrib-uglify --save-dev
- Grunt Concat (concat js files) : sudo npm install grunt-contrib-concat --save-dev
- Grunt Concat (optimize images, check other alternatives) : sudo npm install grunt-contrib-imagemin --save-dev
- Grunt Watch (watch and run some tasks when some files are edited) : sudo npm install grunt-contrib-watch --save-dev
- Grunt Notify (Notify error on the screen, useful) : sudo npm install grunt-notify --save-dev
- Grunt HTML Validation (locally validate all your html files) : sudo npm install grunt-notify --save-dev
- Grunt UnCSS (remove unsed css properties for a page) : sudo npm install grunt-uncss --save-dev
- Grunt SVGMin (minify svg) : sudo npm install grunt-svgmin --save-dev
- Grunt Pagespeed (use Google page speed perf tool adnd output results) : sudo npm install grunt-pagespeed --save-dev

NOTE: Refer to each task page on Github for more infos on settings.

Last but the least, the Gruntfile.js

This is grunt configurtion file and it contains its settings (of course).

You can find one in this project and edit it if you add another tasks.


Done. Now Dance.
