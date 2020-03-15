import { Post, Controller, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';

@Controller('/attachment/files')
@ApiTags('Attachments')
export class FileController {
  constructor(private fileService: FileService) {
  }

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: true, description: 'Attachment File' })
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file);
    return {
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
  }

  // @Get('info/:id')
  // @ApiBadRequestResponse({ type: ApiException })
  // async getFileInfo(@Param('id') id: string): Promise<FileResponseVm> {
  //   const file = await this.fileService.findInfo(id)
  //   const filestream = await this.fileService.readStream(id)
  //   if(!filestream){
  //     throw new HttpException('An error occurred while retrieving file info', HttpStatus.EXPECTATION_FAILED)
  //   }
  //   return {
  //     message: 'File has been detected',
  //     file: file
  //   }
  // }

  // @Get(':id')
  // @ApiBadRequestResponse({ type: ApiException })
  // async getFile(@Param('id') id: string, @Res() res) {
  //   const file = await this.fileService.findInfo(id)
  //   const filestream = await this.fileService.readStream(id)
  //   if(!filestream){
  //     throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
  //   }
  //   res.header('Content-Type', file.contentType);
  //   return filestream.pipe(res)
  // }

  // @Get('download/:id')
  // @ApiBadRequestResponse({ type: ApiException })
  // async downloadFile(@Param('id') id: string, @Res() res) {
  //   const file = await this.filesService.findInfo(id)
  //   const filestream = await this.filesService.readStream(id)
  //   if(!filestream){
  //     throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
  //   }
  //   res.header('Content-Type', file.contentType);
  //   res.header('Content-Disposition', 'attachment; filename=' + file.filename);
  //   return filestream.pipe(res)
  // }

  // @Get('delete/:id')
  // @ApiBadRequestResponse({ type: ApiException })
  // @ApiCreatedResponse({ type: FileResponseVm })
  // async deleteFile(@Param('id') id: string): Promise<FileResponseVm> {
  //   const file = await this.filesService.findInfo(id)
  //   const filestream = await this.filesService.deleteFile(id)
  //   if(!filestream){
  //     throw new HttpException('An error occurred during file deletion', HttpStatus.EXPECTATION_FAILED)
  //   }
  //   return {
  //     message: 'File has been deleted',
  //     file: file
  //   }
  // }
}
