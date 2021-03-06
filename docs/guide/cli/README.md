<p align="center"> <img src="https://raw.githubusercontent.com/fluidtrends/chunky/master/logo.gif" width="256px"> </p>
<h1 align="center"> Chunky </h1>

<h3 align="center"> The Happy Code Monkey That Helps You Write Swear-Free Code. </h3>

<p align="center"> Chunky is a Full Stack Low-Code Product Development Platform for
novice and seasoned developers who want to build, launch and grow End-To-End Digital Products without swearing at their code. </p>

<p align="center">
<a href="../start/README.md"> Quick Start </a> |
<a href="../features/README.md"> Feature Tour </a> |
<a href="../examples/README.md"> Real Examples </a> |
<strong> Developer Guide </strong> |
<a href="../contrib/README.md"> Get Involved </a>
</p>

<hr/>

<p align="center">
<a href="https://circleci.com/gh/fluidtrends/chunky"><img src="https://circleci.com/gh/fluidtrends/chunky.svg?style=svg"/></a>
<a href="https://codeclimate.com/github/fluidtrends/chunky/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f6621e761f82f6c84f40/test_coverage" /></a>
<a href="https://codeclimate.com/github/fluidtrends/chunky/maintainability"><img src="https://api.codeclimate.com/v1/badges/f6621e761f82f6c84f40/maintainability"/></a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/chunky-cli">
<img src="https://img.shields.io/npm/v/chunky-cli.svg?color=green&label=CLI&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-chunky">
<img src="https://img.shields.io/npm/v/react-chunky.svg?color=green&label=universal&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-dom-chunky">
<img src="https://img.shields.io/npm/v/react-dom-chunky.svg?color=green&label=web&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-cloud-chunky">
<img src="https://img.shields.io/npm/v/react-cloud-chunky.svg?color=green&label=cloud&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-native-chunky">
<img src="https://img.shields.io/npm/v/react-native-chunky.svg?color=blue&label=mobile&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-electron-chunky">
<img src="https://img.shields.io/npm/v/react-electron-chunky.svg?color=blue&label=desktop&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/react-blockchain-chunky">
<img src="https://img.shields.io/npm/v/react-blockchain-chunky.svg?color=blue&label=blockchain&style=flat-square"/><a/>
</p>

---

# 2. CLI (Developer Guide)

Chunky comes with a beautiful command line interface, packed with goodies that will help you giddy every time you fire up your terminal.

Type ```chunky``` at your favorite terminal to see *very* detailed usage instructions:

```console
Usage:
 chunky <command> [subcommand] [options]

Commands:
  init [name]               Create a new product
  install                   Install all dependencies
  update                    Update chunky to the latest version
  start [platforms..]       Start the packagers for one or more platforms
  run [platforms..]         Run the product on one or more platforms
  report [reports..]        Run cloud reports
  transform [transforms..]  Apply cloud transforms
  reset [layers..]          Reset one or more layers of the cloud
  add [artifacts..]         Add one or more local artifact
  deploy [artifacts..]      Deploy one or more product artifacts to the cloud
  package [platforms..]     Package the product for one or more platforms
  carmel [actions..]        Interact with the Carmel Platform
```

To see even more detailed help type ```chunky help```

### The ```init``` command

Use this command to create a brand new Chunky Product. Start with a fresh directory. This command will generate all files from stratch and place them in your current working directory.

```console
  init [name]

   Specify a custom name or go with the default generated name

  --template        The template to create the artifact from  [string] [default: "default"]
  --bundle          The product bundle where the template resides  [string] [default: "fluidtrends/chunky-bananas"]
  --------------
  --➔ Example 1.1:  chunky init MyProduct
                     ↳ Create a new product using the default template
  --➔ Example 1.2:  chunky init MyProduct --template some-template
                     ↳ Create a new product using the specified template from the default bundle
  --➔ Example 1.3:  chunky init MyProduct --template some-template --bundle some-bundle
                     ↳ Create a new product using the specified template from the specified bundle
```

When running ```chunky init``` here's what you would see:

![](http://files.carmel.io/media/init.gif)

That's all there is to it. Have a look at the file structure created and check out the [Structure Section](../structure) of the Developer Guide for a detailed walkthrough of all the files created.

### The ```start``` command

Once you have a real Chunky Product created, you're pretty much ready to see it in action. First, because every Chunky Product is a Node.js module, you have to install its dependencies. That's really easy - just run the ```npm i``` command. That's all.

With your dependencies install you can then start your product in development mode to see it in action. Here's the detailed usage instructions:

```console
start [platforms..]

   The supported platforms are web and mobile

  --mobile-packager-port   Use a custom mobile packager port  [string] [default: 8081]
  --web-packager-port      Use a custom web packager port  [string] [default: 8082]
  --desktop-packager-port  Use a custom desktop packager port  [string] [default: 8083]
  --------------
  --➔ Example 4.1:         chunky start
                            ↳ Start all the packagers, using the default ports
  --➔ Example 4.2:         chunky start web mobile
                            ↳ Start the web and mobile packagers, using the default ports
  --➔ Example 4.3:         chunky start mobile
                            ↳ Start the mobile packager only, using the default mobile port
  --➔ Example 4.4:         chunky start web
                            ↳ Start the web packager only, using the default web port
  --➔ Example 4.5:         chunky start --mobile-port 9200
                            ↳ Start all the packagers, using the default web port and a custom mobile port
  --➔ Example 4.6:         chunky start mobile --mobile-port 9200
                            ↳ Start the mobile packager only, using a custom mobile port
```

To see your web app in action for examplee, type ```chunky start web```. Here's how that would look in action:

![](http://files.carmel.io/media/start-web-small.gif)

Pretty cool, eh? Why don't you give it a try yourself and see what you think.

---

<p align="center">
<img src="https://raw.githubusercontent.com/fluidtrends/chunky/master/logo.gif" width="64px"/>
<br/>
Keep going to the <a href="../bundles"/>Bundles Guide</a> or <a href="../structure"/>go back</a>.
</p>
