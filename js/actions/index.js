import * as types from '../constants/ActionTypes'

export const addEntity = entity => ({
  type: types.ADD_ENTITY,
  entity: entity
})

export const setEntityProperty = (entityIds, propertyName, propertyValue)  => ({
  type: types.SET_ENTITY_PROPERTY,
  entityIds,
  propertyName,
  propertyValue
})
