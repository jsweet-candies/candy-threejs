package def.threejs.THREE;
/**
 * Camera with orthographic projection
 *
 * @example
 * var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
 * scene.add( camera );
 *
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js">src/cameras/OrthographicCamera.js</a>
 */
public class OrthographicCamera extends Camera {
    /**
     * @param left Camera frustum left plane.
     * @param right Camera frustum right plane.
     * @param top Camera frustum top plane.
     * @param bottom Camera frustum bottom plane.
     * @param near Camera frustum near plane.
     * @param far Camera frustum far plane.
     */
    public OrthographicCamera(double left, double right, double top, double bottom, double near, double far){}
    public double zoom;
    public View view;
    /**
     * Camera frustum left plane.
     */
    public double left;
    /**
     * Camera frustum right plane.
     */
    public double right;
    /**
     * Camera frustum top plane.
     */
    public double top;
    /**
     * Camera frustum bottom plane.
     */
    public double bottom;
    /**
     * Camera frustum near plane.
     */
    public double near;
    /**
     * Camera frustum far plane.
     */
    public double far;
    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    native public void updateProjectionMatrix();
    native public void setViewOffset(double fullWidth, double fullHeight, double offsetX, double offsetY, double width, double height);
    native public void clearViewOffset();
    native public Object toJSON(Object meta);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class View extends def.js.Object {
        public double fullWidth;
        public double fullHeight;
        public double offsetX;
        public double offsetY;
        public double width;
        public double height;
    }
    /**
     * @param left Camera frustum left plane.
     * @param right Camera frustum right plane.
     * @param top Camera frustum top plane.
     * @param bottom Camera frustum bottom plane.
     * @param near Camera frustum near plane.
     * @param far Camera frustum far plane.
     */
    public OrthographicCamera(double left, double right, double top, double bottom, double near){}
    /**
     * @param left Camera frustum left plane.
     * @param right Camera frustum right plane.
     * @param top Camera frustum top plane.
     * @param bottom Camera frustum bottom plane.
     * @param near Camera frustum near plane.
     * @param far Camera frustum far plane.
     */
    public OrthographicCamera(double left, double right, double top, double bottom){}
    native public Object toJSON();
    protected OrthographicCamera(){}
}

