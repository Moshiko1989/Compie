import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("ItemStore")
@observer
export class ItemsList extends Component {
    state = {
        itemsHtml: null,
        loader: <p>will be a loader</p>
    }

    componentDidMount() {
        this.props.ItemStore.loadItems().then(() => this.render());
    }

    rendetLis = () => {

        if (this.props.ItemStore.branchesGetter) {

            let sorted = this.props.ItemStore.branchesGetter.sort((a, b) => {
                return a.distance - b.distance;
            })

            let mostCommon = null;
            let initSpread = 0;
            this.props.ItemStore.itemsGetter.forEach(market => {
                if (market.spread > initSpread) {
                    initSpread = market.spread;
                    mostCommon = market;
                }
            })

            console.log(mostCommon)

            let list = sorted.map(branch => {
                return (
                    <li key={branch._id}>
                        <p>שם: {branch.name} </p>
                        <p>מרחק: {branch.distance} מטרים</p>
                        <p>מותג: {branch.brand} </p>
                    </li>
                )
            })



            return (
                <div>
                    <p>הרשת עם הפריסה הטובה ביותר באיזורך היא: {mostCommon.hebrew}</p>
                    <ul>
                        {list}
                    </ul>
                </div>
            )
        } else {
            return <p>Please enter address first</p>
        }
    }

    render() {
        return (
            this.props.ItemStore.itemsGetter ?
                this.rendetLis()
                :
                this.state.loader
        )
    }
}