package def.threejs.three;
/**
     * Defines a 2d shape plane using paths.
     */
public class Shape extends Path {
    public Shape(Vector2[] points){}
    public Path[] holes;
    native public ExtrudeGeometry extrude(Object options);
    native public ShapeGeometry makeGeometry(Object options);
    native public Vector2[][] getPointsHoles(double divisions);
    native public ExtractAllPoints extractAllPoints(double divisions);
    native public Vector2[] extractPoints(double divisions);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class ExtractAllPoints extends def.js.Object {
        public Vector2[] shape;
        public Vector2[][] holes;
    }
    public Shape(){}
    native public ExtrudeGeometry extrude();
    native public ShapeGeometry makeGeometry();
}

