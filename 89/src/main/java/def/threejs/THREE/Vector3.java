package def.threejs.THREE;
/**
 * 3D vector.
 *
 * @example
 * var a = new THREE.Vector3( 1, 0, 0 );
 * var b = new THREE.Vector3( 0, 1, 0 );
 * var c = new THREE.Vector3();
 * c.crossVectors( a, b );
 *
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js">src/math/Vector3.js</a>
 *
 * ( class Vector3 implements Vector<Vector3> )
 */
public class Vector3 extends Vector {
    public Vector3(double x, double y, double z){}
    public double x;
    public double y;
    public double z;
    /**
     * Sets value of this vector.
     */
    native public Vector3 set(double x, double y, double z);
    /**
     * Sets all values of this vector.
     */
    native public Vector3 setScalar(double scalar);
    /**
     * Sets x value of this vector.
     */
    native public Vector3 setX(double x);
    /**
     * Sets y value of this vector.
     */
    native public Vector3 setY(double y);
    /**
     * Sets z value of this vector.
     */
    native public Vector3 setZ(double z);
    native public void setComponent(double index, double value);
    native public double getComponent(double index);
    /**
     * Clones this vector.
     */
    @jsweet.lang.Name("clone")
    native public Vector3 Clone();
    /**
     * Copies value of v to this vector.
     */
    native public Vector3 copy(Vector3 v);
    /**
     * Adds v to this vector.
     */
    native public Vector3 add(Vector3 a);
    native public Vector3 addScalar(double s);
    native public Vector3 addScaledVector(Vector3 v, double s);
    /**
     * Sets this vector to a + b.
     */
    native public Vector3 addVectors(Vector3 a, Vector3 b);
    /**
     * Subtracts v from this vector.
     */
    native public Vector3 sub(Vector3 a);
    native public Vector3 subScalar(double s);
    /**
     * Sets this vector to a - b.
     */
    native public Vector3 subVectors(Vector3 a, Vector3 b);
    native public Vector3 multiply(Vector3 v);
    /**
     * Multiplies this vector by scalar s.
     */
    native public Vector3 multiplyScalar(double s);
    native public Vector3 multiplyVectors(Vector3 a, Vector3 b);
    native public Vector3 applyEuler(Euler euler);
    native public Vector3 applyAxisAngle(Vector3 axis, double angle);
    native public Vector3 applyMatrix3(Matrix3 m);
    native public Vector3 applyMatrix4(Matrix4 m);
    native public Vector3 applyQuaternion(Quaternion q);
    native public Vector3 project(Camera camrea);
    native public Vector3 unproject(Camera camera);
    native public Vector3 transformDirection(Matrix4 m);
    native public Vector3 divide(Vector3 v);
    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    native public Vector3 divideScalar(double s);
    native public Vector3 min(Vector3 v);
    native public Vector3 max(Vector3 v);
    native public Vector3 clamp(Vector3 min, Vector3 max);
    native public Vector3 clampScalar(double min, double max);
    native public Vector3 clampLength(double min, double max);
    native public Vector3 floor();
    native public Vector3 ceil();
    native public Vector3 round();
    native public Vector3 roundToZero();
    /**
     * Inverts this vector.
     */
    native public Vector3 negate();
    /**
     * Computes dot product of this vector and v.
     */
    native public double dot(Vector3 v);
    /**
     * Computes squared length of this vector.
     */
    native public double lengthSq();
    /**
     * Computes length of this vector.
     */
    native public double length();
    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     *
     * @deprecated Use {@link Vector3#manhattanLength .manhattanLength()} instead.
     */
    native public double lengthManhattan();
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number}
     *
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    native public double manhattanLength();
    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * @param {Vector3} v
     *
     * @return {number}
     *
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    native public double manhattanDistanceTo(Vector3 v);
    /**
     * Normalizes this vector.
     */
    native public Vector3 normalize();
    /**
     * Normalizes this vector and multiplies it by l.
     */
    native public Vector3 setLength(double l);
    native public Vector3 lerp(Vector3 v, double alpha);
    native public Vector3 lerpVectors(Vector3 v1, Vector3 v2, double alpha);
    /**
     * Sets this vector to cross product of itself and v.
     */
    native public Vector3 cross(Vector3 a);
    /**
     * Sets this vector to cross product of a and b.
     */
    native public Vector3 crossVectors(Vector3 a, Vector3 b);
    native public Vector3 projectOnVector(Vector3 v);
    native public Vector3 projectOnPlane(Vector3 planeNormal);
    native public Vector3 reflect(Vector3 vector);
    native public double angleTo(Vector3 v);
    /**
     * Computes distance of this vector to v.
     */
    native public double distanceTo(Vector3 v);
    /**
     * Computes squared distance of this vector to v.
     */
    native public double distanceToSquared(Vector3 v);
    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    native public double distanceToManhattan(Vector3 v);
    native public Vector3 setFromSpherical(Spherical s);
    native public Vector3 setFromMatrixPosition(Matrix4 m);
    native public Vector3 setFromMatrixScale(Matrix4 m);
    native public Vector3 setFromMatrixColumn(Matrix4 matrix, double index);
    /**
     * Checks for strict equality of this vector and v.
     */
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Vector3 v);
    native public Vector3 fromArray(double[] xyz, double offset);
    native public double[] toArray(double[] xyz, double offset);
    native public Vector3 fromBufferAttribute(BufferAttribute attribute, double index, double offset);
    /**
     * @deprecated Use {@link Vector3#setFromMatrixPosition .setFromMatrixPosition()} instead.
     */
    native public Vector3 getPositionFromMatrix(Matrix4 m);
    /**
     * @deprecated Use {@link Vector3#setFromMatrixScale .setFromMatrixScale()} instead.
     */
    native public Vector3 getScaleFromMatrix(Matrix4 m);
    /**
     * @deprecated Use {@link Vector3#setFromMatrixColumn .setFromMatrixColumn()} instead.
     */
    native public Vector3 getColumnFromMatrix(double index, Matrix4 matrix);
    public Vector3(double x, double y){}
    public Vector3(double x){}
    public Vector3(){}
    native public Vector3 fromArray(double[] xyz);
    native public double[] toArray(double[] xyz);
    native public double[] toArray();
    native public Vector3 fromBufferAttribute(BufferAttribute attribute, double index);
}

