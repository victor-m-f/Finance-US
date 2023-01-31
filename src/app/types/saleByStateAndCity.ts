export type SaleByStateAndCity = {
    stateName: string,
    stateCoords: string,
    city: string,
    total: number,
    percentage: number,
};

export type SalesByStateAndCity = SaleByStateAndCity[];