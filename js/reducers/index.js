// @flow
import { combineReducers } from 'redux'
import entity from './entity'
import editor from './editor'

const gameblox = combineReducers({
  entity,
  editor
})

export default gameblox
