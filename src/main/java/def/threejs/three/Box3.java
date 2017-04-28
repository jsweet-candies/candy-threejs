package def.threejs.three;
public class Box3 extends def.js.Object {
    public Box3(Vector3 min, Vector3 max){}
    public Vector3 max;
    public Vector3 min;
    native public Box3 set(Vector3 min, Vector3 max);
    native public Box3 setFromArray(double[] array);
    native public Box3 setFromPoints(Vector3[] points);
    native public Box3 setFromCenterAndSize(Vector3 center, Vector3 size);
    native public Box3 setFromObject(Object3D object);
    @jsweet.lang.Name("clone")
    native public Box3 Clone();
    native public Box3 copy(Box3 box);
    native public Box3 makeEmpty();
    native public Boolean isEmpty();
    native public Vector3 center(Vector3 optionalTarget);
    native public Vector3 size(Vector3 optionalTarget);
    native public Box3 expandByPoint(Vector3 point);
    native public Box3 expandByVector(Vector3 vector);
    native public Box3 expandByScalar(double scalar);
    native public Boolean containsPoint(Vector3 point);
    native public Boolean containsBox(Box3 box);
    native public Vector3 getParameter(Vector3 point);
    native public Boolean intersectsBox(Box3 box);
    native public Boolean intersectsSphere(Sphere sphere);
    native public Boolean intersectsPlane(Plane plane);
    native public Vector3 clampPoint(Vector3 point, Vector3 optionalTarget);
    native public double distanceToPoint(Vector3 point);
    native public Sphere getBoundingSphere(Sphere optionalTarget);
    native public Box3 intersect(Box3 box);
    native public Box3 union(Box3 box);
    native public Box3 applyMatrix4(Matrix4 matrix);
    native public Box3 translate(Vector3 offset);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Box3 box);
    native public Object empty();
    native public Object isIntersectionBox(Object b);
    native public Object isIntersectionSphere(Object s);
    public Box3(Vector3 min){}
    public Box3(){}
    native public Vector3 center();
    native public Vector3 size();
    native public Vector3 clampPoint(Vector3 point);
    native public Sphere getBoundingSphere();
}

