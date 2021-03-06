/*
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package net.telstra.tdev.apipractice.slot2.models;

import java.util.*;

public class SendSMSRequestBuilder {
    //the instance to build
    private SendSMSRequest sendSMSRequest;

    /**
     * Default constructor to initialize the instance
     */
    public SendSMSRequestBuilder() {
        sendSMSRequest = new SendSMSRequest();
    }

    /**
     * Phone number (in E.164 format) to send the SMS to. This number can be in international format if preceeded by a ‘+’, or in national format.
     */
    public SendSMSRequestBuilder to(String to) {
        sendSMSRequest.setTo(to);
        return this;
    }

    /**
     * The text body of the message. Messages longer than 160 characters will be counted as multiple messages.
     */
    public SendSMSRequestBuilder body(String body) {
        sendSMSRequest.setBody(body);
        return this;
    }

    /**
     * Phone number (in E.164 format) the SMS was sent from. If not present, the serverice will use the mobile number associated with the application, or it be an Alphanumeric address of up to 11 characters.
     */
    public SendSMSRequestBuilder from(String from) {
        sendSMSRequest.setFrom(from);
        return this;
    }

    /**
     * How long the platform should attempt to deliver the message for. This period is specified in minutes from the message
     */
    public SendSMSRequestBuilder validity(Integer validity) {
        sendSMSRequest.setValidity(validity);
        return this;
    }

    /**
     * How long the platform should wait before attempting to send the message - specified in minutes.
     */
    public SendSMSRequestBuilder scheduleDelivery(Integer scheduleDelivery) {
        sendSMSRequest.setScheduleDelivery(scheduleDelivery);
        return this;
    }

    /**
     * Contains a URL that will be called once your message has been processed. The status may be delivered, expired, deleted, etc.
     */
    public SendSMSRequestBuilder notifyURL(String notifyURL) {
        sendSMSRequest.setNotifyURL(notifyURL);
        return this;
    }

    /**
     * If set to true, the reply message functionality will be implemented and the to address will be ignored if present. If false or not present, then normal message handling is implemented.
     */
    public SendSMSRequestBuilder replyRequest(Boolean replyRequest) {
        sendSMSRequest.setReplyRequest(replyRequest);
        return this;
    }
    /**
     * Build the instance with the given values
     */
    public SendSMSRequest build() {
        return sendSMSRequest;
    }
}