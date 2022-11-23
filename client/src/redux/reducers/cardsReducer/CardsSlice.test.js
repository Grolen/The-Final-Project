import reducer from './CardsSlice'
import { fetchCards } from './ActionCreators'

describe('CardSliceTest', () => {
  describe('extraReducers', () => {
    const initialState = {
      cards: [],
      cardsLoading: false,
      cardsError: '',
    }

    test('fetchCards is pending', () => {
      const action = { type: fetchCards.pending.type }
      const state = reducer(initialState, action)
      expect(state).toEqual({ cards: [], cardsLoading: true, cardsError: '' })
    })

    test('fetchCards is fulfilled', () => {
      const action = {
        type: fetchCards.fulfilled.type,
        payload: { cards: [2, 5] },
      }
      const state = reducer(initialState, action)
      expect(state).toEqual({
        cards: action.payload,
        cardsLoading: false,
        cardsError: '',
      })
    })

    test('fetchCards is rejected', () => {
      const action = {
        type: fetchCards.rejected.type,
        payload: { cardsError: 'Cannot upload cards' },
      }
      const state = reducer(initialState, action)
      expect(state).toEqual({
        cards: [],
        cardsLoading: false,
        cardsError: action.payload,
      })
    })
  })
})
