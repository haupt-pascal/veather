<script>
export default {
    name: 'app',
    data () {
        return {
            api_key: '6c1c180d51d2cc24b06fbe9309c3f4af',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {}
        }
    },
    methods: {
        fetchWeather (e: any) {
            if (e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                    return res.json();
                }).then(this.setResults);
            }
        },
        setResults (results: any)  {
            this.weather = results;
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
                v-on:keypress="fetchWeather"
                />
            </div>
        </div>
        <div class="grid-container">
            <div class="temperature">
                <h3 class="temperature-title">
                    temperature.
                </h3>
                <div class="temperature-container" v-if="typeof weather.main != 'undefined'">
                    <h3>
                        {{ weather.name }}
                    </h3>
                    <h3>
                        {{ weather.sys.country }}
                    </h3>
                    <h3>
                        {{ dateBuilder() }}
                    </h3>
                    <h3>
                        {{ Math.round(weather.main.temp) }}°C
                    </h3>
                    <h3>
                        {{ weather.weather[0].main }}
                    </h3>
                </div>
            </div>
            <div class="container">
                <div class="ipsum-container">
                    <h3 class="ipsum-title" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 
                    'warm' : ''">
                        ipsum.
                    </h3>
                </div>
                <div class="ipsum-container">
                    <h3 class="ipsum-title">
                        ipsum.
                    </h3>
                </div>
                <div class="ipsum-container">
                    <h3 class="ipsum-title">
                        ipsum.
                    </h3>
                </div>
                <div class="ipsum-container">
                    <h3 class="ipsum-title">
                        ipsum.
                    </h3>
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
        padding: 0 5%;

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

            &:hover {
                border: .5px solid #DEE2FF;
                -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            }

            .ipsum-title {
                text-align: center;
                margin-top: 32px;
                margin-bottom: 32px;
                font-size: 25px;

                &.warm {
                    color: red;
                }
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
        }
    }

    .city {
        margin: 10vh 0;
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
