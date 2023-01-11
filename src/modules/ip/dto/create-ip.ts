import { ApiProperty } from '@nestjs/swagger';

import {
  BooleanField,
  NumberField,
  ObjectField,
  UUIDField,
} from '../../../decorators';
import { IpConnectionDto } from './ip-connection';
import { IpCurrencyDto } from './ip-currency.dto';
import { IpFlagDto } from './ip-flag.dto';
import { IpSecurityDto } from './ip-security.dto';
import { IpTimezoneDto } from './ip-timezone.dto';

export class CreateIpDto {
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

  @NumberField()
  latitude: number;

  @NumberField()
  longitude: number;

  @BooleanField()
  is_eu: boolean;

  @ApiProperty()
  postal: string;

  @ApiProperty()
  calling_code: string;

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

  @ApiProperty()
  currency: IpCurrencyDto;

  @ApiProperty()
  security: IpSecurityDto;
}
