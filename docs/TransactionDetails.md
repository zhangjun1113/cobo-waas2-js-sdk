# CoboWaas2.TransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The transaction ID. | 
**cobo_id** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | [optional] 
**wallet_id** | **String** | For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source. | 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**sub_status** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failed_reason** | **String** | (This property is applicable to approval failures and signature failures only) The reason why the transaction failed. | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**result** | [**TransactionResult**](TransactionResult.md) |  | [optional] 
**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] 
**initiator** | **String** | Transaction initiator | [optional] 
**initiator_type** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmed_num** | **Number** | Transaction confirmed number | [optional] 
**confirming_threshold** | **Number** | Number of confirmations required for a transaction, such as 15 for ETH chain. | [optional] 
**transaction_hash** | **String** | The transaction hash. | [optional] 
**block_info** | [**TransactionBlockInfo**](TransactionBlockInfo.md) |  | [optional] 
**raw_tx_info** | [**TransactionRawTxInfo**](TransactionRawTxInfo.md) |  | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description for your transaction. | [optional] 
**is_loop** | **Boolean** | Whether the transaction is a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).  - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**created_time** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updated_time** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 
**approvers** | [**[TransactionApprover]**](TransactionApprover.md) |  | [optional] 
**signers** | [**[TransactionSigner]**](TransactionSigner.md) |  | [optional] 
**nonce** | **Number** | Transaction nonce | [optional] 
**replaced_by** | **String** | Replace by transaction hash | [optional] 
**fueled_by** | **String** | Fueled by address | [optional] 
**token_approval** | [**TransactionTokeApproval**](TransactionTokeApproval.md) |  | [optional] 
**message** | **String** | Transaction raw message | [optional] 
**algorithm** | **String** | Transaction message signing algorithm | [optional] 
**timeline** | [**[TransactionTimeline]**](TransactionTimeline.md) |  | [optional] 

