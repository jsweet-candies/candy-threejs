package def.threejs.three;
public class Line3 extends def.js.Object {
    public Line3(Vector3 start, Vector3 end){}
    public Vector3 start;
    public Vector3 end;
    native public Line3 set(Vector3 start, Vector3 end);
    @jsweet.lang.Name("clone")
    native public Line3 Clone();
    native public Line3 copy(Line3 line);
    native public Vector3 center(Vector3 optionalTarget);
    native public Vector3 delta(Vector3 optionalTarget);
    native public double distanceSq();
    native public double distance();
    native public Vector3 at(double t, Vector3 optionalTarget);
    native public double closestPointToPointParameter(Vector3 point, Boolean clampToLine);
    native public Vector3 closestPointToPoint(Vector3 point, Boolean clampToLine, Vector3 optionalTarget);
    native public Line3 applyMatrix4(Matrix4 matrix);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Line3 line);
    public Line3(Vector3 start){}
    public Line3(){}
    native public Line3 set(Vector3 start);
    native public Line3 set();
    native public Vector3 center();
    native public Vector3 delta();
    native public Vector3 at(double t);
    native public double closestPointToPointParameter(Vector3 point);
    native public Vector3 closestPointToPoint(Vector3 point, Boolean clampToLine);
    native public Vector3 closestPointToPoint(Vector3 point);
}

