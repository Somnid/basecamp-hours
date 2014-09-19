var SavedField = (function(){
  function create(element){
    bind(element);
    element.attachEvents();
  }
  function bind(element){
    element.attachEvents = attachEvents.bind(element);
    element.onInput = onInput.bind(element);
    element.onStorageChanged = onStorageChanged.bind(element);
    element.getStoredValue = getStoredValue.bind(element);
  }
  function attachEvents(){
    this.addEventListener("input", this.onInput);
    chrome.storage.onChanged.addListener(this.onStorageChanged);
  }
  function onInput(){
    if(!this.attributes.fieldName.value){
      return;
    }
    var keyval = {};
    keyval[this.attributes.fieldName.value] = this.value;
    chrome.storage.local.set(keyval);
  }
  function onStorageChanged(changed, areaName){
    if(areaName == "local" && this.field){
      if(changed[this.attributes.fieldName.value]){
        this.value = changed[this].attributes.fieldName.value];
      }
    }
  }
  function getStoredValue(){
    chrome.storage.local.get(this.attributes.fieldName.value, function(values){
      this.value = values[this.attributes.fieldName.value];
    }.bind(this));
  }
  return {
    create : create
  };
})();

savedFieldProto = Object.create(HTMLInputElement.prototype);

savedFieldProto.createdCallback = function(){
  SavedField.create(this);
}

document.registerElement("saved-field", {
  prototype: savedFieldProto,
  extends: "input"
});