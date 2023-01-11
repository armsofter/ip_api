import { ApiProperty } from '@nestjs/swagger';

export class IpConnectionDto {
  @ApiProperty({ type: String })
  org: string;

  @ApiProperty({ type: String })
  isp: string;

  @ApiProperty({ type: String })
  domain: string;

  @ApiProperty({ type: Number })
  asn: number;
}
