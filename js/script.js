const currentDay = $("#currentDay");
const blocksSection = $("#container");

const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = JSON.parse(localStorage.getItem(key));
  if (dataFromLS) {
    return dataFromLS;
  } else {
    return defaultValue;
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);
  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

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
  const today = moment().format("LLL");
  currentDay.text(today);
};

const handleSaveBtn = (event) => {
  const time = $(event.target).attr("data-key");
  const Text = $(`textarea[data-textarea-key='${time}']`).val().trim();
  writeToLocalStorage(time, Text);
};

const handleDeleteBtn = (event) => {
  event.stopPropagation();
  const time = $(event.target).attr("data-key");
  localStorage.removeItem(time);
  blocksSection.empty();
  renderTimeBlocks();
};
const handleClearBtn = (event) => {
  event.stopPropagation();
  localStorage.clear();
  blocksSection.empty();
  renderTimeBlocks();
};

const handleSubmit = (event) => {
  event.stopPropagation();
  const checkWhichBtn = $(event.target).attr("data-purpose");

  if (checkWhichBtn) {
    if (checkWhichBtn === "save") {
      handleSaveBtn(event);
    } else if (checkWhichBtn === "delete") {
      handleDeleteBtn(event);
    } else if (checkWhichBtn === "clearAll") {
      handleClearBtn(event);
    }
  }
};

const getClassName = (CurrentTime) => {
  const currentTime = moment().hour();
  if (CurrentTime === currentTime) {
    return "present";
  } else if (CurrentTime > currentTime) {
    return "future";
  } else if (CurrentTime < currentTime) {
    return "past";
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
      class="form-control ${getClassName(each.time)}"
      placeholder="Leave a comment here"
      id="floatingTextarea"
      data-textarea-key="${each.time}"
    >${readFromLocalStorage(each.time, "")}</textarea>
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
