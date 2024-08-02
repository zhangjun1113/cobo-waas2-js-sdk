# CoboWaas2.DevelopersWebhooksApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookEndpoint**](DevelopersWebhooksApi.md#createWebhookEndpoint) | **POST** /webhooks/endpoints | Register webhook endpoint
[**getWebhookEndpointById**](DevelopersWebhooksApi.md#getWebhookEndpointById) | **GET** /webhooks/endpoints/{endpoint_id} | Get webhook endpoint information
[**getWebhookEventById**](DevelopersWebhooksApi.md#getWebhookEventById) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id} | Retrieve event information
[**listWebhookEndpoints**](DevelopersWebhooksApi.md#listWebhookEndpoints) | **GET** /webhooks/endpoints | List webhook endpoints
[**listWebhookEventDefinitions**](DevelopersWebhooksApi.md#listWebhookEventDefinitions) | **GET** /webhooks/events/definitions | Get webhook event types
[**listWebhookEventLogs**](DevelopersWebhooksApi.md#listWebhookEventLogs) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id}/logs | List webhook event logs
[**listWebhookEvents**](DevelopersWebhooksApi.md#listWebhookEvents) | **GET** /webhooks/endpoints/{endpoint_id}/events | List all webhook events
[**retryWebhookEventById**](DevelopersWebhooksApi.md#retryWebhookEventById) | **POST** /webhooks/endpoints/{endpoint_id}/events/{event_id}/retry | Retry event
[**updateWebhookEndpointById**](DevelopersWebhooksApi.md#updateWebhookEndpointById) | **PUT** /webhooks/endpoints/{endpoint_id} | Update webhook endpoint



## createWebhookEndpoint

> WebhookEndpoint createWebhookEndpoint(opts)

Register webhook endpoint

This operation registers a new webhook endpoint for your organization.

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const opts = {
  'CreateWebhookEndpointRequest': new CoboWaas2.CreateWebhookEndpointRequest() // CreateWebhookEndpointRequest | The request body to register a webhook endpoint.
};
apiInstance.createWebhookEndpoint(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md)| The request body to register a webhook endpoint. | [optional] 

### Return type

[**WebhookEndpoint**](WebhookEndpoint.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebhookEndpointById

> WebhookEndpoint getWebhookEndpointById(endpoint_id)

Get webhook endpoint information

This operation retrieves the information of a specified webhook endpoint.

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.getWebhookEndpointById(endpoint_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**WebhookEndpoint**](WebhookEndpoint.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookEventById

> WebhookEvent getWebhookEventById(event_id, endpoint_id)

Retrieve event information

This operation retrieves the information of a webhook event by the event ID. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const event_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.getWebhookEventById(event_id, endpoint_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**WebhookEvent**](WebhookEvent.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEndpoints

> ListWebhookEndpoints200Response listWebhookEndpoints(opts)

List webhook endpoints

This operation retrieves the information of all webhook endpoints registered under your organization. You can filter the result by endpoint status and the subscribed event type.

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const opts = {
  'status': new CoboWaas2.WebhookEndpointStatus(), // WebhookEndpointStatus | 
  'event_type': new CoboWaas2.WebhookEventType(), // WebhookEventType | 
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listWebhookEndpoints(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**WebhookEndpointStatus**](.md)|  | [optional] 
 **event_type** | [**WebhookEventType**](.md)|  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEventDefinitions

> [ListWebhookEventDefinitions200ResponseInner] listWebhookEventDefinitions()

Get webhook event types

This operation retrieves all supported webhook event types.

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
apiInstance.listWebhookEventDefinitions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ListWebhookEventDefinitions200ResponseInner]**](ListWebhookEventDefinitions200ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEventLogs

> ListWebhookEventLogs200Response listWebhookEventLogs(event_id, endpoint_id, opts)

List webhook event logs

This operation retrieves a list of webhook event logs by event ID. Each retry will generate a separate event log. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const event_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
const opts = {
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listWebhookEventLogs(event_id, endpoint_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListWebhookEventLogs200Response**](ListWebhookEventLogs200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEvents

> ListWebhookEvents200Response listWebhookEvents(endpoint_id, opts)

List all webhook events

This operation retrieves a list of webhook events that have occurred within the last 30 days.  &lt;Note&gt;The request will only return webhook events that have occurred to the wallets associated with your current API key. For example, if the current API key is only associated with Custodial Wallets, any webhook events that have occurred to an MPC Wallet will not be retrieved with the current API key.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
const opts = {
  'status': new CoboWaas2.WebhookEventStatus(), // WebhookEventStatus | 
  'type': new CoboWaas2.WebhookEventType(), // WebhookEventType | 
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listWebhookEvents(endpoint_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 
 **status** | [**WebhookEventStatus**](.md)|  | [optional] 
 **type** | [**WebhookEventType**](.md)|  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListWebhookEvents200Response**](ListWebhookEvents200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryWebhookEventById

> RetryWebhookEventById201Response retryWebhookEventById(event_id, endpoint_id)

Retry event

This operation retries delivering a webhook event with the specified event ID. You can only retry delivering a webhook event in the &#x60;Retrying&#x60; or &#x60;Failed&#x60; status. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const event_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.retryWebhookEventById(event_id, endpoint_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**RetryWebhookEventById201Response**](RetryWebhookEventById201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhookEndpointById

> WebhookEndpoint updateWebhookEndpointById(endpoint_id, opts)

Update webhook endpoint

This operation updates the information of a specified webhook endpoint.

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.DevelopersWebhooksApi();
const endpoint_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
const opts = {
  'UpdateWebhookEndpointByIdRequest': new CoboWaas2.UpdateWebhookEndpointByIdRequest() // UpdateWebhookEndpointByIdRequest | The request body to update a webhook endpoint.
};
apiInstance.updateWebhookEndpointById(endpoint_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 
 **UpdateWebhookEndpointByIdRequest** | [**UpdateWebhookEndpointByIdRequest**](UpdateWebhookEndpointByIdRequest.md)| The request body to update a webhook endpoint. | [optional] 

### Return type

[**WebhookEndpoint**](WebhookEndpoint.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
