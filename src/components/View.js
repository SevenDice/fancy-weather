const iconCodes=['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'];
const SkyconsArray=['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'CLOUDY',  
                    'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'SHOWERS_DAY', 'SHOWERS_NIGHT', 'RAIN', 'RAIN', 
                    'THUNDER_SHOWERS_DAY', 'THUNDER_SHOWERS_NIGHT', 'SNOW','SNOW', 'FOG', 'FOG' ];
const langBase = {
  en: {
    lang: 'en',
    bntSearch: 'search',
    todayFeels: 'feels like:&nbsp;',
    todayWind: 'wind:',
    windSpeed: 'm/s',
    todayHumidity: 'humidity:',
    searchPlaceholder: 'Type the place, please',
    latitude: 'Latitude:&nbsp;',
    longtitude: 'Longtitude:&nbsp;',
    errors: {
      apiIP: 'Ooopss... Something went wrong. Perhaps it has to do with the definition IP',
      apiGEO: 'Please try again, and make sure, that your query is correct',
      weatherAPI: 'Ooopss... Something went wrong. Perhaps it has to do with weather server',
      imageAPI: `<p>Ooopss... Photo-server limit is over</p>
                <label class="prevent-show"><input type="checkbox">Don't show this message again</label>`,
    },
  },
  ru: {
    lang: 'ru',
    bntSearch: 'поиск',
    todayFeels: 'ощущается как:&nbsp;',
    todayWind: 'скорость ветра:',
    windSpeed: 'м/сек',
    todayHumidity: 'влажность:',
    searchPlaceholder: 'Укажите место',
    latitude: 'Широта:&nbsp;',
    longtitude: 'Долгота:&nbsp;',
    errors: {
      apiIP: 'Ошибка, связанная с сервисом определения местоположения',
      apiGEO: 'Пожалуйста, убедитесь в правильности ввода местоположения и попытайтесь снова',
      weatherAPI: 'Что-то пошло не так. Возникла ошибка, связанная с сервером передачи данных о погоде',
      imageAPI: `<p>Упс...) Закончился лимит картинок на сервере</p>
                <label class="prevent-show"><input type="checkbox">Больше не показывать это сообщение</label>`,
    },
  },
  be: {
    lang: 'be',
    bntSearch: 'пошук',
    todayFeels: 'адчуваецца як:&nbsp;',
    todayWind: 'хуткасць ветру:',
    windSpeed: 'м/сек',
    todayHumidity: 'вільготнасць:',
    searchPlaceholder: 'Увядзіце месца',
    latitude: 'Шырата:&nbsp;',
    longtitude: 'Даўгата:&nbsp;',
    belDate: {
      mon: 'пнд', tue: 'аўт', wed: 'сер', thu: 'чцв', fri: 'пят', sat: 'суб', sun: 'няд', monday: 'панядзелак', tuesday: 'аўторак', wednesday: 'серада', thursday: 'чацьвер', friday: 'пятніца', saturday: 'субота', sunday: 'нядзеля', january: 'студзень', february: 'люты', march: 'сакавік', april: 'красавік', may: 'травень', june: 'чэрвень', july: 'ліпень', august: 'жнівень', september: 'верасень', october: 'кастрычнік', november: 'лістапад', december: 'снежань',
    },
    errors: {
      apiIP: 'Памылка, звязаная з сэрвісам вызначэння месцазнаходжання',
      apiGEO: 'Калі ласка, пераканайцеся ў правільнасці ўводу месцазнаходжання і паспрабуйце зноў',
      weatherAPI: 'Нешта пайшло не так. Паўстала памылка, звязаная з серверам перадачы дадзеных пра надвор\'е',
      imageAPI: `<p>Скончыўся ліміт малюнкаў на сэрвэры</p>
                <label class="prevent-show"><input type="checkbox">Не паказваць гэтае паведамленне зноў</label>`,
    },
  },
};

export default class Layout {
  constructor(skycons){
    this.icons = skycons(this);
    document.documentElement.lang = 'en';
    this.bodyWrapper = document.createElement('div');
    this.bodyWrapper.classList.add('body-wrapper');

    this.header = document.createElement('header');
    this.header.classList.add('controls-block', 'flow-blocks-wrapper');
    this.bodyWrapper.append(this.header);

    this.main = document.createElement('main');
    this.main.classList.add('main-wrapper', 'flow-blocks-wrapper');
    this.bodyWrapper.append(this.main);
    document.body.append(this.bodyWrapper);

    this.body = document.body;
    this.isLangListExpand = false;
  }
  
