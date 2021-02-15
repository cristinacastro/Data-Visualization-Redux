const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "Humidity",
        data: [],
        fill: false,
        backgroundColor: "rgba(245,45,180,0.2)",
        borderColor: "rgba(245,45,180,0.8)",
        pointBorderColor: "rgba(245,45,180,0.8)",
      },
    ],
  },
};

const humidityReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_HUMIDITY":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_HUMIDITY":
      return {
        ...state,
        loading: false,
        message: "An error occurred while getting the data",
      };
    case "SUCCESS_HUMIDITY":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "Humidity",
              data: payload.data,
              fill: false,
              backgroundColor: "rgba(245,45,180,0.2)",
              borderColor: "rgba(245,45,180,0.8)",
              pointBorderColor: "rgba(245,45,180,0.8)",
            },
          ],
        },
      };

    default:
      return state;
  }
  return state;
};

export default humidityReducer;
