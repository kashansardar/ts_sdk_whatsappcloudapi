/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for QualityRatingEnum
 */
export enum QualityRatingEnum {
  Green = 'GREEN',
  Yellow = 'YELLOW',
  Red = 'RED',
  NA = 'NA',
}

/**
 * Schema for QualityRatingEnum
 */
export const qualityRatingEnumSchema: Schema<QualityRatingEnum> = stringEnum(QualityRatingEnum);
