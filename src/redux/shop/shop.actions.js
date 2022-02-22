    import ShopActionTypes from "./shop.types";

    export const updateCollections = collctionsMap=>({
        type:ShopActionTypes.UPDATE_COLLECTIONS,
        payload:collctionsMap
    });