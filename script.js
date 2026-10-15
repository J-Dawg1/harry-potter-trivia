const LEVELS = [
  { name: "Squib" },
  { name: "First Year" },
  { name: "Prefect" },
  { name: "Hermione" },
  { name: "Headmaster" }
];

function q(text, options, answer) {
  return { text, options, answer, original: true };
}

function placeholder(number) {
  return {
    text: `Question ${number} is still being recovered from your original quiz.`,
    options: [
      "Placeholder answer A",
      "Placeholder answer B",
      "Placeholder answer C",
      "Placeholder answer D"
    ],
    answer: null,
    original: false
  };
}

function bonus(text, options, answer) {
  return { text, options, answer, original: answer !== null };
}

const QUESTION_SETS = [
  // SQUIB
  {
    questions: [
      q("Who first tells Harry Potter that he is a wizard?", [
        "Albus Dumbledore", "Hagrid", "Vernon Dursley", "Ron Weasley"
      ], 2),
      q("What are Hogwarts students forbidden to do over the summer holidays?", [
        "Use the Floo Network", "Go to Diagon Alley",
        "Visit each other", "Use magic"
      ], 4),
      q("Who is the Headmaster at Hogwarts School of Witchcraft and Wizardry in Harry Potter's fourth year?", [
        "Professor Snape", "Professor McGonagall",
        "Professor Dumbledore", "Professor Flitwick"
      ], 3),
      q("What kind of broom does Harry Potter use during his first year at Hogwarts?", [
        "Shooting Star", "Nimbus 2000", "Cleansweep 7", "He doesn't have one"
      ], 2),
      q("Which of Hermione Granger's parents is a witch or wizard?", [
        "Her mother", "Her father", "Neither", "Both"
      ], 3),
      q("From which platform number does the Hogwarts Express depart?", [
        "Platform nine and a quarter", "Platform three and nine quarters",
        "Platform three and three quarters", "Platform nine and three quarters"
      ], 4),
      q("What color are Harry Potter's eyes?", [
        "Green", "Hazel", "Brown", "Blue"
      ], 1),
      q("How many Deathly Hallows are there?", [
        "One", "Three", "Seven", "Thirteen"
      ], 2),
      q("What are the Gryffindor house colors?", [
        "Scarlet and gold", "Purple and yellow",
        "Orange and violet", "Silver and crimson"
      ], 1),
      q("What form does Harry Potter's Patronus take?", [
        "A phoenix", "A wolf", "A hippogriff", "A stag"
      ], 4),
      q("What shape is the scar on Harry Potter's forehead?", [
        "A lightning bolt", "A straight line", "A ball of fire", "A storm cloud"
      ], 1),
      q("What kind of weapon do trolls typically carry?", [
        "A sword with rubies in the hilt", "A flaming staff",
        "A large club", "A magic wand"
      ], 3),
      q("What is the name of Mr. Filch's cat?", [
        "Norbert", "Mrs. Norris", "Crookshanks", "Scabbers"
      ], 2),
      q("Which Hogwarts house is known for being unafraid of toil?", [
        "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
      ], 2),
      q("On which street do the Dursleys live?", [
        "Magnolia Crescent", "Pritchet Lane", "Diagon Alley", "Privet Drive"
      ], 4),
      q("Where does Harry Potter sleep before he moves to Dudley Dursley's second bedroom?", [
        "In the cupboard under the stairs", "In the basement",
        "In the cabinet under the sink", "In the attic"
      ], 1)
    ],
    bonus: bonus(
      "What words do Ron Weasley and Hermione Granger paint on a banner to support Harry Potter in his first Quidditch game?",
      [
        "The Boy Who Lived",
        "Potter - Seeker of the Century",
        "Potter for President",
        "Potter - Hero of Hogwarts"
      ],
      3
    )
  },

  // FIRST YEAR
  {
    questions: [
      q("Who is the Charms professor at Hogwarts?", [
        "Professor Dumbledore", "Professor McGonagall",
        "Professor Flitwick", "Professor Snape"
      ], 3),
      q("What house was Lord Voldemort in when he went to Hogwarts?", [
        "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
      ], 4),
      q("What color did Ron Weasley try to turn Scabbers on the Hogwarts Express?", [
        "Yellow", "Red", "Orange", "Pink"
      ], 1),
      q("What class does Professor Snape teach at Hogwarts (in books 1–5)?", [
        "Defense Against the Dark Arts", "Potions",
        "Transfiguration", "Charms"
      ], 2),
      q("How many players are needed to make one Quidditch team?", [
        "Eleven", "Nine", "Five", "Seven"
      ], 4),
      q("Who greets first-year students as they get off the Hogwarts Express?", [
        "Professor McGonagall", "Albus Dumbledore",
        "Hagrid", "Their house prefects"
      ], 3),
      q("What is Mr. Filch's first name?", [
        "Argus", "Arthur", "Argie", "Arnold"
      ], 1),
      q("Where are the Herbology classes generally held at Hogwarts?", [
        "In dungeons", "In greenhouses",
        "At the top of East Tower", "In the Forbidden Forest"
      ], 2),
      q("In which town do the Dursleys live?", [
        "London", "Kent", "Little Whinging", "Bedford"
      ], 3),
      q("What guards the wizard prison, Azkaban?", [
        "Trained hit wizards", "Nothing; it's on an island",
        "Dragons", "Dementors"
      ], 4),
      q("What is the name of Hagrid's pet dog?", [
        "Fawkes", "Fang", "Fury", "Filch"
      ], 2),
      q("What kind of animal is Ron Weasley afraid of?", [
        "Spiders", "Hippogriffs", "Bats", "Snakes"
      ], 1),
      q("What language does Harry Potter use to talk to snakes?", [
        "Parselteeth", "Serpentongue", "Slytherlips", "Parseltongue"
      ], 4),
      q("Which house did the Sorting Hat consider putting Harry Potter in, besides Gryffindor?", [
        "None", "Hufflepuff", "Ravenclaw", "Slytherin"
      ], 4),
      q("Who let a troll into Hogwarts during Harry Potter's first year?", [
        "Peeves", "Professor Quirrell", "Draco Malfoy", "Professor Snape"
      ], 2),
      q("Which of the following is NOT an Unforgivable Curse?", [
        "The Sectumsempra curse", "The Cruciatus curse",
        "The Avada Kedavra curse", "The Imperius curse"
      ], 1)
    ],
    bonus: bonus(
      "What class did Albus Dumbledore teach before he became Headmaster at Hogwarts?",
      [
        "Transfiguration", "Charms", "Potions", "Defense Against the Dark Arts"
      ],
      1
    )
  },

  // PREFECT
  {
    questions: [
      q("What type of ghost is Peeves?", [
        "A Poltergeist", "A Spirit", "A Dementor", "A Phantom"
      ], 1),
      q("In which town was Harry Potter born?", [
        "Gryffindor's Hollow", "Little Whinging", "Hogsmeade", "Godric's Hollow"
      ], 4),
      q("What sort of creature is the mascot for the Ravenclaw house?", [
        "A hawk", "A raven", "An eagle", "An owl"
      ], 3),
      q("Where would you be most likely to find a bezoar?", [
        "In the stomach of a goat", "Beneath the eggs of a toad",
        "In the ashes of a phoenix", "Under the heart of a dragon"
      ], 1),
      q("Who is the official resident ghost of the Hufflepuff house?", [
        "The Fluent Flatulator", "The Fat Friar",
        "The Frank Fairy", "The Fab Freighter"
      ], 2),
      q("What color is Hagrid's umbrella?", [
        "Brown", "Gray", "Blue", "Pink"
      ], 4),
      q("When is Harry Potter's birthday?", [
        "October 11th", "July 31st", "August 11th", "October 31st"
      ], 2),
      q("What is Harry Potter's father's wife's sister's first name?", [
        "Yvonne", "Lily", "Petunia", "Marge"
      ], 3),
      q("How often do the Gringotts goblins check Albus Dumbledore's vault to see if it's been disturbed?", [
        "Never", "Once every seventeen years",
        "Once every seven years", "Once every ten years"
      ], 4),
      q("Who is the conductor of the Knight Bus?", [
        "Ernie Prang", "Kingsley Shacklebolt", "Stan Shunpike", "Amos Diggory"
      ], 3),
      q("From what train station does the Hogwarts Express depart to go to Hogwarts?", [
        "Liverpool Street", "King's Cross", "Paddington Station", "Hogsmeade Station"
      ], 2),
      q("What kind of dog is Fang?", [
        "A wolfhound", "A foxhound", "A bloodhound", "A boarhound"
      ], 4),
      q("What is Harry Potter's middle name?", [
        "James", "Albus", "Sirius", "Percival"
      ], 1),
      q("What is the name of Percy Weasley's girlfriend at Hogwarts?", [
        "Parvati Patil", "Penelope Clearwater", "Pansy Parkinson", "Cho Chang"
      ], 2),
      q("At which class does Neville Longbottom excel?", [
        "Astronomy", "Transfiguration", "Herbology", "Charms"
      ], 3),
      q("When was Hagrid expelled from Hogwarts?", [
        "In his first year", "In his second year",
        "In his third year", "In his fifth year"
      ], 3)
    ],
    bonus: bonus(
      "Where did Harry Potter go the first time he ever used his invisibility cloak?",
      [
        "To the restricted section of the library",
        "To visit the Mirror of Erised",
        "To Hagrid's hut",
        "To meet Charlie's friends at the top of the tallest tower"
      ],
      1
    )
  },

  // HERMIONE
  {
    questions: [
      placeholder(1),
      q("What are Ravenclaw's house colors?", [
        "Purple and yellow", "Blue and bronze",
        "Gold and scarlet", "Silver and blue"
      ], 2),
      q("Who does NOT emerge from the Resurrection Stone when Harry Potter uses it during the Battle of Hogwarts?", [
        "Sirius Black", "Remus Lupin", "Albus Dumbledore", "James Potter"
      ], 3),
      q("What does Dumbledore leave Hermione in his will?", [
        "The Deluminator", "The Tales of Beedle the Bard",
        "The Sword of Gryffindor", "The Snitch"
      ], 2),
      q("Which of the following is NOT a real spell?", [
        "Meteolojinx Recanto", "Repello Muggletum",
        "Mimblewimble", "Mortis Revelio"
      ], 4),
      q("Where does Harry go the first time he ever uses the Marauder's Map?", [
        "To the Room of Requirement", "To the Prefect's bathroom",
        "To Hogsmeade", "To the kitchens"
      ], 3),
      q("Which of the following was NOT an ingredient in the potion used to revive Lord Voldemort's body after the Triwizard Tournament?", [
        "Bone of the father, unknowingly given",
        "Flesh of the servant, willingly sacrificed",
        "Blood of the enemy, forcibly taken",
        "Hand of the innocent, freely offered"
      ], 4),
      placeholder(8),
      placeholder(9),
      placeholder(10),
      q("What kind of dragon does Harry face in the first task of the Triwizard Tournament?", [
        "A Hungarian Horntail", "A Welsh Green",
        "A Chinese Fireball", "A Swedish Short-Snout"
      ], 1),
      q("Which of the following was NOT at some point a master of the Elder Wand?", [
        "Gellert Grindelwald", "Draco Malfoy",
        "Lord Voldemort", "Albus Dumbledore"
      ], 3),
      placeholder(13),
      placeholder(14),
      q("What is Professor Sprout's first name?", [
        "Aurora", "Septima", "Charity", "Pomona"
      ], 4),
      placeholder(16)
    ],
    bonus: bonus(
      "This original bonus question is still missing from your Java code.",
      [
        "Placeholder answer A", "Placeholder answer B",
        "Placeholder answer C", "Placeholder answer D"
      ],
      null
    )
  },

  // HEADMASTER
  {
    questions: [
      q("Which of Voldemort's Horcruxes was destroyed fourth, chronologically?", [
        "The Resurrection Stone / The Gaunts' Ring",
        "Slytherin's Locket", "Hufflepuff's Cup", "Ravenclaw's Diadem"
      ], 3),
      q("When Harry and Ron were eating Chocolate Frogs on their first ride on the Hogwarts Express, who was on Ron's Chocolate Frog card?", [
        "Merlin", "Albus Dumbledore", "Morgana", "Agrippa"
      ], 3),
      q("Who was the Hogwarts Gamekeeper before Hagrid?", [
        "A man called Ogg", "Argus Filch",
        "Albus Dumbledore", "Aberforth Dumbledore"
      ], 1),
      placeholder(4),
      placeholder(5),
      placeholder(6),
      placeholder(7),
      placeholder(8),
      placeholder(9),
      placeholder(10),
      placeholder(11),
      placeholder(12),
      placeholder(13),
      placeholder(14),
      placeholder(15),
      placeholder(16)
    ],
    bonus: bonus(
      "The original Headmaster bonus question is still missing from your Java code.",
      [
        "Placeholder answer A", "Placeholder answer B",
        "Placeholder answer C", "Placeholder answer D"
      ],
      null
    )
  }
];

