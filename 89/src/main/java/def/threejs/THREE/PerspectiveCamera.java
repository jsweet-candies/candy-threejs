package def.threejs.THREE;
/**
 * Camera with perspective projection.
 *
 * # example
 *     var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
 *     scene.add( camera );
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js
 */
public class PerspectiveCamera extends Camera {
    /**
     * @param fov Camera frustum vertical field of view. Default value is 50.
     * @param aspect Camera frustum aspect ratio. Default value is 1.
     * @param near Camera frustum near plane. Default value is 0.1.
     * @param far Camera frustum far plane. Default value is 2000.
     */
    public PerspectiveCamera(double fov, double aspect, double near, double far){}
    public double zoom;
    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     */
    public double fov;
    /**
     * Camera frustum aspect ratio, window width divided by window height.
     */
    public double aspect;
    /**
     * Camera frustum near plane.
     */
    public double near;
    /**
     * Camera frustum far plane.
     */
    public double far;
    public double focus;
    public View view;
    public double filmGauge;
    public double filmOffset;
    native public void setFocalLength(double focalLength);
    native public double getFocalLength();
    native public double getEffectiveFOV();
    native public double getFilmWidth();
    native public double getFilmHeight();
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
     *
     *     +---+---+---+
     *     | A | B | C |
     *     +---+---+---+
     *     | D | E | F |
     *     +---+---+---+
     *
     * then for each monitor you would call it like this:
     *
     *     var w = 1920;
     *     var h = 1080;
     *     var fullWidth = w * 3;
     *     var fullHeight = h * 2;
     *
     *     // A
     *     camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *     // B
     *     camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *     // C
     *     camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *     // D
     *     camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *     // E
     *     camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *     // F
     *     camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
     *
     * @param fullWidth full width of multiview setup
     * @param fullHeight full height of multiview setup
     * @param x horizontal offset of subcamera
     * @param y vertical offset of subcamera
     * @param width width of subcamera
     * @param height height of subcamera
     */
    native public void setViewOffset(double fullWidth, double fullHeight, double x, double y, double width, double height);
    native public void clearViewOffset();
    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    native public void updateProjectionMatrix();
    native public Object toJSON(Object meta);
    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength .setFocalLength()} and {@link PerspectiveCamera#filmGauge .filmGauge} instead.
     */
    native public void setLens(double focalLength, double frameHeight);
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
     * @param fov Camera frustum vertical field of view. Default value is 50.
     * @param aspect Camera frustum aspect ratio. Default value is 1.
     * @param near Camera frustum near plane. Default value is 0.1.
     * @param far Camera frustum far plane. Default value is 2000.
     */
    public PerspectiveCamera(double fov, double aspect, double near){}
    /**
     * @param fov Camera frustum vertical field of view. Default value is 50.
     * @param aspect Camera frustum aspect ratio. Default value is 1.
     * @param near Camera frustum near plane. Default value is 0.1.
     * @param far Camera frustum far plane. Default value is 2000.
     */
    public PerspectiveCamera(double fov, double aspect){}
    /**
     * @param fov Camera frustum vertical field of view. Default value is 50.
     * @param aspect Camera frustum aspect ratio. Default value is 1.
     * @param near Camera frustum near plane. Default value is 0.1.
     * @param far Camera frustum far plane. Default value is 2000.
     */
    public PerspectiveCamera(double fov){}
    /**
     * @param fov Camera frustum vertical field of view. Default value is 50.
     * @param aspect Camera frustum aspect ratio. Default value is 1.
     * @param near Camera frustum near plane. Default value is 0.1.
     * @param far Camera frustum far plane. Default value is 2000.
     */
    public PerspectiveCamera(){}
    native public Object toJSON();
    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength .setFocalLength()} and {@link PerspectiveCamera#filmGauge .filmGauge} instead.
     */
    native public void setLens(double focalLength);
}

