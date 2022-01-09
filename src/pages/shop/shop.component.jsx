import React from "react";

import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection.preview/collection-preview";

class ShopPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render(){y
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id,  ...otherCollectionprops })=>(
                <CollectionPreview key={id} {...otherCollectionprops}/>
                ))
            }
        
            </div>);
    }
}
export default ShopPage;