package def.threejs.THREE;
@jsweet.lang.Interface
public abstract class IFog extends def.js.Object {
    public String name;
    public Color color;
    @jsweet.lang.Name("clone")
    native public IFog Clone();
    native public Object toJSON();
}

