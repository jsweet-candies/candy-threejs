package def.threejs.THREE;
import def.dom.HTMLElement;
public class OrthographicTrackballControls extends EventDispatcher {
    public OrthographicTrackballControls(Camera object, HTMLElement domElement){}
    public Camera object;
    public HTMLElement domElement;
    public Boolean enabled;
    public Screen screen;
    public double radius;
    public double rotateSpeed;
    public double zoomSpeed;
    public double panSpeed;
    public Boolean noRotate;
    public Boolean noZoom;
    public Boolean noPan;
    public Boolean noRoll;
    public Boolean staticMoving;
    public double dynamicDampingFactor;
    public double[] keys;
    public Vector3 target;
    public Vector3 position0;
    public Vector3 target0;
    public Vector3 up0;
    public double left0;
    public double right0;
    public double top0;
    public double bottom0;
    native public void update();
    native public void reset();
    native public void checkDistances();
    native public void zoomCamera();
    native public void panCamera();
    native public void rotateCamera();
    native public void handleResize();
    native public void handleEvent(Object event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Screen extends def.js.Object {
        public double left;
        public double top;
        public double width;
        public double height;
    }
    public OrthographicTrackballControls(Camera object){}
    protected OrthographicTrackballControls(){}
}

