const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("Current state:", store.getState());
  console.log("Action:", action);
  next(action);
  console.log("New State:", store.getState());
};
export default loggerMiddleWare;
