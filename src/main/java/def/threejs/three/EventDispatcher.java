package def.threejs.three;
/**
     * JavaScript events for custom objects
     *
     * # Example
     *     var Car = function () {
     *
     *         EventDispatcher.call( this );
     *         this.start = function () {
     *
     *             this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
     *
     *         };
     *
     *     };
     *
     *     var car = new Car();
     *     car.addEventListener( 'start', function ( event ) {
     *
     *         alert( event.message );
     *
     *     } );
     *     car.start();
     *
     * @source src/core/EventDispatcher.js
     */
public class EventDispatcher extends def.js.Object {
    /**
         * Creates eventDispatcher object. It needs to be call with '.call' to add the functionality to an object.
         */
    public EventDispatcher(){}
    native public void apply(Object object);
    /**
         * Adds a listener to an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    /**
         * Adds a listener to an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    /**
         * Removes a listener from an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    /**
         * Fire an event type.
         * @param type The type of event that gets fired.
         */
    native public void dispatchEvent(EventData event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
}

