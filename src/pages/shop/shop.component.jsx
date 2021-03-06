import React from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import  CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { firestore ,convetCollectionsSpanpsotToMap} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


import CollectionPage from "../collection/collection.component";
const CollectionsOverviewWithSpineer=WithSpinner(CollectionsOverview);
const CollectionPageWithSpineer = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading :true
  };

  unsubscribeFromSnapshot =null;
  componentDidMount(){
    const {updateCollections}=this.props;
    const collectionRef =firestore.collection('collections');

    //fetch('https://firestore.googleapis.com/v1/projects/crwn-db-b55e9/databases/(default)/documents/collections')
     //.then(Response =>Response.json())
     //.then(collections=>console.log(collections));
   
    collectionRef.onSnapshot(async snaphot=>{
    const collectionsMap = convetCollectionsSpanpsotToMap(snaphot);
    updateCollections(collectionsMap);
    this.setState({loading :false});
    });
  }
  render(){
    const {match}=this.props;
    const {loading} =this.state;
    return(
      <div className='shop-page'>
            <Route exact path={`${match.path}`}
            render={props=> (
              <CollectionsOverviewWithSpineer isLoading={loading} {...props} />
              )}
          />
            <Route path={`${match.path}/:collectionId`} 
            render={props=> (
              <CollectionPageWithSpineer isLoading={loading} {...props} />
          )}/>
        </div>
    );
  }
}
const mapDispatchToProps= dispatch =>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);