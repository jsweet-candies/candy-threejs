package def.threejs.three;
public class CameraHelper extends LineSegments {
    public CameraHelper(Camera camera){}
    public Camera camera;
    public PointMap pointMap;
    native public void update();
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class PointMap extends def.js.Object {
        native public double[] $get(String id);
    }
    protected CameraHelper(){}
}

