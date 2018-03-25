import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import Geocode from 'react-geocode';
import geolib from 'geolib'

import { inject, observer } from "mobx-react";

// style={{ width: '90%' }}


@inject("ItemStore")
@observer
export class MyAutoComlete extends Component {

    setUserAddress = place => {
        const MaxDist = 50000;
        const BranchesLength = 20;
        let branchesCount = 0;


        const userAddress = place.formatted_address;
        this.props.ItemStore.setUserAddress(userAddress);
        // Validation of address is needed.
        Geocode.fromAddress(this.props.ItemStore.userAddressGetter)
            .then(res => {

                const { lat, lng } = res.results[0].geometry.location;
                this.props.ItemStore.setUserCoor({ latitude: lat, longitude: lng });

                let branches = this.props.ItemStore.itemsGetter.reduce((acc, market) => {
                    market.branches.forEach(branch => {
                        Geocode.fromAddress(branch.name)
                            .then(res => {
                                const { lat, lng } = res.results[0].geometry.location;

                                branch.coordinats = { latitude: lat, longitude: lng }
                                branch.distance = geolib.getDistance(branch.coordinats, this.props.ItemStore.userCoorGetter);
                                branch.brand = market.hebrew;
                                if(!market.spread) market.spread = 0;
                                if (branch.distance < MaxDist) {
                                    market.spread++
                                }

                                if (acc.length === BranchesLength) {
                                    branchesCount++
                                    if (branchesCount === BranchesLength) {
                                        this.props.ItemStore.setBranches(branches)
                                    }
                                }
                            })
                        acc.push(branch)
                    })
                    return acc;
                }, [])
            })
    }

    onSubmit = ev => {
        ev.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Autocomplete
                    className="MyAutoComlete"
                    onPlaceSelected={this.setUserAddress}
                    types={['geocode']}
                    placeholder="המיקום שלי"
                />
                <input type="submit" value="שלח" />
            </form>
        )
    }
}