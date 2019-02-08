import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

navigateTo = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

replace = (routeName, params) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName, params })]
  });

  _navigator.dispatch(resetAction);
};

back = key => {
  _navigator.dispatch(
    NavigationActions.back({
      key
    })
  );
};

export default {
  navigateTo,
  replace,
  back,
  setTopLevelNavigator
};
