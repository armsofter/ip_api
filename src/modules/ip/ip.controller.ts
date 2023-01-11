import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus, Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { IpService } from './ip.service';
import type { IpDto } from './dto/ip.dto';

@Controller('ip')
@ApiTags('ip')
export class IpController {
  constructor(private carouselService: IpService) {}

  @Get(':ip')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Ip from Db or from api',
  })
  getIpInfo(@Param('ip') ip: string): Promise<IpDto> {
    return this.carouselService.getIpInfo(ip);
  }

  @Delete(':ip')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete Ip',
  })
  deleteIpInfo(@Param('ip') ip: string): Promise<void> {
    return this.carouselService.deleteIpInfo(ip);
  }
}
