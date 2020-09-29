import React, { Component } from 'react'
import axios from 'axios'

class Deck extends Component {
  state = {
    deck: {},
    hand: [],
    total: 0,
  }
  async componentDidMount() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      .then(resp => {
        this.setState({ deck: resp.data })
        axios
          .get(
            `https://deckofcardsapi.com/api/deck/${resp.data.deck_id}/draw/?count=2`
          )
          .then(resp2 => {
            this.setState({ hand: resp2.data.cards })
            this.calculateValue(resp2.data.cards)
          })
      })
  }
  calculateValue = hand => {
    let total = 0
    hand.map(card => {
      switch (card.value) {
        case 'JACK':
          total += 10
          break
        case 'QUEEN':
          total += 10
          break
        case 'KING':
          total += 10
          break
        case 'ACE':
          total += 11
          break
        default:
          total += parseInt(card.value)
          break
      }
    })
    this.setState({ total })
  }

  handleDealing = () => {
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=1`
      )
      .then(resp => {
        this.setState({
          hand: [...this.state.hand, ...resp.data.cards],
        })
        this.calculateValue([...this.state.hand, ...resp.data.cards])
      })
  }

  render() {
    return (
      <>
        {this.state.hand.map(card => (
          <img src={card.image} />
        ))}
        <h2>Total</h2>
        <h3>{this.state.total}</h3>
        <button onClick={this.handleDealing}>Deal a Card</button>
      </>
    )
  }
}
export default Deck
