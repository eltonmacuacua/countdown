var audio = new Audio('audio/audio1.mp3');
var audio2 = new Audio('audio/audio3.mp3');
var $ = jQuery;
$(function(){
  $.fn.extend({
    countdown: function(props){
      props = jQuery.extend({ //Default props
        until: new Date(),
      }, props);
      const state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      let render = (props) => {
        const { days, hours, minutes, seconds } = props;
        this.empty();
        this.append(`
        <div class="countdownProp" date-count="${days == 1 ? 'day' : 'days'}">${days}</div>
        <div class="countdownProp" date-count="${hours == 1 ? 'hour' : 'hours'}">${hours < 10 ? '0' + hours : hours}</div>
        <div class="countdownProp" date-count="${minutes == 1 ? 'minute' : 'minutes'}">${minutes < 10 ? '0' + minutes : minutes}</div>
        <div class="countdownProp" date-count="${seconds == 1 ? 'second' : 'seconds'}">${seconds < 10 ? '0' + seconds : seconds}</div>
        `);

        document.getElementById("dia").innerHTML=days;
        document.getElementById("hora").innerHTML=hours;
        document.getElementById("minuto").innerHTML=minutes;
        document.getElementById("segundo").innerHTML=seconds;


        if (document.getElementById("segundo").innerHTML == 20) {
          //audio.play();          
        }


          var teste = false;
        if (document.getElementById("dia").innerHTML == 0 &&
            document.getElementById("hora").innerHTML == 0 &&
            document.getElementById("minuto").innerHTML == 0 &&
            document.getElementById("segundo").innerHTML == 30) {
          document.getElementById("video").style.display = "block";
          audio.play();
          //window.location.replace("#video");

          teste = true;
          if (teste == true) {  
            //window.location.href = "#video";
            window.location.assign("#video");
          }
        }

        if (document.getElementById("dia").innerHTML == 0 &&
            document.getElementById("hora").innerHTML == 0 &&
            document.getElementById("minuto").innerHTML == 0 &&
            document.getElementById("segundo").innerHTML == 0 ) {
          audio2.play();
        }

      }
      render(state);
      let update = setInterval(function(){
        let counter = props.until - (new Date().getTime());
        if (counter <= 0) {
          clearInterval(update);
          return false;
        }
        state.days = Math.floor(counter / (1000 * 60 * 60 * 24));
        state.hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        state.minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        state.seconds = Math.floor((counter % (1000 * 60)) / 1000);
        render(state);
      }, 1000);
      return this;
    }
  })

  $('.countdown').countdown({
    //until: new Date(`Dec, 31, ${new Date().getFullYear() + 0}`) // you can add time optionally ('Dec, 25, 2020 00:00:00')
    until: new Date("Jan 01, 2022 00:00:00").getTime()
    //until: new Date("Dec 30, 2021 10:54:00").getTime()
  })
});

window.onload = function () {  
  alert("teste");
}