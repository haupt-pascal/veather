/* WEATHER */

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}


/* FORECAST */

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastList[];
    city: ForecastCity;
}

export interface ForecastList {
    dt: number;
    main: ForecastMain;
    weather: ForecastWeather[];
    clouds: ForecastClouds;
    wind: ForecastWind;
    visibility: number;
    pop: number;
    sys: ForecastSys;
    dt_txt: string;
    rain?: ForecastRain;
}

export interface ForecastMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface ForecastWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface ForecastClouds {
    all: number;
}

export interface ForecastWind {
    speed: number;
    deg: number;
    gust: number;
}

export interface ForecastSys {
    pod: string;
}

export interface ForecastRain {
    "3h": number;
}

export interface ForecastCity {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}