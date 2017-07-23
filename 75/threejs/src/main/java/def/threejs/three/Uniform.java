package def.threejs.three;
import def.js.Function;
public class Uniform extends def.js.Object {
    public Uniform(String type, String value){}
    public String type;
    public String value;
    public Boolean dynamic;
    public Function onUpdateCallback;
    native public Uniform onUpdate(Function callback);
    native public java.lang.Object onUpdateCallback(java.lang.Object... args);
    protected Uniform(){}
}

