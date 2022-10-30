<script lang="ts">
import type { Forecast, WeatherResponse } from "@/@types/weather";
import axios from "axios";
import {format} from "date-fns";


export default {
    name: 'app',
    data () {
        return {
            api_key: '6c1c180d51d2cc24b06fbe9309c3f4af',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {} as WeatherResponse,
            forecast: {} as Forecast,
        }
    },
    methods: {
        format: format,
        fetchWeather () {
            // axios way
            // axios.get(`${this.url_base}weather`, {
            //     params: {
            //         q: this.query,
            //         units: "metric",
            //         appid: this.api_key
            //     }
            // }).then(res => {
            //     if (!res.data) {
            //         console.error("HEEELP");
            //         return;
            //     }
            //     this.setResults(res.data);
            // });
            // fetch way
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then((res) => {
                this.weather = res;
                this.fetchWeather3();
            });
        },
        fetchWeather3 () {
            const coordinates = this.getCoordinates();
            fetch(`${this.url_base}/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then((res) => {
                this.forecast = res;
            });
        },
        dateBuilder () {
            let d = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day}, ${date} ${month} ${year}`;
        },
        getCoordinates(): {lat: number, lon: number} {
            return {
                lat: this.weather.coord.lat,
                lon: this.weather.coord.lon
            }
        }
    }
}

</script>

<template>
    <div>
        <div class="container">
            <div class="city">
                <input 
                type="text" 
                placeholder="enter your city here..."
                v-model="query"
                @keypress.enter="fetchWeather()"
                />
            </div>
        </div>
        <div class="grid-container">
            <div class="temperature" v-if="weather.main != undefined">
                <h3 class="temperature-title">
                    temperature.
                </h3>
                <div class="temperature-container">
                    <span class="temperature-count">
                        {{ Math.round(weather.main.temp) }}°C
                    </span>
                    <br>
                    <span class="temperature-description">
                        {{ weather.weather[0].main }}
                    </span>
                    <div class="temperature-information-container">
                        <!-- Day -->
                        <img src="@/assets/icons/sun/day.png" v-if="weather.weather[0].main.toLowerCase() == 'clear' && format(new Date (dateBuilder()), 'HH') < '18'">
                        <!-- Night -->
                        <img src="@/assets/icons/moon/night.png" v-if="weather.weather[0].main.toLowerCase() == 'clear' && format(new Date (dateBuilder()), 'HH') > '18'">
                        <!-- Cloud -->
                        <img src="@/assets/icons/cloud/cloud_rain.png" v-if="weather.weather[0].main.toLowerCase() == 'shower rain'">
                        <img src="@/assets/icons/cloud/cloud_thunderstorm.png" v-if="weather.weather[0].main.toLowerCase() == 'thunderstorm'">
                        <img src="@/assets/icons/cloud/cloud_snow.png" v-if="weather.weather[0].main.toLowerCase() == 'thunderstorm'">
                        <img src="@/assets/icons/cloud/cloud.png" v-if="weather.weather[0].main.toLowerCase() == 'clouds'">
                        <img src="@/assets/icons/cloud/cloud.png" v-if="weather.weather[0].main.toLowerCase() == 'cloud'">
                        <img src="@/assets/icons/cloud/cloud.png" v-if="weather.weather[0].main.toLowerCase() == 'broken clouds'">
                        <img src="@/assets/icons/sun/day_cloudy.png" v-if="weather.weather[0].main.toLowerCase() == 'few clouds'">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="ipsum-container" v-if="weather.main != undefined">
                    <h3 class="ipsum-title">
                        today.
                    </h3>              
                    <p class="weather-information">
                        {{ format(new Date (dateBuilder()), 'dd MMMM yyyy - HH:mm:ss') }}
                    </p>
                    <div class="weather-information-container">
                        <p class="weather-information">
                            sunrise: {{ format(new Date (weather.sys.sunrise * 1000), 'HH:mm:ss') }}
                        </p>               
                        <p class="weather-information">
                            sunset: {{ format(new Date (weather.sys.sunset * 1000), 'HH:mm:ss') }}
                        </p>   
                    </div> 
                    <div class="weather-information-container">
                        <p class="weather-information">
                            act-temp: {{ Math.round(weather.main.temp) }}°C
                        </p>
                        <p class="weather-information">
                            feels like: {{ Math.round(weather.main.feels_like) }}°C
                        </p>
                        <p class="weather-information">
                            max-temp: {{ Math.round(weather.main.temp_max) }}°C
                        </p>
                        <p class="weather-information">
                            min-temp: {{ Math.round(weather.main.temp_min) }}°C
                        </p>
                        <p class="weather-information">
                            clouds: {{ weather.clouds.all }}%
                        </p>
                    </div> 
                </div>
                <div class="ipsum-container" v-if="weather.main != undefined">
                    <h3 class="ipsum-title">
                        forecast (6-hr).
                    </h3>          
                    <p class="weather-information">
                        {{ format(new Date (forecast.list[2].dt_txt), 'dd MMMM yyyy - HH:mm:ss') }}
                    </p>
                    <div class="weather-information-container">
                        <p class="weather-information">
                            wind: {{ forecast.list[2].wind.speed }} meter/sec
                        </p>               
                        <p class="weather-information">
                            description: {{ forecast.list[2].weather[0].description }}
                        </p>
                    </div>             
                    <div class="weather-information-container">
                        <p class="weather-information">
                            act-temp: {{ Math.round(forecast.list[2].main.temp) }}°C
                        </p> 
                        <p class="weather-information">
                            feels like: {{ Math.round(forecast.list[2].main.feels_like) }}°C
                        </p> 
                        <p class="weather-information">
                            max-temp: {{ Math.round(forecast.list[2].main.temp_max) }}°C
                        </p> 
                        <p class="weather-information">
                            min-temp: {{ Math.round(forecast.list[2].main.temp_min) }}°C
                        </p> 
                    </div>
                </div>
                <div class="ipsum-container" v-if="weather.main != undefined">
                    <h3 class="ipsum-title">
                        forecast (24-hr).
                    </h3>          
                    <p class="weather-information">
                        {{ format(new Date (forecast.list[8].dt_txt), 'dd MMMM yyyy - HH:mm:ss') }}
                    </p>
                    <div class="weather-information-container">
                        <p class="weather-information">
                            wind: {{ forecast.list[8].wind.speed }} meter/sec
                        </p>               
                        <p class="weather-information">
                            description: {{ forecast.list[8].weather[0].description }}
                        </p>
                    </div>              
                    <div class="weather-information-container">
                        <p class="weather-information">
                            act-temp: {{ Math.round(forecast.list[8].main.temp) }}°C
                        </p> 
                        <p class="weather-information">
                            feels like: {{ Math.round(forecast.list[8].main.feels_like) }}°C
                        </p> 
                        <p class="weather-information">
                            max-temp: {{ Math.round(forecast.list[8].main.temp_max) }}°C
                        </p> 
                        <p class="weather-information">
                            min-temp: {{ Math.round(forecast.list[8].main.temp_min) }}°C
                        </p> 
                    </div>
                </div>
                <div class="ipsum-container" v-if="weather.main != undefined">
                    <h3 class="ipsum-title">
                        forecast (48-hr).
                    </h3>          
                    <p class="weather-information">
                        {{ format(new Date (forecast.list[16].dt_txt), 'dd MMMM yyyy - HH:mm:ss') }}
                    </p>
                    <div class="weather-information-container">
                        <p class="weather-information">
                            wind: {{ forecast.list[16].wind.speed }} meter/sec
                        </p>               
                        <p class="weather-information">
                            description: {{ forecast.list[16].weather[0].description }}
                        </p>
                    </div>                 
                    <div class="weather-information-container">
                        <p class="weather-information">
                            act-temp: {{ Math.round(forecast.list[16].main.temp) }}°C
                        </p> 
                        <p class="weather-information">
                            feels like: {{ Math.round(forecast.list[16].main.feels_like) }}°C
                        </p> 
                        <p class="weather-information">
                            max-temp: {{ Math.round(forecast.list[16].main.temp_max) }}°C
                        </p> 
                        <p class="weather-information">
                            min-temp: {{ Math.round(forecast.list[16].main.temp_min) }}°C
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        height: 100%;
        min-height: 60vh;
        width: 100%;
        padding: 0 5% 10vh 5%;

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }

        .ipsum-container {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 15px;
            border: .5px solid transparent;
            outline: none;
            -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            padding: 32px;
            &:hover {
                border: .5px solid #DEE2FF;
                -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            }

            .ipsum-title {
                text-align: center;
                margin-bottom: 32px;
                font-size: 25px;

                &.warm {
                    color: red;
                }
            }

            .weather-information {
                margin: 12px 0;
                font-weight: 500;
            }

            .weather-information-container {
                margin-top: 32px;
            }
        }

        .temperature {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 15px;
            border: .5px solid transparent;
            outline: none;
            -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);

            &:hover {
                border: .5px solid #DEE2FF;
                -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            }

            .temperature-title {
                text-align: center;
                margin-top: 32px;
                margin-bottom: 32px;
                font-size: 25px;
            }

            .temperature-container {
                text-align: center;
                padding-top: 64px;
                .temperature-count {
                    font-size: 128px;
                    font-weight: 600;
                }
                .temperature-description {
                    font-size: 64px;
                }
                .temperature-information-container {
                    margin: 64px auto;

                    img {
                        width: 420px;
                    }
                }
            }
        }
    }

    .city {
        padding: 10vh 0;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            width: 45%;
            padding: 16px 0;
            padding-left: 48px;
            border-radius: 500px;
            border: none;
            font-size: 14px;
            border: .5px solid transparent;
            outline: none;
            color: rgba($color: #000000, $alpha: .6);
            -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);

            &::placeholder {
                opacity: .6;
            }

            &:focus, &:hover {
                border: .5px solid #DEE2FF;
                color: rgba($color: #000000, $alpha: .6);
                -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            }
        }
    }

</style>
