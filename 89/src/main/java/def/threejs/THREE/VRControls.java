package def.threejs.THREE;
public class VRControls extends def.js.Object {
    public VRControls(Camera camera, java.util.function.Consumer<String> callback){}
    /**
     * Update VR Instance Tracking
     */
    native public void update();
    native public void zeroSensor();
    public double scale;
    public VRControls(Camera camera){}
    protected VRControls(){}
}

