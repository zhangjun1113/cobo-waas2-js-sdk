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
import AmountDetailsInner from './AmountDetailsInner';
import StakingsValidatorInfo from './StakingsValidatorInfo';

/**
 * The Stakings model module.
 * @module model/Stakings
 * @version 1.0.0
 */
class Stakings {
    /**
     * Constructs a new <code>Stakings</code>.
     * The staking info.
     * @alias module:model/Stakings
     * @param id {String} The unique id of the stake.
     * @param wallet_id {String} The unique wallet id.
     * @param address {String} The staker wallet address.
     * @param amounts {Array.<module:model/AmountDetailsInner>} The staking amount details.
     * @param pool_id {String} The unique pool id.
     * @param token_id {String} The token id.
     * @param created_time {Number} The time when the stake was created.
     * @param updated_time {Number} The time when the stake was last updated.
     * @param validator_info {module:model/StakingsValidatorInfo} 
     */
    constructor(id, wallet_id, address, amounts, pool_id, token_id, created_time, updated_time, validator_info) { 
        
        Stakings.initialize(this, id, wallet_id, address, amounts, pool_id, token_id, created_time, updated_time, validator_info);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, wallet_id, address, amounts, pool_id, token_id, created_time, updated_time, validator_info) { 
        obj['id'] = id;
        obj['wallet_id'] = wallet_id;
        obj['address'] = address;
        obj['amounts'] = amounts;
        obj['pool_id'] = pool_id;
        obj['token_id'] = token_id;
        obj['created_time'] = created_time;
        obj['updated_time'] = updated_time;
        obj['validator_info'] = validator_info;
    }

    /**
     * Constructs a <code>Stakings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stakings} obj Optional instance to populate.
     * @return {module:model/Stakings} The populated <code>Stakings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stakings();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amounts')) {
                obj['amounts'] = ApiClient.convertToType(data['amounts'], [AmountDetailsInner]);
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = ApiClient.convertToType(data['initiator'], 'String');
            }
            if (data.hasOwnProperty('unlock_time')) {
                obj['unlock_time'] = ApiClient.convertToType(data['unlock_time'], 'Number');
            }
            if (data.hasOwnProperty('unlock_block_height')) {
                obj['unlock_block_height'] = ApiClient.convertToType(data['unlock_block_height'], 'Number');
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('pos_chain')) {
                obj['pos_chain'] = ApiClient.convertToType(data['pos_chain'], 'String');
            }
            if (data.hasOwnProperty('rewards_info')) {
                obj['rewards_info'] = ApiClient.convertToType(data['rewards_info'], Object);
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Number');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Number');
            }
            if (data.hasOwnProperty('validator_info')) {
                obj['validator_info'] = StakingsValidatorInfo.constructFromObject(data['validator_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stakings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stakings</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Stakings.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        if (data['amounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['amounts'])) {
                throw new Error("Expected the field `amounts` to be an array in the JSON data but got " + data['amounts']);
            }
            // validate the optional field `amounts` (array)
            for (const item of data['amounts']) {
                AmountDetailsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }
        // ensure the json data is a string
        if (data['pool_id'] && !(typeof data['pool_id'] === 'string' || data['pool_id'] instanceof String)) {
            throw new Error("Expected the field `pool_id` to be a primitive type in the JSON string but got " + data['pool_id']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['pos_chain'] && !(typeof data['pos_chain'] === 'string' || data['pos_chain'] instanceof String)) {
            throw new Error("Expected the field `pos_chain` to be a primitive type in the JSON string but got " + data['pos_chain']);
        }
        // validate the optional field `validator_info`
        if (data['validator_info']) { // data not null
          StakingsValidatorInfo.validateJSON(data['validator_info']);
        }

        return true;
    }


}

Stakings.RequiredProperties = ["id", "wallet_id", "address", "amounts", "pool_id", "token_id", "created_time", "updated_time", "validator_info"];

/**
 * The unique id of the stake.
 * @member {String} id
 */
Stakings.prototype['id'] = undefined;

/**
 * The unique wallet id.
 * @member {String} wallet_id
 */
Stakings.prototype['wallet_id'] = undefined;

/**
 * The staker wallet address.
 * @member {String} address
 */
Stakings.prototype['address'] = undefined;

/**
 * The staking amount details.
 * @member {Array.<module:model/AmountDetailsInner>} amounts
 */
Stakings.prototype['amounts'] = undefined;

/**
 * The initiator of the stake.
 * @member {String} initiator
 */
Stakings.prototype['initiator'] = undefined;

/**
 * The unlock time.
 * @member {Number} unlock_time
 */
Stakings.prototype['unlock_time'] = undefined;

/**
 * The unlock block height.
 * @member {Number} unlock_block_height
 */
Stakings.prototype['unlock_block_height'] = undefined;

/**
 * The unique pool id.
 * @member {String} pool_id
 */
Stakings.prototype['pool_id'] = undefined;

/**
 * The token id.
 * @member {String} token_id
 */
Stakings.prototype['token_id'] = undefined;

/**
 * The pos chain of the stake.
 * @member {String} pos_chain
 */
Stakings.prototype['pos_chain'] = undefined;

/**
 * The rewards info of the stake.
 * @member {Object} rewards_info
 */
Stakings.prototype['rewards_info'] = undefined;

/**
 * The time when the stake was created.
 * @member {Number} created_time
 */
Stakings.prototype['created_time'] = undefined;

/**
 * The time when the stake was last updated.
 * @member {Number} updated_time
 */
Stakings.prototype['updated_time'] = undefined;

/**
 * @member {module:model/StakingsValidatorInfo} validator_info
 */
Stakings.prototype['validator_info'] = undefined;






export default Stakings;
