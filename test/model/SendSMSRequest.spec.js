/**
 * Telstra SMS Messaging API
 * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator. It also allows your application to track the delivery status of both sent and received SMS messages. 
 *
 * OpenAPI spec version: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Messaging);
  }
}(this, function(expect, Messaging) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Messaging.SendSMSRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SendSMSRequest', function() {
    it('should create an instance of SendSMSRequest', function() {
      // uncomment below and update the code to test SendSMSRequest
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be.a(Messaging.SendSMSRequest);
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property validity (base name: "validity")', function() {
      // uncomment below and update the code to test the property validity
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheduleDelivery (base name: "scheduleDelivery")', function() {
      // uncomment below and update the code to test the property scheduleDelivery
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property notifyURL (base name: "notifyURL")', function() {
      // uncomment below and update the code to test the property notifyURL
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property replyRequest (base name: "replyRequest")', function() {
      // uncomment below and update the code to test the property replyRequest
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new Messaging.SendSMSRequest();
      //expect(instance).to.be();
    });

  });

}));
