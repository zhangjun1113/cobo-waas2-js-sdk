/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionRbfSource from './TransactionRbfSource';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The TransactionRbf model module.
 * @module model/TransactionRbf
 * @version 1.0.0
 */
class TransactionRbf {
    /**
     * Constructs a new <code>TransactionRbf</code>.
     * The information about the request to drop or to speed up transactions.
     * @alias module:model/TransactionRbf
     * @param request_id {String} The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param fee {module:model/TransactionRequestFee} 
     */
    constructor(request_id, fee) { 
        
        TransactionRbf.initialize(this, request_id, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_id, fee) { 
        obj['request_id'] = request_id;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>TransactionRbf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRbf} obj Optional instance to populate.
     * @return {module:model/TransactionRbf} The populated <code>TransactionRbf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRbf();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransactionRbfSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('category_names')) {
                obj['category_names'] = ApiClient.convertToType(data['category_names'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRbf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRbf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRbf.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionRequestFee.validateJSON(data['fee']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          TransactionRbfSource.validateJSON(data['source']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category_names'])) {
            throw new Error("Expected the field `category_names` to be an array in the JSON data but got " + data['category_names']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

TransactionRbf.RequiredProperties = ["request_id", "fee"];

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
TransactionRbf.prototype['request_id'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
TransactionRbf.prototype['fee'] = undefined;

/**
 * @member {module:model/TransactionRbfSource} source
 */
TransactionRbf.prototype['source'] = undefined;

/**
 * The custom category for you to identify your transactions.
 * @member {Array.<String>} category_names
 */
TransactionRbf.prototype['category_names'] = undefined;

/**
 * The description of the RBF transaction.
 * @member {String} description
 */
TransactionRbf.prototype['description'] = undefined;






export default TransactionRbf;
