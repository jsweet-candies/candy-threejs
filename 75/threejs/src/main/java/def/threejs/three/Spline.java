package def.threejs.three;
/**
     * Represents a spline.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Spline.js">src/math/Spline.js</a>
     */
public class Spline extends def.js.Object {
    /**
         * Initialises the spline with points, which are the places through which the spline will go.
         */
    public Spline(SplineControlPoint[] points){}
    public SplineControlPoint[] points;
    /**
         * Initialises using the data in the array as a series of points. Each value in a must be another array with three values, where a[n] is v, the value for the nth point, and v[0], v[1] and v[2] are the x, y and z coordinates of that point n, respectively.
         *
         * @param a array of triplets containing x, y, z coordinates
         */
    native public void initFromArray(double[][] a);
    /**
         * Return the interpolated point at k.
         *
         * @param k point index
         */
    native public SplineControlPoint getPoint(double k);
    /**
         * Returns an array with triplets of x, y, z coordinates that correspond to the current control points.
         */
    native public double[][] getControlPointsArray();
    /**
         * Returns the length of the spline when using nSubDivisions.
         * @param nSubDivisions number of subdivisions between control points. Default is 100.
         */
    native public GetLength getLength(double nSubDivisions);
    /**
         * Modifies the spline so that it looks similar to the original but has its points distributed in such way that moving along the spline it's done at a more or less constant speed. The points should also appear more uniformly spread along the curve.
         * This is done by resampling the original spline, with the density of sampling controlled by samplingCoef. Here it's interesting to note that denser sampling is not necessarily better: if sampling is too high, you may get weird kinks in curvature.
         *
         * @param samplingCoef how many intermediate values to use between spline points
         */
    native public void reparametrizeByArcLength(double samplingCoef);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class GetLength extends def.js.Object {
        public double[] chunks;
        public double total;
    }
    /**
         * Returns the length of the spline when using nSubDivisions.
         * @param nSubDivisions number of subdivisions between control points. Default is 100.
         */
    native public GetLength getLength();
    protected Spline(){}
}

