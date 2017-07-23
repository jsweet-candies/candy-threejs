package def.threejs.three;
public class Raycaster extends def.js.Object {
    public Raycaster(Vector3 origin, Vector3 direction, double near, double far){}
    public Ray ray;
    public double near;
    public double far;
    public RaycasterParameters params;
    public double precision;
    public double linePrecision;
    native public void set(Vector3 origin, Vector3 direction);
    native public void setFromCamera(Coords coords, Camera camera);
    native public Intersection[] intersectObject(Object3D object, Boolean recursive);
    native public Intersection[] intersectObjects(Object3D[] objects, Boolean recursive);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Coords extends def.js.Object {
        public double x;
        public double y;
    }
    public Raycaster(Vector3 origin, Vector3 direction, double near){}
    public Raycaster(Vector3 origin, Vector3 direction){}
    public Raycaster(Vector3 origin){}
    public Raycaster(){}
    native public Intersection[] intersectObject(Object3D object);
    native public Intersection[] intersectObjects(Object3D[] objects);
}

