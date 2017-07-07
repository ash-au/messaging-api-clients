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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Messaging) {
      root.Messaging = {};
    }
    root.Messaging.OutboundPollResponse = factory(root.Messaging.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OutboundPollResponse model module.
   * @module model/OutboundPollResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OutboundPollResponse</code>.
   * @alias module:model/OutboundPollResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OutboundPollResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutboundPollResponse} obj Optional instance to populate.
   * @return {module:model/OutboundPollResponse} The populated <code>OutboundPollResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('receivedTimestamp')) {
        obj['receivedTimestamp'] = ApiClient.convertToType(data['receivedTimestamp'], 'String');
      }
      if (data.hasOwnProperty('sentTimestamp')) {
        obj['sentTimestamp'] = ApiClient.convertToType(data['sentTimestamp'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The phone number (recipient) the message was sent to (in E.164 format).
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * The date and time when the message was recieved by recipient.
   * @member {String} receivedTimestamp
   */
  exports.prototype['receivedTimestamp'] = undefined;
  /**
   * The date and time when the message was sent.
   * @member {String} sentTimestamp
   */
  exports.prototype['sentTimestamp'] = undefined;
  /**
   * Delivery status of the message
   * @member {module:model/OutboundPollResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PEND"
     * @const
     */
    "PEND": "PEND",
    /**
     * value: "SENT"
     * @const
     */
    "SENT": "SENT",
    /**
     * value: "DELIVRD"
     * @const
     */
    "DELIVRD": "DELIVRD",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED",
    /**
     * value: "UNDVBL"
     * @const
     */
    "UNDVBL": "UNDVBL",
    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED",
    /**
     * value: "READ"
     * @const
     */
    "READ": "READ"  };


  return exports;
}));


