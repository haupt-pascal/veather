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
        fetchWeather (e) {
            if (e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                    return res.json();
                }).then(this.setResults);
            }
        },
        setResults (results)  {
            this.weather = results;
        }
    }
}
</script>

<template>
    <div>
        <div class="temperature">
            <h3 class="temperature-title">
                temperature.
            </h3>
            <input 
                type="text" 
                placeholder="enter your city here..."
                v-model="query"
                v-on:keypress="fetchWeather"
            />
            <div class="temperature-container" v-if="typeof weather.main != 'undefined'">
                
                <h3>
                    {{ weather.name }}
                </h3>
                <h3>
                    {{ weather.sys.country }}
                </h3>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
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
</style>