const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const currentLevelElement = document.getElementById("current-level");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answerList = document.getElementById("answer-list");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const showCorrections = document.getElementById("show-corrections");

let levelIndex = 0;
let questionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let bonusCorrect = false;
let isBonus = false;
let answered = false;
let selectedAnswer = null;
let answerHistory = [];

function getCurrentSet() {
  return QUESTION_SETS[levelIndex];
}

document.querySelectorAll(".difficulty-card").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(Number(button.dataset.level));
  });
});

nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (isBonus) {
    questionIndex = 9;
    renderQuestion();
    return;
  }

  if (questionIndex === 8) {
    renderBonusQuestion();
    return;
  }

  if (questionIndex < 15) {
    questionIndex++;
    renderQuestion();
  } else {
    showResults();
  }
});

document.getElementById("restart-button").addEventListener("click", () => {
  resultsScreen.hidden = true;
  quizScreen.hidden = true;
  setupScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function startQuiz(selectedLevel) {
  levelIndex = selectedLevel;
  questionIndex = 0;
  correctCount = 0;
  incorrectCount = 0;
  bonusCorrect = false;
  isBonus = false;
  answered = false;
  selectedAnswer = null;
  answerHistory = [];

  setupScreen.hidden = true;
  resultsScreen.hidden = true;
  quizScreen.hidden = false;

  currentLevelElement.textContent = LEVELS[levelIndex].name;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  isBonus = false;
  answered = false;
  selectedAnswer = null;

  const question = getCurrentSet().questions[questionIndex];

  questionCounter.textContent = `Question ${questionIndex + 1} of 16`;
  progressFill.style.width = `${(questionIndex / 16) * 100}%`;

  questionText.textContent = question.text;
  feedback.textContent = question.original
    ? ""
    : "This unfinished question is not scored.";
  feedback.className = "feedback";
  answerList.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = `${index + 1}. ${option}`;
    button.addEventListener("click", () => {
      selectAnswer(index + 1, button, question);
    });
    answerList.appendChild(button);
  });

  nextButton.disabled = true;
  nextButton.textContent = questionIndex === 8
    ? "Continue to Question 9¾"
    : questionIndex === 15
      ? "View Results"
      : "Next Question";
}

