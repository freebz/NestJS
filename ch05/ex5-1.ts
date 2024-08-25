// 5.1 모듈: 응집성 있는 설계

export declare function Module(metadata: ModuleMetadata): ClassDecorator;

export interface ModuleMetadata {
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    controllers?: Type<any>[];
    providers?: Provider[];
    exports?: Array<DynamicModule | Promise<DynamicModule> | string | symbol | Provider | ForwardReference | Abstract<any> | Function>;
}