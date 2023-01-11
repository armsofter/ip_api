import { Column, Entity, Index } from 'typeorm';
import {IpDto} from './dto/ip.dto';
import {AbstractEntity} from '../../common/abstract.entity';
import type {IIpEntity} from '../../interfaces/IIpEntity';
import { UseDto } from '../../decorators';
import { IpFlagDto } from './dto/ip-flag.dto';
import { IpConnectionDto } from './dto/ip-connection';
import { IpTimezoneDto } from './dto/ip-timezone.dto';
import { IpCurrencyDto } from './dto/ip-currency.dto';
import { IpSecurityDto } from './dto/ip-security.dto';

@Entity({ name: 'ip' })
@UseDto(IpDto)
export class IpEntity
  extends AbstractEntity<IpDto>
  implements IIpEntity
{
  @Column({ type: 'varchar' })
  @Index({unique: true})
  ip: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  continent: string;

  @Column({ type: 'varchar' })
  continentCode: string;

  @Column({ type: 'varchar' })
  region: string;

  @Column({ type: 'varchar' })
  regionCode: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @Column({ type: 'boolean' })
  isEu: boolean;

  @Column({ type: 'varchar' })
  postal: string;

  @Column({ type: 'varchar' })
  callingCode: string;

  @Column({ type: 'varchar' })
  capital: string;

  @Column({ type: 'varchar' })
  borders: string;

  @Column({ type: 'json' })
  flag: IpFlagDto;

  @Column({ type: 'json' })
  connection: IpConnectionDto;

  @Column({ type: 'json' })
  timezone: IpTimezoneDto;

  @Column({ type: 'json', nullable: true })
  currency?: IpCurrencyDto;

  @Column({ type: 'json', nullable: true })
  security?: IpSecurityDto;

}
