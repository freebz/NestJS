// 7.2 파이프의 내부 구현 이해하기

// validation.pipe.ts

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    return value;
  }
}



export interface PipeTransform<T = any, R = any> {
    transform(value: T, metadata: ArgumentMetadata): R;
}



export interface ArgumentMetadata {
    readonly type: Paramtype;
    readonly metatype?: Type<any> | undefined;
    readonly data?: string | undefined;
}

export declare type Paramtype = 'body' | 'query' | 'param' | 'custom';



@Get(':id')
findOne(@Param('id', ValidationPipe) id: number) {
  return this.usersService.findOne(id);
}


{ metatype: [Function: Number], type: 'param', data: 'id' }