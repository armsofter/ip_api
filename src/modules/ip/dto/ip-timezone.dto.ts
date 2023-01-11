import { ApiProperty } from '@nestjs/swagger';

export class IpTimezoneDto {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  abbr: string;

  @ApiProperty({ type: String })
  utc: string;

  @ApiProperty({ type: Date })
  currentTime: Date;

  @ApiProperty({ type: Boolean })
  isDst: boolean;

  @ApiProperty({ type: Number })
  offset: number;
}