  // <li data-lang-val="be" data-action="switchLang">by</li>

  controlsRender() {
    const markup = `
        <div class="control-bnt-wrap">
          <button class="btn-controls btn-controls_image">
            <i class="fas fa-sync-alt" data-action="switchImg"></i>
          </button>
          <div class="expand-list-wrapper">
            <button class="btn-controls btn-controls_lang" data-lang-val="en" data-action="expandLangMenu">en</button>
            <div class="expand-list-container">
              <ul class="lang-list">
                
                <li data-lang-val="ru" data-action="switchLang">ru</li>
              </ul>
            </div>
          </div>
          <button class="btn-controls btn-controls_temp-f" data-deg-val="fahrenheit" data-action="switchDeg">&deg; f</button>
          <button class="btn-controls btn-controls_temp-c active-deg" data-deg-val="celsius" data-action="switchDeg">&deg; c</button>
        </div>
        <div class="control-search-wrap"> 
          <input class="search-field" type="text" placeholder="">
          <div class="speech-btn"><i class="fas fa-microphone" data-action="userSpeech"></i></div>
          <button class="btn-controls btn-search" data-lang="bntSearch" data-action="userSearch">search</button>
        </div>
    `;

    this.header.innerHTML = markup;
    this.langContainerElem = document.querySelector('.expand-list-container');
    this.langList = document.querySelector('.lang-list');
    this.langBtn = document.querySelector('.btn-controls_lang');
    this.searchField = document.querySelector('.search-field');
    this.speechBtn = document.querySelector('.speech-btn');
  }

  insertBackground(imgUrl) {
    this.body.style.backgroundImage = `url('${imgUrl}')`;
  }

  mainContentRender(weatherData) {
    const today = weatherData.dataToday;
    const daily = weatherData.dataDaily;

    const markup = `
        <div class="content">
          <p class="content__head">${today.city}, ${today.country}</p>
          <div class="content__date">
            <p class="content__day">
              <span data-bel="${weatherData.weekDayENshort}">${today.weekday}</span>
              &nbsp;${today.day}&nbsp;
              <span data-bel="${weatherData.monthEN}">${today.month}</span>
            </p>
            <p>
              <span class="content__clock">${today.time}</span>
            </p>
          </div>
          <div class="today">
            <div class="today__inner flex-block">
              <div class="today__temperature flex-block">
                <div class="digit-big" data-temp>${today.temperature}</div>
                <div class="deg-average">&deg;</div>
              </div>
              <div class="today__icon-wrapper">
                <canvas class="today__icon-weather" width="128" height="128"></canvas>
              </div>
            </div>
            <ul class="today__details-wrap">
              <li class="today__details">${today.summary}</li>
              <li class="today__details"><span data-lang="todayFeels"></span><span data-temp>${today.apparentTemperature}</span><span>&nbsp;&deg;</span></li>
              <li class="today__details"><span data-lang="todayWind"></span>&nbsp;<span>${today.windSpeed}</span>&nbsp;<span data-lang="windSpeed"></span></li>
              <li class="today__details"><span data-lang="todayHumidity"></span><span>&nbsp;${today.humidity}%</span></li>
            </ul>
          </div>
          <div class="daily flex-block"></div>
        </div>
        <aside class="map-wrapper">
          <div id="map"></div>
          <p class="map-coords"><span class="txt-bold-600" data-lang="latitude"></span>${weatherData.latitude}</p>
          <p class="map-coords"><span class="txt-bold-600" data-lang="longtitude"></span>${weatherData.longtitude}</p>
        </aside>
    `;
    this.main.innerHTML = markup;

    const iconWeatherTodayElem = document.querySelector('.today__icon-weather');
    this.insertWeatherIcon(iconWeatherTodayElem, today.icon);

    const dailyWeatherBlock = document.querySelector('.daily');

    for (let i = 0; i < daily.length; i += 1) {
      const dailyItem = document.createElement('div');
      dailyItem.classList.add('daily__item');

      const dailyItemMarkup = `
          <p class="daily__item-title" data-bel="${daily[i].dt_txt}">${daily[i].sys.pod}</p>
          <div class="flex-block">
            <p class="daily__item-temperature digit-big"><span data-temp>${daily[i].main.temp}</span>&deg;</p>
            <div class="daily__item-icon-wrapper">
              <canvas class="daily__icon-weather-${i} daily__icon-weather_size" width="64" height="64"></canvas>
            </div>
          </div>
      `;
      dailyItem.innerHTML = dailyItemMarkup;
      dailyWeatherBlock.append(dailyItem);

      const iconWeatherDailyElem = document.querySelector(`.daily__icon-weather-${i}`);
      this.insertWeatherIcon(iconWeatherDailyElem, daily[i].weather[0].icon);
    }

    this.clock = document.querySelector('.content__clock');
    this.langDependElements = document.querySelectorAll('[data-lang]');
    this.elementBel = document.querySelectorAll('[data-bel]');
    this.elementTemperature = document.querySelectorAll('[data-temp]');
  }

