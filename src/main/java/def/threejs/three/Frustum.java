package def.threejs.three;
/**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
public class Frustum extends def.js.Object {
    public Frustum(Plane p0, Plane p1, Plane p2, Plane p3, Plane p4, Plane p5){}
    /**
         * Array of 6 vectors.
         */
    public Plane[] planes;
    native public Frustum set(double p0, double p1, double p2, double p3, double p4, double p5);
    @jsweet.lang.Name("clone")
    native public Frustum Clone();
    native public Frustum copy(Frustum frustum);
    native public Frustum setFromMatrix(Matrix4 m);
    native public Boolean intersectsObject(Object3D object);
    native public Boolean intersectsSphere(Sphere sphere);
    native public Boolean intersectsBox(Box3 box);
    native public Boolean containsPoint(Vector3 point);
    public Frustum(Plane p0, Plane p1, Plane p2, Plane p3, Plane p4){}
    public Frustum(Plane p0, Plane p1, Plane p2, Plane p3){}
    public Frustum(Plane p0, Plane p1, Plane p2){}
    public Frustum(Plane p0, Plane p1){}
    public Frustum(Plane p0){}
    public Frustum(){}
    native public Frustum set(double p0, double p1, double p2, double p3, double p4);
    native public Frustum set(double p0, double p1, double p2, double p3);
    native public Frustum set(double p0, double p1, double p2);
    native public Frustum set(double p0, double p1);
    native public Frustum set(double p0);
    native public Frustum set();
}

