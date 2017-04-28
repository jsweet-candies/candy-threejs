package def.threejs.three;
/**
     * A class for generating sphere geometries
     */
public class SphereGeometry extends Geometry {
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments, double heightSegments, double phiStart, double phiLength, double thetaStart, double thetaLength){}
    public Parameters parameters;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public double radius;
        public double widthSegments;
        public double heightSegments;
        public double phiStart;
        public double phiLength;
        public double thetaStart;
        public double thetaLength;
    }
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments, double heightSegments, double phiStart, double phiLength, double thetaStart){}
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments, double heightSegments, double phiStart, double phiLength){}
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments, double heightSegments, double phiStart){}
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments, double heightSegments){}
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius, double widthSegments){}
    /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
    public SphereGeometry(double radius){}
    protected SphereGeometry(){}
}

