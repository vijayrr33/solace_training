/** ******************************************************************************************* **/
//
// Solace Messaging API for JavaScript
// Copyright 2010-2023 Solace Corporation. All rights reserved.
//
// This software is proprietary software of Solace Corporation and intended only
// for use in conjunction with one or more Solace Message Routers.  By using this
// software, you are agreeing to the license terms and conditions located at
// https://solace.com/license-software.
//
/** ******************************************************************************************* **/
/* global node:true */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
function SolclientLoader() {
  const apis = {
    debug:      'solclientjs-debug',
    full:       'solclientjs-full',
    production: 'solclientjs',
  };
  const loaded = {};
  const get = type => loaded[type] || (loaded[type] = require(`./${apis[type]}.js`));
  const defaultLib = get('production');
  Object.defineProperties(defaultLib, {
    debug:      { get: () => get('debug') },
    full:       { get: () => get('full') },
    release:    { get: () => defaultLib },
    production: { get: () => defaultLib },
  });
  return defaultLib;
}

module.exports = new SolclientLoader();
