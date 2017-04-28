package def.threejs.three;
public class Plane extends def.js.Object {
    public Plane(Vector3 normal, double constant){}
    public Vector3 normal;
    public double constant;
    native public Plane set(Vector3 normal, double constant);
    native public Plane setComponents(double x, double y, double z, double w);
    native public Plane setFromNormalAndCoplanarPoint(Vector3 normal, Vector3 point);
    native public Plane setFromCoplanarPoints(Vector3 a, Vector3 b, Vector3 c);
    @jsweet.lang.Name("clone")
    native public Plane Clone();
    native public Plane copy(Plane plane);
    native public Plane normalize();
    native public Plane negate();
    native public double distanceToPoint(Vector3 point);
    native public double distanceToSphere(Sphere sphere);
    native public Vector3 projectPoint(Vector3 point, Vector3 optionalTarget);
    native public Vector3 orthoPoint(Vector3 point, Vector3 optionalTarget);
    native public Vector3 intersectLine(Line3 line, Vector3 optionalTarget);
    native public Boolean intersectsLine(Line3 line);
    native public Boolean intersectsBox(Box3 box);
    native public Vector3 coplanarPoint(Boolean optionalTarget);
    native public Plane applyMatrix4(Matrix4 matrix, Matrix3 optionalNormalMatrix);
    native public Plane translate(Vector3 offset);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Plane plane);
    native public Object isIntersectionLine(Object l);
    public Plane(Vector3 normal){}
    public Plane(){}
    native public Vector3 projectPoint(Vector3 point);
    native public Vector3 orthoPoint(Vector3 point);
    native public Vector3 intersectLine(Line3 line);
    native public Vector3 coplanarPoint();
    native public Plane applyMatrix4(Matrix4 matrix);
}

