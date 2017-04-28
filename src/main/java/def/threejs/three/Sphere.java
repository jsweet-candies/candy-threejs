package def.threejs.three;
public class Sphere extends def.js.Object {
    public Sphere(Vector3 center, double radius){}
    public Vector3 center;
    public double radius;
    native public Sphere set(Vector3 center, double radius);
    native public Sphere setFromPoints(Vector3[] points, Vector3 optionalCenter);
    @jsweet.lang.Name("clone")
    native public Sphere Clone();
    native public Sphere copy(Sphere sphere);
    native public Boolean empty();
    native public Boolean containsPoint(Vector3 point);
    native public double distanceToPoint(Vector3 point);
    native public Boolean intersectsSphere(Sphere sphere);
    native public Boolean intersectsBox(Box3 box);
    native public Boolean intersectsPlane(Plane plane);
    native public Vector3 clampPoint(Vector3 point, Vector3 optionalTarget);
    native public Box3 getBoundingBox(Box3 optionalTarget);
    native public Sphere applyMatrix4(Matrix4 matrix);
    native public Sphere translate(Vector3 offset);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Sphere sphere);
    public Sphere(Vector3 center){}
    public Sphere(){}
    native public Sphere setFromPoints(Vector3[] points);
    native public Vector3 clampPoint(Vector3 point);
    native public Box3 getBoundingBox();
}

