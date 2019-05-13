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
import '@cute/cute-helpers/loaders/lazy-placeholder';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView2 extends PolymerElement {
  static get properties(){
    return {
      post : {type: Object}

    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .load{
          height:300px;
          padding:0
        }
      </style>
      <iron-ajax
      auto
      url="https://jsonplaceholder.typicode.com/posts"
      params=''
      handle-as="json"
      on-response="onResponse"
      debounce-duration="300"
      loading="{{loading}}"
      last-response="{{ajaxResponse}}">
  </iron-ajax>
  <template is="dom-if" if="{{loading}}">
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  <div class="card load"><lazy-placeholder></lazy-placeholder></div>
  </template>
  <template is="dom-repeat" items="{{post}}">
   
  <div class="card">
  <div class="circle">[[item.id]]</div>
  <h1>[[item.title]]</h1>
  <p>[[item.body]]</p>
  <p>JsonPlaceholder Production</p>
</div>
  </template>
    `;
  }
  onResponse(response){
    this.post = response.detail.__data.response
  }
}

window.customElements.define('my-view2', MyView2);
