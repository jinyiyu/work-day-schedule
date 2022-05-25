const currentDay = $("#currentDay");
const blocksSection = $("#container");

timeArrayIndex = 0;
const timeArray = [
  { lable: "9 am", time: 9 },
  { lable: "10 am", time: 10 },
  { lable: "11 am", time: 11 },
  { lable: "12 am", time: 12 },
  { lable: "1 pm", time: 13 },
  { lable: "2 pm", time: 14 },
  { lable: "3 pm", time: 15 },
  { lable: "4 pm", time: 16 },
  { lable: "5 pm", time: 17 },
];

const renderDay = () => {
  //   console.log("hello");
  const today = moment().format("LLL");
  currentDay.text(today);
};

const getText = () => {
  //get user text from the LS!
};

const handleSubmit = (event) => {
  event.stopPropagation();
  const checkWhichBtn = $(event.target).attr("data-purpose");
  console.log(checkWhichBtn);
  const getTimeKey = $(event.target).attr("data-key");
  console.log(getTimeKey);

  if (checkWhichBtn) {
    if (checkWhichBtn === "Save") {
      //get the text - function(getText) (data-textarea-key)
      // validate the text - if not render alarm
      // update LS
    } else if (checkWhichBtn === "Delete") {
      //if from delete btn - get the datanumber - get the text from ls - remove - if [] reload
    }
  } else if (checkWhichBtn === "clearAll") {
    //if from clear all btn - remove all text
  }
};

const renderTimeBlocks = () => {
  // for each iteration, create a time block
  const clearBtn = `<div">
  <button type="button" class="btn btn-outline-danger btnClear" data-purpose="clearAll">
    Clear All
  </button>
</div>`;
  blocksSection.append(clearBtn);
  const renderEachBlock = (each) => {
    const block = `<div class="timeBlockItem"><span class="timeBlock">${
      each.lable
    }</span>
  <div class="form-floating textBlock">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea"
      data-textarea-key="${each.time}"
    >${getText()}</textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
  <button type="button" class="btn btn-outline-success btnSave" data-key="${
    each.time
  }" data-purpose="save">
    Save
  </button>
  <button type="button" class="btn btn-outline-danger btnDelete" data-key="${
    each.time
  }" data-purpose="delete">
    Delete
  </button></div>`;
    blocksSection.append(block);
  };
  timeArray.forEach(renderEachBlock);

  blocksSection.click(handleSubmit);
};

const onReady = () => {
  renderDay();
  renderTimeBlocks();
};

$(document).ready(onReady);
