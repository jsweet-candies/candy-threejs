package def.threejs.three;
public class LightShadow extends def.js.Object {
    public LightShadow(Camera camera){}
    public Camera camera;
    public double bias;
    public double radius;
    public Vector2 mapSize;
    public RenderTarget map;
    public Matrix4 matrix;
    native public LightShadow copy(LightShadow source);
    native public LightShadow clone(Boolean recursive);
    @jsweet.lang.Name("clone")
    native public LightShadow Clone();
    protected LightShadow(){}
}