  insertSpeechRequest(request) {
    this.searchField.value = request;
  }

  aniamtionMicrophone() {
    this.speechBtn.classList.toggle('mic-animation');
  }

  insertWeatherIcon(elem, icon) {
    const { icons, Skycons } = this.icons;
    const iconIndex = iconCodes.indexOf(icon);
    const iconName = SkyconsArray[iconIndex];
    icons.add(elem, Skycons[iconName]);
    icons.play();
  }

  clockRender(time) {
    this.clock.innerHTML = `${time}`;
  }

  langMenuToggle() {
    if (!this.isLangListExpand) {
      this.langContainerElem.style.height = '100px';
      this.langList.classList.add('show-list');

      this.langList.addEventListener('animationend', () => {
        this.langList.classList.remove('show-list');
        this.langList.style.top = '0';
      }, { once: true });
      this.isLangListExpand = true;
    } else {
      this.langList.classList.add('hide-list');

      this.langList.addEventListener('animationend', () => {
        this.langList.classList.remove('hide-list');
        this.langContainerElem.style.height = '';
        this.langList.style.top = '';
      }, { once: true });
      this.isLangListExpand = false;
    }
  }

  setContentLang(lang) {
    const langObj = langBase[lang];
    const elements = this.langDependElements;

    for (let i = 0; i < elements.length; i += 1) {
      const prop = elements[i].dataset.lang;
      const text = langObj[prop];
      elements[i].innerHTML = text;
    }
    this.searchField.placeholder = langObj.searchPlaceholder;
  }

  setBelLang(lang) {
    const element = this.elementBel;
    const belLang = langBase[lang];

    for (let i = 0; i < element.length; i += 1) {
      const prop = element[i].dataset.bel;
      let value = belLang.belDate[prop];
      value = value[0].toUpperCase() + value.slice(1);
      element[i].innerHTML = value;
    }
  }

  setBtnLang(buttonsLang, elem) {
    const targetBtn = elem;
    document.documentElement.lang = buttonsLang.targetLang;

    if (buttonsLang.targetLang === 'be') {
      this.langBtn.innerHTML = 'by';
    } else {
      this.langBtn.innerHTML = buttonsLang.targetLang;
    }
    this.langBtn.dataset.langVal = buttonsLang.targetLang;

    if (buttonsLang.currentLang === 'be') {
      targetBtn.innerHTML = 'by';
    } else {
      targetBtn.innerHTML = buttonsLang.currentLang;
    }
    targetBtn.dataset.langVal = buttonsLang.currentLang;
  }

  switchDeg(deg) {
    const activeElem = document.querySelector('.active-deg');
    activeElem.classList.remove('active-deg');
    const targetElem = document.querySelector(`[data-deg-val="${deg}"]`);
    targetElem.classList.add('active-deg');

    const toCelsius = (val) => {
      let convVal = val;
      convVal = Math.round((convVal - 32) * 0.5555);
      return convVal;
    };

    const toFahrenheit = (val) => {
      let convVal = val;
      convVal = Math.round(val * 1.8 + 32);
      return convVal;
    };

    const tempElem = this.elementTemperature;
    const convertFunc = (deg === 'fahrenheit') ? toFahrenheit : toCelsius;

    for (let i = 0; i < tempElem.length; i += 1) {
      const val = tempElem[i].innerHTML;
      const convertVal = convertFunc(val);
      tempElem[i].innerHTML = convertVal;
    }
  }

  errorRender(key, lang) {
    const message = langBase[lang].errors[key];
    const errorCloseBtn = '<div class="btn-close-modal">&times;</div>';

    if (!this.errorWrapper) {
      this.errorWrapper = document.createElement('div');
      this.errorWrapper.classList.add('error-wrapper');
      document.body.append(this.errorWrapper);
    }

    const errorBlock = document.createElement('div');
    errorBlock.classList.add('error-block');

    errorBlock.innerHTML = `${errorCloseBtn}${message}`;
    this.errorWrapper.append(errorBlock);
  }
}
