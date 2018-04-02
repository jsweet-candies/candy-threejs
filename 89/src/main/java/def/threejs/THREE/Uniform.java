package def.threejs.THREE;
import def.js.Function;
public class Uniform extends def.js.Object {
    public Uniform(Object value){}
    /**
     * @deprecated
     */
    public Uniform(String type, Object value){}
    /**
     * @deprecated
     */
    public String type;
    public Object value;
    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    public Boolean dynamic;
    public Function onUpdateCallback;
    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    native public Uniform onUpdate(Function callback);
    native public java.lang.Object onUpdateCallback(java.lang.Object... args);
    protected Uniform(){}
}

