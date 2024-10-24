const Events=require("../models/event.model");
const Restaurant=require("../models/restaurant.model");


module.exports={
     async createEvent(event,restauranId){
        try{
            const restaurant= await Restaurant.findById(restauranId);
            if(!restaurant){
                throw new Error(`Restaurant not found with ID ${restauranId}`);

            }
            const createdEvent=new Event({
                restauran:restaurant,
                image:event.image,
                startedAt:event.startedAt,
                endsAt:event.endsAt,
                location:event.location,
                name:event.name,
            });
             await createdEvent.save();
             return createdEvent;
        }catch(error){
            throw new Error(` Failed to find all events: ${error.message}`);

        }
     },


     async findRestaurantsEvent(restaurantId){
        try{
            const events =await Events.find({restaurant:restaurantId});
            return events;
        }
        catch(error){
            throw new Error(` Failed to find events for resturants ID ${restaurantId}`);
        }
     },



     async deleteEvent(eventId){
        try{
            await Events.findByIdAndDelete(eventId);
            
        }
        catch(error){
            throw new Error(` Failed to find events for resturants ID ${eventId}`);
        }
     },
     async findById(eventId){
        try{
            const events =await Events.findById(eventId);
            if(!events){
                throw new Error(` Event not found with ID ${eventId}`);

            }
            return event;
        }
        catch(error){
            throw new Error(` Failed to find events with ID ${eventId}`);
        }
     },


};