package def.threejs.THREE;
public class CurvePath<T extends Vector> extends Curve<T> {
    public CurvePath(){}
    public Curve<T>[] curves;
    public Boolean autoClose;
    native public void add(Curve<T> curve);
    native public Boolean checkConnection();
    native public void closePath();
    native public T getPoint(double t);
    native public double getLength();
    native public void updateArcLengths();
    native public double[] getCurveLengths();
    native public T[] getSpacedPoints(double divisions);
    native public T[] getPoints(double divisions);
    /**
     * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
     */
    native public Geometry createPointsGeometry(double divisions);
    /**
     * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
     */
    native public Geometry createSpacedPointsGeometry(double divisions);
    /**
     * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
     */
    native public Geometry createGeometry(T[] points);
    native public T[] getSpacedPoints();
    native public T[] getPoints();
}

