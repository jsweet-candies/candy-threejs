package def.threejs.three;
@jsweet.lang.Interface
public abstract class SpriteMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Double,String> color;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public double rotation;
    @jsweet.lang.Optional
    public Boolean fog;
}

