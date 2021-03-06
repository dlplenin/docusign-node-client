/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomFields', 'model/Document', 'model/EmailSettings', 'model/EnvelopeTemplateDefinition', 'model/LockInformation', 'model/Notification', 'model/Recipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFields'), require('./Document'), require('./EmailSettings'), require('./EnvelopeTemplateDefinition'), require('./LockInformation'), require('./Notification'), require('./Recipients'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeTemplate = factory(root.Docusign.ApiClient, root.Docusign.CustomFields, root.Docusign.Document, root.Docusign.EmailSettings, root.Docusign.EnvelopeTemplateDefinition, root.Docusign.LockInformation, root.Docusign.Notification, root.Docusign.Recipients);
  }
}(this, function(ApiClient, CustomFields, Document, EmailSettings, EnvelopeTemplateDefinition, LockInformation, Notification, Recipients) {
  'use strict';


  /**
   * The EnvelopeTemplate model module.
   * @module model/EnvelopeTemplate
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeTemplate</code>.
   * @alias module:model/EnvelopeTemplate
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeTemplate} obj Optional instance to populate.
   * @return {module:model/EnvelopeTemplate} The populated <code>EnvelopeTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowMarkup')) {
        obj['allowMarkup'] = ApiClient.convertToType(data['allowMarkup'], 'String');
      }
      if (data.hasOwnProperty('allowReassign')) {
        obj['allowReassign'] = ApiClient.convertToType(data['allowReassign'], 'String');
      }
      if (data.hasOwnProperty('allowViewHistory')) {
        obj['allowViewHistory'] = ApiClient.convertToType(data['allowViewHistory'], 'String');
      }
      if (data.hasOwnProperty('asynchronous')) {
        obj['asynchronous'] = ApiClient.convertToType(data['asynchronous'], 'String');
      }
      if (data.hasOwnProperty('attachmentsUri')) {
        obj['attachmentsUri'] = ApiClient.convertToType(data['attachmentsUri'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopy')) {
        obj['authoritativeCopy'] = ApiClient.convertToType(data['authoritativeCopy'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopyDefault')) {
        obj['authoritativeCopyDefault'] = ApiClient.convertToType(data['authoritativeCopyDefault'], 'String');
      }
      if (data.hasOwnProperty('autoNavigation')) {
        obj['autoNavigation'] = ApiClient.convertToType(data['autoNavigation'], 'String');
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'String');
      }
      if (data.hasOwnProperty('brandLock')) {
        obj['brandLock'] = ApiClient.convertToType(data['brandLock'], 'String');
      }
      if (data.hasOwnProperty('certificateUri')) {
        obj['certificateUri'] = ApiClient.convertToType(data['certificateUri'], 'String');
      }
      if (data.hasOwnProperty('completedDateTime')) {
        obj['completedDateTime'] = ApiClient.convertToType(data['completedDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = CustomFields.constructFromObject(data['customFields']);
      }
      if (data.hasOwnProperty('customFieldsUri')) {
        obj['customFieldsUri'] = ApiClient.convertToType(data['customFieldsUri'], 'String');
      }
      if (data.hasOwnProperty('declinedDateTime')) {
        obj['declinedDateTime'] = ApiClient.convertToType(data['declinedDateTime'], 'String');
      }
      if (data.hasOwnProperty('deletedDateTime')) {
        obj['deletedDateTime'] = ApiClient.convertToType(data['deletedDateTime'], 'String');
      }
      if (data.hasOwnProperty('deliveredDateTime')) {
        obj['deliveredDateTime'] = ApiClient.convertToType(data['deliveredDateTime'], 'String');
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
      if (data.hasOwnProperty('documentsCombinedUri')) {
        obj['documentsCombinedUri'] = ApiClient.convertToType(data['documentsCombinedUri'], 'String');
      }
      if (data.hasOwnProperty('documentsUri')) {
        obj['documentsUri'] = ApiClient.convertToType(data['documentsUri'], 'String');
      }
      if (data.hasOwnProperty('emailBlurb')) {
        obj['emailBlurb'] = ApiClient.convertToType(data['emailBlurb'], 'String');
      }
      if (data.hasOwnProperty('emailSettings')) {
        obj['emailSettings'] = EmailSettings.constructFromObject(data['emailSettings']);
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
      }
      if (data.hasOwnProperty('enableWetSign')) {
        obj['enableWetSign'] = ApiClient.convertToType(data['enableWetSign'], 'String');
      }
      if (data.hasOwnProperty('enforceSignerVisibility')) {
        obj['enforceSignerVisibility'] = ApiClient.convertToType(data['enforceSignerVisibility'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeIdStamping')) {
        obj['envelopeIdStamping'] = ApiClient.convertToType(data['envelopeIdStamping'], 'String');
      }
      if (data.hasOwnProperty('envelopeTemplateDefinition')) {
        obj['envelopeTemplateDefinition'] = EnvelopeTemplateDefinition.constructFromObject(data['envelopeTemplateDefinition']);
      }
      if (data.hasOwnProperty('envelopeUri')) {
        obj['envelopeUri'] = ApiClient.convertToType(data['envelopeUri'], 'String');
      }
      if (data.hasOwnProperty('initialSentDateTime')) {
        obj['initialSentDateTime'] = ApiClient.convertToType(data['initialSentDateTime'], 'String');
      }
      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('isSignatureProviderEnvelope')) {
        obj['isSignatureProviderEnvelope'] = ApiClient.convertToType(data['isSignatureProviderEnvelope'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('lockInformation')) {
        obj['lockInformation'] = LockInformation.constructFromObject(data['lockInformation']);
      }
      if (data.hasOwnProperty('messageLock')) {
        obj['messageLock'] = ApiClient.convertToType(data['messageLock'], 'String');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = Notification.constructFromObject(data['notification']);
      }
      if (data.hasOwnProperty('notificationUri')) {
        obj['notificationUri'] = ApiClient.convertToType(data['notificationUri'], 'String');
      }
      if (data.hasOwnProperty('purgeState')) {
        obj['purgeState'] = ApiClient.convertToType(data['purgeState'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = Recipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('recipientsLock')) {
        obj['recipientsLock'] = ApiClient.convertToType(data['recipientsLock'], 'String');
      }
      if (data.hasOwnProperty('recipientsUri')) {
        obj['recipientsUri'] = ApiClient.convertToType(data['recipientsUri'], 'String');
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
      }
      if (data.hasOwnProperty('signerCanSignOnMobile')) {
        obj['signerCanSignOnMobile'] = ApiClient.convertToType(data['signerCanSignOnMobile'], 'String');
      }
      if (data.hasOwnProperty('signingLocation')) {
        obj['signingLocation'] = ApiClient.convertToType(data['signingLocation'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusChangedDateTime')) {
        obj['statusChangedDateTime'] = ApiClient.convertToType(data['statusChangedDateTime'], 'String');
      }
      if (data.hasOwnProperty('templatesUri')) {
        obj['templatesUri'] = ApiClient.convertToType(data['templatesUri'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('useDisclosure')) {
        obj['useDisclosure'] = ApiClient.convertToType(data['useDisclosure'], 'String');
      }
      if (data.hasOwnProperty('voidedDateTime')) {
        obj['voidedDateTime'] = ApiClient.convertToType(data['voidedDateTime'], 'String');
      }
      if (data.hasOwnProperty('voidedReason')) {
        obj['voidedReason'] = ApiClient.convertToType(data['voidedReason'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
   * @member {String} allowMarkup
   */
  exports.prototype['allowMarkup'] = undefined;
  /**
   * When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
   * @member {String} allowReassign
   */
  exports.prototype['allowReassign'] = undefined;
  /**
   * 
   * @member {String} allowViewHistory
   */
  exports.prototype['allowViewHistory'] = undefined;
  /**
   * When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed.
   * @member {String} asynchronous
   */
  exports.prototype['asynchronous'] = undefined;
  /**
   * 
   * @member {String} attachmentsUri
   */
  exports.prototype['attachmentsUri'] = undefined;
  /**
   * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
   * @member {String} authoritativeCopy
   */
  exports.prototype['authoritativeCopy'] = undefined;
  /**
   * 
   * @member {String} authoritativeCopyDefault
   */
  exports.prototype['authoritativeCopyDefault'] = undefined;
  /**
   * 
   * @member {String} autoNavigation
   */
  exports.prototype['autoNavigation'] = undefined;
  /**
   * 
   * @member {String} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * 
   * @member {String} brandLock
   */
  exports.prototype['brandLock'] = undefined;
  /**
   * Retrieves a URI for an endpoint that allows you to easily retrieve certificate information.
   * @member {String} certificateUri
   */
  exports.prototype['certificateUri'] = undefined;
  /**
   * Specifies the date and time this item was completed.
   * @member {String} completedDateTime
   */
  exports.prototype['completedDateTime'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * @member {module:model/CustomFields} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the custom fields.
   * @member {String} customFieldsUri
   */
  exports.prototype['customFieldsUri'] = undefined;
  /**
   * The date and time the recipient declined the document.
   * @member {String} declinedDateTime
   */
  exports.prototype['declinedDateTime'] = undefined;
  /**
   * Specifies the data and time the item was deleted.
   * @member {String} deletedDateTime
   */
  exports.prototype['deletedDateTime'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveredDateTime
   */
  exports.prototype['deliveredDateTime'] = undefined;
  /**
   * Complex element contains the details on the documents in the envelope.
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * 
   * @member {String} documentsCombinedUri
   */
  exports.prototype['documentsCombinedUri'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the documents.
   * @member {String} documentsUri
   */
  exports.prototype['documentsUri'] = undefined;
  /**
   * 
   * @member {String} emailBlurb
   */
  exports.prototype['emailBlurb'] = undefined;
  /**
   * @member {module:model/EmailSettings} emailSettings
   */
  exports.prototype['emailSettings'] = undefined;
  /**
   * Specifies the subject of the email that is sent to all recipients.  See [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
   * @member {String} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * When set to **true**, the signer is allowed to print the document and sign it on paper.
   * @member {String} enableWetSign
   */
  exports.prototype['enableWetSign'] = undefined;
  /**
   * When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.  Your account must have Document Visibility enabled to use this.
   * @member {String} enforceSignerVisibility
   */
  exports.prototype['enforceSignerVisibility'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * When set to **true**, Envelope ID Stamping is enabled.
   * @member {String} envelopeIdStamping
   */
  exports.prototype['envelopeIdStamping'] = undefined;
  /**
   * @member {module:model/EnvelopeTemplateDefinition} envelopeTemplateDefinition
   */
  exports.prototype['envelopeTemplateDefinition'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
   * @member {String} envelopeUri
   */
  exports.prototype['envelopeUri'] = undefined;
  /**
   * 
   * @member {String} initialSentDateTime
   */
  exports.prototype['initialSentDateTime'] = undefined;
  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} isSignatureProviderEnvelope
   */
  exports.prototype['isSignatureProviderEnvelope'] = undefined;
  /**
   * The date and time the item was last modified.
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
  /**
   * @member {module:model/LockInformation} lockInformation
   */
  exports.prototype['lockInformation'] = undefined;
  /**
   * When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope.   Additionally, this prevents users from making changes to the contents of `emailBlurb` and `emailSubject` properties when correcting envelopes.   However, if the `messageLock` node is set to true**** and the `emailSubject` property is empty, senders and correctors are able to add a subject to the envelope.
   * @member {String} messageLock
   */
  exports.prototype['messageLock'] = undefined;
  /**
   * @member {module:model/Notification} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the notifications.
   * @member {String} notificationUri
   */
  exports.prototype['notificationUri'] = undefined;
  /**
   * 
   * @member {String} purgeState
   */
  exports.prototype['purgeState'] = undefined;
  /**
   * @member {module:model/Recipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
   * @member {String} recipientsLock
   */
  exports.prototype['recipientsLock'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the recipients.
   * @member {String} recipientsUri
   */
  exports.prototype['recipientsUri'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
  /**
   * 
   * @member {String} signerCanSignOnMobile
   */
  exports.prototype['signerCanSignOnMobile'] = undefined;
  /**
   * Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
   * @member {String} signingLocation
   */
  exports.prototype['signingLocation'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The data and time the status changed.
   * @member {String} statusChangedDateTime
   */
  exports.prototype['statusChangedDateTime'] = undefined;
  /**
   * Contains a URI for an endpoint which you can use to retrieve the templates.
   * @member {String} templatesUri
   */
  exports.prototype['templatesUri'] = undefined;
  /**
   *  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients.   If the `useDisclosure` property is not set, then the account's normal disclosure setting is used and the value of the `useDisclosure` property is not returned in responses when getting envelope information.
   * @member {String} useDisclosure
   */
  exports.prototype['useDisclosure'] = undefined;
  /**
   * The date and time the envelope or template was voided.
   * @member {String} voidedDateTime
   */
  exports.prototype['voidedDateTime'] = undefined;
  /**
   * The reason the envelope or template was voided.
   * @member {String} voidedReason
   */
  exports.prototype['voidedReason'] = undefined;



  return exports;
}));


