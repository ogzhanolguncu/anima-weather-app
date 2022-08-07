import axios from "axios";
import useGeolocation from "react-hook-geolocation";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  Place,
  Place1,
  OverlapGroup,
  FlexRow,
  Ellipse1,
  OverlapGroup1,
  Nem,
  Number1,
  FlexRow1,
  Rzgar,
  Address,
  IconBrightness,
  Number,
} from "./styled";
import SunIcon from "./assets/sun.svg";

const queryClient = new QueryClient();

type WeatherResponse = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
  wind: { speed: number };
};

const API_KEY = "a5bbf8358afd578819f89b4f8939dc2b";
const getCurrentWeather = async (lat: number, long: number) =>
  axios
    .get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
    )
    .then((x) => x.data);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherForecast />
    </QueryClientProvider>
  );
}

export default App;

function WeatherForecast() {
  const geolocation = useGeolocation();
  const { isLoading, error, data } = useQuery(
    ["weatherData", geolocation.latitude, geolocation.longitude],
    () => getCurrentWeather(geolocation.latitude, geolocation.longitude)
  );

  if (error || isLoading) return <div>Loading!!!</div>;

  return (
    <div className="container-center-horizontal">
      <div className="weatherforecastscreen">
        <Place>{data?.sys.country}</Place>
        <Place1>{data?.name}</Place1>
        <OverlapGroup>
          <FlexRow>
            <X8725703CloudShowersHeavyIcon1 />
            <Number>{data?.main.feels_like}</Number>
            <Ellipse1></Ellipse1>
          </FlexRow>
          <OverlapGroup1 style={{ width: "100%" }}>
            <Nem>Humidity</Nem>
            <Number1>{data?.main.humidity}</Number1>
          </OverlapGroup1>
          <FlexRow1 style={{ width: "100%" }}>
            <Rzgar>Wind</Rzgar>
            <Address>{data?.wind.speed}</Address>
          </FlexRow1>
        </OverlapGroup>
      </div>
    </div>
  );
}


function X8725703CloudShowersHeavyIcon1() {
  return <IconBrightness src={SunIcon} />;
}
