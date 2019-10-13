export default Ember.Route.extend({
    setupController: function(controller){
        controller.send('refresh');
    }
});