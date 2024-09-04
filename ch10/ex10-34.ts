export declare type CustomDecorator<TKey = string> = MethodDecorator & ClassDecorator & {
  KEY: TKey
};