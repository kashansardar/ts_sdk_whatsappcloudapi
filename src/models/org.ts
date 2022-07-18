/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Org {
  /** Name of the contact's company. */
  company?: string;
  /** Name of the contact's department. */
  department?: string;
  /** Contact's business title. */
  title?: string;
}

export const orgSchema: Schema<Org> = object({
  company: ['company', optional(string())],
  department: ['department', optional(string())],
  title: ['title', optional(string())],
});
