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

const handleSubmit = () => {
  // check if click from button
  // check which button the click came from
  //   get the timenumber from the click (data-key)
  // get the text from block - (data-textarea-key)
  // validate the text - if not render alarm
  // update LS
};

const renderTimeBlocks = () => {
  const renderEachBlock = () => {
    const block = `      <span class="timeBlock">${lable}</span>
  <div class="form-floating textBlock">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea"
      data-textarea-key=${time}
    ></textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
  <button type="button" class="btn btn-outline-success btnBlock" data-key= ${time}>
    Save
  </button>`;
    blocksSection.append(block);
  };

  timeArray.lable.forEach(renderEachBlock);

  blocksSection.click(handleSubmit);
};

const onload = () => {
  renderDay();
  renderTimeBlocks();
};

$(document).ready(onload);
