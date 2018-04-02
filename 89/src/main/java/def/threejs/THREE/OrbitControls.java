package def.threejs.THREE;
import def.dom.HTMLDocument;
import def.dom.HTMLElement;
public class OrbitControls extends def.js.Object {
    public OrbitControls(Camera object, HTMLElement domElement){}
    public Camera object;
    public jsweet.util.union.Union<HTMLElement,HTMLDocument> domElement;
    public Boolean enabled;
    public Vector3 target;
    public Vector3 center;
    public Boolean enableZoom;
    public double zoomSpeed;
    public double minDistance;
    public double maxDistance;
    public Boolean enableRotate;
    public double rotateSpeed;
    public Boolean enablePan;
    public double keyPanSpeed;
    public Boolean autoRotate;
    public double autoRotateSpeed;
    public double minPolarAngle;
    public double maxPolarAngle;
    public double minAzimuthAngle;
    public double maxAzimuthAngle;
    public Boolean enableKeys;
    public Keys keys;
    public MouseButtons mouseButtons;
    public Boolean enableDamping;
    public double dampingFactor;
    native public void rotateLeft(double angle);
    native public void rotateUp(double angle);
    native public void panLeft(double distance);
    native public void panUp(double distance);
    native public void pan(double deltaX, double deltaY);
    native public void dollyIn(double dollyScale);
    native public void dollyOut(double dollyScale);
    native public void update();
    native public void reset();
    native public void dispose();
    native public double getPolarAngle();
    native public double getAzimuthalAngle();
    native public void addEventListener(String type, java.util.function.Consumer<Object> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Object> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Object> listener);
    native public void dispatchEvent(Event event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Keys extends def.js.Object {
        public double LEFT;
        public double UP;
        public double RIGHT;
        public double BOTTOM;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class MouseButtons extends def.js.Object {
        public MOUSE ORBIT;
        public MOUSE ZOOM;
        public MOUSE PAN;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Event extends def.js.Object {
        public String type;
        public Object target;
    }
    public OrbitControls(Camera object){}
    native public void rotateLeft();
    native public void rotateUp();
    native public void panLeft();
    native public void panUp();
    protected OrbitControls(){}
}

