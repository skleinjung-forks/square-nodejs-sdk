import { lazy, number, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';

/**
 * Represents the payment details of a card to be used for payments. These
 * details are determined by the `card_nonce` generated by `SqPaymentForm`.
 */
export interface Card {
  /** Unique ID for this card. Generated by Square. */
  id?: string;
  /** Indicates a card's brand, such as `VISA` or `MASTERCARD`. */
  cardBrand?: string;
  /** The last 4 digits of the card number. */
  last4?: string;
  /** The expiration month of the associated card as an integer between 1 and 12. */
  expMonth?: number;
  /** The four-digit year of the card's expiration date. */
  expYear?: number;
  /** The name of the cardholder. */
  cardholderName?: string;
  /** Represents a physical address. */
  billingAddress?: Address;
  /**
   * __Not currently set.__ Intended as a Square-assigned identifier, based
   * on the card number, to identify the card across multiple locations within a
   * single application.
   */
  fingerprint?: string;
  /** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
  cardType?: string;
  /** Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. */
  prepaidType?: string;
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API
   * returns this field.
   */
  bin?: string;
}

export const cardSchema: Schema<Card> = object({
  id: ['id', optional(string())],
  cardBrand: ['card_brand', optional(string())],
  last4: ['last_4', optional(string())],
  expMonth: ['exp_month', optional(number())],
  expYear: ['exp_year', optional(number())],
  cardholderName: ['cardholder_name', optional(string())],
  billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
  fingerprint: ['fingerprint', optional(string())],
  cardType: ['card_type', optional(string())],
  prepaidType: ['prepaid_type', optional(string())],
  bin: ['bin', optional(string())],
});
