import { NotFoundException } from '@nestjs/common';

export class IpNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.ipNotFound', error);
  }
}
