package def.threejs.three;

/**
 * 4D vector.
 *
 * ( class Vector4 implements Vector<Vector4> )
 */
public class Vector4 extends Vector<Vector4> {
	public Vector4(double x, double y, double z, double w) {
	}

	public double x;
	public double y;
	public double z;
	public double w;

	// NOT AVAILABLE
	native public double distanceTo(Vector4 v);
	native public double distanceToSquared(Vector4 v);

	native public Vector4 clone();
	/**
	 * Sets value of this vector.
	 */
	native public Vector4 set(double x, double y, double z, double w);

	/**
	 * Sets all values of this vector.
	 */
	native public Vector4 setScalar(double scalar);

	/**
	 * Sets X component of this vector.
	 */
	native public Vector4 setX(double x);

	/**
	 * Sets Y component of this vector.
	 */
	native public Vector4 setY(double y);

	/**
	 * Sets Z component of this vector.
	 */
	native public Vector4 setZ(double z);

	/**
	 * Sets w component of this vector.
	 */
	native public Vector4 setW(double w);

	native public void setComponent(double index, double value);

	native public double getComponent(double index);

	public native Vector4 copy(Vector4 v);

	/**
	 * Adds v to this vector.
	 */
	native public Vector4 add(Vector4 v);

	native public Vector4 addScalar(double s);

	/**
	 * Sets this vector to a + b.
	 */
	native public Vector4 addVectors(Vector4 a, Vector4 b);

	native public Vector4 addScaledVector(Vector4 v, double s);

	/**
	 * Subtracts v from this vector.
	 */
	native public Vector4 sub(Vector4 v);

	native public Vector4 subScalar(double s);

	/**
	 * Sets this vector to a - b.
	 */
	native public Vector4 subVectors(Vector4 a, Vector4 b);

	/**
	 * Multiplies this vector by scalar s.
	 */
	native public Vector4 multiplyScalar(double s);

	native public Vector4 applyMatrix4(Matrix4 m);

	/**
	 * Divides this vector by scalar s. Set vector to ( 0, 0, 0 ) if s == 0.
	 */
	native public Vector4 divideScalar(double s);

	/**
	 * http://www.euclideanspace.com/maths/geometry/rotations/conversions/
	 * quaternionToAngle/index.htm
	 * 
	 * @param q
	 *            is assumed to be normalized
	 */
	native public Vector4 setAxisAngleFromQuaternion(Quaternion q);

	/**
	 * http://www.euclideanspace.com/maths/geometry/rotations/conversions/
	 * matrixToAngle/index.htm
	 * 
	 * @param m
	 *            assumes the upper 3x3 of m is a pure rotation matrix (i.e,
	 *            unscaled)
	 */
	native public Vector4 setAxisAngleFromRotationMatrix(Matrix3 m);

	native public Vector4 min(Vector4 v);

	native public Vector4 max(Vector4 v);

	native public Vector4 clamp(Vector4 min, Vector4 max);

	native public Vector4 clampScalar(double min, double max);

	native public Vector4 floor();

	native public Vector4 ceil();

	native public Vector4 round();

	native public Vector4 roundToZero();

	/**
	 * Inverts this vector.
	 */
	native public Vector4 negate();

	/**
	 * Computes dot product of this vector and v.
	 */
	native public double dot(Vector4 v);

	/**
	 * Computes squared length of this vector.
	 */
	native public double lengthSq();

	/**
	 * Computes length of this vector.
	 */
	native public double length();

	native public double lengthManhattan();

	/**
	 * Normalizes this vector.
	 */
	native public Vector4 normalize();

	/**
	 * Normalizes this vector and multiplies it by l.
	 */
	native public Vector4 setLength(double length);

	/**
	 * Linearly interpolate between this vector and v with alpha factor.
	 */
	native public Vector4 lerp(Vector4 v, double alpha);

	native public Vector4 lerpVectors(Vector4 v1, Vector4 v2, double alpha);

	/**
	 * Checks for strict equality of this vector and v.
	 */
	@jsweet.lang.Name("equals")
	native public Boolean Equals(Vector4 v);

	native public Vector4 fromArray(double[] xyzw, double offset);

	native public double[] toArray(double[] xyzw, double offset);

	native public Vector4 fromAttribute(BufferAttribute attribute, double index, double offset);

	public Vector4(double x, double y, double z) {
	}

	public Vector4(double x, double y) {
	}

	public Vector4(double x) {
	}

	public Vector4() {
	}

	native public Vector4 fromArray(double[] xyzw);

	native public double[] toArray(double[] xyzw);

	native public double[] toArray();

	native public Vector4 fromAttribute(BufferAttribute attribute, double index);
}
