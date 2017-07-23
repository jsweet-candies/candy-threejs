package def.threejs.three;
public class ShapeGeometry extends Geometry {
    public ShapeGeometry(Shape shape, Object options){}
    public ShapeGeometry(Shape[] shapes, Object options){}
    native public ShapeGeometry addShapeList(Shape[] shapes, Object options);
    native public void addShape(Shape shape, Object options);
    public ShapeGeometry(Shape shape){}
    public ShapeGeometry(Shape[] shapes){}
    native public void addShape(Shape shape);
    protected ShapeGeometry(){}
}

