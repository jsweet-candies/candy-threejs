package def.threejs.THREE;
public class StereoCamera extends Camera {
    public StereoCamera(){}
    public double aspect;
    public double eyeSep;
    public PerspectiveCamera cameraL;
    public PerspectiveCamera cameraR;
    native public void update(PerspectiveCamera camera);
}

