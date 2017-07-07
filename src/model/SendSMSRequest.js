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
    root.Messaging.SendSMSRequest = factory(root.Messaging.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendSMSRequest model module.
   * @module model/SendSMSRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SendSMSRequest</code>.
   * @alias module:model/SendSMSRequest
   * @class
   * @param to {String} Phone number (in E.164 format) to send the SMS to. This number can be in international format if preceeded by a ‘+’, or in national format.
   * @param body {String} The text body of the message. Messages longer than 160 characters will be counted as multiple messages.
   */
  var exports = function(to, body) {
    var _this = this;

    _this['to'] = to;





    _this['body'] = body;
  };

  /**
   * Constructs a <code>SendSMSRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendSMSRequest} obj Optional instance to populate.
   * @return {module:model/SendSMSRequest} The populated <code>SendSMSRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('validity')) {
        obj['validity'] = ApiClient.convertToType(data['validity'], 'Number');
      }
      if (data.hasOwnProperty('scheduleDelivery')) {
        obj['scheduleDelivery'] = ApiClient.convertToType(data['scheduleDelivery'], 'Number');
      }
      if (data.hasOwnProperty('notifyURL')) {
        obj['notifyURL'] = ApiClient.convertToType(data['notifyURL'], 'String');
      }
      if (data.hasOwnProperty('replyRequest')) {
        obj['replyRequest'] = ApiClient.convertToType(data['replyRequest'], 'Boolean');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number (in E.164 format) to send the SMS to. This number can be in international format if preceeded by a ‘+’, or in national format.
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Phone number (in E.164 format) the SMS was sent from. If not present, the serverice will use the mobile number associated with the application, or it be an Alphanumeric address of up to 11 characters.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * How long the platform should attempt to deliver the message for. This period is specified in minutes from the message
   * @member {Number} validity
   */
  exports.prototype['validity'] = undefined;
  /**
   * How long the platform should wait before attempting to send the message - specified in minutes.
   * @member {Number} scheduleDelivery
   */
  exports.prototype['scheduleDelivery'] = undefined;
  /**
   * Contains a URL that will be called once your message has been processed. The status may be delivered, expired, deleted, etc.
   * @member {String} notifyURL
   */
  exports.prototype['notifyURL'] = undefined;
  /**
   * If set to true, the reply message functionality will be implemented and the to address will be ignored if present. If false or not present, then normal message handling is implemented.
   * @member {Boolean} replyRequest
   */
  exports.prototype['replyRequest'] = undefined;
  /**
   * The text body of the message. Messages longer than 160 characters will be counted as multiple messages.
   * @member {String} body
   */
  exports.prototype['body'] = undefined;



  return exports;
}));


