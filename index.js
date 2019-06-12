// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return obj;
}

function deleteFromDriverByKey(obj, key) {
  deleteDriver = Object.assign({}, obj)
  delete deleteDriver[key]

  return deleteDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];

  return obj;
}
