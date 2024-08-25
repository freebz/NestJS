// 6.4.1 커스텀 Config 파일 작성

export interface ConfigRactoryKeyHost<T = unknown> {
    KEY: string;
    asProvider(): {
        imports: [ReturnType<typeof ConfigModule.forFeature>];
        useFactory: (config: T) => T;
        inject: [string];
    };
}

export declare function registerAs<TConfig extends ConfigObject, TFactory extends
ConfigFactory = ConfigFactory<TConfig>>(token: string, configFactory: TFactory): TFactory &
ConfigFactoryKeyHost<ReturnType<TFactory>>;