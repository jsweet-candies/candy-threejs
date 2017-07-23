package def.threejs.three;
public class ExtrudeGeometry extends Geometry {
    public ExtrudeGeometry(Shape shape, Object options){}
    public ExtrudeGeometry(Shape[] shapes, Object options){}
    public static WorldUVGenerator WorldUVGenerator;
    native public void addShapeList(Shape[] shapes, Object options);
    native public void addShape(Shape shape, Object options);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class WorldUVGenerator extends def.js.Object {
        native public Vector2[] generateTopUV(Geometry geometry, double indexA, double indexB, double indexC);
        native public Vector2[] generateSideWallUV(Geometry geometry, double indexA, double indexB, double indexC, double indexD);
    }
    public ExtrudeGeometry(Shape shape){}
    public ExtrudeGeometry(){}
    public ExtrudeGeometry(Shape[] shapes){}
    native public void addShapeList(Shape[] shapes);
    native public void addShape(Shape shape);
}

