# Solace JavaScript Messaging API
*Copyright 2011-2023 Solace Corporation. All rights reserved.*

This software is proprietary software of Solace Corporation and intended only
for use in conjunction with one or more Solace Message Routers.  By using this
software, you are agreeing to the license terms and conditions located at
https://solace.com/license-software.


## INTRODUCTION
This is the Solace JavaScript Messaging API. This API
allows JavaScript browser and mobile applications to send and receive
messages to and from a Solace Messaging Router.

## PACKAGING
The API is distributed either as the solclientjs package in the <a href="https://npmjs.org" target="_blank">npm</a>
registry or as a downloadable tar.gz package named `npm-solclientjs-<version>.tar.gz`.
The package includes:
* `/lib-browser` JavaScript module files

## DOCUMENTATION
The docs for the `solclientjs` API is **no longer** distributed within this package but can be found online here:
* <a href="https://docs.solace.com/API-Developer-Online-Ref-Documentation/js/index.html" target="_blank">API online docs</a>

You can find additional resources about Solace development and ask questions within the Solace developer community here: <a href="https://solace.community/" target="_blank">Solace Developer Community</a>

## INSTALLATION
To install Solclientjs, with Node.js installed and `npm` present in your path:

### From the NPM registry
1. Change directory to where solclientjs will be installed
2. If package.json does not exist in the directory, create one with:
   `> npm init`
3. Install solclientjs:
   `> npm install solclientjs`

### From the downloadable package
1. Change directory to where solclientjs will be installed
2. If package.json does not exist in the directory, create one with:
   `> npm init`
3. Install solclientjs:
   `> npm install <path_to_package>/npm-solclientjs-<version>.tar.gz`

## SAMPLES
Tutorials and samples with detailed instructions how to run them, are
available on GitHub from the following location:
<a href="https://github.com/SolaceSamples/solace-samples-javascript" target="_blank">Solace Samples: JavaScript</a>

## Supported JavaScript Module Systems
The API is distributed in Universal Module Definition (UMD) style which supports the following module definition styles:
* CommonJS
* Asynchronous Module Definition (AMD)
* Old style "global" variable definition


## API VARIATIONS
There are different variations of the API that can be used. The differences
between them include available logging verbosity and whether or not the API
has been minified.

When the available logging verbosity has been reduced, this is done to
improve the performance the application but this reduces the ability to
debug problems.

Minified libraries are both smaller and optimized for performance. However,
this comes at the expense of making debugging more difficult.

The following table summarizes the available API variations:

    | Variation  | Minified | Available Logs           |
    -------------|----------|---------------------------
    | Debug      | No       | All                      |
    | Full       | No       | INFO, WARN, ERROR, FATAL |
    | Production | Yes      | INFO, WARN, ERROR, FATAL |

If a bundling tool such as Webpack is used to bundle the API dependency with ES6 module loader,
use one of the following statements:

       import solace from 'solclientjs';                             // loads production
    OR import solace from 'solclientjs/lib-browser/solclient';       // loads production
    OR import solace from 'solclientjs/lib-browser/solclient-full';  // loads full
    OR import solace from 'solclientjs/lib-browser/solclient-debug'; // loads debug

If a bundling tool such as Browserify is used to bundle the API dependency with CommonJS module loader,
use one of the following statements:

       var solace = require('solclientjs');                             // loads production
    OR var solace = require('solclientjs/lib-browser/solclient');       // loads production
    OR var solace = require('solclientjs/lib-browser/solclient-full');  // loads full
    OR var solace = require('solclientjs/lib-browser/solclient-debug'); // loads debug

If the API is directly included in the HTML file, to load an API variation, use one of the following statements:

    <head>
        <script src="solclient.js"></script>       <!-- production -->
    OR  <script src="solclient-full.js"></script>  <!-- full       -->
    OR  <script src="solclient-debug.js"></script> <!-- debug      -->
    </head>


## API PROFILES
The API has the concept of an initialization profile. The intent of the
profile is to allow old applications to remain compatible with old versions
of the API, while allowing new users to take advantage of new recommended
defaults.

When writing a new application, it is recommended to choose the newest
factory profile. For example, if `version10` is the newest available factory
profile, this snippet demonstrates how to initialize the API:

    var factoryProps = new solace.SolclientFactoryProperties();
    factoryProps.profile = solace.SolclientFactoryProfiles.version10;
    solace.SolclientFactory.init(factoryProps);

For backwards compatibility with applications written before the concept of
API profiles were introduced, the default profile is `version7`.

__IMPORTANT__: `solace.SolclientFactory.init` should be called before any other API
function is invoked.

## LOGGING
The default log level of the API is `INFO`.  If you want to change the log
level, use the `solace.SolclientFactory#setLogLevel` method after calling
`solace.SolclientFactory#init`.

The following snippet shows how to load the debug API, select the `version10`
API profile, and set the log level to `TRACE`, the most verbose log level.

If a bundling tool such as Webpack or Browserify is used to bundle the API dependency:

    import solace from 'solclientjs/lib-browser/solclient-debug';
    OR
    var solace = require('solclientjs/lib-browser/solclient-debug');

    var properties = new solace.SolclientFactoryProperties();
    properties.profile = solace.SolclientFactoryProfiles.version10;
    solace.SolclientFactory.init(properties);
    solace.SolclientFactory.setLogLevel(solace.LogLevel.TRACE);


If the API is directly included in HTML file:

    <head>
        <script src="solclient-debug.js"></script>
        <script type="text/javascript">
            var properties = new solace.SolclientFactoryProperties();
            properties.profile = solace.SolclientFactoryProfiles.version10;
            solace.SolclientFactory.init(properties);
            solace.SolclientFactory.setLogLevel(solace.LogLevel.TRACE);
        </script>
    </head>