function selectAnswer(answerNumber, selectedButton, question) {
  if (answered) return;

  answered = true;
  selectedButton.classList.add("selected");
  selectedAnswer = answerNumber;

  const buttons = [...answerList.querySelectorAll(".answer-button")];
  buttons.forEach(button => {
    button.disabled = true;
  });

  if (question.answer === null) {
    feedback.textContent = "This unfinished question will not affect your score.";
    feedback.className = "feedback";
    answerHistory.push({
      question: questionIndex + 1,
      answer: answerNumber,
      correct: null
    });
  } else {
    const isCorrect = answerNumber === question.answer;

    
if (isCorrect) {
  correctCount++;
} else {
  incorrectCount++;
}

if (showCorrections.checked) {
  if (isCorrect) {
    selectedButton.classList.add("correct");
    feedback.textContent = "Correct. Well done.";
    feedback.className = "feedback success";
  } else {
    selectedButton.classList.add("incorrect");
    buttons[question.answer - 1].classList.add("correct");
    feedback.textContent =
      `Incorrect. The correct answer is ${question.answer}: ` +
      question.options[question.answer - 1] + ".";
    feedback.className = "feedback error";
  }
} else {
  feedback.textContent = "";
  feedback.className = "feedback";
}


    answerHistory.push({
      question: questionIndex + 1,
      answer: answerNumber,
      correct: isCorrect
    });
  }

  nextButton.disabled = false;
}

