package def.threejs.three;
public class PolyhedronGeometry extends Geometry {
    public PolyhedronGeometry(Vector3[] vertices, Face3[] faces, double radius, double detail){}
    public Parameters parameters;
    public Sphere boundingSphere;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public Vector3[] vertices;
        public Face3[] faces;
        public double radius;
        public double detail;
    }
    public PolyhedronGeometry(Vector3[] vertices, Face3[] faces, double radius){}
    public PolyhedronGeometry(Vector3[] vertices, Face3[] faces){}
    protected PolyhedronGeometry(){}
}

