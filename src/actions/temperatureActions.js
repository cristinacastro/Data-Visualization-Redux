import axios from "axios";
import moment from "moment";

export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_TEMPERATURE",
    });

    const response = await axios.get(
      "https://ps8.pubnub.com/v2/subscribe/sub-c-5f1b7c8e-fbee-11e3-aa40-02ee2ddab7fe/pubnub-sensor-network/0?tt=16119418483411811"
    );

    const labels = [];
    const data = [];
    for (let i = 0; i < response.data.m.length; i++) {
      labels.push(
        moment(response.data.m[i].d.timestamp).format("HH:mm:ss.SSS")
      );
      data.push(response.data.m[i].d.ambient_temperature);
      //data.push(response.data.m[i].d.humidity);
    }

    dispatch({
      type: "SUCCESS_TEMPERATURE",
      payload: {
        data,
        labels,
      },
    });
    //console.log(labels, "labels");
    //console.log(data, "data");
  } catch (e) {
    dispatch({
      type: "REJECTED_TEMPERATURE",
    });
  }
};
