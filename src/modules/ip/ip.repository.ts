import { EntityRepository, Repository } from 'typeorm';

import { IpEntity } from './ip.entity';

@EntityRepository(IpEntity)
export class IpRepository extends Repository<IpEntity> {}
