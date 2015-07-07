module.exports = function(string){
  return{
    init : function(input){
      string = input;
    },

    callme : function() {
      console.log(string);
    }
  }
};
