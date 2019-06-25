import React, { Component } from 'react';
import axios from 'axios'
import Game from "./Game"
import * as _ from "lodash"
import { connect } from "react-redux"
import { Drawer, Position, Classes, Button, RadioGroup, Radio } from '@blueprintjs/core';
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import './App.css';
import { Stats } from "./Stats";
import Settings from "./components/Settings";
import { fetchGames } from "./redux/actions/games";
import { fetchPacks } from "./redux/actions/packs";

class App extends Component {
  state = {
    serverStatus: "",
    sortedBy: "playtimeForever",
    sortOrder: "desc",
    isSettingsOpen: false,
    isStatsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await this.props.fetchGames();
    await this.props.fetchPacks();
  };

  saveData = (appId, price) => {
    this.setState({ serverStatus: "loading" });
    price = parseInt(price);
    axios.patch(`http://steamify-api.61hub.com/v1/games/${appId}`, { price })
      .then(response => this.setState({ serverStatus: "success" }))
      .catch(response => this.setState({ serverStatus: "error" }));

    this.props.gameUpdate({ appId, price });
  };

  saveDataDlc = (appid, nameValue, priceValue) => {
    const clonedGames = [...this.props.games];
    const elementToUpdatePrice = clonedGames.find((element) => element.appId == appid);

    this.setState({ serverStatus: "loading" });
    axios.patch(`http://steamify-api.61hub.com/v1/games/${appid}`, {
      dlc: [...elementToUpdatePrice.dlc, {
        name: nameValue,
        price: priceValue
      }]
    })
      .then(response => this.setState({ serverStatus: "success" }))
      .catch(response => this.setState({ serverStatus: "error" }));


    const indexElToUpdatePrice = clonedGames.findIndex((element) => element.appId == appid);
    const updated = { ...elementToUpdatePrice };
    updated.dlc = [...updated.dlc, { name: nameValue, price: priceValue }];
    clonedGames[indexElToUpdatePrice] = updated;

    this.props.dispatchGamesToStore(clonedGames);
  };

  addPack = ({ packName, packPrice }) => {
    axios.post(`http://steamify-api.61hub.com/v1/packs`, { name: packName, price: packPrice })
  };

  render() {
    const { games, packs } = this.props;

    return (
      <div className="container">
        <div className="controls">
          <Button className="bp3-minimal" onClick={() => this.setState({ isSettingsOpen: true })}
                  icon="settings"/>
          <Button className="bp3-minimal" onClick={() => this.setState({ isStatsOpen: true })}
                  icon="grouped-bar-chart"/>
          <Button className='bp3-minimal' onClick={this.fetchData} icon="refresh"/>
        </div>

        <Settings
          isOpen={this.state.isSettingsOpen}
          onClose={() => this.setState({ isSettingsOpen: false })}
          serverStatus={this.state.serverStatus}
          onSortChange={e => this.setState({ sortedBy: e.currentTarget.value })}
          sortedBy={this.state.sortedBy}
          sortOrder={this.state.sortOrder}
          onSortOrderChange={e => this.setState({ sortOrder: e.currentTarget.value })}
          addPack={this.addPack}
        />

        <Drawer
          isOpen={this.state.isStatsOpen}
          onClose={() => this.setState({ isStatsOpen: false })}
          autoFocus={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          enforceFocus={true}
          hasBackdrop={true}
          position={Position.RIGHT}
          usePortal={true}
          size={Drawer.SIZE_LARGE}
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <Stats games={[...this.props.games]} packs={[...this.props.packs]}/>
            </div>
          </div>
        </Drawer>

        <div className="mainWrapper">

          {_.orderBy([...packs, ...games], [this.state.sortedBy, "playtimeForever"], [this.state.sortOrder])
            .filter(el => !el.hidden)
            .map((el, index) =>
              <Game
                key={el.appId}
                data={el}
                index={index}
                saveData={this.saveData}
                saveDataDlc={this.saveDataDlc}
                packages={this.props.games.filter((el) => el.items)}
                packId={this.state.packId}
                onAddedToPack={this.fetchGamesData}
              />
            )}
        </div>
      </div>

    );
  }
}

export default connect(
  ({ games, packs }) => ({ games, packs }),
  (dispatch) => {
    return {
      fetchGames() {
        return dispatch(fetchGames())
      },

      fetchPacks() {
        return dispatch(fetchPacks())
      },

      gameUpdate(game) {
        dispatch({
          type: 'gameUpdate',
          game
        })
      },

      dispatchGamesToStore(data) {
        dispatch({
          data: data,
          type: "gamesToStore"
        })
      }
    }
  }
)(App);

