import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

import { IpConnectionDto } from './ip-connection';
import { IpCurrencyDto } from './ip-currency.dto';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { IIpEntity } from '../../../interfaces/IIpEntity';
import { IpFlagDto } from './ip-flag.dto';
import { IpSecurityDto } from './ip-security.dto';
import { IpTimezoneDto } from './ip-timezone.dto';

export class IpDto extends AbstractDto{
  @ApiProperty()
  ip: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  continent: string;

  @ApiProperty()
  continentCode: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  regionCode: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  isEu: boolean;

  @ApiProperty()
  postal: string;

  @ApiProperty()
  callingCode: string;

  @ApiProperty()
  capital: string;

  @ApiProperty()
  borders: string;

  @ApiProperty()
  flag: IpFlagDto;

  @ApiProperty()
  connection: IpConnectionDto;

  @ApiProperty()
  timezone: IpTimezoneDto;

  @ApiPropertyOptional()
  currency?: IpCurrencyDto;

  @ApiPropertyOptional()
  security?: IpSecurityDto;

  constructor(ipEntity: IIpEntity) {
    super(ipEntity);
    this.ip = ipEntity.ip;
    this.type = ipEntity.type;
    this.continent = ipEntity.continent;
    this.continentCode = ipEntity.continentCode;
    this.region = ipEntity.region;
    this.regionCode = ipEntity.regionCode;
    this.city = ipEntity.city;
    this.latitude = ipEntity.latitude;
    this.longitude = ipEntity.longitude;
    this.isEu = ipEntity.isEu;
    this.postal = ipEntity.postal;
    this.callingCode = ipEntity.callingCode;
    this.capital = ipEntity.capital;
    this.borders = ipEntity.borders;
    this.flag = ipEntity.flag;
    this.latitude = ipEntity.latitude;
    this.connection = ipEntity.connection;
    this.timezone = ipEntity.timezone;
    this.currency = ipEntity.currency;
    this.security = ipEntity.security;
  }
}
