export default Em.Component.extend({
    imageSrc: function(){
        var temp=this.get('city.temp');
        if(temp<=20){
            return "ice.png";
        }else if(temp<=30){
            return "mild.png";
        }else{
            return "hot.png";
        }
    }.property('city.temp')
})