import {
  Post,
  Controller,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';
import { FileResponseVm } from './models/file-response-vm.model';

@Controller('/upload/avatar')
@ApiTags('Attachments')
export class FileController {
  constructor(private fileService: FileService) {
  }

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: true, description: 'Attachment Files' })
  @UseInterceptors(FileInterceptor('file', {
    limits: {},
  }))
  uploadFile(@UploadedFile() file) {
    const fileReponse = {
      originalname: file.originalname,
      encoding: file.encoding,
      mimetype: file.mimetype,
      id: file.id,
      filename: file.filename,
      metadata: file.metadata,
      bucketName: file.bucketName,
      chunkSize: file.chunkSize,
      size: file.size,
      md5: file.md5,
      uploadDate: file.uploadDate,
      contentType: file.contentType,
    };
    return fileReponse;
  }

  @Get(':id')
  @ApiBadRequestResponse({})
  async getFile(@Param('id') id: string, @Res() res) {
    const file = await this.fileService.findInfo(id);
    const filestream = await this.fileService.readStream(id);
    if (!filestream) {
      throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED);
    }
    res.header('Content-Type', file.contentType);
    return filestream.pipe(res);
  }
}
