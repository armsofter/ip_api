import type { IpDto } from '../modules/ip/dto/ip.dto';
import type { IAbstractEntity } from '../common/abstract.entity';
import {IpFlagDto} from "../modules/ip/dto/ip-flag.dto";
import {IpConnectionDto} from "../modules/ip/dto/ip-connection";
import {IpTimezoneDto} from "../modules/ip/dto/ip-timezone.dto";
import {IpCurrencyDto} from "../modules/ip/dto/ip-currency.dto";
import {IpSecurityDto} from "../modules/ip/dto/ip-security.dto";

export interface IIpEntity extends IAbstractEntity<IpDto> {
  ip: string;
  type: string;
  continent: string;
  continentCode: string;
  region: string;
  regionCode: string;
  city: string;
  latitude: number;
  longitude: number;
  isEu: boolean;
  postal: string;
  callingCode: string;
  capital: string;
  borders: string;
  flag: IpFlagDto;
  connection: IpConnectionDto;
  timezone: IpTimezoneDto;
  currency?: IpCurrencyDto;
  security?: IpSecurityDto;
}
