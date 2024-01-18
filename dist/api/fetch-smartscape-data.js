var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@dynatrace-sdk/error-handlers/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@dynatrace-sdk/error-handlers/cjs/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      ErrorType: () => ErrorType,
      addGlobalErrorSerializer: () => addGlobalErrorSerializer,
      isGlobalErrorSerializerSupported: () => isGlobalErrorSerializerSupported
    });
    module.exports = __toCommonJS(src_exports);
    var getGlobalWithDtRuntime = () => typeof globalThis !== "undefined" ? globalThis : window;
    function addGlobalErrorSerializer(serializer) {
      const addGlobalErrorSerializerFunc = getAddGlobalErrorSerializer();
      if (typeof addGlobalErrorSerializerFunc === "function") {
        addGlobalErrorSerializerFunc(serializer);
      } else {
        console.warn("Missing addGlobalErrorSerializer function from sdk-web-runtime.");
      }
    }
    function isGlobalErrorSerializerSupported() {
      return typeof getAddGlobalErrorSerializer() === "function";
    }
    function getAddGlobalErrorSerializer() {
      return getGlobalWithDtRuntime().dtRuntime?.errorHandlers?.addGlobalErrorSerializer;
    }
    var ErrorType = /* @__PURE__ */ ((ErrorType2) => {
      ErrorType2["COMMON"] = "JS Error";
      ErrorType2["HTTP"] = "Http Error";
      return ErrorType2;
    })(ErrorType || {});
  }
});

// node_modules/@dynatrace-sdk/http-client/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@dynatrace-sdk/http-client/cjs/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      PlatformAbortController: () => AbortController,
      PlatformAbortSignal: () => AbortSignal,
      PlatformBaseError: () => BaseError,
      PlatformBinary: () => Binary,
      PlatformDataTypeError: () => DataTypeError,
      PlatformHttpClient: () => HttpClient,
      PlatformHttpClientAbortError: () => HttpClientAbortError,
      PlatformHttpClientRequestError: () => HttpClientRequestError,
      PlatformHttpClientResponse: () => HttpClientResponse,
      PlatformHttpClientResponseError: () => HttpClientResponseError,
      PlatformUnsupportedOperationError: () => UnsupportedOperationError,
      httpClient: () => httpClient,
      isHttpClientAbortError: () => isHttpClientAbortError,
      isHttpClientNetworkError: () => isHttpClientNetworkError,
      isHttpClientRequestError: () => isHttpClientRequestError,
      isHttpClientResponseError: () => isHttpClientResponseError
    });
    module.exports = __toCommonJS(src_exports);
    function isHttpClientRequestError(e) {
      return e?.name === "RequestError";
    }
    function isHttpClientAbortError(e) {
      return e?.name === "AbortError";
    }
    function isHttpClientResponseError(e) {
      return e?.name === "ResponseError";
    }
    function isHttpClientNetworkError(e) {
      return e?.name === "NetworkError";
    }
    var AbortController = globalThis.AbortController;
    var AbortSignal = globalThis.AbortSignal;
    var BaseError = class extends Error {
      constructor(message, cause) {
        super(message);
        this.cause = cause;
      }
    };
    var UnsupportedOperationError = class extends BaseError {
      name = "UnsupportedOperationError";
      constructor(message, cause) {
        super(message, cause);
      }
    };
    function getImpl(data, type) {
      const response = new Response(data);
      switch (type) {
        case "text":
          return response.text();
        case "json":
          return response.json();
        case "array-buffer":
          return response.arrayBuffer();
        case "blob":
          return response.blob();
        case "readable-stream":
          return response.body;
      }
      throw new UnsupportedOperationError(`Unsupported binary type: ${type}.`);
    }
    var Binary = class {
      constructor(data) {
        this.data = data;
      }
      static fromText(text) {
        return new Binary(new Blob([text]));
      }
      static fromJson(json) {
        return new Binary(new Blob([JSON.stringify(json)]));
      }
      static from(data) {
        if (data instanceof Blob || data instanceof ArrayBuffer || data instanceof ReadableStream) {
          return new Binary(data);
        } else {
          throw new UnsupportedOperationError("Unsupported binary type.");
        }
      }
      get(type) {
        return getImpl(this.data, type);
      }
    };
    function isBinary(body) {
      return typeof body.get === "function";
    }
    var DataTypeError = class extends BaseError {
      name = "DataTypeError";
      constructor(message, cause) {
        super(message, cause);
      }
    };
    var defaultStatusValidator = (status) => 200 <= status && status < 300;
    function encodeTextRequestBody(body) {
      return String(body);
    }
    function encodeJsonRequestBody(body) {
      return JSON.stringify(body);
    }
    async function encodeBinaryFormDataField(field) {
      if (field instanceof ArrayBuffer || field instanceof Blob) {
        return field;
      } else if (field instanceof ReadableStream) {
        return new Response(field).arrayBuffer();
      } else if (isBinary(field)) {
        return field.get("array-buffer");
      } else {
        throw new DataTypeError("Cannot encode form data field as binary type.");
      }
    }
    async function encodeFormDataRequestBody(body) {
      const formData = new FormData();
      for (const field of body) {
        switch (field.type) {
          case "text":
            formData.append(field.name, encodeTextRequestBody(field.value));
            break;
          case "json":
            formData.append(
              field.name,
              new Blob([encodeJsonRequestBody(field.value)], {
                type: field.contentType ?? "application/json"
              }),
              field.filename ?? "json"
            );
            break;
          case "binary": {
            if (field.value instanceof File) {
              const file = field.value;
              formData.append(
                field.name,
                new File([file], field.filename ?? file.name, {
                  type: field.contentType ?? file.type ?? "application/octet-stream",
                  lastModified: file.lastModified
                }),
                field.filename ?? file.name
              );
            } else {
              const blobType = "type" in field.value ? field.value.type : void 0;
              formData.append(
                field.name,
                new Blob([await encodeBinaryFormDataField(field.value)], {
                  type: field.contentType ?? blobType ?? "application/octet-stream"
                }),
                field.filename ?? "binary"
              );
            }
            break;
          }
        }
      }
      return formData;
    }
    async function encodeBinaryRequestBody(body) {
      if (body instanceof Blob || body instanceof ArrayBuffer || body instanceof ReadableStream) {
        return body;
      } else if (isBinary(body)) {
        try {
          return await body.get("array-buffer");
        } catch (e) {
          throw new DataTypeError("Cannot encode body as binary type.", e);
        }
      } else {
        throw new DataTypeError("Cannot encode body as binary type.");
      }
    }
    async function encodeRequestBody(body, requestBodyType) {
      switch (requestBodyType) {
        case "text":
          return encodeTextRequestBody(body);
        case "json":
          return encodeJsonRequestBody(body);
        case "form-data":
          return await encodeFormDataRequestBody(body);
        case "binary":
          return await encodeBinaryRequestBody(body);
      }
      throw new DataTypeError(`Invalid body type: '${requestBodyType}'`);
    }
    function getContentTypeBy(bodyType) {
      switch (bodyType) {
        case "json":
          return "application/json";
        case "text":
          return "text/plain";
        case "binary":
          return "application/octet-stream";
      }
      throw new DataTypeError(`Invalid body type: '${bodyType}'`);
    }
    function normalizeHeaders(headers) {
      if (headers["Content-Type"]?.startsWith("multipart/")) {
        const { "Content-Type": contentTypeHeader, ...normalizedHeaders } = headers;
        return normalizedHeaders;
      }
      return headers;
    }
    function applyContentTypeHeader(headers, requestBodyType) {
      const normalizedHeaders = headers ? normalizeHeaders(headers) : void 0;
      const isContentTypePresent = Object.keys(normalizedHeaders ?? {}).some(
        (header) => header.toLowerCase() === "content-type"
      );
      if (!isContentTypePresent && requestBodyType !== "form-data") {
        return {
          "content-type": getContentTypeBy(requestBodyType),
          ...normalizedHeaders
        };
      }
      return normalizedHeaders;
    }
    var HttpClientAbortError = class extends Error {
      constructor(cause) {
        super(
          typeof cause?.message === "string" ? `Request aborted: ${cause.message}` : "Request aborted."
        );
        this.cause = cause;
      }
      name = "AbortError";
    };
    var throwIfAbortError = (e) => {
      if (e instanceof Error && e.name === "AbortError") {
        throw new HttpClientAbortError(e);
      }
    };
    var HttpClientRequestError = class extends BaseError {
      constructor(cause) {
        super(
          typeof cause?.message === "string" ? `Request failed: ${cause.message}` : "Request failed."
        );
        this.cause = cause;
      }
      name = "RequestError";
    };
    function emptyReadableStream() {
      return new ReadableStream({
        start(controller) {
          controller.close();
        }
      });
    }
    async function decodeTextResponseBody(response) {
      return response.body !== null ? response.text() : "";
    }
    async function decodeJsonResponseBody(response) {
      return response.body !== null ? response.json() : null;
    }
    async function decodeBinaryResponseBody(response) {
      return Binary.from(decodeReadableStreamResponseBody(response));
    }
    async function decodeFormDataResponseBody(response) {
      if (response.body === null) {
        return [];
      } else {
        const formData = await response.formData();
        const result = [];
        formData.forEach((value, key) => {
          if (value instanceof File) {
            result.push({
              type: "binary",
              name: key,
              contentType: value.type,
              filename: value.name,
              value: Binary.from(value)
            });
          } else {
            result.push({
              type: "text",
              name: key,
              value
            });
          }
        });
        return result;
      }
    }
    async function decodeArrayBufferResponseBody(response) {
      return response !== null ? response.arrayBuffer() : new ArrayBuffer(0);
    }
    async function decodeBlobResponseBody(response) {
      return response !== null ? response.blob() : new Blob();
    }
    function decodeReadableStreamResponseBody(response) {
      return response.body !== null ? response.body : emptyReadableStream();
    }
    function throwResponseBodyTypeError(response, responseBodyType, cause) {
      throw new DataTypeError(
        `Response body does not conform to the specified response body type: '${responseBodyType}'. The content type of the response is '${response.headers.get(
          "Content-Type"
        )}'. Response status is '${response.status}'. Response source is '${response.headers.get(
          "dynatrace-response-source"
        )}'`,
        cause
      );
    }
    async function decodeAsyncResponseBody(response, responseBodyType) {
      try {
        switch (responseBodyType) {
          case "text":
            return await decodeTextResponseBody(response);
          case "json":
            return await decodeJsonResponseBody(response);
          case "binary":
            return await decodeBinaryResponseBody(response);
          case "form-data":
            return await decodeFormDataResponseBody(response);
          case "array-buffer":
            return await decodeArrayBufferResponseBody(response);
          case "blob":
            return await decodeBlobResponseBody(response);
        }
      } catch (e) {
        throwIfAbortError(e);
        throwResponseBodyTypeError(response, responseBodyType, e);
      }
    }
    function decodeSyncResponseBody(response, responseBodyType) {
      try {
        return decodeReadableStreamResponseBody(response);
      } catch (e) {
        throwIfAbortError(e);
        throwResponseBodyTypeError(response, responseBodyType, e);
      }
    }
    function decodeResponseBodyImpl(response, responseBodyType) {
      switch (responseBodyType) {
        case "text":
        case "json":
        case "binary":
        case "form-data":
        case "array-buffer":
        case "blob":
          return decodeAsyncResponseBody(response, responseBodyType);
        case "readable-stream":
          return decodeSyncResponseBody(response, responseBodyType);
      }
      switch (responseBodyType) {
        case "buffer":
        case "stream":
          throw new UnsupportedOperationError(`Unsupported response body type: '${responseBodyType}'`);
        default:
          throw new DataTypeError(`Invalid body type: '${responseBodyType}'`);
      }
    }
    function decodeResponseBody(response, responseBodyType) {
      return decodeResponseBodyImpl(response, responseBodyType);
    }
    var HttpClientResponse = class {
      constructor(response) {
        this.response = response;
      }
      get url() {
        return this.response.url;
      }
      get status() {
        return this.response.status;
      }
      get statusText() {
        return this.response.statusText;
      }
      get headers() {
        const headers = {};
        this.response.headers.forEach((value, key) => {
          headers[key] = value;
        });
        return headers;
      }
      body(responseBodyType = "json") {
        return decodeResponseBody(this.response.clone(), responseBodyType);
      }
    };
    var import_error_handlers = require_cjs();
    function getMessageFromObject(obj) {
      if (typeof obj === "object" && obj !== null && typeof obj.message === "string") {
        return obj.message;
      }
    }
    async function parseResponse(response) {
      let consumedBody;
      try {
        consumedBody = await response.body("text");
      } catch (e) {
        const bodyError = `Response body is not available. ${e?.message ?? "Unknown error occurred."}`;
        return {
          message: bodyError.substring(0, 100),
          body: bodyError
        };
      }
      try {
        const jsonBody = JSON.parse(consumedBody);
        if (typeof jsonBody === "object" && jsonBody !== null) {
          return {
            message: getMessageFromObject(jsonBody.error) || getMessageFromObject(jsonBody) || consumedBody.substring(0, 100),
            body: jsonBody,
            errorCode: jsonBody.error?.code,
            errorRef: jsonBody.error?.details?.errorRef,
            traceId: jsonBody.error?.details?.traceId
          };
        } else {
          return {
            message: consumedBody.substring(0, 100),
            body: consumedBody
          };
        }
      } catch (e) {
        return {
          message: consumedBody.substring(0, 100),
          body: consumedBody
        };
      }
    }
    var httpClientResponseErrorSerializer = async (error) => {
      if (error instanceof HttpClientResponseError) {
        const status = error.response.status;
        const { message, body, errorRef, traceId, errorCode } = await parseResponse(error.response);
        const optionalErrorRef = errorRef ? { errorRef } : {};
        const optionalTraceId = traceId ? { traceId } : {};
        const stringifiedBody = JSON.stringify(body);
        const bodySample = stringifiedBody.length > 100 ? `${stringifiedBody.substring(0, 100)}…` : stringifiedBody;
        return {
          name: error.name,
          status,
          message,
          stack: error.stack,
          type: import_error_handlers.ErrorType.HTTP,
          details: {
            url: error.response.url,
            method: error.requestMethod,
            errorCode,
            responseContentType: getHeaderValue(error.response, "content-type"),
            responseContentLength: getHeaderValue(error.response, "content-length"),
            responseDtSource: getHeaderValue(error.response, "dynatrace-response-source"),
            responseBodySample: bodySample
          },
          ...optionalErrorRef,
          ...optionalTraceId
        };
      }
    };
    var getHeaderValue = (response, header) => {
      const { headers = {} } = response;
      const headerKey = Object.keys(headers).find((key) => key.toLowerCase() === header.toLowerCase());
      return headerKey ? headers[headerKey] : void 0;
    };
    var errorSerializerAdded = false;
    function addHttpClientResponseErrorSerializer() {
      if (!errorSerializerAdded && (0, import_error_handlers.isGlobalErrorSerializerSupported)()) {
        errorSerializerAdded = true;
        (0, import_error_handlers.addGlobalErrorSerializer)(httpClientResponseErrorSerializer);
      }
    }
    var HttpClientResponseError = class extends BaseError {
      name = "ResponseError";
      response;
      requestMethod;
      constructor(response, data) {
        addHttpClientResponseErrorSerializer();
        super(`HTTP Error ${response.status}: ${response.statusText}`);
        this.response = new HttpClientResponse(response);
        this.requestMethod = data?.requestMethod;
      }
    };
    var send = async (info, init) => {
      try {
        return await fetch(info, init);
      } catch (e) {
        throwIfAbortError(e);
        throw new HttpClientRequestError(e);
      }
    };
    var HttpClient = class {
      async send(options) {
        const { statusValidator = defaultStatusValidator } = options;
        const requestBodyType = options.requestBodyType ?? "json";
        const body = options.body !== void 0 ? await encodeRequestBody(options.body, requestBodyType) : void 0;
        const response = await send(options.url, {
          method: options.method,
          headers: applyContentTypeHeader(options.headers, requestBodyType),
          signal: options.abortSignal,
          body
        });
        const ok = statusValidator(response.status);
        if (ok) {
          return new HttpClientResponse(response);
        } else {
          throw new HttpClientResponseError(response, { requestMethod: options.method });
        }
      }
    };
    var httpClient = new HttpClient();
  }
});

