import { ApiProperty } from '@nestjs/swagger';

export class IpSecurityDto {
  @ApiProperty({ type: Boolean })
  anonymous: boolean;

  @ApiProperty({ type: Boolean })
  proxy: boolean;

  @ApiProperty({ type: Boolean })
  vpn: boolean;

  @ApiProperty({ type: Boolean })
  tor: boolean;

  @ApiProperty({ type: Boolean })
  hosting: boolean;

}
