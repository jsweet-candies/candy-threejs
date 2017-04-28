package def.threejs.three;
public class CurvePath<T extends Vector> extends Curve<T> {
    public CurvePath(){}
    public Curve<T>[] curves;
    public Boolean autoClose;
    native public void add(Curve<T> curve);
    native public Boolean checkConnection();
    native public void closePath();
    native public T getPoint(double t);
    native public double getLength();
    native public double[] getCurveLengths();
    native public Geometry createPointsGeometry(double divisions);
    native public Geometry createSpacedPointsGeometry(double divisions);
    native public Geometry createGeometry(T[] points);
}

