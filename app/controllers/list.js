import {CITIES} from 'temperature/utils/constants';
export default Em.Controller.extend({
    queryParams:['country'],
    country: null,
    actions: {
        selectCountry(country){
            this.set('country',country);
            this.send('refresh');
        },
        refresh: function(){
            var controller = this;
            var context = controller.country ? CITIES[controller.country] : [];
            var cities = [];
            var c = 0;
            context.forEach(function(item){
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon="+item.long+"&lat="+item.lat,
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                        "x-rapidapi-key": "c5e8ad57efmsh2b7bbad57d5270dp17ee34jsn257c6663170d"
                    }
                }
                $.ajax(settings).done(function (response) {
                    cities.push(response.data[0]);
                    c++;
                    if(c==5)controller.set('model',cities);
                });
            });
        }
    }
});