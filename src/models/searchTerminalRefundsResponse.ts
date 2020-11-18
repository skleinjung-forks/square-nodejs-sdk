import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalRefund, terminalRefundSchema } from './terminalRefund';

export interface SearchTerminalRefundsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalRefund`s. */
  refunds?: TerminalRefund[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
}

export const searchTerminalRefundsResponseSchema: Schema<SearchTerminalRefundsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refunds: ['refunds', optional(array(lazy(() => terminalRefundSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
