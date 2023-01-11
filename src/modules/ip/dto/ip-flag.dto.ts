import { ApiProperty } from '@nestjs/swagger';

export class IpFlagDto {
  @ApiProperty()
  img: string;

  @ApiProperty()
  emoji: string;

  @ApiProperty()
  emojiUnicode: string;
}
