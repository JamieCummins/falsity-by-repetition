// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Truth effect with low plausibility statements",
    "description": "Study program of \"Truth effect with low plausibility statements\"",
    "repository": "",
    "contributors": "Doris Lacassagne\nJérémy Béna\nOlivier Corneille"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "",
          "name": ""
        },
        {
          "type": "text",
          "title": "Consent form to take part in the study",
          "content": "\u003Cp\u003EDear participant,\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe are researchers from the UGent (Belgium). We are conducting a research study to examine the role of various variables in the evaluation of statements. Participation in this study will involve completing a survey. Your involvement will require about 8 minutes. You will receive £1 (~US$1.41) for participating.\u003C\u002Fp\u003E\n \n\u003Cp\u003EThere are no known or anticipated risks to you for participating. Although this study will not benefit you personally, we hope that our results will add to the knowledge about how we evaluate statements.\u003C\u002Fp\u003E\n \n\u003Cp\u003EThe researchers will not know your name, and no identifying information will be connected to your survey answers in any way. The survey is therefore anonymous.\u003C\u002Fp\u003E\n \n\u003Cp\u003EYour responses will be numbered and stored on a password-protected computer hard drive. The information you provide will be kept until publication. A data file containing your anonymous responses (without your Prolific ID) will be stored in a secure online archive (i.e., the Open Science Framework). This data file will be available to other researchers without time limit. \u003C\u002Fp\u003E\n \n\u003Cp\u003EParticipation in this study is completely voluntary. You are free to decline to participate, to end participation at any time for any reason, or to refuse to answer any individual question without penalty or loss of compensation.\u003C\u002Fp\u003E\n \n\u003Cp\u003EDo you understand this consent form, agree with it, and want to participate in the study?\u003C\u002Fp\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_yes\" name=\"consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"consent_yes\"\u003EYes, I understand, I agree, and I want to participate\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_no\" name=\"consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"consent_no\"\u003ENo, I do not want to participate\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"consent_next\" type=\"submit\"\u003ENext!\u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "Bandeau+new+logo+2019.jpg": "embedded\u002F5ffb7db9f15ad3b748ba63804367e87b2d52bf35af7d1cc696d84ef88aad1724.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 774.46,
          "height": 101.25,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "As you do not wish to participate in this study, please return your submission on Prolific \nby selecting the 'Stop without completing' button.\n\nYou may close this window.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent_no",
      "tardy": true,
      "skip": "${this.state.consent!=0}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Before you start...",
          "content": "\u003Cp\u003EBefore you start, please switch off phone\u002Fe-mail\u002Fmusic so you can focus on this study.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAlso, make sure you are using a computer to take part in this study.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThank you!\u003C\u002Fp\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
if (typeof jatos !== "undefined") {
   this.data.prolific_pid = jatos.urlQueryParameters.PROLIFIC_PID;
}
}
      },
      "title": "before_you_start",
      "width": "m"
    },
    {
      "type": "lab.canvas.Screen",
      "viewport": [
        800,
        600
      ],
      "parameters": {},
      "responses": {
        "keypress(Space)": "begin_study"
      },
      "title": "instructions_interest",
      "files": {
        "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
      },
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 785.96,
          "height": 284.76,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Dear participant, you are participating in a study about the role of various variables \nin the evaluation of statements. \n\nIn this first part, you will judge how interesting some statements are to you on a\nscale from 1 (very uninteresting) to 6 (very interesting). \n\nFor each statement, please select the value that most closely represents what you think. \n\nSome of these statements will appear several times.\n\nWhen you are ready, please start by pressing the spacebar.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.condition = this.random.choice(['A','B'])
}
      }
    },
    {
      "type": "lab.flow.Loop",
      "sample": {
        "mode": "draw",
        "n": "40"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "skip": "${this.state.condition!== 'A'}",
      "title": "Encoding_loop_G1",
      "messageHandlers": {},
      "tardy": true,
      "templateParameters": [
        {
          "statement_exposure": "The earth is a perfect square."
        },
        {
          "statement_exposure": "George Washington was born in Beijing, China."
        },
        {
          "statement_exposure": "Across the United States, only a total of 452 people voted in the last election."
        },
        {
          "statement_exposure": "Benjamin Franklin lived to be 150 years old."
        },
        {
          "statement_exposure": "More people fly to work than drive to work."
        },
        {
          "statement_exposure": "The population of North Dakota is larger than the population of New York State."
        },
        {
          "statement_exposure": "Battery is the crime in which a person purposely betrays his country."
        },
        {
          "statement_exposure": "A monsoon is caused by an earthquake."
        }
      ],
      "indexParameter": "count_exposure_trial",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "viewport": [
              800,
              600
            ],
            "parameters": {},
            "messageHandlers": {},
            "responses": {
              "click @1": "1",
              "click @2": "2",
              "click @3": "3",
              "click @4": "4",
              "click @5": "5",
              "click @6": "6"
            },
            "title": "interest_judgment",
            "files": {
              "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
            },
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": -50,
                "angle": 0,
                "width": 323.53,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ parameters.statement_exposure }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -200,
                "angle": 0,
                "width": 519.16,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "How interesting do you find this statement on a scale from \n1 (very uninteresting) to 6 (very interesting)? ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "1"
              },
              {
                "type": "aoi",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "2"
              },
              {
                "type": "aoi",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "3"
              },
              {
                "type": "aoi",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "4"
              },
              {
                "type": "aoi",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "5"
              },
              {
                "type": "aoi",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "6"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "2",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "3",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": "#000000",
                "strokeWidth": 0,
                "fill": "#000000",
                "text": "1",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "4",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "5",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "6",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": "160",
                "angle": 0,
                "width": 114.52,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very \nuninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": "160",
                "angle": 0,
                "width": 92.28,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\ninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "viewport": [
              800,
              600
            ],
            "parameters": {},
            "messageHandlers": {},
            "responses": {},
            "title": "next_sentence",
            "files": {
              "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
            },
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": -200,
                "angle": 0,
                "width": 519.16,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "How interesting do you find this statement on a scale from \n1 (very uninteresting) to 6 (very interesting)? ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "1"
              },
              {
                "type": "aoi",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "2"
              },
              {
                "type": "aoi",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "3"
              },
              {
                "type": "aoi",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "4"
              },
              {
                "type": "aoi",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "5"
              },
              {
                "type": "aoi",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "6"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "2",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "3",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": "#000000",
                "strokeWidth": 0,
                "fill": "#000000",
                "text": "1",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "4",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "5",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "6",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": "160",
                "angle": 0,
                "width": 114.52,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very \nuninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": "160",
                "angle": 0,
                "width": 92.28,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\ninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "sample": {
        "mode": "draw",
        "n": "40"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "templateParameters": [
        {
          "statement_exposure": "Elephants weigh less than ants."
        },
        {
          "statement_exposure": "Smoking cigarettes is good for your lungs."
        },
        {
          "statement_exposure": "The United States was founded in 1979."
        },
        {
          "statement_exposure": "The tallest person in the world is 35 feet tall."
        },
        {
          "statement_exposure": "Elephants run faster than cheetahs."
        },
        {
          "statement_exposure": "Apple Inc. owns three quarters of all office buildings in the United States."
        },
        {
          "statement_exposure": "Rugby is the sport associated with Wimbledon."
        },
        {
          "statement_exposure": "Larceny is the name of the crime in which a building or property is purposely set on fire."
        }
      ],
      "title": "Encoding_loop_G2",
      "tardy": true,
      "indexParameter": "count_exposure_trial",
      "skip": "${this.state.condition!== 'B'}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "viewport": [
              800,
              600
            ],
            "parameters": {},
            "messageHandlers": {},
            "responses": {
              "click @1": "1",
              "click @2": "2",
              "click @3": "3",
              "click @4": "4",
              "click @5": "5",
              "click @6": "6"
            },
            "title": "interest_judgment",
            "files": {
              "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
            },
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": -50,
                "angle": 0,
                "width": 323.53,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ parameters.statement_exposure }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -200,
                "angle": 0,
                "width": 513.6,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "How interesting do you find this statement on a scale from\n 1 (very uninteresting) to 6 (very interesting)?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "1"
              },
              {
                "type": "aoi",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "2"
              },
              {
                "type": "aoi",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "3"
              },
              {
                "type": "aoi",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "4"
              },
              {
                "type": "aoi",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "5"
              },
              {
                "type": "aoi",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "6"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "2",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "3",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 88,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "1",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "4",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "5",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "6",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 160,
                "angle": 0,
                "width": 114.52,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\nuninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 160,
                "angle": 0,
                "width": 92.28,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\ninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "viewport": [
              800,
              600
            ],
            "parameters": {},
            "messageHandlers": {},
            "responses": {},
            "title": "next_sentence",
            "files": {
              "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
            },
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": -200,
                "angle": 0,
                "width": 513.6,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "How interesting do you find this statement on a scale from\n 1 (very uninteresting) to 6 (very interesting)?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "1"
              },
              {
                "type": "aoi",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "2"
              },
              {
                "type": "aoi",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "3"
              },
              {
                "type": "aoi",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "4"
              },
              {
                "type": "aoi",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "5"
              },
              {
                "type": "aoi",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "6"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "2",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "3",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 88,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "1",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 50,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "4",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "5",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 89,
                "angle": 0,
                "width": 10.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "6",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": -50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 50,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 150,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "rect",
                "left": 250,
                "top": 115,
                "angle": 0,
                "width": 23,
                "height": 23,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#dddddd"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 160,
                "angle": 0,
                "width": 114.52,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\nuninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 250,
                "top": 160,
                "angle": 0,
                "width": 92.28,
                "height": 48.82,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "very\ninteresting",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "viewport": [
        800,
        600
      ],
      "files": {
        "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
      },
      "parameters": {},
      "messageHandlers": {},
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 785.96,
          "height": 232.33,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "In the following part, we are interested in how false you think some statements are.\nSome statements will be repeated from the previous task.\n\nTo evaluate how false the statements are, you will use a scale from \n-50 (definitely true) to 50 (definitely false).\n\nFor each statement, please select the value that most closely represents what you think. \n\nWhen you are ready, please start by pressing the spacebar.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "title": "instructions_test",
      "responses": {
        "keypress(Space)": "continue_study"
      }
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "jugement_loop",
      "sample": {
        "mode": "draw-shuffle"
      },
      "templateParameters": [
        {
          "statement_test": "Larceny is the name of the crime in which a building or property is purposely set on fire."
        },
        {
          "statement_test": "A monsoon is caused by an earthquake."
        },
        {
          "statement_test": "Rugby is the sport associated with Wimbledon."
        },
        {
          "statement_test": "Battery is the crime in which a person purposely betrays his country."
        },
        {
          "statement_test": "Apple Inc. owns three quarters of all office buildings in the United States."
        },
        {
          "statement_test": "The population of North Dakota is larger than the population of New York State."
        },
        {
          "statement_test": "Elephants run faster than cheetahs."
        },
        {
          "statement_test": "More people fly to work than drive to work."
        },
        {
          "statement_test": "The tallest person in the world is 35 feet tall."
        },
        {
          "statement_test": "Benjamin Franklin lived to be 150 years old."
        },
        {
          "statement_test": "The United States was founded in 1979."
        },
        {
          "statement_test": "Across the United States, only a total of 452 people voted in the last election."
        },
        {
          "statement_test": "Smoking cigarettes is good for your lungs."
        },
        {
          "statement_test": "George Washington was born in Beijing, China."
        },
        {
          "statement_test": "Elephants weigh less than ants."
        },
        {
          "statement_test": "The earth is a perfect square."
        }
      ],
      "indexParameter": "count_test_trial",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Form",
            "scrollTop": true,
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "slider_trial",
            "content": "\u003Cmain\u003E\n  \u003Cform\u003E\n    \u003Ccenter\u003E ${ parameters.statement_test } \u003Cbr\u003E\n\n\u003Cdiv class=\"center slidecontainer\"\u003E\n\n\u003Ctable style=\"width:100%\"\u003E\n  \u003Ctr\u003E\n    \u003Cth\u003E\u003C\u002Fth\u003E\n    \u003Cth\u003E\u003C\u002Fth\u003E \n    \u003Cth\u003E\u003C\u002Fth\u003E\n  \u003C\u002Ftr\u003E\n  \u003Ctr\u003E\n    \u003Ctd style=\"text-align:left\"\u003EDefinitely True\u003C\u002Ftd\u003E\n    \u003Ctd style=\"text-align:right\"\u003EDefinitely False\u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\n\u003Cbr\u003E\u003Cbr\u003E\n  \n    \u003Cinput id=\"slidertruth\" type=\"range\" min=\"-50\" max=\"50\" value=\"0\" required class=\"slider\" name=\"slider_truth_response\" step=\"1\" id=\"slider_range\" oninput=\"this.nextElementSibling.value = this.value\"\u003E\n  \u003Coutput id=\"ceci\"\u003EPlease select a value on the scale\u003C\u002Foutput\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cinput type=radio id=\"confirm\" name=\"confirm_value\"\u003E I confirm the selected value\n\n \u003Cbutton id=\"next_confirm\" type=\"submit\"\u003ENext\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E"
          },
          {
            "type": "lab.canvas.Screen",
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next_sentence",
            "timeout": "500",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "It would be very helpful if you could tell us at this point whether you have taken the requested responses seriously, so that we can use your answers for our scientific analysis, or whether you were just clicking through to take a look at the survey?",
          "content": "(this will not affect your payment)"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"serious\" name=\"serious\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"serious\"\u003EI have taken the requested responses seriously\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"not_serious\" name=\"serious\" value=\"0\"\u003E\r\n  \u003Clabel for=\"not_serious\"\u003EI have just clicked through, please discard my data\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "\u003Cspan style=\"color:blue\"\u003EClick here to continue\u003C\u002Fspan\u003E",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Seriousness",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "If you have any comments feel free to include them below:"
        },
        {
          "required": false,
          "type": "textarea",
          "name": "comment_study"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "\u003Cspan style=\"color:blue\"\u003EClick here to continue\u003C\u002Fspan\u003E",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Comment",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 730.31,
          "height": 232.33,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "The experiment is now over. Thank you very much for your participation!\n\nIn this experiment, we wanted to know if repetition increases the perceived falsity \nof statements with low levels of plausibility (all the statements you saw were false).\n\nPlease copy this confirmation code into Prolific: 5519F002\n\n\nPress the spacebar to close this window.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Capture d’écran 2021-04-12 à 17.42.50.png": "embedded\u002Fcbf0751932d0c4e0e532860dfe7eb8220ac27e5379bdafbf59f8a6391fce18a4.png"
      },
      "responses": {
        "keypress(Space)": "Ending_study"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Ending_study"
    }
  ]
})

// Let's go!
study.run()