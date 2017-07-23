package def.threejs.three;
/**
     * BoxGeometry is the quadrilateral primitive geometry class. It is typically used for creating a cube or irregular quadrilateral of the dimensions provided within the (optional) 'width', 'height', & 'depth' constructor arguments.
     */
public class BoxGeometry extends Geometry {
    /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
    public BoxGeometry(double width, double height, double depth, double widthSegments, double heightSegments, double depthSegments){}
    public Parameters parameters;
    @jsweet.lang.Name("clone")
    native public BoxGeometry Clone();
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public double width;
        public double height;
        public double depth;
        public double widthSegments;
        public double heightSegments;
        public double depthSegments;
    }
    /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
    public BoxGeometry(double width, double height, double depth, double widthSegments, double heightSegments){}
    /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
    public BoxGeometry(double width, double height, double depth, double widthSegments){}
    /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
    public BoxGeometry(double width, double height, double depth){}
    protected BoxGeometry(){}
}

