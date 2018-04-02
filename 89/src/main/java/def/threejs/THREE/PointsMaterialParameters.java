package def.threejs.THREE;
import jsweet.util.union.Union3;
@jsweet.lang.Interface
public abstract class PointsMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public double size;
    @jsweet.lang.Optional
    public Boolean sizeAttenuation;
}

