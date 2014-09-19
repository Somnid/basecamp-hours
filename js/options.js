var OptionsPage = (function(){
  function create(){
    var optionsPage = {};
    optionsPage.dom = {};
    bind(optionsPage);
    optionsPage.gatherSelectors();
    optionsPage.attachEvents();
    return optionsPage;
  }
  function bind(optionsPage){
    optionsPage.gatherSelectors = gatherSelectors.bind(optionsPage);
    optionsPage.attachEvents = attachEvents.bind(optionsPage);
    optionsPage.test = test.bind(optionsPage);
  }
  function gatherSelectors(){
    this.dom.testButton = document.getElementById("btn-test");
  }
  function attachEvents(){
    this.dom.testButton.addEventListener("click", this.test);
  }
  function test(){
    chromep.notifications.create(null, {
      type : "basic",
      title : "Basecamp Hours",
      message : "update hours",
      isClickable : true,
      iconUrl : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8z8DwHwAFBQIAHl6u2QAAAABJRU5ErkJggg=="
    }).then(function(){
      console.log("note");
    });
  }
  return{
    create : create
  };
})();

document.addEventListener("DOMContentLoaded", function(){
  OptionsPage.create();
});