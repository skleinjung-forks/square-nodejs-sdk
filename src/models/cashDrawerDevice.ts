import { object, optional, Schema, string } from '../schema';

export interface CashDrawerDevice {
  /** The device Square-issued ID */
  id?: string;
  /** The device merchant-specified name. */
  name?: string;
}

export const cashDrawerDeviceSchema: Schema<CashDrawerDevice> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
});
