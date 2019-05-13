/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/iron-icons/iron-icons';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-selector/iron-selector.js';
import '@cute/cute-toolbar/cute-toolbar';
import '@polymer/paper-tabs/paper-tabs';
import '@polymer/neon-animation/neon-animation';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/app-layout/app-layout-behavior/app-layout-behavior'
import '@polymer/paper-button/paper-button'
import './my-icons.js';
import '@cute/cute-helpers/loaders/loader';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html` <style>
    :host {
      display: block;
      --cute-toolbar-background: #FFF;
      --paper-tabs-selection-bar-color: var(--paper-light-blue-100);
    }
    .red,home-app {
      width:100%;
      height:300px;
    }
    h3{
      font-size:18px;
      margin-left:20px
    }
    app-drawer{
      z-index:2000
    }
    #fixed {
      height:40px;
      display:block;
    }
    .tool{
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
      justify-content:flex-start;
      align-items:center;
    }
    .tool > img {
      object-fit:cover;
      height: 30px;
      margin-left:20px
    }
    .tool > div {
      text-align:right;
      -webkit-flex: 1 auto;
      flex: 1 auto;
      padding:0 5px;
    }
    #banner {
      width:100%;
      box-shadow:0 0 5px #222;
    }
    .hidden{
      opacity:0;
    }
    cute-toolbar{
      --cute-toolbar-tall : 50 px;
    }
    iron-selector > *{
      display:block;
    }
    app-drawer > div {
      background-image: url('src/image/bg.jpg');
      width:100%;
      height:200px;
      display:block;
      background-size:cover;
      box-shadow:0 0 5px #222;
    }
    app-drawer > img {
      width:40%;
      margin:-25% 30% 25px;
      object-fit:cover;

    }
    .footer{
      position: relative;
      padding:30px;
      text-align:center;
      box-shadow:0 0 5px #222;
      background-color:#888;
    }
    @media(max-width:600px){
      cute-toolbar{
        --cute-toolbar-tall : 50 px;
      }
    .tool > h3 {
      display:none
    }
    }
  </style>  
  <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
  </app-location>

  <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
  </app-route>



  <cute-toolbar fixed animated shadow>
  <div class="tool">
  <paper-icon-button icon="menu" on-click="tog" id="menu"></paper-icon-button>
  <img src="src/image/manifest/icon-192x192.png" />
  <h3>Polymer Project</h3>   
    <div>
    <paper-button>Community</paper-button>
    <paper-button>login</paper-button>
    </div> 
  </div>
  </cute-toolbar>
  <div id="fixed"></div>
  <img src="src/image/porque-aprender-javascript.jpg" id="banner"/>

  <neon-animated-pages class="flex" 
  selected='{{page}}'
  attr-for-selected='name'
  entry-animation='slide-from-left-animation'
  exit-animation='slide-right-animation'>
    
  <my-view1 name="view1"><cute-loader></cute-loader></my-view1>
  <my-view2 name="view2"><cute-loader></cute-loader></my-view2>
  <my-view3 name="view3"><cute-loader></cute-loader></my-view3>
  <my-view404 name="view404"><cute-loader></cute-loader></my-view404>

  </neon-animated-pages>


<app-drawer id="drawer" swipe-open>
<div></div>
<img src="src/image/prf.png" />
<iron-selector selected="{{routeData.page}}" attr-for-selected="href">
<paper-button href="view1">Home</paper-button>
<paper-button href="view2">Blog</paper-button>
<paper-button href="view3">Get Started</paper-button>
<paper-button href="view404">About</paper-button>
</iron-selector>
</app-drawer>
    `;
  }

  tog(){
    this.$.drawer.toggle()
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
     
    this.$.drawer.close();
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
