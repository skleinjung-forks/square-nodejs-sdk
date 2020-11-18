import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalCheckout, terminalCheckoutSchema } from './terminalCheckout';

export interface SearchTerminalCheckoutsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalCheckout`s. */
  checkouts?: TerminalCheckout[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
}

export const searchTerminalCheckoutsResponseSchema: Schema<SearchTerminalCheckoutsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkouts: [
      'checkouts',
      optional(array(lazy(() => terminalCheckoutSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
