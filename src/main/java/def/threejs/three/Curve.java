package def.threejs.three;
import def.js.Function;
/**
     * An extensible curve object which contains methods for interpolation
     * class Curve&lt;T extends Vector&gt;
     */
public class Curve<T extends Vector> extends def.js.Object {
    /**
         * Returns a vector for point t of the curve where t is between 0 and 1
         * getPoint(t: number): T;
         */
    native public T getPoint(double t);
    /**
         * Returns a vector for point at relative position in curve according to arc length
         * getPointAt(u: number): T;
         */
    native public T getPointAt(double u);
    /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         */
    native public T[] getPoints(double divisions);
    /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         */
    native public T[] getSpacedPoints(double divisions);
    /**
         * Get total curve arc length
         */
    native public double getLength();
    /**
         * Get list of cumulative segment lengths
         */
    native public double[] getLengths(double divisions);
    /**
         * Update the cumlative segment distance cache
         */
    native public void updateArcLengths();
    /**
         * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
         */
    native public double getUtoTmapping(double u, double distance);
    /**
         * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a small delta apart will be used to find its gradient which seems to give a reasonable approximation
         * getTangent(t: number): T;
         */
    native public T getTangent(double t);
    /**
         * Returns tangent at equidistance point u on the curve
         * getTangentAt(u: number): T;
         */
    native public T getTangentAt(double u);
    native public static Function create(Function constructorFunc, Function getPointFunc);
    /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         */
    native public T[] getPoints();
    /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         */
    native public T[] getSpacedPoints();
    /**
         * Get list of cumulative segment lengths
         */
    native public double[] getLengths();
}

