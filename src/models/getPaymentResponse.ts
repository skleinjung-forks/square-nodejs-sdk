import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/**
 * Defines the fields that are included in the response body of
 * a request to the [GetPayment](#endpoint-payments-getpayment) endpoint.
 */
export interface GetPaymentResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
}

export const getPaymentResponseSchema: Schema<GetPaymentResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  payment: ['payment', optional(lazy(() => paymentSchema))],
});
