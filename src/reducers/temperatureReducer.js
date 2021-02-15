const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        fill: false,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,0.8)",
        pointBorderColor: "rgba(255,99,132,0.8)",
      },
    ],
  },
};

const temperatureReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_TEMPERATURE":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_TEMPERATURE":
      return {
        ...state,
        loading: false,
        message: "An error occurred while getting the data",
      };
    case "SUCCESS_TEMPERATURE":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "Temperature",
              data: payload.data,
              fill: false,
              backgroundColor: "rgba(255,99,132,0.4)",
              borderColor: "rgba(255,99,132,0.8)",
              pointBorderColor: "rgba(255,99,132,0.8)",
            },
          ],
        },
      };

    default:
      return state;
  }
  return state;
};

export default temperatureReducer;
