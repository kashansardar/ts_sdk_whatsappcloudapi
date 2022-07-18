/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  RetrieveMediaURLResponse,
  retrieveMediaURLResponseSchema,
} from '../models/retrieveMediaURLResponse';
import {
  SuccessResponse,
  successResponseSchema,
} from '../models/successResponse';
import { UploadMedia, uploadMediaSchema } from '../models/uploadMedia';
import { string } from '../schema';
import { BaseController } from './baseController';

export class MediaController extends BaseController {
  /**
   * Used to upload media. All media files sent through this endpoint are encrypted and persist for 30
   * days.
   *
   * @param phoneNumberID
   * @param messagingProduct  Messaging service used for the request. In this case, use whatsapp.
   * @param file              Path to the file stored in your local directory. For example:
   *                                    "@/local/path/file.jpg".
   * @param type              Type of media file being uploaded. See Supported Media Types for more
   *                                    information.    Supported options for images are: `image/jpeg`, `image/png`
   *                                    Supported options for documents are: `text/plain`, `application/pdf`,
   *                                    `application/vnd.ms-powerpoint`, `application/msword`, `application/vnd.ms-
   *                                    excel`, `application/vnd.openxmlformats-officedocument.wordprocessingml.
   *                                    document`, `application/vnd.openxmlformats-officedocument.presentationml.
   *                                    presentation`, `application/vnd.openxmlformats-officedocument.spreadsheetml.
   *                                    sheet`  Supported options for audio are: `audio/aac`, `audio/mp4`, `audio/mpeg`,
   *                                    `audio/amr`, `audio/ogg`, `audio/opus`  Supported options for video are:
   *                                    `video/mp4`, `video/3gp`  Supported options for stickers are: `image/webp`
   * @return Response from the API call
   */
  async uploadMedia(
    phoneNumberID: string,
    messagingProduct: string,
    file: string,
    type: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UploadMedia>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      phoneNumberID: [phoneNumberID, string()],
      messagingProduct: [messagingProduct, string()],
      file: [file, string()],
      type: [type, string()],
    });
    req.form({
      messaging_product: mapped.messagingProduct,
      file: mapped.file,
      type: mapped.type,
    });
    req.appendTemplatePath`/${mapped.phoneNumberID}/media`;
    return req.callAsJson(uploadMediaSchema, requestOptions);
  }

  /**
   * To retrieve your media’s URL, make a request to this endpoint. Later, you can use this URL to
   * download the media file.
   *
   * @param mediaID  Media object ID from either uploading media endpoint or media message Webhooks
   * @return Response from the API call
   */
  async retrieveMediaURL(
    mediaID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveMediaURLResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ mediaID: [mediaID, string()] });
    req.appendTemplatePath`/${mapped.mediaID}`;
    return req.callAsJson(retrieveMediaURLResponseSchema, requestOptions);
  }

  /**
   * This endpoint can be used for deleting a media object.
   *
   * @param mediaID  Media object ID from either uploading media endpoint or media message Webhooks
   * @return Response from the API call
   */
  async deleteMedia(
    mediaID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SuccessResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ mediaID: [mediaID, string()] });
    req.appendTemplatePath`/${mapped.mediaID}`;
    return req.callAsJson(successResponseSchema, requestOptions);
  }
}