function renderBonusQuestion() {
  isBonus = true;
  answered = false;
  selectedAnswer = null;

  const bonusQuestion = getCurrentSet().bonus;

  questionCounter.textContent = "Question 9¾";
  progressFill.style.width = `${(9 / 16) * 100}%`;
  questionText.textContent = bonusQuestion.text;
  feedback.textContent = bonusQuestion.answer === null
    ? "This bonus question is unfinished and will not affect your score."
    : "An incorrect answer will not count against your score.";
  feedback.className = "feedback";
  answerList.replaceChildren();


bonusQuestion.options.forEach((option, index) => {
  const button = document.createElement("button");
  button.className = "answer-button";
  button.textContent = `${index + 1}. ${option}`;

  button.addEventListener("click", () => {
    if (answered) return;

    answered = true;
    selectedAnswer = index + 1;

    const buttons = [...answerList.querySelectorAll(".answer-button")];
    buttons.forEach(item => {
      item.disabled = true;
    });

    if (bonusQuestion.answer === null) {
      feedback.textContent =
        "Unfinished bonus question. No points awarded or deducted.";
      feedback.className = "feedback";
    } else if (selectedAnswer === bonusQuestion.answer) {
      correctCount++;
      bonusCorrect = true;

      if (showCorrections.checked) {
        button.classList.add("correct");
        feedback.textContent = "Correct. Bonus point awarded.";
        feedback.className = "feedback success";
      } else {
        feedback.textContent = "";
        feedback.className = "feedback";
      }
    } else {
      if (showCorrections.checked) {
        button.classList.add("incorrect");
        buttons[bonusQuestion.answer - 1].classList.add("correct");
        feedback.textContent =
          `Incorrect. The correct answer is ${bonusQuestion.answer}: ` +
          bonusQuestion.options[bonusQuestion.answer - 1] +
          ". No points deducted.";
        feedback.className = "feedback error";
      } else {
        feedback.textContent = "";
        feedback.className = "feedback";
      }
    }

    nextButton.disabled = false;
    nextButton.textContent = "Continue to Question 10";
  });

  answerList.appendChild(button);
});


  nextButton.disabled = true;
  nextButton.textContent = "Answer Bonus Question";
}

