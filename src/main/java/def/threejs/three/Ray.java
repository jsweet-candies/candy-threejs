package def.threejs.three;
public class Ray extends def.js.Object {
    public Ray(Vector3 origin, Vector3 direction){}
    public Vector3 origin;
    public Vector3 direction;
    native public Ray set(Vector3 origin, Vector3 direction);
    @jsweet.lang.Name("clone")
    native public Ray Clone();
    native public Ray copy(Ray ray);
    native public Vector3 at(double t, Vector3 optionalTarget);
    native public Vector3 lookAt(Vector3 v);
    native public Ray recast(double t);
    native public Vector3 closestPointToPoint(Vector3 point, Vector3 optionalTarget);
    native public double distanceToPoint(Vector3 point);
    native public double distanceSqToPoint(Vector3 point);
    native public double distanceSqToSegment(Vector3 v0, Vector3 v1, Vector3 optionalPointOnRay, Vector3 optionalPointOnSegment);
    native public Vector3 intersectSphere(Sphere sphere, Vector3 optionalTarget);
    native public Boolean intersectsSphere(Sphere sphere);
    native public double distanceToPlane(Plane plane);
    native public Vector3 intersectPlane(Plane plane, Vector3 optionalTarget);
    native public Boolean intersectsPlane(Plane plane);
    native public Vector3 intersectBox(Box3 box, Vector3 optionalTarget);
    native public Boolean intersectsBox(Box3 box);
    native public Vector3 intersectTriangle(Vector3 a, Vector3 b, Vector3 c, Boolean backfaceCulling, Vector3 optionalTarget);
    native public Ray applyMatrix4(Matrix4 matrix4);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Ray ray);
    native public Object isIntersectionSphere(Object s);
    native public Object isIntersectionPlane(Object p);
    native public Object isIntersectionBox(Object b);
    public Ray(Vector3 origin){}
    public Ray(){}
    native public Vector3 at(double t);
    native public Vector3 closestPointToPoint(Vector3 point);
    native public double distanceSqToSegment(Vector3 v0, Vector3 v1, Vector3 optionalPointOnRay);
    native public double distanceSqToSegment(Vector3 v0, Vector3 v1);
    native public Vector3 intersectSphere(Sphere sphere);
    native public Vector3 intersectPlane(Plane plane);
    native public Vector3 intersectBox(Box3 box);
    native public Vector3 intersectTriangle(Vector3 a, Vector3 b, Vector3 c, Boolean backfaceCulling);
}

