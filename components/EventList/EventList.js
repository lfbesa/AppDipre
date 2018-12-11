import PropTypes from "prop-types";
import React, { Component } from "react";
import { FlatList } from "react-native";

import EventListElement from "../EventListElement";
import styles from "./styles";

export default class EventList extends Component {
  static propTypes = {
    eventList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        epigraph: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      })
    ).isRequired
  };


  state = {
    selected: null,
  };

  getItemLayout = (data, index) => ({
    length: 108 + 5,
    offset: (108 + 5) * index,
    index
  });

  _keyExtractor = event => event.id.toString();


  _getItemIndex = item =>
    this.props.eventList
      .findIndex(element => item === element);

  _scrollToIndex = item => {
    this.flatListRef.scrollToIndex({
      index: this._getItemIndex(item),
      viewOffset: 0,
      viewPosition: 0
    });
  };
  
  _onPressItem = item => {
    this.setState(
      { selected: this.state.selected === item.id ? null : item.id },
      () => {
        if (this.state.selected) {
          setTimeout(() => this._scrollToIndex(item, 300));
        } else {
          setTimeout(() =>
            this.flatListRef.scrollToIndex({
              index: 0,
              viewOffset: 0,
              viewPosition: 0
            })
          );
        }
      }
    );
  };

  _renderItem = ({ item }) => (
    <EventListElement
      event={item}
      selected={item.id === this.state.selected}
      onPressItem={() => this._onPressItem(item)}
      extraData={this.state}
    />
  );

  render() {
    return (
      <FlatList
        style={styles.flatList}
        ref={ref => {
          this.flatListRef = ref;
        }}
        getItemLayout={this.getItemLayout}
        contentContainerStyle={styles.content}
        data={this.props.eventList}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
        onRefresh={this.props.onRefresh}
        refreshing={this.props.refreshing}
      />
    );
  }
}
