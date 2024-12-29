const jsonData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  let dailyButton = document.getElementById('dailyButton');
  let weeklyButton = document.getElementById('weeklyButton');
  let monthlyButton = document.getElementById('monthlyButton');
  let timeForWork = document.getElementById('timeForWork');
  let timeForWorkLastWeek = document.getElementById('timeForWorkLastWeek');
  let timeForPlay = document.getElementById('timeForPlay');
  let timeForPlayLastWeek = document.getElementById('timeForPlayLastWeek');
  let timeForStudy = document.getElementById('timeForStudy');
  let timeForStudyLastWeek = document.getElementById('timeForStudyLastWeek');
  let timeForExercise = document.getElementById('timeForExercise');
  let timeForExerciseLastWeek = document.getElementById('timeForExerciseLastWeek');
  let timeForSocial = document.getElementById('timeForSocial');
  let timeForSocialLastWeek = document.getElementById('timeForSocialLastWeek');
  let timeForselfcare = document.getElementById('timeForselfcare');
  let timeForselfcareLastWeek = document.getElementById('timeForselfcareLastWeek');




  dailyButton.addEventListener('click', function(){
    dailyButton.style.color = "white";
    weeklyButton.style.color = "#8388d8";
    monthlyButton.style.color = "#8388d8";

    let currentdayTime = jsonData[0].timeframes.daily.current;
    let lastdayTime = jsonData[0].timeframes.daily.previous;
    
    timeForWork.textContent = currentdayTime + "hrs";
    timeForWorkLastWeek.textContent = "Last Day " + "- " +  lastdayTime + "hrs";


    let playcurrentdayTime = jsonData[1].timeframes.daily.current;
    let playlastdayTime = jsonData[1].timeframes.daily.previous;
    
    timeForPlay.textContent = playcurrentdayTime + "hrs";
    timeForPlayLastWeek.textContent = "Last Day " + "- " +  playlastdayTime + "hrs";


    let studycurrentdayTime = jsonData[2].timeframes.daily.current;
    let studylastdayTime = jsonData[2].timeframes.daily.previous;
    
    timeForStudy.textContent = studycurrentdayTime + "hrs";
    timeForStudyLastWeek.textContent = "Last Day " + "- " +  studylastdayTime + "hrs";

    let exercisecurrentdayTime = jsonData[3].timeframes.daily.current;
    let exerciselastdayTime = jsonData[3].timeframes.daily.previous;
    
    timeForExercise.textContent = exercisecurrentdayTime + "hrs";
    timeForExerciseLastWeek.textContent = "Last Day " + "- " +  exerciselastdayTime + "hrs";


    let socialcurrentdayTime = jsonData[4].timeframes.daily.current;
    let sociallastdayTime = jsonData[4].timeframes.daily.previous;
    
    timeForSocial.textContent = socialcurrentdayTime + "hrs";
    timeForSocialLastWeek.textContent = "Last Day " + "- " +  sociallastdayTime + "hrs";


    let selfcarecurrentdayTime = jsonData[5].timeframes.daily.current;
    let selfcarelastdayTime = jsonData[5].timeframes.daily.previous;
    
    timeForselfcare.textContent = selfcarecurrentdayTime + "hrs";
    timeForselfcareLastWeek.textContent = "Last Day " + "- " +  selfcarelastdayTime + "hrs";

  })

  weeklyButton.addEventListener('click', function(){
    weeklyButton.style.color = "white";
    monthlyButton.style.color = "#8388d8";
    dailyButton.style.color = "#8388d8";

    let currentweekTime = jsonData[0].timeframes.weekly.current;
    let lastweekTime = jsonData[0].timeframes.weekly.previous;
    
    timeForWork.textContent = currentweekTime + "hrs";
    timeForWorkLastWeek.textContent ="Last Week " + "- " +   lastweekTime + "hrs";


    let playcurrentweekTime = jsonData[1].timeframes.weekly.current;
    let playlastweekTime = jsonData[1].timeframes.weekly.previous;
    
    timeForPlay.textContent = playcurrentweekTime + "hrs";
    timeForPlayLastWeek.textContent = "Last Week " + "- " +  playlastweekTime + "hrs";


    let studycurrentweekTime = jsonData[2].timeframes.weekly.current;
    let studylastweekTime = jsonData[2].timeframes.weekly.previous;
    
    timeForStudy.textContent = studycurrentweekTime + "hrs";
    timeForStudyLastWeek.textContent ="Last Week " + "- " +   studylastweekTime + "hrs";

    let exercisecurrentweekTime = jsonData[3].timeframes.weekly.current;
    let exerciselastweekTime = jsonData[3].timeframes.weekly.previous;
    
    timeForExercise.textContent = exercisecurrentweekTime + "hrs";
    timeForExerciseLastWeek.textContent = "Last Week " + "- " +  exerciselastweekTime + "hrs";


    let socialcurrentweekTime = jsonData[4].timeframes.weekly.current;
    let sociallastweekTime = jsonData[4].timeframes.weekly.previous;
    
    timeForSocial.textContent = socialcurrentweekTime + "hrs";
    timeForSocialLastWeek.textContent = "Last Week " + "- " +  sociallastweekTime + "hrs";


    let selfcarecurrentweekTime = jsonData[5].timeframes.weekly.current;
    let selfcarelastweekTime = jsonData[5].timeframes.weekly.previous;
    
    timeForselfcare.textContent = selfcarecurrentweekTime + "hrs";
    timeForselfcareLastWeek.textContent ="Last Week " + "- " +  selfcarelastweekTime + "hrs";

  })
  monthlyButton.addEventListener('click', function(){
    monthlyButton.style.color = "white";
    weeklyButton.style.color = "#8388d8";
    dailyButton.style.color = "#8388d8";

    let currentmonthTime = jsonData[0].timeframes.monthly.current;
    let lastmonthTime = jsonData[0].timeframes.monthly.previous;
    
    timeForWork.textContent = currentmonthTime + "hrs";
    timeForWorkLastWeek.textContent = "Last Month " + "- "+ lastmonthTime + "hrs";


    let playcurrentmonthTime = jsonData[1].timeframes.monthly.current;
    let playlastmonthTime = jsonData[1].timeframes.monthly.previous;
    
    timeForPlay.textContent = playcurrentmonthTime + "hrs";
    timeForPlayLastWeek.textContent = "Last Month " + "- " + playlastmonthTime + "hrs";


    let studycurrentmonthTime = jsonData[2].timeframes.monthly.current;
    let studylastmonthTime = jsonData[2].timeframes.monthly.previous;
    
    timeForStudy.textContent = studycurrentmonthTime + "hrs";
    timeForStudyLastWeek.textContent = "Last Month " + "- " + studylastmonthTime + "hrs";

    let exercisecurrentmonthTime = jsonData[3].timeframes.monthly.current;
    let exerciselastmonthTime = jsonData[3].timeframes.monthly.previous;
    
    timeForExercise.textContent = exercisecurrentmonthTime + "hrs";
    timeForExerciseLastWeek.textContent = "Last Month " + "- " + exerciselastmonthTime + "hrs";


    let socialcurrentmonthTime = jsonData[4].timeframes.monthly.current;
    let sociallastmonthTime = jsonData[4].timeframes.monthly.previous;
    
    timeForSocial.textContent = socialcurrentmonthTime + "hrs";
    timeForSocialLastWeek.textContent = "Last Month " + "- " + sociallastmonthTime + "hrs";


    let selfcarecurrentmonthTime = jsonData[5].timeframes.monthly.current;
    let selfcarelastmonthTime = jsonData[5].timeframes.monthly.previous;
    
    timeForselfcare.textContent = selfcarecurrentmonthTime + "hrs";
    timeForselfcareLastWeek.textContent = "Last Month " + "- " + selfcarelastmonthTime + "hrs";


  })