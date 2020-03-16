import { Body, Controller, Delete, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { CucusService } from './cucus.service';
import { Cucu } from './interfaces/cucu.interface';

@Controller('cucus')
export class CucusController {

  constructor(private readonly cucusService: CucusService,
  ) {
  }

  @Post()
  async create(@Body() createCucuDto: CreateCucuDto) {
    return await this.cucusService.create(createCucuDto);
  }

  @Get()
  async findAll(): Promise<Cucu[]> {
    return this.cucusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}
