export function createAction(type) {
  return function (payload) {
    return {
      type,
      payload,
    };
  };
}

export function createFetchActions(type) {
  function pending(payload) {
    return {
      type: type.PENDING,
      payload,
    };
  }

  function success(payload) {
    return {
      type: type.SUCCESS,
      payload,
    };
  }

  function error(payload) {
    return {
      type: type.ERROR,
      payload,
    };
  }

  return { pending, success, error };
}
