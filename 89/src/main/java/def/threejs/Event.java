package def.threejs;
@jsweet.lang.Interface
@jsweet.lang.Mixin(target=def.dom.Event.class)
public abstract class Event extends def.dom.Event {
    public String type;
    public Object target;
}

