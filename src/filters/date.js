import Vue from 'vue';

const booleanFilter = function(value, trueText, falseText) {
  return value ? trueText || 'Yes' : falseText || 'No';
}

Vue.filter('boolean', booleanFilter);