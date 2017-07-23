package def.threejs.three;
@jsweet.lang.Interface
public abstract class IFog extends def.js.Object {
    public String name;
    public Color color;
    @jsweet.lang.Name("clone")
    native public IFog Clone();
}

