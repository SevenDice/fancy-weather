import mapboxgl from 'mapbox-gl';

import {
  OPENWEATHERMAP_KEY, OPENCAGEDATA_KEY, MAPBOX_KEY, UNSPLASH_KEY, IPINFO_KEY,
} from './config/Keys';

export default class Model {
  constructor(layout) {
    this.interface = layout;
    this.ipApi = `https://ipinfo.io/json?token=${IPINFO_KEY}`;
    this.weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=`;
    this.geoLocationApi = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGEDATA_KEY}&limit=1&q=`;
    this.unsplashApi = `https://api.unsplash.com/photos/random?per_page=100&client_id=${UNSPLASH_KEY}`;
    this.weatherApiUnits = 'metric';
    this.wetherApiExclude = 'minutely,hourly,alerts';
    this.lang = 'en';
    this.tempDeg = 'celsius';
    this.preventErrorShow = false;
    this.TIME_CONST = 60; // seconds in min & min in hour
    this.MS_IN_SEC = 1000;
    this.MS_IN_MIN = 60000;
  }

  checkDeg(deg) {
    if (deg !== this.tempDeg) this.interface.switchDeg(deg);
    this.tempDeg = deg;
  }

  switchLang(targetBtn) {
    const targetLang = targetBtn.dataset.langVal;
    const currentLang = this.lang;
    this.lang = targetLang;
    return { targetLang, currentLang };
  }

  async getCurrentLocationIP() {
    try {
      const requestApi = await fetch(this.ipApi);
      const location = await requestApi.json();
      const { loc } = location;
      await this.getGeoData(loc);
    } catch (err) {
      this.interface.errorRender('apiIP', this.lang);
    }
  }

  async getGeoData(query) {
    try {
      const url = `${this.geoLocationApi}${query}&language=${this.lang}`;
      const response = await fetch(url);
      const data = await response.json();

      this.country = data.results[0].components.country;
      this.city = data.results[0].components.city
        || data.results[0].components.county || data.results[0].components.state;

      this.offsetSec = data.results[0].annotations.timezone.offset_sec;

      const latitude = data.results[0].geometry.lat.toFixed(4);
      const longtitude = data.results[0].geometry.lng.toFixed(4);

      this.latitude = +latitude;
      this.longtitude = +longtitude;
      this.location = `${latitude},${longtitude}`;
      this.prettyLatitude = data.results[0].annotations.DMS.lat;
      this.prettyLongtitude = data.results[0].annotations.DMS.lng;
    } catch (err) {
      this.interface.errorRender('apiGEO', this.lang);
    }
  }