function getGrade(percentage) {
  if (percentage > 100) return "A++";
  if (percentage >= 97) return "A+";
  if (percentage >= 93) return "A";
  if (percentage >= 90) return "A-";
  if (percentage >= 87) return "B+";
  if (percentage >= 83) return "B";
  if (percentage >= 80) return "B-";
  if (percentage >= 77) return "C+";
  if (percentage >= 73) return "C";
  if (percentage >= 70) return "C-";
  if (percentage >= 67) return "D+";
  if (percentage >= 63) return "D";
  if (percentage >= 60) return "D-";
  if (percentage >= 57) return "F+";
  if (percentage >= 53) return "F";
  if (percentage >= 30) return "F-";
  return "F--";
}

function showResults() {
  quizScreen.hidden = true;
  resultsScreen.hidden = false;

  const percentage = Math.round((correctCount / 16) * 10000) / 100;
  const grade = getGrade(percentage);

  document.getElementById("results-title").textContent =
    `${LEVELS[levelIndex].name} Results`;

  document.getElementById("score-display").textContent =
    `${percentage.toFixed(2)}%`;

  document.getElementById("results-summary").textContent =
    `Your grade: ${grade}`;

  const verifiedQuestions = answerHistory.filter(
    item => item.correct !== null
  ).length;

  const placeholderQuestions = answerHistory.filter(
    item => item.correct === null
  ).length;

  const resultDetails = document.getElementById("result-details");
  resultDetails.replaceChildren();

  [
    `Correct answers: ${correctCount}`,
    `Incorrect answers: ${incorrectCount}`,
    `Bonus question: ${bonusCorrect ? "Correct" : "Not correct"}`,
    `Verified questions answered: ${verifiedQuestions}`,
    `Unfinished questions answered: ${placeholderQuestions}`
  ].forEach(detail => {
    const line = document.createElement("p");
    line.textContent = detail;
    resultDetails.appendChild(line);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}