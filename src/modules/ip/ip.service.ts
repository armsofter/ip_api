import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import _ from 'lodash';
import { Repository } from 'typeorm';

import type { IpDto } from './dto/ip.dto';
import { IpEntity } from './ip.entity';
import { IpNotFoundException} from '../../exceptions/ip-not-found.exception';
import  { ApiConfigService } from "../../shared/services/api-config.service";

@Injectable()
export class IpService {
  constructor(
    private http: HttpService,
    private configService: ApiConfigService,
    @InjectRepository(IpEntity) private ipRepository: Repository<IpEntity>,
  ) {}

  async getIpInfo(ip: string): Promise<IpDto> {

    const ipInfoEntity = await this.ipRepository.findOne({ where: { ip: ip } });

    if (ipInfoEntity) {
      return ipInfoEntity.toDto();
    }

    const response = await this.http.get(`${this.configService.ipApi}${ip}`).toPromise();

    if (response?.data && response?.data.success) {
      const entity = this.ipRepository.create(
        _.mapKeys(response?.data, (v, k) => _.camelCase(k)),
      );
      const ipEntity = await this.ipRepository.save(entity);

      return ipEntity.toDto();
    }

    throw new IpNotFoundException();
  }

  async deleteIpInfo(ip: string): Promise<void> {
    await this.ipRepository.delete( { ip: ip });
  }
}
