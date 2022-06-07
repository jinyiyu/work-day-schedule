# Work-day-schedule

## About this Project

```
This project is a fun, boredom-killing time-passer clicker game, which can save your high-score locally so you can compare how far you got with your friends.
```

## Links to the Project

- Click the link [here](https://github.com/SkyIsNotGreen/police-crime-fighter) to access our github repository.
- Click the link [here](https://skyisnotgreen.github.io/police-crime-fighter/) to access our deployed URL.

<br>

## User Story

```


```

## Flowchart and Game Logic

<br>

### Logic diagrams

<br>

Here is our flow chart detailing the full user journey
![game-logic](./)

<br>

<details>
<summary> Here is our Project Logic (at a functional level) </summary>

1. When a user clicks `Click to Start` on the _index.html_, LS is initiated. If there is a value of keys then on how to play tutorial is generated. If no, then the _user-input.html_ is generated.
2. On the _how-to-play tutorial_ the `donot show input` stores value in LS.
3. On user-input pg username is stored in LS and game page is rendered and a key of resources object stored in LS.
4. In game when `marker is clicked ` an info banner appears.
5. When a `resource is clicked` the value in LS and the resource container is updated.
6. After the timer reaches the specified value LS/ resource container and money are updated.
7. When 25 markers are displayed(progress bar is 100%) `game over modal `is rendered.
8. The game over stops any more markers from being populated.
9. The values including username is stored in a key known as gameStats in LS.
10. The gameStats are stored in a key known as `previousUserHistory` that contains gameStats of previous games.
11. `On click of view scores` the _scores.html_ is initiated. (The scores page is also initated when quit is clicked on games-page)
12. `On load` the scores are read from local storage and sorted based on the money. The top 3 games will load on podium while the rest would load on separate leaderboard.
13. Using the `responsive navbar` the user can click on different navlinks with smaller viewports using a burger. This is important to access page like contacts.html.

</details>

<br>

## Mock-Up

The following screenshots within the toggles show the web application's appearance and functionality:

<details>

<summary>Desktop ViewPort | Home  </summary>

_*Index.html*_![index.html](./)

</details>

<br>

## Technologies Used

- Git
  <br>
- Languages:<br>
  1. HTML <br>
  2. CSS <br>
  3. JavaScript<br>
  4. JQuery<br>
     <br>
- APIs: <br>
  1. Police API<br>
  2. Google Maps API<br>
     <br>
- Frameworks:<br>
  1. Font awesome<br>
  2. Bulma (CSS framework)<br>
  3. Google Fonts<br>

<br>

## How To Contact Us

### Jinyi Yu

- Email: yujinyiicxk@gmail.com
- Github: https://github.com/jinyiyu
- LinkedIn: https://www.linkedin.com/in/jinyiyu/
  <br>
