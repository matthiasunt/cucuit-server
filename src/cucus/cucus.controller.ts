import {
  Body,
  Controller, Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { CucusService } from './cucus.service';
import { Cucu } from './interfaces/cucu.interface';
import { DeleteCucuDto } from './dto/delete-cucu.dto';

@Controller('cucus')
export class CucusController {

  constructor(private readonly cucusService: CucusService,
  ) {
  }

  @Get(':lang/after/:date')
  async findUpcomingByLanguage(@Param('lang') lang: string, @Param('date') date: string): Promise<Cucu[]> {
    return this.cucusService.findByLanguageAndDate(lang, date);
  }

  @Get('by/:uid')
  async findByUid(@Param('uid') uid: string): Promise<Cucu[]> {
    return this.cucusService.findByUid(uid);
  }

  @Get('after/:date')
  async findByDate(@Param('date') date: string): Promise<Cucu[]> {
    return this.cucusService.findByDate(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cucusService.getCucu(id);
  }

  @Get(':id/click')
  updateOne(@Param('id') id: string) {
    return this.cucusService.incrementClickCounter(id);
  }

  @Post()
  async create(@Body() createCucuDto: CreateCucuDto) {
    return await this.cucusService.create(createCucuDto);
  }

  @Post('delete-one')
  async delete(@Body() deleteCucuDto: DeleteCucuDto) {
    return await this.cucusService.delete(deleteCucuDto);
  }

}
