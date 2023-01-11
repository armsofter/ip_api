import { ApiProperty } from '@nestjs/swagger';

export class IpCurrencyDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  code: string;

  @ApiProperty({ type: String })
  symbol: string;

  @ApiProperty({ type: String })
  plural: string;

  @ApiProperty({ type: Number })
  exchangeRate: number;
}
