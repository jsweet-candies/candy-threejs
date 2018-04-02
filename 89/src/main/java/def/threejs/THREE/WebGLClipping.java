package def.threejs.THREE;
public class WebGLClipping extends def.js.Object {
    public Uniform uniform;
    public double numPlanes;
    native public Boolean init(Object[] planes, Boolean enableLocalClipping, Camera camera);
    native public void beginShadows();
    native public void endShadows();
    native public void setState(Object[] planes, Boolean clipShadows, Camera camera, Boolean cache, Boolean fromCache);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Uniform extends def.js.Object {
        public Object value;
        public Boolean needsUpdate;
    }
}

