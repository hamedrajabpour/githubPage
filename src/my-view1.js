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
import './shared-styles.js';
import '@cute/cute-carousel/cute-carousel';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .card {
           white-space:normal; 
           display:inline-block
          }

          .pra {
            padding:40px;
            display:block;
          }
        @media(min-width:1000px){
          .card { 
            width: 28%;
          }
        }
      </style>
        <cute-carousel fade="rgb(245, 245, 245)" buttons>

        
      <div class="card">
      <h1>Paper Components</h1>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
    </div>
    
    <div class="card">
      <h1>Iron Components</h1>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
    </div>
    
    <div class="card">
      <h1>Vaadin Components</h1>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
    </div>
    
    <div class="card">
    <h1>Paper Components</h1>
    <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
    <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
  </div>
  
  <div class="card">
    <h1>Paper Components</h1>
    <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
    <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
  </div>
  
  <div class="card">
    <h1>Paper Components</h1>
    <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
    <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
  </div>


      </cute-carousel>


      <p class="pra">
      <h3>Why Polymer?</h3>
      Polymer gives us the ability to create our own custom elements from scratch and even reuse other elements to extend our custom ones. This is done by first creating a template of the custom element. For all intents, this template is a combination of HTML, CSS and JavaScript and includes the functionality that will be available when you use the element.
<br />
Polymer provides google material design for the UI so this can be used in building of hybrid mobile application. Through which the UI look and feel of the hybrid app will be somewhat similar to the new Android L interface (Android L and Polymer were designed using same UX principles of Material Interface).
      </p>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
