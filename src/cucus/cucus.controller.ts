import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { CucusService } from './cucus.service';
import { Cucu } from './interfaces/cucu.interface';

@Controller('cucus')
export class CucusController {

  constructor(private readonly cucusService: CucusService,
  ) {
  }

  @Get()
  async findAll(): Promise<Cucu[]> {
    return this.cucusService.findAll();
  }

  @Get(':lang/after/:date')
  async findUpcomingByLanguage(@Param('lang') lang: string, @Param('date') date: string): Promise<Cucu[]> {
    return this.cucusService.findByLanguageAndDate(lang, date);
  }

  @Get('after/:date')
  async findByDate(@Param('date') date: string): Promise<Cucu[]> {
    return this.cucusService.findByDate(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} Cucu`;
  }

  @Get(':id/click')
  updateOne(@Param('id') id: string) {
    return this.cucusService.incrementClickCounter(id);
  }

  @Post()
  async create(@Body() createCucuDto: CreateCucuDto) {
    return await this.cucusService.create(createCucuDto);
  }

}
