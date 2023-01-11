import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IpController } from './ip.controller';
import { IpEntity } from './ip.entity';
// import { IpRepository } from './ip.repository';
import { IpService } from './ip.service';

@Module({
  imports: [TypeOrmModule.forFeature([IpEntity])],
  controllers: [IpController],
  providers: [IpService],
  exports: [IpService],
})
export class IpModule {}
