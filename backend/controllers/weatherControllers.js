import axios from "axios";
const weatherEndpoint = "http://api.openweathermap.org/data/2.5/forecast";

const getCurrentWeather = async (req, res) => {
  try {
    const response = await axios.get(weatherEndpoint, {
      params: {
        lat: 6.8923066110899205,
        lon: 3.718197146145194,
        appid: "8efb0bc154b0d38e884eeff5aefd229e",
        cnt: 1,
        units: "metric",
      },
    });
    const data = response.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Failed to get weather",
    });
    console.log(err);
  }
};

export { getCurrentWeather };
