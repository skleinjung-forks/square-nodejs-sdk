import { ApiResponse, RequestOptions } from '../core';
import {
  RegisterDomainRequest,
  registerDomainRequestSchema,
} from '../models/registerDomainRequest';
import {
  RegisterDomainResponse,
  registerDomainResponseSchema,
} from '../models/registerDomainResponse';
import { BaseApi } from './baseApi';

export class ApplePayApi extends BaseApi {
  /**
   * Activates a domain for use with Apple Pay on the Web and Square. A validation
   * is performed on this domain by Apple to ensure that it is properly set up as
   * an Apple Pay enabled domain.
   *
   * This endpoint provides an easy way for platform developers to bulk activate
   * Apple Pay on the Web with Square for merchants using their platform.
   *
   * To learn more about Web Apple Pay, see
   * [Add the Apple Pay on the Web Button](https://developer.squareup.com/docs/payment-form/add-digital-
   * wallets/apple-pay).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  async registerDomain(
    body: RegisterDomainRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RegisterDomainResponse>> {
    const req = this.createRequest('POST', '/v2/apple-pay/domains');
    const mapped = req.prepareArgs({
      body: [body, registerDomainRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(registerDomainResponseSchema, requestOptions);
  }
}
