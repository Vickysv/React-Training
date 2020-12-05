export default function projectReducer(currentState = [], action) {
    if (action.type === "PROJECT_ADD_NEW") {
      return [...currentState, action.payload];
    }
    return currentState;
  }