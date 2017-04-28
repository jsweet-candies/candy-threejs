package def.threejs.three;
public class Layers extends def.js.Object {
    public Layers(){}
    public double mask;
    native public void set(double channel);
    native public void enable(double channel);
    native public void toggle(double channel);
    native public void disable(double channel);
    native public Boolean test(Layers layers);
}

