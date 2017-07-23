package def.threejs.three;
public class Triangle extends def.js.Object {
    public Triangle(Vector3 a, Vector3 b, Vector3 c){}
    public Vector3 a;
    public Vector3 b;
    public Vector3 c;
    native public Triangle set(Vector3 a, Vector3 b, Vector3 c);
    native public Triangle setFromPointsAndIndices(Vector3[] points, double i0, double i1, double i2);
    @jsweet.lang.Name("clone")
    native public Triangle Clone();
    native public Triangle copy(Triangle triangle);
    native public double area();
    native public Vector3 midpoint(Vector3 optionalTarget);
    native public Vector3 normal(Vector3 optionalTarget);
    native public Plane plane(Vector3 optionalTarget);
    native public Vector3 barycoordFromPoint(Vector3 point, Vector3 optionalTarget);
    native public Boolean containsPoint(Vector3 point);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Triangle triangle);
    native public static Vector3 normal(Vector3 a, Vector3 b, Vector3 c, Vector3 optionalTarget);
    native public static Vector3 barycoordFromPoint(Vector3 point, Vector3 a, Vector3 b, Vector3 c, Vector3 optionalTarget);
    native public static Boolean containsPoint(Vector3 point, Vector3 a, Vector3 b, Vector3 c);
    public Triangle(Vector3 a, Vector3 b){}
    public Triangle(Vector3 a){}
    public Triangle(){}
    native public Vector3 midpoint();
    native public Vector3 normal();
    native public Plane plane();
    native public Vector3 barycoordFromPoint(Vector3 point);
    native public static Vector3 normal(Vector3 a, Vector3 b, Vector3 c);
}

