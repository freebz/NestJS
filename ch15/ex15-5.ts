// 15.4 커스텀 상태 표시기

export declare abstract class HealthIndicator {
    protected getStatus(key: string, isHealthy: boolean, data?: {
        [key: string]: any;
    }): HealthIndicatorResult;
}