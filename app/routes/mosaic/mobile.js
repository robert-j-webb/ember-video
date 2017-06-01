import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('mobile');
  },
  afterModel(model){
    let compare = function(a,b) {
      // Compare two dates (could be of any type supported by the convert
      // function above) and returns:
      //  -1 : if a < b
      //   0 : if a = b
      //   1 : if a > b
      // NaN : if a or b is an illegal date
      // NOTE: The code inside isFinite does an assignment (=).
      return (
        isFinite(a = convert(a).valueOf()) &&
        isFinite(b = convert(b).valueOf()) ?
          (a > b) - (a < b) :
          NaN
      );
    };

    let convert = function(d) {
      // Converts the date in d to a date-object. The input can be:
      //   a date object: returned without modification
      //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
      //   a number     : Interpreted as number of milliseconds
      //                  since 1 Jan 1970 (a timestamp)
      //   a string     : Any format supported by the javascript engine, like
      //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
      //  an object     : Interpreted as an object with year, month and date
      //                  attributes.  **NOTE** month is 0-11.
      return (
        d.constructor === Date ? d :
          d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
              d.constructor === String ? new Date(d) :
                typeof d === "object" ? new Date(d.year,d.month,d.date) :
                  NaN
      );
    }


    let order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    model.forEach((val)=>{
      let prev = order[val.get('order')];
      if(typeof prev === 'number'){
        order[val.get('order')] = val;
      } else if(compare(val, prev) === 1){
        order[val.get('order')] = val;
      }
    });
    return order;
  }
});


