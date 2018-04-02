package def.threejs.THREE;
public class VREffect extends def.js.Object {
    public VREffect(Renderer renderer, java.util.function.Consumer<String> callback){}
    native public void render(Scene scene, Camera camera);
    native public void setSize(double width, double height);
    native public void setFullScreen(Boolean flag);
    native public void startFullscreen();
    native public VREffectOffset FovToNDCScaleOffset(VRFov fov);
    native public Matrix4 FovPortToProjection(VRFov fov, Boolean rightHanded, double zNear, double zFar);
    native public Matrix4 FovToProjection(VRFov fov, Boolean rightHanded, double zNear, double zFar);
    public VREffect(Renderer renderer){}
    protected VREffect(){}
}