  getDate() {
    const deviceTimeStamp = Date.now();
    const timeZoneOffsetInSec = new Date().getTimezoneOffset() * this.TIME_CONST;

    const dateUnixUTC = (deviceTimeStamp / this.MS_IN_SEC) + timeZoneOffsetInSec;
    const targetDateUNIX = dateUnixUTC + this.offsetSec;
    this.dateUNIX = targetDateUNIX;
    const targetDate = new Date(targetDateUNIX * this.MS_IN_SEC);

    const weekday = targetDate.toLocaleString(this.lang, { weekday: 'short' });
    const weekdayEN = targetDate.toLocaleString('en', { weekday: 'short' });
    const month = targetDate.toLocaleString(this.lang, { month: 'long' });
    const monthEN = targetDate.toLocaleString('en', { month: 'long' });
    this.monthNumeric = targetDate.toLocaleString('en', { month: 'numeric' });

    this.weekday = weekday[0].toUpperCase() + weekday.slice(1);
    this.weekDayEN = weekdayEN.toLowerCase();
    this.month = month[0].toUpperCase() + month.slice(1);
    this.monthEN = monthEN.toLowerCase();

    this.day = targetDate.toLocaleString(this.lang, { day: '2-digit' });
    this.time = targetDate.toLocaleString(this.lang, { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    this.timeOfDay = targetDate.toLocaleString('ru', { hour: '2-digit' }); 
  }

  getWeatherData() {
    this.getDate();
    let weatherData = null;
    try {
      weatherData = fetch(`
        ${this.weatherApi}${this.city}&lang=${this.lang}&units=${this.weatherApiUnits}&APPID=${OPENWEATHERMAP_KEY}
        `)
        .then((response) => response.json())
        .then((rawData) => {
          this.weatherDescription = rawData.list[0].weather[0].description;
          return this.contentComposition(rawData);
        });
    } catch (err) {
      this.interface.errorRender('weatherAPI', this.lang);
    }
    return weatherData;
  }

  async getPhotoData() {
    let imgUrl = null;
    const screenOrientaion = this.getScreenSize();
    const timeOfDay = this.getTimeOfDay();
    const season = this.getSeason();
    try {
      const url = `${this.unsplashApi}&orientation=${screenOrientaion}&query=weather,${this.weatherDescription},${timeOfDay},${season}`;
      const response = await fetch(url);
      const photoData = await response.json();
      imgUrl = this.resizeImg(photoData);
    } catch (err) {
      if (!this.preventErrorShow) this.interface.errorRender('imageAPI', this.lang);
      imgUrl = './assets/img/default-bg.jpg';
    }
    return imgUrl;
  }

  resizeImg(data) {
    const imgUrl = `${data.urls.raw}&fit=clip&w=${this.screenWidth}&h=${this.screenHeight}&auto=format,compress`;
    return imgUrl;
  }

  getTimeOfDay() {
    let time = +this.timeOfDay;
    if (time >= 20 || time <= 5) time = 'night';
    if (time > 5 && time <= 9) time = 'morning';
    if (time > 9 && time <= 18) time = 'day';
    if (time > 18 && time <= 20) time = 'evening';
    return time;
  }

  getSeason() {
    const month = +this.monthNumeric;
    let season = null;
    if (month === 12 || month <= 2) season = 'winter';
    if (month > 2 && month <= 5) season = 'spring';
    if (month > 5 && month <= 8) season = 'summer';
    if (month > 8 && month <= 11) season = 'fall';
    return season;
  }

  getScreenSize() {
    this.screenWidth = document.documentElement.clientWidth;
    this.screenHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    );
    const orientation = (this.screenWidth >= this.screenHeight) ? 'landscape' : 'portrait';
    return orientation;
  }

  contentComposition(rawData) {
    const temperature = Math.round(rawData.list[0].main.temp);
    const apparentTemperature = Math.round(rawData.list[0].main.feels_like);
    const windSpeed = Math.round(rawData.list[0].wind.speed);
    const humidity = Math.round(rawData.list[0].main.humidity);
    const daily = [rawData.list[7], rawData.list[15], rawData.list[23]];
    const prettyLatitude = this.prettyLatitude.slice(0, 7) + this.prettyLatitude.slice(-2);
    const prettyLongtitude = this.prettyLongtitude.slice(0, 7) + this.prettyLongtitude.slice(-2);
    const transformDaily = this.transformDaily(daily);

    const renderData = {
      dataToday: {
        temperature,
        apparentTemperature,
        windSpeed,
        humidity,
        country: this.country,
        city: this.city,
        weekday: this.weekday,
        day: this.day,
        month: this.month,
        time: this.time,
        summary: rawData.list[0].weather[0].description,
        icon: rawData.list[0].weather[0].icon,
      },
      dataDaily: transformDaily,
      weekDayENshort: this.weekDayEN,
      monthEN: this.monthEN,
      latitude: prettyLatitude,
      longtitude: prettyLongtitude,
    };

    return renderData;
  }

  transformDaily(data) {
    const daily = data;

    for (let i = 0; i < daily.length; i += 1) {
      
      const targetTimeStamp = (daily[i].dt) * this.MS_IN_SEC;
      const weekDay = new Date(targetTimeStamp);

      const weekDayEN = weekDay.toLocaleString('en', { weekday: 'long' });
      daily[i].dt_txt = weekDayEN.toLowerCase();

      const weekDayLong = weekDay.toLocaleString(this.lang, { weekday: 'long' });
      daily[i].sys.pod = weekDayLong;

      const averageTemperature = Math.round((daily[i].main.temp_max + daily[i].main.temp_min) / 2);
      daily[i].main.temp = averageTemperature;
    }
    return daily;
  }

  clockInit(view) {
    const setTime = () => {
      this.getDate();
      view.clockRender(this.time);
    };

    const millisecondsRemain = 1000;
    setTimeout(() => {
      setTime();
      setInterval(() => {
        setTime();
      }, millisecondsRemain);
    }, millisecondsRemain);
  }

  initMap() {
    mapboxgl.accessToken = `${MAPBOX_KEY}`;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longtitude, this.latitude],
      zoom: 9,
    });
    return map;
  }
}
