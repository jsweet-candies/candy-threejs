package def.threejs.THREE;
@jsweet.lang.Interface
public abstract class WebVRManager extends def.js.Object {
    public Boolean enabled;
    native public void setPoseTarget(Object3D object);
    native public jsweet.util.union.Union<PerspectiveCamera,ArrayCamera> getCamera(PerspectiveCamera camera);
    native public void submitFrame();
    native public void dispose();
}

