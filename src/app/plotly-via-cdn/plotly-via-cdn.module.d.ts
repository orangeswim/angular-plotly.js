import { ModuleWithProviders } from '@angular/core';
export declare class PlotlyViaCDNModule {
    static plotlyVersion?: string;
    static setPlotlyVersion(version: string): void;
    static loadViaCDN(): void;
    static forRoot(config: Partial<{
        version: string;
    }>): ModuleWithProviders<PlotlyViaCDNModule>;
}
