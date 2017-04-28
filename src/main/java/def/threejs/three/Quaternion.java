package def.threejs.three;
import def.js.Function;
/**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * var quaternion = new THREE.Quaternion();
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
     * var vector = new THREE.Vector3( 1, 0, 0 );
     * vector.applyQuaternion( quaternion );
     */
public class Quaternion extends def.js.Object {
    /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
    public Quaternion(double x, double y, double z, double w){}
    public double x;
    public double y;
    public double z;
    public double w;
    /**
         * Sets values of this quaternion.
         */
    native public Quaternion set(double x, double y, double z, double w);
    /**
         * Clones this quaternion.
         */
    @jsweet.lang.Name("clone")
    native public Quaternion Clone();
    /**
         * Copies values of q to this quaternion.
         */
    native public Quaternion copy(Quaternion q);
    /**
         * Sets this quaternion from rotation specified by Euler angles.
         */
    native public Quaternion setFromEuler(Euler euler, Boolean update);
    /**
         * Sets this quaternion from rotation specified by axis and angle.
         * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
         * Axis have to be normalized, angle is in radians.
         */
    native public Quaternion setFromAxisAngle(Vector3 axis, double angle);
    /**
         * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
         */
    native public Quaternion setFromRotationMatrix(Matrix4 m);
    native public Quaternion setFromUnitVectors(Vector3 vFrom, Vector3 vTo);
    /**
         * Inverts this quaternion.
         */
    native public Quaternion inverse();
    native public Quaternion conjugate();
    native public double dot(Vector3 v);
    native public double lengthSq();
    /**
         * Computes length of this quaternion.
         */
    native public double length();
    /**
         * Normalizes this quaternion.
         */
    native public Quaternion normalize();
    /**
         * Multiplies this quaternion by b.
         */
    native public Quaternion multiply(Quaternion q);
    /**
         * Sets this quaternion to a x b
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
         */
    native public Quaternion multiplyQuaternions(Quaternion a, Quaternion b);
    native public Object multiplyVector3(Object v);
    native public Quaternion slerp(Quaternion qb, double t);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Quaternion v);
    native public Quaternion fromArray(double[] n);
    native public double[] toArray();
    native public Quaternion fromArray(double[] xyzw, double offset);
    native public double[] toArray(double[] xyzw, double offset);
    native public Quaternion onChange(Function callback);
    public Function onChangeCallback;
    /**
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
         */
    native public static Quaternion slerp(Quaternion qa, Quaternion qb, Quaternion qm, double t);
    native public static Quaternion slerpFlat(double[] dst, double dstOffset, double[] src0, double srcOffset, double[] src1, double stcOffset1, double t);
    /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
    public Quaternion(double x, double y, double z){}
    /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
    public Quaternion(double x, double y){}
    /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
    public Quaternion(double x){}
    /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
    public Quaternion(){}
    /**
         * Sets this quaternion from rotation specified by Euler angles.
         */
    native public Quaternion setFromEuler(Euler euler);
    native public double[] toArray(double[] xyzw);
    native public java.lang.Object onChangeCallback(java.lang.Object... args);
}

