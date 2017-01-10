import {
  ADD_ENTITY,
  SET_ENTITY_PROPERTY,
  
} from '../constants/ActionTypes'

const initialState = {}

const entity = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY:
      var newState = Object.assign({}, state);
      newState[action.entity.id] = action.entity
      return newState
    case SET_ENTITY_PROPERTY:
      var newState = Object.assign({}, state);
      for(var i=0;i<action.entityIds.length;i++) {
        newState[action.entityIds[i]][action.propertyName] = action.propertyValue;
      }
      return newState;
    default:
      return initialState
      /*return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }*/
  }
}

export default entity