// node_modules/@dynatrace-sdk/client-query/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@dynatrace-sdk/client-query/cjs/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      DQLNodeNodeType: () => DQLNodeNodeType,
      FieldTypeType: () => FieldTypeType,
      QueryAssistanceClient: () => QueryAssistanceClient,
      QueryExecutionClient: () => QueryExecutionClient,
      QueryState: () => QueryState,
      TokenType: () => TokenType,
      _AutocompleteRequestTransformation: () => autocomplete_request_transformation_exports,
      _AutocompleteResponseTransformation: () => autocomplete_response_transformation_exports,
      _AutocompleteSuggestionPartTransformation: () => autocomplete_suggestion_part_transformation_exports,
      _AutocompleteSuggestionTransformation: () => autocomplete_suggestion_transformation_exports,
      _DQLAlternativeNodeTransformation: () => dql_alternative_node_transformation_exports,
      _DQLContainerNodeTransformation: () => dql_container_node_transformation_exports,
      _DQLNodeNodeTypeTransformation: () => dql_node_node_type_transformation_exports,
      _DQLNodeTransformation: () => dql_node_transformation_exports,
      _DQLTerminalNodeTransformation: () => dql_terminal_node_transformation_exports,
      _ErrorEnvelopeTransformation: () => error_envelope_transformation_exports,
      _ErrorResponseDetailsTransformation: () => error_response_details_transformation_exports,
      _ErrorResponseTransformation: () => error_response_transformation_exports,
      _ExecuteRequestTransformation: () => execute_request_transformation_exports,
      _FieldTypeTransformation: () => field_type_transformation_exports,
      _FieldTypeTypeTransformation: () => field_type_type_transformation_exports,
      _GeoPointTransformation: () => geo_point_transformation_exports,
      _GrailMetadataTransformation: () => grail_metadata_transformation_exports,
      _MetadataNotificationTransformation: () => metadata_notification_transformation_exports,
      _MetadataTransformation: () => metadata_transformation_exports,
      _MetricMetadataTransformation: () => metric_metadata_transformation_exports,
      _ParseRequestTransformation: () => parse_request_transformation_exports,
      _PositionInfoTransformation: () => position_info_transformation_exports,
      _QueryPollResponseTransformation: () => query_poll_response_transformation_exports,
      _QueryResultTransformation: () => query_result_transformation_exports,
      _QueryStartResponseTransformation: () => query_start_response_transformation_exports,
      _QueryStateTransformation: () => query_state_transformation_exports,
      _RangedFieldTypesMappingsTransformation: () => ranged_field_types_mappings_transformation_exports,
      _RangedFieldTypesTransformation: () => ranged_field_types_transformation_exports,
      _ResultRecordTransformation: () => result_record_transformation_exports,
      _ResultRecordValueTransformation: () => result_record_value_transformation_exports,
      _TimeframeTransformation: () => timeframe_transformation_exports,
      _TokenPositionTransformation: () => token_position_transformation_exports,
      _TokenTypeTransformation: () => token_type_transformation_exports,
      _VerifyRequestTransformation: () => verify_request_transformation_exports,
      _VerifyResponseTransformation: () => verify_response_transformation_exports,
      isApiClientError: () => isApiClientError,
      isClientRequestError: () => isClientRequestError,
      isErrorEnvelopeError: () => isErrorEnvelopeError,
      isInvalidResponseError: () => isInvalidResponseError,
      queryAssistanceClient: () => queryAssistanceClient,
      queryExecutionClient: () => queryExecutionClient2
    });
    module.exports = __toCommonJS(src_exports);
    var import_http_client = require_cjs2();
    var getGlobalWithDtRuntime = () => typeof globalThis !== "undefined" ? globalThis : window;
    function addGlobalErrorSerializer(serializer) {
      const addGlobalErrorSerializerFunc = getAddGlobalErrorSerializer();
      if (typeof addGlobalErrorSerializerFunc === "function") {
        addGlobalErrorSerializerFunc(serializer);
      } else {
        console.warn("Missing addGlobalErrorSerializer function from sdk-web-runtime.");
      }
    }
    function isGlobalErrorSerializerSupported() {
      return typeof getAddGlobalErrorSerializer() === "function";
    }
    function getAddGlobalErrorSerializer() {
      return getGlobalWithDtRuntime().dtRuntime?.errorHandlers?.addGlobalErrorSerializer;
    }
    var ApiClientError = class extends Error {
      constructor(name, message, cause) {
        super(message);
        this.cause = cause;
        this.name = name;
      }
      errorType = "JS Error";
    };
    function isApiClientError(e) {
      return e instanceof ApiClientError;
    }
    var ClientRequestError = class extends ApiClientError {
      body;
      response;
      constructor(name, response, body, message, cause) {
        super(name, message, cause);
        this.errorType = "Http Error";
        this.body = body;
        this.response = response;
      }
    };
    function isClientRequestError(e) {
      return e instanceof ClientRequestError;
    }
    var ErrorEnvelopeError = class extends ClientRequestError {
    };
    function isErrorEnvelopeError(e) {
      return e instanceof ErrorEnvelopeError;
    }
    var apiClientErrorSerializer = async (error) => {
      if (isClientRequestError(error)) {
        const status = error.response.status;
        const message = error.message;
        return {
          name: error.name,
          status,
          message,
          stack: error.stack,
          type: "Http Error",
          body: error.body,
          cause: error.cause,
          ...getOptionalErrorRef(error.body)
        };
      } else if (isApiClientError(error)) {
        return {
          name: error.name,
          message: error.message,
          stack: error.stack,
          type: "JS Error",
          cause: error.cause
        };
      }
    };
    var errorSerializerAdded = false;
    function registerGlobalErrorSerializer(serializer) {
      if (!errorSerializerAdded && isGlobalErrorSerializerSupported()) {
        errorSerializerAdded = true;
        addGlobalErrorSerializer(serializer);
      }
    }
    function getOptionalErrorRef(body) {
      if (body && typeof body === "object" && body.error?.details?.errorRef) {
        return { errorRef: body.error.details.errorRef };
      }
      return {};
    }
    function serializeData(data) {
      try {
        return JSON.stringify(data);
      } catch (e) {
        return String(data);
      }
    }
    function getMessagesFromErrorDetails(details) {
      const messages = [];
      Object.entries(details).forEach(([name, data]) => {
        const serializedData = serializeData(data);
        switch (name) {
          case "missingScopes":
            messages.push(`Missing scopes: ${serializedData}`);
            break;
          default:
            messages.push(`${name}: ${serializedData}`);
        }
      }, []);
      return messages;
    }
    function getErrorMessage(errorBody, defaultMessage) {
      const error = errorBody;
      const msg = error?.error?.message || defaultMessage;
      const details = error?.error?.details || {};
      return [msg, ...getMessagesFromErrorDetails(details)].join(". ");
    }
    var InvalidResponseError = class extends ApiClientError {
      responseBody;
      expectedType;
      nestedError;
      constructor(name, nestedError, body, expectedType, message) {
        super(
          name,
          message ?? `${name}: Response does not match expected datatype${expectedType ? " " + expectedType : ""}: ${nestedError?.toString() ?? "unable to deserialize"}`
        );
        this.nestedError = nestedError;
        this.responseBody = body;
        this.expectedType = expectedType;
      }
    };
    function isInvalidResponseError(e) {
      return e instanceof InvalidResponseError;
    }
    var autocomplete_request_transformation_exports = {};
    __export(autocomplete_request_transformation_exports, {
      fromJson: () => fromJson,
      isAutocompleteRequest: () => isAutocompleteRequest,
      isJson: () => isJson,
      toJson: () => toJson
    });
    function isAutocompleteRequest(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "cursorPosition", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["cursorPosition", "timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "cursorPosition", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["cursorPosition", "timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson($model) {
      const { query, cursorPosition, timezone, locale } = $model;
      return {
        query,
        cursorPosition,
        timezone,
        locale
      };
    }
    function toJson($model) {
      const { query, cursorPosition, timezone, locale } = $model;
      return {
        query,
        cursorPosition,
        timezone,
        locale
      };
    }
    var autocomplete_response_transformation_exports = {};
    __export(autocomplete_response_transformation_exports, {
      fromJson: () => fromJson5,
      isAutocompleteResponse: () => isAutocompleteResponse,
      isJson: () => isJson5,
      toJson: () => toJson5
    });
    var autocomplete_suggestion_transformation_exports = {};
    __export(autocomplete_suggestion_transformation_exports, {
      fromJson: () => fromJson4,
      isAutocompleteSuggestion: () => isAutocompleteSuggestion,
      isJson: () => isJson4,
      toJson: () => toJson4
    });
    var autocomplete_suggestion_part_transformation_exports = {};
    __export(autocomplete_suggestion_part_transformation_exports, {
      fromJson: () => fromJson3,
      isAutocompleteSuggestionPart: () => isAutocompleteSuggestionPart,
      isJson: () => isJson3,
      toJson: () => toJson3
    });
    var token_type_transformation_exports = {};
    __export(token_type_transformation_exports, {
      fromJson: () => fromJson2,
      isJson: () => isJson2,
      isTokenType: () => isTokenType,
      toJson: () => toJson2
    });
    function isTokenType(value) {
      return typeof value === "string";
    }
    function isJson2(value) {
      return typeof value === "string";
    }
    function fromJson2($model) {
      return String($model);
    }
    function toJson2($model) {
      return String($model);
    }
    function isAutocompleteSuggestionPart(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["type", "info", "synopsis", "suggestion"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["suggestion", "type"];
      const optionalKeys = ["info", "synopsis"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson3(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["type", "info", "synopsis", "suggestion"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["suggestion", "type"];
      const optionalKeys = ["info", "synopsis"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson3($model) {
      const { type, info, synopsis, suggestion } = $model;
      return {
        type: fromJson2(type),
        info,
        synopsis,
        suggestion
      };
    }
    function toJson3($model) {
      const { type, info, synopsis, suggestion } = $model;
      return {
        type: toJson2(type),
        info,
        synopsis,
        suggestion
      };
    }
    function isAutocompleteSuggestion(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["parts", "alreadyTypedCharacters", "suggestion"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["alreadyTypedCharacters", "parts", "suggestion"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson4(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["parts", "alreadyTypedCharacters", "suggestion"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["alreadyTypedCharacters", "parts", "suggestion"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson4($model) {
      const { parts, alreadyTypedCharacters, suggestion } = $model;
      return {
        parts: parts?.map((innerValue) => fromJson3(innerValue)),
        alreadyTypedCharacters,
        suggestion
      };
    }
    function toJson4($model) {
      const { parts, alreadyTypedCharacters, suggestion } = $model;
      return {
        parts: parts?.map((innerValue) => toJson3(innerValue)),
        alreadyTypedCharacters,
        suggestion
      };
    }
    function isAutocompleteResponse(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["optional", "suggestions", "suggestedTtlSeconds"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["optional", "suggestions"];
      const optionalKeys = ["suggestedTtlSeconds"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson5(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["optional", "suggestions", "suggestedTtlSeconds"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["optional", "suggestions"];
      const optionalKeys = ["suggestedTtlSeconds"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson5($model) {
      const { optional, suggestions, suggestedTtlSeconds } = $model;
      return {
        optional,
        suggestions: suggestions?.map((innerValue) => fromJson4(innerValue)),
        suggestedTtlSeconds
      };
    }
    function toJson5($model) {
      const { optional, suggestions, suggestedTtlSeconds } = $model;
      return {
        optional,
        suggestions: suggestions?.map((innerValue) => toJson4(innerValue)),
        suggestedTtlSeconds
      };
    }
    var dql_node_transformation_exports = {};
    __export(dql_node_transformation_exports, {
      fromJson: () => fromJson6,
      isDqlAlternativeNode: () => isDqlAlternativeNode2,
      isDqlContainerNode: () => isDqlContainerNode2,
      isDqlTerminalNode: () => isDqlTerminalNode2,
      isJson: () => isJson12,
      toJson: () => toJson6
    });
    var dql_alternative_node_transformation_exports = {};
    __export(dql_alternative_node_transformation_exports, {
      fromJson: () => fromJson7,
      isDqlAlternativeNode: () => isDqlAlternativeNode,
      isJson: () => isJson6,
      toJson: () => toJson7
    });
    function isDqlAlternativeNode(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["alternatives", "isOptional", "nodeType"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson6(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["alternatives", "isOptional", "nodeType"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson7($model) {
      const { alternatives } = $model;
      return {
        ...fromJson6($model, false),
        alternatives
      };
    }
    function toJson7($model) {
      const { alternatives } = $model;
      return {
        ...toJson6($model, false),
        alternatives
      };
    }
    var dql_container_node_transformation_exports = {};
    __export(dql_container_node_transformation_exports, {
      fromJson: () => fromJson8,
      isDqlContainerNode: () => isDqlContainerNode,
      isJson: () => isJson7,
      toJson: () => toJson8
    });
    function isDqlContainerNode(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["children", "isOptional", "nodeType", "type"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson7(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["children", "isOptional", "nodeType", "type"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson8($model) {
      const { type, children } = $model;
      return {
        ...fromJson6($model, false),
        type,
        children: children !== void 0 && children !== null ? children?.map((innerValue) => fromJson6(innerValue)) : void 0
      };
    }
    function toJson8($model) {
      const { type, children } = $model;
      return {
        ...toJson6($model, false),
        type,
        children: children !== void 0 && children !== null ? children?.map((innerValue) => toJson6(innerValue)) : void 0
      };
    }
    var dql_node_node_type_transformation_exports = {};
    __export(dql_node_node_type_transformation_exports, {
      fromJson: () => fromJson9,
      isDqlNodeNodeType: () => isDqlNodeNodeType,
      isJson: () => isJson8,
      toJson: () => toJson9
    });
    function isDqlNodeNodeType(value) {
      return typeof value === "string";
    }
    function isJson8(value) {
      return typeof value === "string";
    }
    function fromJson9($model) {
      return String($model);
    }
    function toJson9($model) {
      return String($model);
    }
    var dql_terminal_node_transformation_exports = {};
    __export(dql_terminal_node_transformation_exports, {
      fromJson: () => fromJson10,
      isDqlTerminalNode: () => isDqlTerminalNode,
      isJson: () => isJson9,
      toJson: () => toJson10
    });
    function isDqlTerminalNode(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["canonicalString", "isMandatoryOnUserOrder", "isOptional", "nodeType", "type"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson9(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["canonicalString", "isMandatoryOnUserOrder", "isOptional", "nodeType", "type"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson10($model) {
      const { type, isMandatoryOnUserOrder, canonicalString } = $model;
      return {
        ...fromJson6($model, false),
        type: type !== void 0 && type !== null ? fromJson2(type) : void 0,
        isMandatoryOnUserOrder,
        canonicalString
      };
    }
    function toJson10($model) {
      const { type, isMandatoryOnUserOrder, canonicalString } = $model;
      return {
        ...toJson6($model, false),
        type: type !== void 0 && type !== null ? toJson2(type) : void 0,
        isMandatoryOnUserOrder,
        canonicalString
      };
    }
    var token_position_transformation_exports = {};
    __export(token_position_transformation_exports, {
      fromFormData: () => fromFormData,
      fromJson: () => fromJson12,
      isJson: () => isJson11,
      isTokenPosition: () => isTokenPosition,
      toFormData: () => toFormData,
      toJson: () => toJson12
    });
    var position_info_transformation_exports = {};
    __export(position_info_transformation_exports, {
      fromJson: () => fromJson11,
      isJson: () => isJson10,
      isPositionInfo: () => isPositionInfo,
      toJson: () => toJson11
    });
    function isPositionInfo(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["column", "index", "line"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["column", "index", "line"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson10(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["column", "index", "line"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["column", "index", "line"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson11($model) {
      const { column, index, line } = $model;
      return {
        column,
        index,
        line
      };
    }
    function toJson11($model) {
      const { column, index, line } = $model;
      return {
        column,
        index,
        line
      };
    }
    function isTokenPosition(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["start", "end"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["end", "start"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson11(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["start", "end"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["end", "start"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson12($model) {
      const { start, end } = $model;
      return {
        start: fromJson11(start),
        end: fromJson11(end)
      };
    }
    function toJson12($model) {
      const { start, end } = $model;
      return {
        start: toJson11(start),
        end: toJson11(end)
      };
    }
    function fromFormData(formData) {
      const formDataEntries = Object.fromEntries(formData.map((data) => [data.name, data.value]));
      return {
        start: fromJson11(JSON.parse(formDataEntries["start"])),
        end: fromJson11(JSON.parse(formDataEntries["end"]))
      };
    }
    function toFormData($model) {
      const json = toJson12($model);
      const body = [
        { name: "start", type: "json", value: json["start"] },
        { name: "end", type: "json", value: json["end"] }
      ];
      return body;
    }
    function isDqlTerminalNode2($model) {
      return $model["nodeType"] === "TERMINAL";
    }
    function isDqlContainerNode2($model) {
      return $model["nodeType"] === "CONTAINER";
    }
    function isDqlAlternativeNode2($model) {
      return $model["nodeType"] === "ALTERNATIVE";
    }
    function isJson12(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["nodeType", "tokenPosition", "isOptional"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["isOptional", "nodeType"];
      const optionalKeys = ["tokenPosition"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson6($model, includeChildProps = true) {
      if (includeChildProps) {
        switch ($model.nodeType) {
          case "TERMINAL":
            return fromJson10($model);
          case "CONTAINER":
            return fromJson8($model);
          case "ALTERNATIVE":
            return fromJson7($model);
          default:
            return fromJson6($model, false);
        }
      }
      const { nodeType, tokenPosition, isOptional } = $model;
      return {
        nodeType: fromJson9(nodeType),
        tokenPosition: tokenPosition !== void 0 && tokenPosition !== null ? fromJson12(tokenPosition) : void 0,
        isOptional
      };
    }
    function toJson6($model, includeChildProps = true) {
      if (includeChildProps) {
        switch ($model.nodeType) {
          case "TERMINAL":
            return toJson10($model);
          case "CONTAINER":
            return toJson8($model);
          case "ALTERNATIVE":
            return toJson7($model);
          default:
            return toJson6($model, false);
        }
      }
      const { nodeType, tokenPosition, isOptional } = $model;
      return {
        nodeType: toJson9(nodeType),
        tokenPosition: tokenPosition !== void 0 && tokenPosition !== null ? toJson12(tokenPosition) : void 0,
        isOptional
      };
    }
    var error_envelope_transformation_exports = {};
    __export(error_envelope_transformation_exports, {
      fromFormData: () => fromFormData2,
      fromJson: () => fromJson15,
      isErrorEnvelope: () => isErrorEnvelope,
      isJson: () => isJson15,
      toFormData: () => toFormData2,
      toJson: () => toJson15
    });
    var error_response_transformation_exports = {};
    __export(error_response_transformation_exports, {
      fromJson: () => fromJson14,
      isErrorResponse: () => isErrorResponse,
      isJson: () => isJson14,
      toJson: () => toJson14
    });
    var error_response_details_transformation_exports = {};
    __export(error_response_details_transformation_exports, {
      fromJson: () => fromJson13,
      isErrorResponseDetails: () => isErrorResponseDetails,
      isJson: () => isJson13,
      toJson: () => toJson13
    });
    function isErrorResponseDetails(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "exceptionType",
        "syntaxErrorPosition",
        "errorType",
        "errorMessage",
        "arguments",
        "queryString",
        "errorMessageFormatSpecifierTypes",
        "errorMessageFormat"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [
        "arguments",
        "errorMessage",
        "errorMessageFormat",
        "errorMessageFormatSpecifierTypes",
        "errorType",
        "exceptionType",
        "queryString"
      ];
      const optionalKeys = ["syntaxErrorPosition"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson13(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "exceptionType",
        "syntaxErrorPosition",
        "errorType",
        "errorMessage",
        "arguments",
        "queryString",
        "errorMessageFormatSpecifierTypes",
        "errorMessageFormat"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [
        "arguments",
        "errorMessage",
        "errorMessageFormat",
        "errorMessageFormatSpecifierTypes",
        "errorType",
        "exceptionType",
        "queryString"
      ];
      const optionalKeys = ["syntaxErrorPosition"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson13($model) {
      const {
        exceptionType,
        syntaxErrorPosition,
        errorType,
        errorMessage,
        arguments: _arguments,
        queryString,
        errorMessageFormatSpecifierTypes,
        errorMessageFormat
      } = $model;
      return {
        exceptionType,
        syntaxErrorPosition: syntaxErrorPosition !== void 0 && syntaxErrorPosition !== null ? fromJson12(syntaxErrorPosition) : void 0,
        errorType,
        errorMessage,
        arguments: _arguments?.slice(0),
        queryString,
        errorMessageFormatSpecifierTypes: errorMessageFormatSpecifierTypes?.slice(0),
        errorMessageFormat
      };
    }
    function toJson13($model) {
      const {
        exceptionType,
        syntaxErrorPosition,
        errorType,
        errorMessage,
        arguments: _arguments,
        queryString,
        errorMessageFormatSpecifierTypes,
        errorMessageFormat
      } = $model;
      return {
        exceptionType,
        syntaxErrorPosition: syntaxErrorPosition !== void 0 && syntaxErrorPosition !== null ? toJson12(syntaxErrorPosition) : void 0,
        errorType,
        errorMessage,
        arguments: _arguments?.slice(0),
        queryString,
        errorMessageFormatSpecifierTypes: errorMessageFormatSpecifierTypes?.slice(0),
        errorMessageFormat
      };
    }
    function isErrorResponse(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["message", "details", "code"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["code", "details", "message"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson14(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["message", "details", "code"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["code", "details", "message"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson14($model) {
      const { message, details, code } = $model;
      return {
        message,
        details: fromJson13(details),
        code
      };
    }
    function toJson14($model) {
      const { message, details, code } = $model;
      return {
        message,
        details: toJson13(details),
        code
      };
    }
    function isErrorEnvelope(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["error"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["error"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson15(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["error"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["error"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson15($model) {
      const { error } = $model;
      return {
        error: fromJson14(error)
      };
    }
    function toJson15($model) {
      const { error } = $model;
      return {
        error: toJson14(error)
      };
    }
    function fromFormData2(formData) {
      const formDataEntries = Object.fromEntries(formData.map((data) => [data.name, data.value]));
      return {
        error: fromJson14(JSON.parse(formDataEntries["error"]))
      };
    }
    function toFormData2($model) {
      const json = toJson15($model);
      const body = [{ name: "error", type: "json", value: json["error"] }];
      return body;
    }
    var parse_request_transformation_exports = {};
    __export(parse_request_transformation_exports, {
      fromJson: () => fromJson16,
      isJson: () => isJson16,
      isParseRequest: () => isParseRequest,
      toJson: () => toJson16
    });
    function isParseRequest(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson16(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson16($model) {
      const { query, timezone, locale } = $model;
      return {
        query,
        timezone,
        locale
      };
    }
    function toJson16($model) {
      const { query, timezone, locale } = $model;
      return {
        query,
        timezone,
        locale
      };
    }
    var verify_request_transformation_exports = {};
    __export(verify_request_transformation_exports, {
      fromJson: () => fromJson17,
      isJson: () => isJson17,
      isVerifyRequest: () => isVerifyRequest,
      toJson: () => toJson17
    });
    function isVerifyRequest(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson17(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["query", "timezone", "locale"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = ["timezone", "locale"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson17($model) {
      const { query, timezone, locale } = $model;
      return {
        query,
        timezone,
        locale
      };
    }
    function toJson17($model) {
      const { query, timezone, locale } = $model;
      return {
        query,
        timezone,
        locale
      };
    }
    var verify_response_transformation_exports = {};
    __export(verify_response_transformation_exports, {
      fromJson: () => fromJson19,
      isJson: () => isJson19,
      isVerifyResponse: () => isVerifyResponse,
      toJson: () => toJson19
    });
    var metadata_notification_transformation_exports = {};
    __export(metadata_notification_transformation_exports, {
      fromJson: () => fromJson18,
      isJson: () => isJson18,
      isMetadataNotification: () => isMetadataNotification,
      toJson: () => toJson18
    });
    function isMetadataNotification(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "severity",
        "messageFormat",
        "syntaxPosition",
        "messageFormatSpecifierTypes",
        "arguments",
        "notificationType",
        "message"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = [
        "severity",
        "messageFormat",
        "syntaxPosition",
        "messageFormatSpecifierTypes",
        "arguments",
        "notificationType",
        "message"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson18(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "severity",
        "messageFormat",
        "syntaxPosition",
        "messageFormatSpecifierTypes",
        "arguments",
        "notificationType",
        "message"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = [
        "severity",
        "messageFormat",
        "syntaxPosition",
        "messageFormatSpecifierTypes",
        "arguments",
        "notificationType",
        "message"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson18($model) {
      const {
        severity,
        messageFormat,
        syntaxPosition,
        messageFormatSpecifierTypes,
        arguments: _arguments,
        notificationType,
        message
      } = $model;
      return {
        severity,
        messageFormat,
        syntaxPosition: syntaxPosition !== void 0 && syntaxPosition !== null ? fromJson12(syntaxPosition) : void 0,
        messageFormatSpecifierTypes: messageFormatSpecifierTypes !== void 0 && messageFormatSpecifierTypes !== null ? messageFormatSpecifierTypes?.slice(0) : void 0,
        arguments: _arguments !== void 0 && _arguments !== null ? _arguments?.slice(0) : void 0,
        notificationType,
        message
      };
    }
    function toJson18($model) {
      const {
        severity,
        messageFormat,
        syntaxPosition,
        messageFormatSpecifierTypes,
        arguments: _arguments,
        notificationType,
        message
      } = $model;
      return {
        severity,
        messageFormat,
        syntaxPosition: syntaxPosition !== void 0 && syntaxPosition !== null ? toJson12(syntaxPosition) : void 0,
        messageFormatSpecifierTypes: messageFormatSpecifierTypes !== void 0 && messageFormatSpecifierTypes !== null ? messageFormatSpecifierTypes?.slice(0) : void 0,
        arguments: _arguments !== void 0 && _arguments !== null ? _arguments?.slice(0) : void 0,
        notificationType,
        message
      };
    }
    function isVerifyResponse(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["valid", "notifications"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["valid"];
      const optionalKeys = ["notifications"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson19(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["valid", "notifications"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["valid"];
      const optionalKeys = ["notifications"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson19($model) {
      const { valid, notifications } = $model;
      return {
        valid,
        notifications: notifications !== void 0 && notifications !== null ? notifications?.map((innerValue) => fromJson18(innerValue)) : void 0
      };
    }
    function toJson19($model) {
      const { valid, notifications } = $model;
      return {
        valid,
        notifications: notifications !== void 0 && notifications !== null ? notifications?.map((innerValue) => toJson18(innerValue)) : void 0
      };
    }
    var QueryAssistanceClient = class {
      httpClient;
      constructor(httpClientImplementation) {
        this.httpClient = httpClientImplementation;
        registerGlobalErrorSerializer(apiClientErrorSerializer);
      }
      async queryVerify(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const encodedBody = toJson17(config.body);
        const headerParameters = {
          ...config.authorization !== void 0 && { Authorization: String(config.authorization) }
        };
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:verify`,
            method: "POST",
            requestBodyType: "json",
            body: encodedBody,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...headerParameters
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200].includes(status);
            }
          });
          const responseValue = await response.body("json");
          try {
            return fromJson19(responseValue);
          } catch (err) {
            throw new InvalidResponseError(
              `QueryAssistanceClient.query:verify:200`,
              err,
              responseValue,
              void 0,
              void 0
            );
          }
        } catch (e) {
          if (isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "The supplied request is wrong."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:verify:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:verify:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`),
                e
              );
            }
          }
        }
      }
      async queryParse(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const encodedBody = toJson16(config.body);
        const headerParameters = {
          ...config.authorization !== void 0 && { Authorization: String(config.authorization) }
        };
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:parse`,
            method: "POST",
            requestBodyType: "json",
            body: encodedBody,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...headerParameters
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200].includes(status);
            }
          });
          const responseValue = await response.body("json");
          try {
            return fromJson6(responseValue);
          } catch (err) {
            throw new InvalidResponseError(
              `QueryAssistanceClient.query:parse:200`,
              err,
              responseValue,
              void 0,
              void 0
            );
          }
        } catch (e) {
          if (isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(
                    errorBody,
                    "The supplied request is wrong. Either the query itself or other parameters are wrong."
                  ),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:parse:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:parse:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`),
                e
              );
            }
          }
        }
      }
      async queryAutocomplete(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const encodedBody = toJson(config.body);
        const headerParameters = {
          ...config.authorization !== void 0 && { Authorization: String(config.authorization) }
        };
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:autocomplete`,
            method: "POST",
            requestBodyType: "json",
            body: encodedBody,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...headerParameters
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200].includes(status);
            }
          });
          const responseValue = await response.body("json");
          try {
            return fromJson5(responseValue);
          } catch (err) {
            throw new InvalidResponseError(
              `QueryAssistanceClient.query:autocomplete:200`,
              err,
              responseValue,
              void 0,
              void 0
            );
          }
        } catch (e) {
          if (isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(
                    errorBody,
                    "The supplied request is wrong. Either the query itself or other parameters are wrong."
                  ),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:autocomplete:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryAssistanceClient.query:autocomplete:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`),
                e
              );
            }
          }
        }
      }
    };
    var queryAssistanceClient = /* @__PURE__ */ new QueryAssistanceClient(import_http_client.httpClient);
    var import_http_client2 = require_cjs2();
    var execute_request_transformation_exports = {};
    __export(execute_request_transformation_exports, {
      fromJson: () => fromJson20,
      isExecuteRequest: () => isExecuteRequest,
      isJson: () => isJson20,
      toJson: () => toJson20
    });
    function isExecuteRequest(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "query",
        "defaultTimeframeStart",
        "defaultTimeframeEnd",
        "timezone",
        "locale",
        "maxResultRecords",
        "maxResultBytes",
        "fetchTimeoutSeconds",
        "requestTimeoutMilliseconds",
        "enablePreview",
        "defaultSamplingRatio",
        "defaultScanLimitGbytes"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = [
        "defaultTimeframeStart",
        "defaultTimeframeEnd",
        "timezone",
        "locale",
        "maxResultRecords",
        "maxResultBytes",
        "fetchTimeoutSeconds",
        "requestTimeoutMilliseconds",
        "enablePreview",
        "defaultSamplingRatio",
        "defaultScanLimitGbytes"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson20(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "query",
        "defaultTimeframeStart",
        "defaultTimeframeEnd",
        "timezone",
        "locale",
        "maxResultRecords",
        "maxResultBytes",
        "fetchTimeoutSeconds",
        "requestTimeoutMilliseconds",
        "enablePreview",
        "defaultSamplingRatio",
        "defaultScanLimitGbytes"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["query"];
      const optionalKeys = [
        "defaultTimeframeStart",
        "defaultTimeframeEnd",
        "timezone",
        "locale",
        "maxResultRecords",
        "maxResultBytes",
        "fetchTimeoutSeconds",
        "requestTimeoutMilliseconds",
        "enablePreview",
        "defaultSamplingRatio",
        "defaultScanLimitGbytes"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson20($model) {
      const {
        query,
        defaultTimeframeStart,
        defaultTimeframeEnd,
        timezone,
        locale,
        maxResultRecords,
        maxResultBytes,
        fetchTimeoutSeconds,
        requestTimeoutMilliseconds,
        enablePreview,
        defaultSamplingRatio,
        defaultScanLimitGbytes
      } = $model;
      return {
        query,
        defaultTimeframeStart,
        defaultTimeframeEnd,
        timezone,
        locale,
        maxResultRecords,
        maxResultBytes,
        fetchTimeoutSeconds,
        requestTimeoutMilliseconds,
        enablePreview,
        defaultSamplingRatio,
        defaultScanLimitGbytes
      };
    }
    function toJson20($model) {
      const {
        query,
        defaultTimeframeStart,
        defaultTimeframeEnd,
        timezone,
        locale,
        maxResultRecords,
        maxResultBytes,
        fetchTimeoutSeconds,
        requestTimeoutMilliseconds,
        enablePreview,
        defaultSamplingRatio,
        defaultScanLimitGbytes
      } = $model;
      return {
        query,
        defaultTimeframeStart,
        defaultTimeframeEnd,
        timezone,
        locale,
        maxResultRecords,
        maxResultBytes,
        fetchTimeoutSeconds,
        requestTimeoutMilliseconds,
        enablePreview,
        defaultSamplingRatio,
        defaultScanLimitGbytes
      };
    }
    var query_poll_response_transformation_exports = {};
    __export(query_poll_response_transformation_exports, {
      fromJson: () => fromJson34,
      isJson: () => isJson34,
      isQueryPollResponse: () => isQueryPollResponse,
      toJson: () => toJson34
    });
    var query_result_transformation_exports = {};
    __export(query_result_transformation_exports, {
      fromJson: () => fromJson32,
      isJson: () => isJson32,
      isQueryResult: () => isQueryResult,
      toJson: () => toJson32
    });
    var metadata_transformation_exports = {};
    __export(metadata_transformation_exports, {
      fromJson: () => fromJson24,
      isJson: () => isJson24,
      isMetadata: () => isMetadata,
      toJson: () => toJson24
    });
    var grail_metadata_transformation_exports = {};
    __export(grail_metadata_transformation_exports, {
      fromJson: () => fromJson22,
      isGrailMetadata: () => isGrailMetadata,
      isJson: () => isJson22,
      toJson: () => toJson22
    });
    var timeframe_transformation_exports = {};
    __export(timeframe_transformation_exports, {
      fromJson: () => fromJson21,
      isJson: () => isJson21,
      isTimeframe: () => isTimeframe,
      toJson: () => toJson21
    });
    function isTimeframe(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["start", "end"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["start", "end"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = value.start instanceof Date && value.end instanceof Date;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson21(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["start", "end"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["start", "end"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[+-]\d{2}:\d{2})?)$/i.test(value.start) && /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[+-]\d{2}:\d{2})?)$/i.test(value.end);
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson21($model) {
      const { start, end } = $model;
      return {
        start: start !== void 0 && start !== null ? new Date(start) : void 0,
        end: end !== void 0 && end !== null ? new Date(end) : void 0
      };
    }
    function toJson21($model) {
      const { start, end } = $model;
      return {
        start: start !== void 0 && start !== null ? start.toISOString() : void 0,
        end: end !== void 0 && end !== null ? end.toISOString() : void 0
      };
    }
    function isGrailMetadata(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "canonicalQuery",
        "timezone",
        "query",
        "scannedRecords",
        "dqlVersion",
        "scannedBytes",
        "analysisTimeframe",
        "locale",
        "executionTimeMilliseconds",
        "notifications",
        "queryId",
        "sampled"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = [
        "canonicalQuery",
        "timezone",
        "query",
        "scannedRecords",
        "dqlVersion",
        "scannedBytes",
        "analysisTimeframe",
        "locale",
        "executionTimeMilliseconds",
        "notifications",
        "queryId",
        "sampled"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson22(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([
        "canonicalQuery",
        "timezone",
        "query",
        "scannedRecords",
        "dqlVersion",
        "scannedBytes",
        "analysisTimeframe",
        "locale",
        "executionTimeMilliseconds",
        "notifications",
        "queryId",
        "sampled"
      ]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = [
        "canonicalQuery",
        "timezone",
        "query",
        "scannedRecords",
        "dqlVersion",
        "scannedBytes",
        "analysisTimeframe",
        "locale",
        "executionTimeMilliseconds",
        "notifications",
        "queryId",
        "sampled"
      ];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson22($model) {
      const {
        canonicalQuery,
        timezone,
        query,
        scannedRecords,
        dqlVersion,
        scannedBytes,
        analysisTimeframe,
        locale,
        executionTimeMilliseconds,
        notifications,
        queryId,
        sampled
      } = $model;
      return {
        canonicalQuery,
        timezone,
        query,
        scannedRecords,
        dqlVersion,
        scannedBytes,
        analysisTimeframe: analysisTimeframe !== void 0 && analysisTimeframe !== null ? fromJson21(analysisTimeframe) : void 0,
        locale,
        executionTimeMilliseconds,
        notifications: notifications !== void 0 && notifications !== null ? notifications?.map((innerValue) => fromJson18(innerValue)) : void 0,
        queryId,
        sampled
      };
    }
    function toJson22($model) {
      const {
        canonicalQuery,
        timezone,
        query,
        scannedRecords,
        dqlVersion,
        scannedBytes,
        analysisTimeframe,
        locale,
        executionTimeMilliseconds,
        notifications,
        queryId,
        sampled
      } = $model;
      return {
        canonicalQuery,
        timezone,
        query,
        scannedRecords,
        dqlVersion,
        scannedBytes,
        analysisTimeframe: analysisTimeframe !== void 0 && analysisTimeframe !== null ? toJson21(analysisTimeframe) : void 0,
        locale,
        executionTimeMilliseconds,
        notifications: notifications !== void 0 && notifications !== null ? notifications?.map((innerValue) => toJson18(innerValue)) : void 0,
        queryId,
        sampled
      };
    }
    var metric_metadata_transformation_exports = {};
    __export(metric_metadata_transformation_exports, {
      fromJson: () => fromJson23,
      isJson: () => isJson23,
      isMetricMetadata: () => isMetricMetadata,
      toJson: () => toJson23
    });
    function isMetricMetadata(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["metric.key", "displayName", "description", "unit", "fieldName"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["metric.key", "displayName", "description", "unit", "fieldName"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson23(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["metric.key", "displayName", "description", "unit", "fieldName"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["metric.key", "displayName", "description", "unit", "fieldName"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson23($model) {
      const { "metric.key": metricKey, displayName, description, unit, fieldName } = $model;
      return {
        "metric.key": metricKey,
        displayName,
        description,
        unit,
        fieldName
      };
    }
    function toJson23($model) {
      const { "metric.key": metricKey, displayName, description, unit, fieldName } = $model;
      return {
        "metric.key": metricKey,
        displayName,
        description,
        unit,
        fieldName
      };
    }
    function isMetadata(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["grail", "metrics"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["grail", "metrics"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson24(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["grail", "metrics"]);
      const hasAdditionalProperties = false;
      const requiredKeys = [];
      const optionalKeys = ["grail", "metrics"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson24($model) {
      const { grail, metrics } = $model;
      return {
        grail: grail !== void 0 && grail !== null ? fromJson22(grail) : void 0,
        metrics: metrics !== void 0 && metrics !== null ? metrics?.map((innerValue) => fromJson23(innerValue)) : void 0
      };
    }
    function toJson24($model) {
      const { grail, metrics } = $model;
      return {
        grail: grail !== void 0 && grail !== null ? toJson22(grail) : void 0,
        metrics: metrics !== void 0 && metrics !== null ? metrics?.map((innerValue) => toJson23(innerValue)) : void 0
      };
    }
    var ranged_field_types_transformation_exports = {};
    __export(ranged_field_types_transformation_exports, {
      fromJson: () => fromJson26,
      isJson: () => isJson28,
      isRangedFieldTypes: () => isRangedFieldTypes,
      toJson: () => toJson26
    });
    var ranged_field_types_mappings_transformation_exports = {};
    __export(ranged_field_types_mappings_transformation_exports, {
      fromJson: () => fromJson28,
      isJson: () => isJson27,
      isRangedFieldTypesMappings: () => isRangedFieldTypesMappings,
      toJson: () => toJson28
    });
    var field_type_transformation_exports = {};
    __export(field_type_transformation_exports, {
      fromJson: () => fromJson27,
      isFieldType: () => isFieldType,
      isJson: () => isJson26,
      toJson: () => toJson27
    });
    var field_type_type_transformation_exports = {};
    __export(field_type_type_transformation_exports, {
      fromJson: () => fromJson25,
      isFieldTypeType: () => isFieldTypeType,
      isJson: () => isJson25,
      toJson: () => toJson25
    });
    function isFieldTypeType(value) {
      return typeof value === "string";
    }
    function isJson25(value) {
      return typeof value === "string";
    }
    function fromJson25($model) {
      return String($model);
    }
    function toJson25($model) {
      return String($model);
    }
    function isFieldType(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["type", "types"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["type"];
      const optionalKeys = ["types"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson26(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["type", "types"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["type"];
      const optionalKeys = ["types"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson27($model) {
      const { type, types } = $model;
      return {
        type: fromJson25(type),
        types: types !== void 0 && types !== null ? types?.map((innerValue) => fromJson26(innerValue)) : void 0
      };
    }
    function toJson27($model) {
      const { type, types } = $model;
      return {
        type: toJson25(type),
        types: types !== void 0 && types !== null ? types?.map((innerValue) => toJson26(innerValue)) : void 0
      };
    }
    function isRangedFieldTypesMappings(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = true;
      const requiredKeys = [];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson27(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = true;
      const requiredKeys = [];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson28($model) {
      const additionalProps = $model;
      return {
        ...Object.fromEntries(
          Object.entries(additionalProps).map(([propName, value]) => [
            propName,
            value !== void 0 && value !== null ? fromJson27(value) : void 0
          ])
        )
      };
    }
    function toJson28($model) {
      const additionalProps = $model;
      return {
        ...Object.fromEntries(
          Object.entries(additionalProps).map(([propName, value]) => [
            propName,
            value !== void 0 && value !== null ? toJson27(value) : void 0
          ])
        )
      };
    }
    function isRangedFieldTypes(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["mappings", "indexRange"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["mappings"];
      const optionalKeys = ["indexRange"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson28(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["mappings", "indexRange"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["mappings"];
      const optionalKeys = ["indexRange"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson26($model) {
      const { mappings, indexRange } = $model;
      return {
        mappings: fromJson28(mappings),
        indexRange: indexRange !== void 0 && indexRange !== null ? indexRange?.slice(0) : void 0
      };
    }
    function toJson26($model) {
      const { mappings, indexRange } = $model;
      return {
        mappings: toJson28(mappings),
        indexRange: indexRange !== void 0 && indexRange !== null ? indexRange?.slice(0) : void 0
      };
    }
    var result_record_transformation_exports = {};
    __export(result_record_transformation_exports, {
      fromJson: () => fromJson30,
      isJson: () => isJson30,
      isResultRecord: () => isResultRecord,
      toJson: () => toJson30
    });
    var result_record_value_transformation_exports = {};
    __export(result_record_value_transformation_exports, {
      checkArrayResultRecordValue: () => checkArrayResultRecordValue,
      checkArrayResultRecordValueAsJson: () => checkArrayResultRecordValueAsJson,
      checkArrayResultRecordValueNullItemDatatype: () => checkArrayResultRecordValueNullItemDatatype,
      checkArrayResultRecordValueTransformationAsJsonNullItemDatatype: () => checkArrayResultRecordValueTransformationAsJsonNullItemDatatype,
      checkBoolean: () => checkBoolean,
      checkGeoPoint: () => checkGeoPoint,
      checkGeoPointAsJson: () => checkGeoPointAsJson,
      checkNumber: () => checkNumber,
      checkResultRecord: () => checkResultRecord,
      checkResultRecordAsJson: () => checkResultRecordAsJson,
      checkString: () => checkString,
      checkTimeframe: () => checkTimeframe,
      checkTimeframeAsJson: () => checkTimeframeAsJson,
      fromJson: () => fromJson31,
      isJson: () => isJson31,
      isResultRecordValue: () => isResultRecordValue,
      toJson: () => toJson31
    });
    var geo_point_transformation_exports = {};
    __export(geo_point_transformation_exports, {
      fromJson: () => fromJson29,
      isGeoPoint: () => isGeoPoint,
      isJson: () => isJson29,
      toJson: () => toJson29
    });
    function isGeoPoint(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["latitude", "longitude"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["latitude", "longitude"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson29(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["latitude", "longitude"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["latitude", "longitude"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson29($model) {
      const { latitude, longitude } = $model;
      return {
        latitude,
        longitude
      };
    }
    function toJson29($model) {
      const { latitude, longitude } = $model;
      return {
        latitude,
        longitude
      };
    }
    function checkBoolean(value) {
      return typeof value === "boolean";
    }
    function checkNumber(value) {
      return typeof value === "number";
    }
    function checkString(value) {
      return typeof value === "string";
    }
    function checkTimeframe(value) {
      return isTimeframe(value);
    }
    function checkGeoPoint(value) {
      return isGeoPoint(value);
    }
    function checkResultRecord(value) {
      return isResultRecord(value);
    }
    function checkArrayResultRecordValueNullItemDatatype(value) {
      return isResultRecordValue(value);
    }
    function checkArrayResultRecordValue(value) {
      const datatypeMatch = (val) => checkArrayResultRecordValueNullItemDatatype(val);
      return Array.isArray(value) && value.every(datatypeMatch);
    }
    function isResultRecordValue(value) {
      return checkBoolean(value) || checkNumber(value) || checkString(value) || checkTimeframe(value) || checkGeoPoint(value) || checkResultRecord(value) || checkArrayResultRecordValue(value) || value === null;
    }
    function checkTimeframeAsJson(value) {
      return isJson21(value);
    }
    function checkGeoPointAsJson(value) {
      return isJson29(value);
    }
    function checkResultRecordAsJson(value) {
      return isJson30(value);
    }
    function checkArrayResultRecordValueTransformationAsJsonNullItemDatatype(value) {
      return isResultRecordValue(value);
    }
    function checkArrayResultRecordValueAsJson(value) {
      const datatypeMatch = (val) => checkArrayResultRecordValueTransformationAsJsonNullItemDatatype(val);
      return Array.isArray(value) && value.every(datatypeMatch);
    }
    function isJson31(value) {
      return checkBoolean(value) || checkNumber(value) || checkString(value) || checkTimeframeAsJson(value) || checkGeoPointAsJson(value) || checkResultRecordAsJson(value) || checkArrayResultRecordValueAsJson(value) || value === null;
    }
    function fromJson31($model) {
      if (!isJson31($model)) {
        throw new TypeError("_ResultRecordValueTransformation.fromJson: value's datatype does not match");
      }
      if ($model === null) {
        return null;
      }
      if (checkBoolean($model)) {
        return Boolean($model);
      }
      if (checkNumber($model)) {
        return Number($model);
      }
      if (checkString($model)) {
        return String($model);
      }
      if (checkTimeframeAsJson($model)) {
        return fromJson21($model);
      }
      if (checkGeoPointAsJson($model)) {
        return fromJson29($model);
      }
      if (checkResultRecordAsJson($model)) {
        return fromJson30($model);
      }
      if (checkArrayResultRecordValue($model)) {
        return $model.map((el) => fromJson31(el));
      }
      throw new TypeError("Unable to deserialize value");
    }
    function toJson31($model) {
      if (!isResultRecordValue($model)) {
        throw new TypeError("_ResultRecordValueTransformation.toJson: value's datatype does not match");
      }
      if ($model === null) {
        return null;
      }
      if (checkBoolean($model)) {
        return Boolean($model);
      }
      if (checkNumber($model)) {
        return Number($model);
      }
      if (checkString($model)) {
        return String($model);
      }
      if (checkTimeframe($model)) {
        return toJson21($model);
      }
      if (checkGeoPoint($model)) {
        return toJson29($model);
      }
      if (checkResultRecord($model)) {
        return toJson30($model);
      }
      if (checkArrayResultRecordValue($model)) {
        return $model.map((el) => toJson31(el));
      }
      throw new TypeError("Unable to serialize value");
    }
    function isResultRecord(value) {
      if (value === null) {
        return true;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = true;
      const requiredKeys = [];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson30(value) {
      if (value === null) {
        return true;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set([]);
      const hasAdditionalProperties = true;
      const requiredKeys = [];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson30($model) {
      if ($model === null) {
        return null;
      }
      const additionalProps = $model;
      return {
        ...Object.fromEntries(
          Object.entries(additionalProps).map(([propName, value]) => [
            propName,
            value !== void 0 ? fromJson31(value) : void 0
          ])
        )
      };
    }
    function toJson30($model) {
      if ($model === null) {
        return null;
      }
      const additionalProps = $model;
      return {
        ...Object.fromEntries(
          Object.entries(additionalProps).map(([propName, value]) => [
            propName,
            value !== void 0 && value !== null ? toJson31(value) : void 0
          ])
        )
      };
    }
    function isQueryResult(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["records", "metadata", "types"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["metadata", "records", "types"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson32(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["records", "metadata", "types"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["metadata", "records", "types"];
      const optionalKeys = [];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson32($model) {
      const { records, metadata, types } = $model;
      return {
        records: records?.map((innerValue) => fromJson30(innerValue)),
        metadata: fromJson24(metadata),
        types: types?.map((innerValue) => fromJson26(innerValue))
      };
    }
    function toJson32($model) {
      const { records, metadata, types } = $model;
      return {
        records: records?.map((innerValue) => toJson30(innerValue)),
        metadata: toJson24(metadata),
        types: types?.map((innerValue) => toJson26(innerValue))
      };
    }
    var query_state_transformation_exports = {};
    __export(query_state_transformation_exports, {
      fromJson: () => fromJson33,
      isJson: () => isJson33,
      isQueryState: () => isQueryState,
      toJson: () => toJson33
    });
    function isQueryState(value) {
      return typeof value === "string";
    }
    function isJson33(value) {
      return typeof value === "string";
    }
    function fromJson33($model) {
      return String($model);
    }
    function toJson33($model) {
      return String($model);
    }
    function isQueryPollResponse(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["result", "ttlSeconds", "progress", "state"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["state"];
      const optionalKeys = ["result", "ttlSeconds", "progress"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson34(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["result", "ttlSeconds", "progress", "state"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["state"];
      const optionalKeys = ["result", "ttlSeconds", "progress"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson34($model) {
      const { result, ttlSeconds, progress, state } = $model;
      return {
        result: result !== void 0 && result !== null ? fromJson32(result) : void 0,
        ttlSeconds,
        progress,
        state: fromJson33(state)
      };
    }
    function toJson34($model) {
      const { result, ttlSeconds, progress, state } = $model;
      return {
        result: result !== void 0 && result !== null ? toJson32(result) : void 0,
        ttlSeconds,
        progress,
        state: toJson33(state)
      };
    }
    var query_start_response_transformation_exports = {};
    __export(query_start_response_transformation_exports, {
      fromJson: () => fromJson35,
      isJson: () => isJson35,
      isQueryStartResponse: () => isQueryStartResponse,
      toJson: () => toJson35
    });
    function isQueryStartResponse(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["result", "ttlSeconds", "progress", "requestToken", "state"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["state"];
      const optionalKeys = ["result", "ttlSeconds", "progress", "requestToken"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function isJson35(value) {
      if (value === null) {
        return false;
      }
      if (value === void 0) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      const modelKeys = /* @__PURE__ */ new Set(["result", "ttlSeconds", "progress", "requestToken", "state"]);
      const hasAdditionalProperties = false;
      const requiredKeys = ["state"];
      const optionalKeys = ["result", "ttlSeconds", "progress", "requestToken"];
      const valKeys = new Set(Object.keys(value));
      const containsRequiredOrOptionalKeys = requiredKeys.length > 0 ? requiredKeys.every((reqKey) => valKeys.has(reqKey)) : optionalKeys.some((key) => valKeys.has(key)) || hasAdditionalProperties;
      const doesNotContainExtraKeys = [...valKeys].every((key) => modelKeys.has(key)) || hasAdditionalProperties;
      const allPropertiesMatchFormat = true;
      return containsRequiredOrOptionalKeys && doesNotContainExtraKeys && allPropertiesMatchFormat;
    }
    function fromJson35($model) {
      const { result, ttlSeconds, progress, requestToken, state } = $model;
      return {
        result: result !== void 0 && result !== null ? fromJson32(result) : void 0,
        ttlSeconds,
        progress,
        requestToken,
        state: fromJson33(state)
      };
    }
    function toJson35($model) {
      const { result, ttlSeconds, progress, requestToken, state } = $model;
      return {
        result: result !== void 0 && result !== null ? toJson32(result) : void 0,
        ttlSeconds,
        progress,
        requestToken,
        state: toJson33(state)
      };
    }
    var encodeQueryParam = (key, value) => {
      const encodedKey = encodeURIComponent(key);
      return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : String(value))}`;
    };
    var addArrayQueryParam = (query, key) => {
      const arrayValue = query[key];
      return arrayValue.map((value) => encodeQueryParam(key, value)).join("&");
    };
    var addQueryParam = (query, key) => encodeQueryParam(key, query[key]);
    var toQueryString = (rawQuery) => {
      const query = rawQuery || {};
      const keys = Object.keys(query).filter((key) => typeof query[key] !== "undefined");
      const queryString = keys.map((key) => Array.isArray(query[key]) ? addArrayQueryParam(query, key) : addQueryParam(query, key)).join("&");
      return queryString ? `?${queryString}` : "";
    };
    var QueryExecutionClient = class {
      httpClient;
      constructor(httpClientImplementation) {
        this.httpClient = httpClientImplementation;
        registerGlobalErrorSerializer(apiClientErrorSerializer);
      }
      async queryPoll(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const query = toQueryString({
          "request-token": config.requestToken,
          "request-timeout-milliseconds": config.requestTimeoutMilliseconds,
          enrich: config.enrich
        });
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:poll${query}`,
            method: "GET",
            headers: {
              Accept: "application/json"
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200].includes(status);
            }
          });
          const responseValue = await response.body("json");
          try {
            return fromJson34(responseValue);
          } catch (err) {
            throw new InvalidResponseError(`QueryExecutionClient.query:poll:200`, err, responseValue, void 0, void 0);
          }
        } catch (e) {
          if (isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client2.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(
                    errorBody,
                    "The supplied request is wrong. Either the query itself or other parameters are wrong."
                  ),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:poll:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 410: {
              const responseValue = await response.body("text");
              throw new ClientRequestError(
                `410`,
                response,
                responseValue,
                getErrorMessage(responseValue, `The query for the given request-token is not available anymore.`)
              );
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:poll:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`),
                e
              );
            }
          }
        }
      }
      async queryExecute(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const encodedBody = toJson20(config.body);
        const query = toQueryString({ enrich: config.enrich });
        const headerParameters = {
          ...config.authorization !== void 0 && { Authorization: String(config.authorization) }
        };
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:execute${query}`,
            method: "POST",
            requestBodyType: "json",
            body: encodedBody,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...headerParameters
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200, 202].includes(status);
            }
          });
          switch (response.status) {
            case 200: {
              const responseValue = await response.body("json");
              try {
                return fromJson35(responseValue);
              } catch (err) {
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:${response.status}`,
                  err,
                  responseValue,
                  void 0,
                  void 0
                );
              }
            }
            case 202: {
              const responseValue = await response.body("json");
              try {
                return fromJson35(responseValue);
              } catch (err) {
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:${response.status}`,
                  err,
                  responseValue,
                  void 0,
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`)
              );
            }
          }
        } catch (e) {
          if (isClientRequestError(e) || isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client2.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(
                    errorBody,
                    "The supplied request is wrong. Either the query itself or other parameters are wrong."
                  ),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 403: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "403",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "Insufficient permissions."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:403`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 429: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "429",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "Too many requests."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:429`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 503: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "503",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "Service is unavailable."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:execute:503`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              if (response.status >= 400 && response.status <= 499) {
                const responseValue = await response.body("json");
                try {
                  const errorBody = fromJson15(responseValue);
                  throw new ErrorEnvelopeError("4XX", response, errorBody, getErrorMessage(errorBody, "Client error."), e);
                } catch (err) {
                  if (err instanceof ErrorEnvelopeError) {
                    throw err;
                  }
                  throw new InvalidResponseError(
                    `QueryExecutionClient.query:execute:4XX`,
                    err,
                    responseValue,
                    "ErrorEnvelope",
                    void 0
                  );
                }
              } else if (response.status >= 500 && response.status <= 599) {
                const responseValue = await response.body("json");
                try {
                  const errorBody = fromJson15(responseValue);
                  throw new ErrorEnvelopeError("5XX", response, errorBody, getErrorMessage(errorBody, "Server error."), e);
                } catch (err) {
                  if (err instanceof ErrorEnvelopeError) {
                    throw err;
                  }
                  throw new InvalidResponseError(
                    `QueryExecutionClient.query:execute:5XX`,
                    err,
                    responseValue,
                    "ErrorEnvelope",
                    void 0
                  );
                }
              } else {
                const responseValue = await response.body("text").catch(() => "");
                throw new ClientRequestError(
                  `${response.status}`,
                  response,
                  responseValue,
                  getErrorMessage(
                    responseValue,
                    `Unexpected api response: code=${response.status} body="${responseValue}"`
                  )
                );
              }
            }
          }
        }
      }
      async queryCancel(config) {
        if (!config) {
          throw new ApiClientError("API client error", "API client call is missing mandatory config parameter");
        }
        const query = toQueryString({ "request-token": config.requestToken, enrich: config.enrich });
        try {
          const response = await this.httpClient.send({
            url: `/platform/storage/query/v1/query:cancel${query}`,
            method: "POST",
            headers: {
              Accept: "application/json"
            },
            abortSignal: config.abortSignal,
            statusValidator: (status) => {
              return [200, 202].includes(status);
            }
          });
          switch (response.status) {
            case 200: {
              const responseValue = await response.body("json");
              try {
                return fromJson34(responseValue);
              } catch (err) {
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:cancel:${response.status}`,
                  err,
                  responseValue,
                  void 0,
                  void 0
                );
              }
            }
            case 202: {
              return;
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`)
              );
            }
          }
        } catch (e) {
          if (isClientRequestError(e) || isInvalidResponseError(e)) {
            throw e;
          }
          if (!(0, import_http_client2.isHttpClientResponseError)(e)) {
            throw new ApiClientError("UnexpectedError", "Unexpected error", e);
          }
          const response = e.response;
          switch (response.status) {
            case 400: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "400",
                  response,
                  errorBody,
                  getErrorMessage(
                    errorBody,
                    "The supplied request is wrong. Either the query itself or other parameters are wrong."
                  ),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:cancel:400`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            case 410: {
              const responseValue = await response.body("text");
              throw new ClientRequestError(
                `410`,
                response,
                responseValue,
                getErrorMessage(responseValue, `The query for the given request-token is not available anymore.`)
              );
            }
            case 500: {
              const responseValue = await response.body("json");
              try {
                const errorBody = fromJson15(responseValue);
                throw new ErrorEnvelopeError(
                  "500",
                  response,
                  errorBody,
                  getErrorMessage(errorBody, "An internal server error has occurred."),
                  e
                );
              } catch (err) {
                if (err instanceof ErrorEnvelopeError) {
                  throw err;
                }
                throw new InvalidResponseError(
                  `QueryExecutionClient.query:cancel:500`,
                  err,
                  responseValue,
                  "ErrorEnvelope",
                  void 0
                );
              }
            }
            default: {
              const responseValue = await response.body("text").catch(() => "");
              throw new ClientRequestError(
                `${response.status}`,
                response,
                responseValue,
                getErrorMessage(responseValue, `Unexpected api response: code=${response.status} body="${responseValue}"`),
                e
              );
            }
          }
        }
      }
    };
    var queryExecutionClient2 = /* @__PURE__ */ new QueryExecutionClient(import_http_client2.httpClient);
    var DQLNodeNodeType = /* @__PURE__ */ ((DQLNodeNodeType2) => {
      DQLNodeNodeType2["Terminal"] = "TERMINAL";
      DQLNodeNodeType2["Container"] = "CONTAINER";
      DQLNodeNodeType2["Alternative"] = "ALTERNATIVE";
      return DQLNodeNodeType2;
    })(DQLNodeNodeType || {});
    var FieldTypeType = /* @__PURE__ */ ((FieldTypeType2) => {
      FieldTypeType2["Boolean"] = "boolean";
      FieldTypeType2["String"] = "string";
      FieldTypeType2["Double"] = "double";
      FieldTypeType2["Long"] = "long";
      FieldTypeType2["Timestamp"] = "timestamp";
      FieldTypeType2["Timeframe"] = "timeframe";
      FieldTypeType2["Duration"] = "duration";
      FieldTypeType2["Binary"] = "binary";
      FieldTypeType2["IpAddress"] = "ip_address";
      FieldTypeType2["GeoPoint"] = "geo_point";
      FieldTypeType2["Array"] = "array";
      FieldTypeType2["Record"] = "record";
      FieldTypeType2["Uid"] = "uid";
      FieldTypeType2["Undefined"] = "undefined";
      return FieldTypeType2;
    })(FieldTypeType || {});
    var QueryState = /* @__PURE__ */ ((QueryState2) => {
      QueryState2["NotStarted"] = "NOT_STARTED";
      QueryState2["Running"] = "RUNNING";
      QueryState2["Succeeded"] = "SUCCEEDED";
      QueryState2["ResultGone"] = "RESULT_GONE";
      QueryState2["Cancelled"] = "CANCELLED";
      QueryState2["Failed"] = "FAILED";
      return QueryState2;
    })(QueryState || {});
    var TokenType = /* @__PURE__ */ ((TokenType2) => {
      TokenType2["Space"] = "SPACE";
      TokenType2["Linebreak"] = "LINEBREAK";
      TokenType2["Indent"] = "INDENT";
      TokenType2["Pipe"] = "PIPE";
      TokenType2["Dot"] = "DOT";
      TokenType2["Colon"] = "COLON";
      TokenType2["Comma"] = "COMMA";
      TokenType2["Assignment"] = "ASSIGNMENT";
      TokenType2["BraceOpen"] = "BRACE_OPEN";
      TokenType2["BraceClose"] = "BRACE_CLOSE";
      TokenType2["BracketOpen"] = "BRACKET_OPEN";
      TokenType2["BracketClose"] = "BRACKET_CLOSE";
      TokenType2["ParenthesisOpen"] = "PARENTHESIS_OPEN";
      TokenType2["ParenthesisClose"] = "PARENTHESIS_CLOSE";
      TokenType2["Quote"] = "QUOTE";
      TokenType2["SingleQuote"] = "SINGLE_QUOTE";
      TokenType2["Slash"] = "SLASH";
      TokenType2["BooleanTrue"] = "BOOLEAN_TRUE";
      TokenType2["BooleanFalse"] = "BOOLEAN_FALSE";
      TokenType2["Null"] = "NULL";
      TokenType2["CommandName"] = "COMMAND_NAME";
      TokenType2["ParameterKey"] = "PARAMETER_KEY";
      TokenType2["ParameterValueScope"] = "PARAMETER_VALUE_SCOPE";
      TokenType2["FunctionName"] = "FUNCTION_NAME";
      TokenType2["TimeseriesAggregation"] = "TIMESERIES_AGGREGATION";
      TokenType2["Operator"] = "OPERATOR";
      TokenType2["TraversalOperator"] = "TRAVERSAL_OPERATOR";
      TokenType2["TraversalRelationName"] = "TRAVERSAL_RELATION_NAME";
      TokenType2["TraversalHopCount"] = "TRAVERSAL_HOP_COUNT";
      TokenType2["SimpleIdentifier"] = "SIMPLE_IDENTIFIER";
      TokenType2["Number"] = "NUMBER";
      TokenType2["String"] = "STRING";
      TokenType2["TimeUnit"] = "TIME_UNIT";
      TokenType2["TimestampValue"] = "TIMESTAMP_VALUE";
      TokenType2["MetricKey"] = "METRIC_KEY";
      TokenType2["Variable"] = "VARIABLE";
      TokenType2["EndComment"] = "END_COMMENT";
      TokenType2["UidValue"] = "UID_VALUE";
      return TokenType2;
    })(TokenType || {});
  }
});

// api/fetch-smartscape-data.ts
var import_client_query = __toESM(require_cjs3());
async function fetch_smartscape_data_default(searchTerm) {
  console.log(searchTerm);
  const filterStatement = searchTerm === void 0 ? `// no filter passed
    ` : `| filter contains(entity.detected_name, "${searchTerm}", caseSensitive:false)
    `;
  const query = `fetch dt.entity.service, from: now()-1h
    ${filterStatement}
    | fieldsAdd entity.detected_name
    | fieldsAdd tags
    | fieldsAdd tags_str = toString(tags)
    | fieldsRename service_name=entity.detected_name
    | fieldsRename service_tags=tags
    | expand service_pgi=runs_on[dt.entity.process_group_instance]
    | lookup [
        fetch dt.entity.process_group_instance
        | fieldsAdd belongs_to[dt.entity.host]
        | fieldsAdd entity.detected_name], sourceField:service_pgi, lookupField:id, prefix:"pgi."
    | fieldsRename process_group_instance=pgi.entity.detected_name
    | fieldsRename host_id=${"`"}pgi.belongs_to[dt.entity.host]${"`"}
    | lookup [
        fetch dt.entity.host
        | fieldsAdd belongs_to[dt.entity.vmware_datacenter]
        | fieldsAdd entity.detected_name], sourceField:host_id, lookupField:id, prefix:"hid."
    | fieldsRename host_name=hid.entity.detected_name
    | fields service_name, process_group_instance, host_name
    | limit 15`;
  const getThatData = async () => {
    const result = await import_client_query.queryExecutionClient.queryExecute({
      body: {
        query
      }
    }).then(async (q) => {
      console.log(q.state);
      while (!checkDone(q)) {
        setTimeout(() => null, 500);
      }
      return await import_client_query.queryExecutionClient.queryPoll({
        "requestToken": q.requestToken
      });
    }).then((i) => i.result.records).catch((e) => {
      console.log(e);
      getThatData();
    });
    return result;
  };
  const checkDone = async (job) => {
    console.log(job);
    return await job.state === "RUNNING" ? false : true;
  };
  return getThatData();
}
export {
  fetch_smartscape_data_default as default
};
/*! Bundled license information:

@dynatrace-sdk/error-handlers/cjs/index.js:
  (**
   * @license
   * Copyright 2023 Dynatrace LLC
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
   *)

@dynatrace-sdk/http-client/cjs/index.js:
  (**
   * @license
   * Copyright 2023 Dynatrace LLC
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
   *)

@dynatrace-sdk/client-query/cjs/index.js:
  (**
   * @license
   * Copyright 2023 Dynatrace LLC
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
   *)
*/
